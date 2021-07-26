const {JSONPath} = require('jsonpath-plus');

module.exports = function (targetVal, ...options) {
    let issues = [];
    options[0].properties.forEach(i => {
        const func = this.functions[i.function];

        const first = 'field' in i ? JSONPath({path: i.field, json: targetVal})[0] : targetVal;
        const second = i.functionOptions ?? i;
        const input = [first, ...[second, ...options.slice(1)]];

        const result = func(...input);
        if(result !== undefined && result.length > 0){
            issues.push(result);
        }
    })
    if(issues.length < options[0].properties.length){
        // At least one condition had no errors
        return [];
    }else{
        return [{
            message: ''
        }]
    }
    
}