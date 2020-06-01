import React, { Component } from 'react';
import logo from './assets/images/boomlogin.png';
import { Link } from 'react-router-dom';
import Global from './data/Global';
import { Row, Col } from 'react-bootstrap';
import Auth from './components/Auth';
import RolesManager from './components/RolesManager';
import { GoogleLogin } from 'react-google-login';
import { emailValidation } from './functions/FormValidation';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            e_email: "",
            e_pass: "",
            message_error: "",
            message_success: "",
            btnText: "LOGIN",
            btnState: "",
            hidePass: true,
            loginWithGoogle: false,
        };
    }

    componentDidMount() {
        if (Auth.isAuthenticated()) {
            this.openFrontPage();
        } else {
            this.props.history.push('/');
        }
    }

    openFrontPage() {
        if (RolesManager.isClient()) {
            this.props.history.push('/proposals');
        } else {
            this.props.history.push('/manage-proposal');
        }
    }

    async formSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value;

        if (this.state.e_email !== "") {
            return;
        }

        if (email === "") {
            this.setState({
                e_email: "Enter email address",
            });
            return;
        }

        let pass = e.target.pass.value;
        let e_email = "";
        let e_pass = "";

        let formE = false;

        if (email === "") {
            formE = true;
            e_email = "Enter email address"
        } else if (emailValidation.test(email) === false) {
            formE = true;
            e_email = "Enter valid email address"
        }
        if (pass === "" && !this.state.loginWithGoogle) {
            formE = true;
            e_pass = "Enter password";
        }

        if (formE) {
            this.setState({
                e_email: e_email,
                e_pass: e_pass,
            });
            return;
        }

        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
        });
        // window.open("/dashboard", "self");

        let logInAccess = "client";
        if (this.state.loginWithGoogle) {
            logInAccess = "google";
        }

        let url = Global.API.LOGIN;
        let data = {
            email: email,
            pass: pass,
            logInAccess: logInAccess,
        }
        let response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        let res = await response.json();
        let formError = res.ferror;
        this.setState({
            e_email: formError.email,
            e_pass: formError.pass,
            btnText: "LOGIN",
            btnState: "",
        });

        if (res.status === "success") {
            Auth.login(() => {
                localStorage.setItem("token", JSON.stringify(res.token));
                localStorage.setItem("roles", res.user.scops);
                this.openFrontPage();
            });
        } else {
            this.setState({
                message_success: "",
                message_error: res.message,
            });
        }

    }


    async loginWithGoogle(responseObject) {
        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
        });
        let profileObj = responseObject.profileObj;
        let url = Global.API.LOGIN;
        let data = {
            email: profileObj.email,
            pass: "123456",
            logInAccess: "google",
        }
        let response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        let res = await response.json();
        let formError = res.ferror;
        this.setState({
            e_email: formError.email,
            e_pass: formError.pass,
            btnText: "LOGIN",
            btnState: "",
        });
        if (res.status === "success") {
            Auth.login(() => {
                localStorage.setItem("token", JSON.stringify(res.token));
                this.props.history.push('/manage-proposal');
            });
        } else {
            this.setState({
                message_success: "",
                message_error: res.message,
            });
        }
    }

    render() {

        return (
            <div className="login_background">
                <div className="loginBox">
                    <img alt="Boomlet" className="logo" src={logo} />
                    <p className="subText">Login</p>
                    <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                        <Row>
                            <Col xs={12}>
                                <div className="input_box">
                                    <label>Email</label>
                                    <input type="text"
                                        onChange={(event) => {

                                            let email = event.target.value;
                                            let e_email = "";
                                            let hidePass = true;
                                            let loginWithGoogle = false;

                                            if (email === "") {
                                                e_email = "Please enter email";
                                            } else if (emailValidation.test(email) === false) {
                                                e_email = "Invalid email";
                                            } else {
                                                e_email = "";
                                                hidePass = false;
                                                // check domain
                                                var domain = email.substring(email.lastIndexOf("@") + 1);
                                                if (domain === 'gmail.com') {
                                                    loginWithGoogle = true;
                                                    hidePass = true;
                                                }
                                            }

                                            this.setState({
                                                e_email: e_email,
                                                hidePass: hidePass,
                                                loginWithGoogle: loginWithGoogle,
                                            });

                                        }}
                                        placeholder="Enter user name" name="email" />
                                </div>
                                {
                                    this.state.e_email !== "" && <p className="text-danger small form_error">{this.state.e_email}</p>
                                }
                            </Col>
                            {
                                !this.state.hidePass &&
                                <Col xs={12}>
                                    <div className="input_box">
                                        <label>Password</label>
                                        <input type="password" placeholder="Enter Password" name="pass" />
                                    </div>
                                    {
                                        this.state.e_pass !== "" && <p className="text-danger small form_error">{this.state.e_pass}</p>
                                    }
                                </Col>
                            }

                        </Row>
                        {
                            this.state.message_error !== "" && <p className="text-danger small text-center">{this.state.message_error}</p>
                        }
                        <div className="mt-5 justify-content-between d-flex">
                            <Link to="/signup" className="px-4">SignUp</Link>
                            {
                                this.state.loginWithGoogle ?
                                    <GoogleLogin
                                        clientId="839531322318-5uq88f1ratqhgosl1026sei3klhtp6q5.apps.googleusercontent.com"
                                        buttonText="Login"
                                        render={renderProps => (
                                            <button
                                                className={"btn btn-blue px-4 " + this.state.btnState}
                                                onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                {this.state.btnText}
                                            </button>
                                        )}
                                        onSuccess={(responseGoogle) => {
                                            this.loginWithGoogle(responseGoogle);
                                        }}
                                        onFailure={(responseGoogle) => {
                                        }} />
                                    :
                                    <button className={"btn btn-blue px-4 " + this.state.btnState}>{this.state.btnText}</button>
                            }

                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Home;