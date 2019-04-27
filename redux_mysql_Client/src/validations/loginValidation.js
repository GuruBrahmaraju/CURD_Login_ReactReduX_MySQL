const loginValidation = (formData) => {
    var errors = {};
    if (!formData.uid) {
        errors.uid = "Please Enter the UserID"
    } 
    else if(!formData.pwd){
        errors.pwd = "Please enter the Password"
    }
    return errors;
}


export default loginValidation;