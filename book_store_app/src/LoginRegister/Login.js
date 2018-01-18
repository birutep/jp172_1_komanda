import React, { Component } from 'react';
import cssKlases from './Login.css';

class loginas extends Component {

    constructor (props) {
        super(props);
        this.state = {
            hidden: false
        }
    }

    closeHandler = () => {this.setState ({hidden: true});
        return this.state.hidden;
    }

    render ( props ) {
        return (
            <div className={this.state.hidden ? cssKlases.login_popup_hide : cssKlases.login_popup_show}>
                <div id="login_popup" className={cssKlases.header_popup}>
                    <div className={cssKlases.header_login_content}>
                        <form className={cssKlases.header_modal_content}>
                            <span onClick={this.closeHandler} className={cssKlases.header_login_close} title="Close Login Form">&times;</span>
                            <div className={cssKlases.header_container}>
                                <h3><i className="fa fa-book"></i> Book Store</h3>
                                <div className={cssKlases.header_form_bordered}>
                                    <h2>Login</h2>
                                    <label><b>Username</b></label>
                                    <input type="text" placeholder="Enter Username" name="uname" required /><br />
                                    <label><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" required /><br />
                                    <button className={cssKlases.header_submit} type="submit">Login</button>
                                    <label><input className={cssKlases.header_remember} type="checkbox"  />Remember me</label><br />
                                    <hr />
                                    <p className={cssKlases.header_reg}>Register new account.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default loginas;