import { exit } from "process";

const ruleset = '../../../lib/rulesets/securex_ruleset.yaml';
const { Spectral } = require('@stoplight/spectral');
const spectral = new Spectral();

export async function loadRuleset(){
    return await spectral.loadRuleset(ruleset);
}
export function getRuleData(rule){
    return spectral.rules[rule];
}