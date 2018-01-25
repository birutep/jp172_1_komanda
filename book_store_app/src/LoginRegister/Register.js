import React, { Component } from 'react';
import cssKlases from './Register.css';
import cssDisplay from './LoginRegister.css'

import { connect } from 'react-redux';
import * as filterActions from '../store/filterActions';

class registeris extends Component {
    render() {
        return (
            <div className={this.props.reg ? cssDisplay.popup_show : cssDisplay.popup_hide}>
                <div id="login_popup" className={cssKlases.header_popup}>
                    <div className={cssKlases.header_login_content}>
                        <form className={cssKlases.header_modal_content}>
                            <span onClick={this.props.onCloseRegister} className={cssKlases.header_login_close} title="Close Login Form">&times;</span>
                            <div className={cssKlases.header_container}>
                                <h3><i className="fa fa-book" /> Book Store</h3>
                                <div className={cssKlases.header_form_bordered}>
                                <h2>Register new account</h2>
                                            <label><b>Your name</b></label>
                                            <input type="text" placeholder="Enter Username" name="uname" required /><br/>
                                            <label><b>Email</b></label>
                                            <input type="text" placeholder="Enter Username" name="uname" required /><br/>
                                            <label><b>Password</b></label>
                                            <input type="password" placeholder="Enter Password" name="psw" required /><br/>
                                            <label><b>Re-enter pass.word</b></label>
                                            <input type="password" placeholder="Enter Password" name="psw" required /><br/>
                                            <button className="header_submit" type="submit">Create new account</button>
                                    <hr />
                                    <p onClick={this.props.onOpenLogin} className={cssKlases.header_reg}>Already have an account? <span className="header_reg_to_login" >Login here.</span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        log: state.login,
        reg: state.register
    };
};

const mapDispatchToProps = dispatch => {        
    return {
        onOpenLogin: () => dispatch({type: filterActions.OPEN_LOGIN}),
        onCloseLogin: () => dispatch({type: filterActions.CLOSE_LOGIN}),
        onOpenRegister: () => dispatch({type: filterActions.OPEN_REGISTER}),
        onCloseRegister: () => dispatch({type: filterActions.CLOSE_REGISTER})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (registeris);