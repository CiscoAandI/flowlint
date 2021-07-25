const {JSONPath} = require('jsonpath-plus');

module.exports = (targetVal) => {
    const existing = JSONPath({path: '$..actions,blocks[?(@.type == "workflow.atomic_workflow")].name', json: targetVal});
    const expecting = JSONPath({path: '$.atomic_workflows[*]', json: targetVal});

    const nonexistant = [];
    expecting.forEach((i, a) => {
        if(!existing.includes(i)){
            nonexistant.push({
                message: `Action with name '${i}' was not found in action definitions for this workflow. Are you sure it exists?`,
                path: ['atomic_workflows', a]
            })
        }
    })
    return nonexistant;
}