import React, { Component } from 'react';
import logo from './assets/images/boomlogin.png';
import { Link } from 'react-router-dom';

class Home extends Component {

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
                <div className="loginBox">
                    <img alt="Boomlet" className="logo" src={logo} />
                    <p className="subText">Login</p>
                    <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                        <div className="input_box">
                            <label>Email</label>
                            <input type="text" placeholder="Enter user name" />
                        </div>
                        <div className="input_box">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        <div className="mt-5 justify-content-between d-flex">
                            <Link to="/signup" className="px-4">SignUp</Link>
                            <button className="btn btn-blue px-4">login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Home;