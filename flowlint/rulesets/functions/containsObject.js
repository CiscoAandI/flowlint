const lodash = require('lodash');

module.exports = function (targetVal, ...options) {
    if(targetVal.filter(obj => lodash.isEqual(obj[options[0].nestedKey], options[0].object)).length !== 1){
        return [{message: ""}];
    }
    
}