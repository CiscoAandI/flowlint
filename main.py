import os
import re
import sys
import yaml

# This is needed for some reason to input bot.bot. Not sure why, needs more research.
sys.path.append(os.getcwd())

severity_map = {
    'error': '<span class="tooltip hint--right" aria-label="This severity will cause a failure for the linter for this rule">Severity: <font color="red" size=4>:octicons-x-circle-fill-16:</font></span>',
    'warn': '<span class="tooltip hint--right" aria-label="This severity will not cause a failure, but should caution the user to make changes">Severity: <font color="orange" size=4>:warning:</font></span>',
    'hint': '<span class="tooltip hint--right" aria-label="This severity will not cause a failure and is meant only as a recommendation">Severity: <font color="black" size=4>:octicons-question-16:</font></span>',
    'info': '<span class="tooltip hint--right" aria-label="This severity will not cause a failure and simply conveys information">Severity: <font color="blue" size=4>:fontawesome-solid-info-circle:</font></span>',
}

def define_env(env):
    
    @env.macro
    def get_yaml(rule):
        rulesets = [
            yaml.safe_load(open("lib/rulesets/securex_ruleset.yaml")),
            yaml.safe_load(open("lib/rulesets/workflow_ruleset.yaml")),
            yaml.safe_load(open("lib/rulesets/atomic_action_ruleset.yaml")),
        ]
        for ruleset in rulesets:
            if rule.file.name.lower() in ruleset['rules']:
                return ruleset['rules'][rule.file.name.lower()]
    
    @env.macro
    def get_severity(rule, severity):
        return severity_map[severity]

    @env.macro
    def pretty(data):
        return '\n    '.join([i for i in yaml.dump(data).splitlines()])
