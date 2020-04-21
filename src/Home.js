import React, { Component } from 'react';
import logo from './assets/images/boomlogin.png';
import { Link } from 'react-router-dom';
import Global from './data/Global';
import { Row, Col } from 'react-bootstrap';
import Auth from './components/Auth';

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
        };
    }

    async formSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value;
        let pass = e.target.pass.value;

        let e_email = "";
        let e_pass = "";

        let formE = false;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === "") {
            formE = true;
            e_email = "Enter email address"
        } else if (regEmail.test(email) === false) {
            formE = true;
            e_email = "Enter valid email address"
        }
        if (pass === "") {
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
        let url = Global.API.LOGIN;
        let data = {
            email: email,
            pass: pass,
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
        console.log(res);
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
                                    <input type="text" placeholder="Enter user name" name="email" />
                                </div>
                                {
                                    this.state.e_email !== "" && <p className="text-danger small form_error">{this.state.e_email}</p>
                                }
                            </Col>
                            <Col xs={12}>
                                <div className="input_box">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter Password" name="pass" />
                                </div>
                                {
                                    this.state.e_pass !== "" && <p className="text-danger small form_error">{this.state.e_pass}</p>
                                }
                            </Col>
                        </Row>
                        {
                            this.state.message_error !== "" && <p className="text-danger small text-center">{this.state.message_error}</p>
                        }
                        <div className="mt-5 justify-content-between d-flex">
                            <Link to="/signup" className="px-4">SignUp</Link>
                            <button className={"btn btn-blue px-4 " + this.state.btnState}>{this.state.btnText}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Home;