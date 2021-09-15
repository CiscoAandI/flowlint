const validate = require('./workflow.js').validate;

exports.format = function(data) {
    return validate(data) && data?.workflow?.properties?.atomic?.is_atomic === true;
}