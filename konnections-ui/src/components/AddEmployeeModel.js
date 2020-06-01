import React, { Component } from 'react'
import { Modal, Row, Col } from 'react-bootstrap';
import Global from '../data/Global';
import { emailValidation } from '../functions/FormValidation';

export default class AddEmployeeModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addEmployeeModel: false,
            name: "",
            email: "",
            mobile: "",
            e_name: "",
            e_email: "",
            e_mobile: "",
            message_error: "",
            message_success: "",
            btnText: "ADD EMPLOYEE",
            btnState: "",
        }
    }

    async formSubmit(e) {
        e.preventDefault();

        let name = this.state.name;
        let email = this.state.email;
        let mobile = this.state.mobile;

        let e_name = "";
        let e_email = "";
        let e_mobile = "";
        let formE = false;

        if (name === "") {
            formE = true;
            e_name = "Enter name";
        }
        if (email === "") {
            formE = true;
            e_email = "Enter email address"
        } else if (emailValidation.test(email) === false) {
            formE = true;
            e_email = "Enter valid email address"
        }
        if (mobile === "") {
            formE = true;
            e_mobile = "Enter mobile number";
        }

        if (formE) {
            this.setState({
                e_name: e_name,
                e_email: e_email,
                e_mobile: e_mobile,
            });
            return;
        }

        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
        });

        let url = Global.API.ADD_EMPLOYEE;
        let data = {
            name: name,
            email: email,
            mobile: mobile,
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
            e_mobile: formError.mobile,
            btnText: "ADD EMPLOYEE",
            btnState: "",
        });
        if (res.status === "success") {
            this.props.refereshList();
            this.setState({
                message_success: res.message,
                message_error: "",
                e_name: "",
                e_email: "",
                e_mobile: "",
                name: "",
                email: "",
                mobile: "",
            });
        } else {
            this.setState({
                message_success: "",
                message_error: res.message,
            });
        }

    }

    showEmployeeModel() {
        this.setState({ addEmployeeModel: true });
    }

    hideEmployeeModel(e) {
        e.preventDefault();
        this.setState({ addEmployeeModel: false });
    }

    render() {
        return (
            <>
                <div className={'circleBtn'} onClick={() => this.showEmployeeModel()}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <Modal show={this.state.addEmployeeModel}
                    onHide={() => this.hideEmployeeModel()}
                    animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD EMPLOYEE</Modal.Title>
                    </Modal.Header>
                    <form autoComplete={'off'} className="form" style={{ width: '100%' }} onSubmit={(e) => this.formSubmit(e)}>
                        <Modal.Body>
                            <Row>
                                <Col lg={12}>
                                    <div className="input_box">
                                        <label>Name</label>
                                        <input type="text"
                                            value={this.state.name}
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                            placeholder="Enter user name" name="name" />
                                    </div>
                                    {
                                        this.state.e_name !== "" && <p className="text-danger small form_error">{this.state.e_name}</p>
                                    }
                                </Col>
                                <Col lg={12}>
                                    <div className="input_box">
                                        <label>Email</label>
                                        <input type="text"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                            placeholder="Enter your email" name="email" />
                                    </div>
                                    {
                                        this.state.e_email !== "" && <p className="text-danger small form_error">{this.state.e_email}</p>
                                    }
                                </Col>
                                <Col lg={12}>
                                    <div className="input_box">
                                        <label>Mobile</label>
                                        <input type="number"
                                            value={this.state.mobile}
                                            onChange={(e) => this.setState({ mobile: e.target.value })}
                                            placeholder="Enter Your Mobile" name="mobile" />
                                    </div>
                                    {
                                        this.state.e_mobile !== "" && <p className="text-danger small form_error">{this.state.e_mobile}</p>
                                    }
                                </Col>
                            </Row>
                            {
                                this.state.message_error !== "" && <p className="text-danger small text-center">{this.state.message_error}</p>
                            }
                            {
                                this.state.message_success !== "" && <p className="text-success small text-center">{this.state.message_success}</p>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <button type={'button'} className={'btn btn-blue'} onClick={(e) => this.hideEmployeeModel(e)}>
                                {"CLOSE"}
                            </button>
                            <button className={'btn btn-blue'} disabled={this.state.btnState === "disabled" ? true : false}>
                                {this.state.btnText}
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        )
    }
}
