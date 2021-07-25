const fs = require('fs');
const path = require('path');
const { getDiagnosticSeverity } = require('@stoplight/spectral/dist/ruleset/severity.js');
const { Spectral } = require('@stoplight/spectral');

const spectral = new Spectral();

// register formats
const files = fs.readdirSync('./flowlint/formats')
const formatPromises = [];
files.forEach(function (file, index) {
  formatPromises.push(import(`./${path.join('formats', file)}`).then((module) => {
    spectral.registerFormat(file.replace('.js', ''), module.format);
  }));
});
// Wait for all registrations
Promise.all(formatPromises);

const fail = ({ message }) => {
  console.error(message);
  process.exitCode = 2;
};

const severeEnoughToFail = (results, failSeverity) => {
  const diagnosticSeverity = getDiagnosticSeverity(failSeverity);
  return results.some(r => r.severity <= diagnosticSeverity);
};

exports.lint = function(args) {
    const {
      documents,
      failSeverity,
      ruleset,
      ...config
    } = args;
    // just pop the first one for now
    const filename = documents[0]
    const workflow = JSON.parse(fs.readFileSync(filename));
    return spectral.loadRuleset(ruleset).then(() => spectral.run(workflow)).then((results) => {
      results = results.map(i => ({...i, source: filename}));
      if(results.length > 0){
        process.exitCode = severeEnoughToFail(results, failSeverity) ? 1 : 0;
      }
      return results;
    });
}