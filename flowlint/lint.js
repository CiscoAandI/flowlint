const fs = require('fs');
const path = require('path');
const glob = require("glob");
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
    return spectral.loadRuleset(ruleset).then(() => {
      // If it's a single file, don't apply a glob. If it's not a single file, apply a recursive search glob.
      documents[0] = fs.lstatSync(documents[0]).isDirectory() ? `${documents[0]}/**/*.json` : documents[0]
      const files = glob.sync(documents[0]);
      const results = [];
      files.forEach(filename => {
        // files is an array of filenames.
        const workflow = JSON.parse(fs.readFileSync(filename));
        results.push(spectral.run(workflow).then((single_results) => {
          single_results = single_results.map(i => ({...i, source: filename}));
          if(single_results.length > 0){
            process.exitCode = severeEnoughToFail(single_results, failSeverity) ? 1 : 0;
          }
          return single_results;
        }));
      })
      return Promise.all(results);
    });
}