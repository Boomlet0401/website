import React, { Component } from 'react';
import logo from '../assets/images/boomlogin.png';
import { Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.history.push('/manage-proposal');
    // window.open("/dashboard", "self");
  }

  render() {
    return (
      <div className="login_background">
        <div className="loginBox" style={{ width: 550 }}>
          <img alt="Boomlet" className="logo" src={logo} />
          <p className="subText">Dear User,login to access the master panel</p>
          <form className="form" style={{ width: '100%' }} onSubmit={(e) => this.formSubmit(e)}>

            <Row>
              <Col lg={6}>
                <div className="input_box">
                  <label>Role</label>
                  <select>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="input_box">
                  <label>Name</label>
                  <input type="text" placeholder="Enter user name" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="input_box">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="input_box">
                  <label>Password</label>
                  <input type="password" placeholder="Enter Password" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="input_box">
                  <label>Mobile</label>
                  <input type="text" placeholder="Enter Your Mobile" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="my-2">
                  <Form.Check
                    style={{ fontSize: 12, fontWeight: 600 }}
                    className={''}
                    custom
                    name={'active'}
                    label="is Active"
                    id="active"
                    type={'checkbox'} />
                </div>
              </Col>
            </Row>


            <div className="mt-5 text-align-right">
              <Link to="/" className="px-4">Login</Link>
              <button className="btn btn-blue px-4 ml-3">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default SignUp;