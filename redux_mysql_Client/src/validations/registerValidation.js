const registerValidation = (formData) => {
    var errors = {};
    if (!formData.uid) {
        errors.uid = "Please Enter the UserID"
    } else if (formData.uid.length < 5 ){
        errors.uid = "Please enter min 5 char UID"
    }
     if(!formData.pwd){
        errors.pwd = "Please enter min Password"
    }

    if(!formData.email){
        errors.email = "Please enter the Email"
    }else{
        var res=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
if(!res.test(formData.email)){
    errors.email="Please enter the valid Email id"
}

    }
    if(!formData.phone){
        errors.phone = "Please enter the Phone"
    }else{
        var resPh=/^([6789]{1})([234789]{1})([0-9]{8})$/
        if(!resPh.test(formData.phone)){
            errors.phone="Please enter the valid Phone number"
        }
    }


    return errors;
}


export default registerValidation;