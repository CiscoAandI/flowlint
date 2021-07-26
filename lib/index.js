const yargs = require('yargs');
const { getDiagnosticSeverity } = require('@stoplight/spectral/dist/ruleset/severity.js');
const { writeOutput } = require('@stoplight/spectral/dist/cli/services/output.js');
const { pretty } = require('@stoplight/spectral/dist/cli/formatters/pretty.js');
const { lint } = require('./lint.js');

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
  // console.log(lint(args))
    lint(args).then(results => results.forEach(result => writeOutput(pretty(result, {failSeverity: getDiagnosticSeverity(args.failSeverity)}))))
};

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