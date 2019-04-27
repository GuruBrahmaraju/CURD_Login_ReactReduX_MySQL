import React    from "react";
import template from "./Login.jsx";
import {reduxForm} from 'redux-form';
import loginValidation from '../validations/loginValidation';
class Login extends React.Component {
    render() {
    return template.call(this);
  }
  
  fnLogin=(data)=>{
    debugger;
  }
}


Login = reduxForm({
  'form' : 'LoginForm',
  'validate':loginValidation
})(Login)
export default Login;
