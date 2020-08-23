export const checkValidity = (id,rules) => {
    let valid = true;
    if(rules.isRequired && valid){
        valid = id.value.trim() !== "";
        console.log(id.value)
    }
    if(rules.length && valid){
        valid = id.value.length == 5;
    }
    if(rules.requiredSymbol && valid){
        valid = id.value.indexOf('@') !== -1;
    }
    if(rules.requiredString && valid){
        valid = (id.value).toLowerCase().lastIndexOf('.com') === id.value.length-4;
    }
    return valid;
}