const { readFileSync } = require('fs');
const { Validator, ValidationError } = require('jsonschema');

const workflowSchema = JSON.parse(readFileSync('/flowlint/specs/workflow_spec.json'));
const validator = new Validator();

exports.format = function(data){
    const results = validator.validate(data, workflowSchema);
    if(!results.valid){
        results.errors.forEach((error) => {
            console.error(error.stack);
        })
        return false;
    }
    return true;
    //return validator.validate(data, workflowSchema, {throwAll: true}).valid; // , {throwAll: true}
}