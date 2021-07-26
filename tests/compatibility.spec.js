const rulesets = [
    '/flowlint/rulesets/securex_ruleset.yaml',
    '/flowlint/rulesets/workflow_ruleset.yaml',
    '/flowlint/rulesets/atomic_action_ruleset.yaml',
];
const { Spectral } = require('@stoplight/spectral');

const fs = require('fs');
let rules = {};
for(const ruleset of rulesets){
    rules = {...rules, ...require('js-yaml').load(fs.readFileSync(ruleset, 'utf8'))['rules']}
}

describe("All rules must have a description, a message, a severity, and an HTTP link to documentation.", () => {
    test.each(Object.keys(rules))('Rule: %s', (rule_name) => {
        const rule = rules[rule_name];
        // FIXME: Need to check that all rules have a description
        // expect(rule.description).toBeDefined();
        expect(rule.severity).toBeDefined();
        expect(rule.severity).not.toBeNull();
        expect(['warn', 'error', 'info', 'hint'].includes(rule.severity)).toBeTruthy();
        expect(rule.message.includes(`https://www.github.com/pages/CiscoAandI/flowlint/rules/`)).toBeTruthy();
    });
});