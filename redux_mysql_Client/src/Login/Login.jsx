import "./Login.css";
import React from "react";
import {Field} from 'redux-form';
import textBox from '../reduxforms/textBox';

function template() {
  //Object Descraction indicates.. below Line 
  const {handleSubmit,invalid}=this.props
  return (
    <div className="login container-fluid">
      <h3 className='text-center'>Login</h3>
      <form onSubmit={handleSubmit(this.fnLogin)}>
      <Field type='text' name="uid" lbl="User Name" component={textBox}/>
      <Field type='password' name="pwd" lbl= "Password" component={textBox}/>
      <div className='row'>
      <div className='offset-sm-5 col-sm-7'>
      <input disabled={invalid} type="submit" value="Login" className="btn btn-primary"/>
      <a href='#/register'>Register</a>
      </div>
      </div>
      </form>
    </div>
  );
};

export default template;
