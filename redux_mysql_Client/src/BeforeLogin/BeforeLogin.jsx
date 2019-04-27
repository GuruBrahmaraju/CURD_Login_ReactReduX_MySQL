import "./BeforeLogin.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
function template() {
  return (
    <div className="before-login">
      <HashRouter>
      <div>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      </div>
      </HashRouter>
    </div>
  );
};

export default template;
