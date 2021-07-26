module.exports = (targetVal) => {
    const target = targetVal?.properties?.target
    
    if(target && target.override_workflow_target_group_criteria && target.use_workflow_target_group){
        return [];
    }else if(!target){
        return [];
    }else{
        return [{
            message: ''
        }]
    }
}