const { expect } = require('@jest/globals');
const { lint } = require('../../../flowlint/lint.js');
const ruleset = `${__dirname}/../../../flowlint/rulesets/securex_ruleset.yaml`;
const { getRuleData, loadRuleset } = require('../../../tests/integration/utils.js');

const file = `${__dirname}/definition_workflow_01PLT6C492IVT09dl7dcdzSgu8NgQBuOu1Z.json`;

test("ACME Demo", async () => {
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
            "0",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 10,
              "character": 21
            },
            "end": {
              "line": 16,
              "character": 31
            }
          },
          "source": file
        },
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
              "line": 23,
              "character": 21
            },
            "end": {
              "line": 29,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "required-variable-description",
          "message": getRuleData('required-variable-description').message,
          "path": [
            "workflow",
            "variables",
            "2",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 36,
              "character": 21
            },
            "end": {
              "line": 42,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "required-variable-description",
          "message": getRuleData('required-variable-description').message,
          "path": [
            "workflow",
            "variables",
            "3",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 49,
              "character": 21
            },
            "end": {
              "line": 55,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "required-variable-description",
          "message": getRuleData('required-variable-description').message,
          "path": [
            "workflow",
            "variables",
            "4",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 62,
              "character": 21
            },
            "end": {
              "line": 68,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "required-variable-description",
          "message": getRuleData('required-variable-description').message,
          "path": [
            "workflow",
            "variables",
            "5",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 75,
              "character": 21
            },
            "end": {
              "line": 81,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "required-variable-description",
          "message": getRuleData('required-variable-description').message,
          "path": [
            "workflow",
            "variables",
            "6",
            "properties"
          ],
          "severity": getRuleData('required-variable-description').severity,
          "range": {
            "start": {
              "line": 88,
              "character": 21
            },
            "end": {
              "line": 94,
              "character": 31
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
            "0",
            "actions",
            "0"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 126,
              "character": 10
            },
            "end": {
              "line": 147,
              "character": 48
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
            "0",
            "actions",
            "1"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 149,
              "character": 10
            },
            "end": {
              "line": 172,
              "character": 48
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
            "1",
            "blocks",
            "0",
            "actions",
            "1",
            "actions",
            "0"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 283,
              "character": 18
            },
            "end": {
              "line": 306,
              "character": 56
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
            "1",
            "blocks",
            "0",
            "actions",
            "2",
            "blocks",
            "0",
            "actions",
            "0",
            "actions",
            "0"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 381,
              "character": 26
            },
            "end": {
              "line": 403,
              "character": 64
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
            "1",
            "blocks",
            "0",
            "actions",
            "2",
            "blocks",
            "0",
            "actions",
            "1",
            "actions",
            "3"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 497,
              "character": 26
            },
            "end": {
              "line": 523,
              "character": 64
            }
          },
          "source": file
        },
        {
          "code": "jsonpath-continue-on-failure",
          "message": getRuleData('jsonpath-continue-on-failure').message,
          "path": [
            "workflow",
            "actions",
            "2",
            "blocks",
            "0",
            "actions",
            "0",
            "actions",
            "1",
            "properties",
            "continue_on_failure"
          ],
          "severity": getRuleData('jsonpath-continue-on-failure').severity,
          "range": {
            "start": {
              "line": 693,
              "character": 45
            },
            "end": {
              "line": 693,
              "character": 50
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
            "2",
            "blocks",
            "0",
            "actions",
            "0",
            "actions",
            "2"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 708,
              "character": 18
            },
            "end": {
              "line": 729,
              "character": 56
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
            "2",
            "blocks",
            "0",
            "actions",
            "0",
            "actions",
            "3"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 731,
              "character": 18
            },
            "end": {
              "line": 768,
              "character": 56
            }
          },
          "source": file
        },
        {
          "code": "no-subworkflows",
          "message": getRuleData('no-subworkflows').message,
          "path": [
            "workflow",
            "actions",
            "2",
            "blocks",
            "0",
            "actions",
            "0",
            "actions",
            "3",
            "type"
          ],
          "severity": getRuleData('no-subworkflows').severity,
          "range": {
            "start": {
              "line": 735,
              "character": 28
            },
            "end": {
              "line": 735,
              "character": 51
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
              "line": 802,
              "character": 12
            },
            "end": {
              "line": 854,
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
              "line": 858,
              "character": 18
            },
            "end": {
              "line": 901,
              "character": 43
            }
          },
          "source": file
        },
        {
          "code": "no-manual-targets-in-target-group",
          "message": getRuleData('no-manual-targets-in-target-group').message,
          "path": [
            "target_groups",
            "target_group_01Q0KDYS80KPZ0pEoFjcKjbyITPb8cCIMOG",
            "targets",
            "0",
            "selected_target_ids"
          ],
          "severity": getRuleData('no-manual-targets-in-target-group').severity,
          "range": {
            "start": {
              "line": 918,
              "character": 32
            },
            "end": {
              "line": 921,
              "character": 67
            }
          },
          "source": file
        },
        {
          "code": "no-global-variables",
          "message": getRuleData('no-global-variables').message,
          "path": [
            "variables"
          ],
          "severity": getRuleData('no-global-variables').severity,
          "range": {
            "start": {
              "line": 928,
              "character": 14
            },
            "end": {
              "line": 940,
              "character": 31
            }
          },
          "source": file
        },
        {
          "code": "no-activities-skipped",
          "message": getRuleData('no-activities-skipped').message,
          "path": [
            "subworkflows",
            "0",
            "workflow",
            "actions",
            "0",
            "properties",
            "skip_execution"
          ],
          "severity": getRuleData('no-activities-skipped').severity,
          "range": {
            "start": {
              "line": 1251,
              "character": 32
            },
            "end": {
              "line": 1251,
              "character": 36
            }
          },
          "source": file
        },
        {
          "code": "override-target-group-criteria",
          "message": getRuleData('override-target-group-criteria').message,
          "path": [
            "subworkflows",
            "0",
            "workflow",
            "actions",
            "2"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 1487,
              "character": 10
            },
            "end": {
              "line": 1524,
              "character": 48
            }
          },
          "source": file
        },
        {
          "code": "no-subworkflows",
          "message": getRuleData('no-subworkflows').message,
          "path": [
            "subworkflows",
            "0",
            "workflow",
            "actions",
            "2",
            "type"
          ],
          "severity": getRuleData('no-subworkflows').severity,
          "range": {
            "start": {
              "line": 1491,
              "character": 20
            },
            "end": {
              "line": 1491,
              "character": 43
            }
          },
          "source": file
        },
        {
          "code": "override-target-group-criteria",
          "message": getRuleData('override-target-group-criteria').message,
          "path": [
            "subworkflows",
            "0",
            "subworkflows",
            "0",
            "workflow",
            "actions",
            "2"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 2097,
              "character": 14
            },
            "end": {
              "line": 2122,
              "character": 52
            }
          },
          "source": file
        },
        {
          "code": "override-target-group-criteria",
          "message": getRuleData('override-target-group-criteria').message,
          "path": [
            "subworkflows",
            "0",
            "subworkflows",
            "0",
            "workflow",
            "actions",
            "4"
          ],
          "severity": getRuleData('override-target-group-criteria').severity,
          "range": {
            "start": {
              "line": 2146,
              "character": 14
            },
            "end": {
              "line": 2171,
              "character": 52
            }
          },
          "source": file
        }
      ]])
        
});
