import React    from "react";
import template from "./Register.jsx";
import {reduxForm} from 'redux-form';
import registerValidation from '../validations/registerValidation';

class Register extends React.Component {

  render() {
    return template.call(this);
  }
  fnRegister=(data)=>{
    debugger
  }
}


Register = reduxForm({
  'form' : 'LoginForm',
  'validate':registerValidation
})(Register)

export default Register;
