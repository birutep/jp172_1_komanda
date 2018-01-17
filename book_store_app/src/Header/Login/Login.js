import React from 'react';
import LoginStiliai from './Login.css';

const Login = ( props ) => { 
    return (
    <div className={LoginStiliai.header_login_btn}>
          <p>Login {props.pavadinimas}</p>     
          <p className={LoginStiliai.tarpelis}><i className="fa fa-check-circle"></i></p>
    </div>
    )
};

export default Login;
