const validate = require('./workflow.js').format;

exports.format = function(data) {
    return validate(data) && data?.workflow?.properties?.atomic?.is_atomic === true;
}