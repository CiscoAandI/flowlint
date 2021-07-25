module.exports = (targetVal, options) => {
    if(options.properties.filter(field => targetVal[field]).length === 0){
        return [
            {message: `One of ${options.properties} must be provided`},
        ];
    }
}