const { expect } = require('@jest/globals');
const { lint } = require('../../../flowlint/lint.js');
const ruleset = '../../../flowlint/rulesets/securex_ruleset.yaml';
const { getRuleData, loadRuleset } = require('../utils.js');

const file = `${__dirname}/definition_workflow_01NILYC8ELB2P35zuxiTzIZA63s12AUnVjL.json`;

test("JWT Generation", async () => {
    const results = await lint({
        documents: [file],
        failSeverity: 'fail',
        ruleset: ruleset
    });
    await loadRuleset();
    expect(results).toEqual([[
      {
        "code": "required-variable-description",
        "message": getRuleData('required-variable-description').message,
        "path": [
          "workflow",
          "variables",
          "1",
          "properties"
        ],
        "severity": getRuleData('required-variable-description').severity,
        "range": {
          "start": {
            "line": 24,
            "character": 21
          },
          "end": {
            "line": 30,
            "character": 31
          }
        },
        "source": file
      },
      {
        "code": "secure-strings-have-default-values",
        "message": getRuleData('secure-strings-have-default-values').message,
        "path": [
          "workflow",
          "variables",
          "1",
          "properties",
          "value"
        ],
        "severity": getRuleData('secure-strings-have-default-values').severity,
        "range": {
          "start": {
            "line": 25,
            "character": 19
          },
          "end": {
            "line": 25,
            "character": 21
          }
        },
        "source": file
      },
      {
        "code": "choose-matching-criteria",
        "message": getRuleData('choose-matching-criteria').message,
        "path": [
          "workflow",
          "properties",
          "target"
        ],
        "severity": getRuleData('choose-matching-criteria').severity,
        "range": {
          "start": {
            "line": 48,
            "character": 15
          },
          "end": {
            "line": 51,
            "character": 42
          }
        },
        "source": file
      },
      {
        "code": "do-not-run-on-all-targets",
        "message": getRuleData('do-not-run-on-all-targets').message,
        "path": [
          "workflow",
          "properties",
          "target"
        ],
        "severity": getRuleData('do-not-run-on-all-targets').severity,
        "range": {
          "start": {
            "line": 48,
            "character": 15
          },
          "end": {
            "line": 51,
            "character": 42
          }
        },
        "source": file
      },
      {
        "code": "execute-on-target-group",
        "message": getRuleData('execute-on-target-group').message,
        "path": [
          "workflow",
          "properties",
          "target"
        ],
        "severity": getRuleData('execute-on-target-group').severity,
        "range": {
          "start": {
            "line": 48,
            "character": 15
          },
          "end": {
            "line": 51,
            "character": 42
          }
        },
        "source": file
      },
      {
        "code": "target-selection-criteria",
        "message": getRuleData('target-selection-criteria').message,
        "path": [
          "workflow",
          "properties",
          "target"
        ],
        "severity": getRuleData('target-selection-criteria').severity,
        "range": {
          "start": {
            "line": 48,
            "character": 15
          },
          "end": {
            "line": 51,
            "character": 42
          }
        },
        "source": file
      },
      {
        "code": "use-default-target-group",
        "message": getRuleData('use-default-target-group').message,
        "path": [
          "workflow",
          "properties",
          "target"
        ],
        "severity": getRuleData('use-default-target-group').severity,
        "range": {
          "start": {
            "line": 48,
            "character": 15
          },
          "end": {
            "line": 51,
            "character": 42
          }
        },
        "source": file
      },
      {
        "code": "override-target-group-criteria",
        "message": getRuleData('override-target-group-criteria').message,
        "path": [
          "workflow",
          "actions",
          "0"
        ],
        "severity": getRuleData('override-target-group-criteria').severity,
        "range": {
          "start": {
            "line": 56,
            "character": 6
          },
          "end": {
            "line": 75,
            "character": 44
          }
        },
        "source": file
      },
      {
        "code": "override-target-group-criteria",
        "message": getRuleData('override-target-group-criteria').message,
        "path": [
          "workflow",
          "actions",
          "1"
        ],
        "severity": getRuleData('override-target-group-criteria').severity,
        "range": {
          "start": {
            "line": 77,
            "character": 6
          },
          "end": {
            "line": 107,
            "character": 44
          }
        },
        "source": file
      },
      {
        "code": "no-hardcoded-targets",
        "message": getRuleData('no-hardcoded-targets').message,
        "path": [
          "targets"
        ],
        "severity": getRuleData('no-hardcoded-targets').severity,
        "range": {
          "start": {
            "line": 168,
            "character": 12
          },
          "end": {
            "line": 201,
            "character": 27
          }
        },
        "source": file
      },
      {
        "code": "no-hardcoded-account-keys",
        "message": getRuleData('no-hardcoded-account-keys').message,
        "path": [
          "runtime_users"
        ],
        "severity": getRuleData('no-hardcoded-account-keys').severity,
        "range": {
          "start": {
            "line": 205,
            "character": 18
          },
          "end": {
            "line": 217,
            "character": 35
          }
        },
        "source": file
      }
    ]])
        
});
