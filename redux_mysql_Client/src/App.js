import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import BeforeLogin from './BeforeLogin/BeforeLogin';
import {connect} from 'react-redux';
function App(props) {
  return (
    <div className="App">
     <Header />
     {props.isLoggedIn ? <Menu /> : <BeforeLogin />}
     <Footer />
    </div>
  );
}

const msp=(state)=>{
  return {
      'isLoggedIn':state.loginReducer.isLoggedIn
  }
}
export default connect(msp)(App);
