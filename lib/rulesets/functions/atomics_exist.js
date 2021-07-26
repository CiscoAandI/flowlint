const {JSONPath} = require('jsonpath-plus');

module.exports = (targetVal) => {
    const existing = JSONPath({path: '$..actions,blocks[?(@.type == "workflow.atomic_workflow")].properties.workflow_id', json: targetVal});
    const expecting = JSONPath({path: '$.atomic_workflows[*]', json: targetVal});

    const nonexistant = [];
    expecting.forEach((i, a) => {
        if(!existing.includes(i)){
            nonexistant.push({
                message: `Action with name '${i}' was not found in action definitions for this workflow. Are you sure it exists? See here for more details: https://www.github.com/pages/CiscoAandI/flowlint/rules/All-Atomics-Exist`,
                path: ['atomic_workflows', a]
            })
        }
    })
    return nonexistant;
}