import React, { Component } from 'react';
import LoginStiliai from './Login.css';

import { connect } from 'react-redux';
import * as filterActions from '../../store/filterActions';

class Login extends Component { 

    render () {
        return (
        <div onClick={this.props.onOpenLogin} className={LoginStiliai.header_login_btn}>
            <p>Login</p>     
            <p className={LoginStiliai.tarpelis}><i className="fa fa-check-circle" /></p>
        </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        log: state.login      
    };
};

const mapDispatchToProps = dispatch => {        
    return {
        onOpenLogin: () => dispatch({type: filterActions.OPEN_LOGIN}),
        onCloseLogin: () => dispatch({type: filterActions.CLOSE_LOGIN})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);
