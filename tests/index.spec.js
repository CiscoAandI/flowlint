const { expect } = require('@jest/globals');
const fs = require('fs');
const { lint } = require('../flowlint/lint.js');
const ruleset = './flowlint/rulesets/securex_ruleset.yaml';

fs.readdirSync('tests/unit', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).forEach((testDir) => {
  // For each unit test
  describe(testDir.name, () => {
    fs.readdirSync(`tests/unit/${testDir.name}`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).forEach((testTypeDir) => {
      // For each test type
      describe(testTypeDir.name, () => {
        fs.readdirSync(`tests/unit/${testDir.name}/${testTypeDir.name}`).forEach((testPath) => {
          // For each test file
          test(testPath.replace('.json', ''), async () => {
                const results = await lint({
                    documents: [`./tests/unit/${testDir.name}/${testTypeDir.name}/${testPath}`],
                    failSeverity: 'fail',
                    ruleset: ruleset
                });
                if(testTypeDir.name == 'negative'){
                    expect(results[0]).toEqual(expect.arrayContaining([expect.objectContaining({code: testDir.name})]));
                }else{
                    expect(results[0]).not.toEqual(expect.arrayContaining([expect.objectContaining({code: testDir.name})]));
                }
          });
        });
      });
    })
  });
})
