const yargs = require('yargs');
const { getDiagnosticSeverity } = require('@stoplight/spectral/dist/ruleset/severity.js');
const { writeOutput } = require('@stoplight/spectral/dist/cli/services/output.js');
const { pretty } = require('@stoplight/spectral/dist/cli/formatters/pretty.js');
const { json } = require('@stoplight/spectral/dist/cli/formatters/json.js');
const { lint } = require('./lint.js');
const fs = require("fs");

const jsonFormatter = (...args) => {
  let output = json(...args);
  // if file exists, if so add to it
  let results = [];
  try{
    results = JSON.parse(fs.readFileSync(".flowlint.json"));
  }catch (err){}

  for(let issue of JSON.parse(output)){
    results.push({
      file: issue.source,
      start_line: issue.range.start.line,
      start_column: issue.range.start.character,
      end_line: issue.range.end.line,
      end_column: issue.range.end.character,
      title: issue.code,
      message: `Path ${issue.path}\n\n${issue.message}`,
      annotation_level: issue.severity == 0 ? "error" : issue.severity == 1 ? "warning" : "notice"
    });
  }

  fs.writeFileSync('.flowlint.json', JSON.stringify(results))
  return "";
}

const lintCommand = {
  describe: 'lint JSON/YAML documents from files or URLs',
  command: 'lint [documents..]',
  builder: yargs =>
    yargs
      .strict()
      .positional('documents', {
        description:
          'Location of JSON/YAML documents. Can be either a file, a glob or fetchable resource(s) on the web.',
        coerce(values) {
          if (Array.isArray(values) && values.length > 0) {
            return values;
          }

          // https://stackoverflow.com/questions/39801643/detect-if-node-receives-stdin
          // https://twitter.com/MylesBorins/status/782009479382626304
          // https://nodejs.org/dist/latest/docs/api/tty.html#tty_readstream_istty
          if (process.stdin.isTTY) {
            return [];
          }

          return [(process.stdin & { fd: 0 }).fd];
        },
      })
      .check((argv) => {

        if (!Array.isArray(argv.documents) || argv.documents.length === 0) {
          throw new TypeError('No documents provided.');
        }

        return true;
      })
      .options({
        ruleset: {
          alias: 'r',
          description: 'path/URL to a ruleset file',
          type: 'string',
          default: '/flowlint/rulesets/securex_ruleset.yaml'
        },
        'fail-severity': {
          alias: 'F',
          description: 'results of this level or above will trigger a failure exit code',
          choices: ['error', 'warn', 'info', 'hint'],
          default: 'error',
          type: 'string',
        }
      }),
  handler: args => 
    lint(args).then(results => results.forEach(result => writeOutput((process.env.SPECTRAL_JSON ? jsonFormatter : pretty)(result, {failSeverity: getDiagnosticSeverity(args.failSeverity)}))))
};
process.stdout.columns = 200
yargs
  .scriptName('spectral')
  .parserConfiguration({
    'camel-case-expansion': true,
  })
  .version()
  .help(true)
  .strictCommands()
  .strictOptions()
  .showHelpOnFail(true)
  .wrap(yargs.terminalWidth())
  .command(lintCommand)
  .demandCommand(1, '').argv;