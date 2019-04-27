import "./Register.css";
import React from "react";
import {Field} from 'redux-form';
import textBox from '../reduxforms/textBox';


function template() {
  const {handleSubmit,invalid,reset}=this.props
  return (
    <div className="register">
      <h1 className='text-center'>Register</h1>
      <form onSubmit={handleSubmit(this.fnRegister)}>
      <Field type='text' name="uid" lbl="User Name" component={textBox}/>
      <Field type='password' name="pwd" lbl= "Password" component={textBox}/>
      <Field type='email' name="email" lbl="Email" component={textBox}/>
      <Field type='phone' name="phone" lbl= "Phone" component={textBox}/>
      <div className='row'>
      <div className='offset-sm-5 col-sm-7'>
      <input disabled={invalid} type="submit" value="Register" className="btn btn-primary"/>
      <input onClick={reset} type="button" value="Reset" className="btn btn-primary"/>
      </div>            
      </div>
      </form>
    </div>
  );
};

export default template;
