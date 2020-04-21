import React, { Component } from 'react';
import logo from '../assets/images/boomlogin.png';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Global from '../data/Global';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      e_name: "",
      e_email: "",
      e_pass: "",
      e_mobile: "",
      message_error: "",
      message_success: "",
      btnText: "SIGN UP",
      btnState: "",
    };
  }

  async formSubmit(e) {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let mobile = e.target.mobile.value;

    let e_name = "";
    let e_email = "";
    let e_pass = "";
    let e_mobile = "";
    let formE = false;

    if (name === "") {
      formE = true;
      e_name = "Enter name";
    }
    if (email === "") {
      formE = true;
      e_email = "Enter email address"
    }
    if (pass === "") {
      formE = true;
      e_pass = "Enter password";
    }
    if (mobile === "") {
      formE = true;
      e_mobile = "Enter mobile number";
    }

    if (formE) {
      this.setState({
        e_name: e_name,
        e_email: e_email,
        e_pass: e_pass,
        e_mobile: e_mobile,
      });
      return;
    }

    this.setState({
      btnText: "Please wait...",
      btnState: "disabled",
    });

    let url = Global.API.SIGNUP;
    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      pass: e.target.pass.value,
      mobile: e.target.mobile.value,
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
      e_name: formError.name,
      e_email: formError.email,
      e_pass: formError.pass,
      e_mobile: formError.mobile,
      btnText: "SIGN UP",
      btnState: "",
    });
    if (res.status === "success") {
      this.setState({
        message_success: res.message,
        message_error: "",
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
        <div className="loginBox" style={{ width: 550 }}>
          <img alt="Boomlet" className="logo" src={logo} />
          <p className="subText">Dear User, Signup to get access</p>

          {
            this.state.message_success !== "" ?
              <div className="text-center">
                <p style={{ fontWeight: 'bold' }} className="text-success small text-center">
                  {this.state.message_success}
                </p>
                <Link to="/" className="btn btn-blue  px-4">Login</Link>
              </div>
              :
              <form autoComplete={'off'} className="form" style={{ width: '100%' }} onSubmit={(e) => this.formSubmit(e)}>
                <Row>
                  <Col lg={6}>
                    <div className="input_box">
                      <label>Name</label>
                      <input type="text" placeholder="Enter user name" name="name" />
                    </div>
                    {
                      this.state.e_name !== "" && <p className="text-danger small form_error">{this.state.e_name}</p>
                    }
                  </Col>
                  <Col lg={6}>
                    <div className="input_box">
                      <label>Email</label>
                      <input type="text" placeholder="Enter your email" name="email" />
                    </div>
                    {
                      this.state.e_email !== "" && <p className="text-danger small form_error">{this.state.e_email}</p>
                    }
                  </Col>
                  <Col lg={6}>
                    <div className="input_box">
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" name="pass" />
                    </div>
                    {
                      this.state.e_pass !== "" && <p className="text-danger small form_error">{this.state.e_pass}</p>
                    }
                  </Col>
                  <Col lg={6}>
                    <div className="input_box">
                      <label>Mobile</label>
                      <input type="number" placeholder="Enter Your Mobile" name="mobile" />
                    </div>
                    {
                      this.state.e_mobile !== "" && <p className="text-danger small form_error">{this.state.e_mobile}</p>
                    }
                  </Col>
                </Row>
                {
                  this.state.message_error !== "" && <p className="text-danger small text-center">{this.state.message_error}</p>
                }
                <div className="mt-5 text-align-right">
                  <Link to="/" className="px-4">Login</Link>
                  <button className={"btn btn-blue px-4 ml-3 " + this.state.btnState}>{this.state.btnText}</button>
                </div>
              </form>
          }
        </div>
      </div>
    );
  }

}

export default SignUp;