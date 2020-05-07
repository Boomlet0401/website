import React, { Component } from 'react'
import { Table, Form, Modal } from 'react-bootstrap';
import Global from '../../data/Global';
import UserRow from './UserRow';
import { requestAPI } from '../../functions/load';

export default class UserTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showScopAdd: false,
            administrator: false,
            contentEditor: false,
            contentPublisher: false,
            campaignManager: false,
            selectedUserId: "",
            btnUpdateScopsText: "Update Scops",
            btnUpdateScopsState: false,
            formError: [],
            messageSuccessScop: "",
            messageErrorScop: "",
        }
        this.showAddScops = this.showAddScops.bind(this);
    }

    showAddScops(user) {

        let administrator = false;
        let contentEditor = false;
        let contentPublisher = false;
        let campaignManager = false;

        if (user.scops != null) {
            console.log(user.scops)
            let scops = user.scops.split(",");

            if (this.findArrayElement(scops, 'admin')) {
                administrator = true;
            } else {
                if (this.findArrayElement(scops, 'content-editor')) {
                    contentEditor = true;
                }
                if (this.findArrayElement(scops, 'content-publisher')) {
                    contentPublisher = true;
                }
                if (this.findArrayElement(scops, 'campaign-manager')) {
                    campaignManager = true;
                }
            }
        }

        this.setState({
            showScopAdd: true,
            administrator: administrator,
            contentEditor: contentEditor,
            contentPublisher: contentPublisher,
            campaignManager: campaignManager,
            selectedUserId: user.id,
            messageErrorScop: "",
            messageSuccessScop: "",
        });
    }

    findArrayElement(array, value) {
        return array.find((element) => {
            return element === value;
        })
    }

    closeAddScops() {
        this.setState({
            showScopAdd: false,
        });
    }

    changeScopeAdmin(value) {
        this.setState({
            administrator: true,
            contentEditor: false,
            contentPublisher: false,
            campaignManager: false,
        });
    }

    changeScopsToOther() {
        this.setState({
            administrator: false,
        });
    }

    async updateScops() {
        this.setState({
            btnUpdateScopsText: "Please wait...",
            btnUpdateScopsState: true,
        });

        let url = Global.API.UPDATE_USER_SCOPS;
        let data = {
            administrator: this.state.administrator,
            contentEditor: this.state.contentEditor,
            contentPublisher: this.state.contentPublisher,
            campaignManager: this.state.campaignManager,
            selectedUserId: this.state.selectedUserId,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {
            this.setState({
                btnUpdateScopsText: "Update Scops",
                btnUpdateScopsState: false,
                formError: res.ferror,
                messageErrorScop: "",
                messageSuccessScop: res.message,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showScopAdd: false,
                        administrator: "",
                        contentEditor: "",
                        contentPublisher: "",
                        campaignManager: "",
                        selectedUserId: "",
                        messageErrorScop: "",
                        messageSuccessScop: "",
                    }, () => this.props.refereshList());
                }, 500);
            });
        } else {
            this.setState({
                btnUpdateScopsText: "Update Scops",
                btnUpdateScopsState: false,
                formError: res.ferror,
                messageErrorScop: res.message,
                messageSuccessScop: "",
            });
        }

    }


    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Scops</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userList.map((user, index) => {
                                return (
                                    <UserRow user={user} index={index} key={index}
                                        showAddScops={this.showAddScops} />
                                );
                            })
                        }
                    </tbody>
                </Table>

                <Modal show={this.state.showScopAdd}>
                    <Modal.Header>
                        <Modal.Title>Add Scops to user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.state.messageSuccessScop !== "" &&
                            <div className={'alert alert-success'}>
                                {this.state.messageSuccessScop}
                            </div>
                        }
                        {
                            this.state.messageErrorScop !== "" &&
                            <div className={'alert alert-danger'}>
                                {this.state.messageErrorScop}
                            </div>
                        }
                        <div style={{ width: '400px', maxWidth: '100%', margin: "30px auto" }}>
                            <p style={{ fontSize: 16, color: '#6238f2', fontWeight: 'bold', marginBottom: 40, }}>User Roles</p>
                            <div className={'mx-2'}>
                                <Form.Check
                                    className={''}
                                    custom
                                    name={'administrator'}
                                    onChange={(event) => {
                                        this.changeScopeAdmin(event.target.checked);
                                    }}
                                    checked={this.state.administrator}
                                    id={"administrator"}
                                    label="Administrator"
                                    type={'checkbox'} />
                            </div>
                            <hr />
                            <div style={{ display: 'flex' }}>
                                <div className={'mx-2'}>
                                    <Form.Check
                                        className={''}
                                        custom
                                        name={'content-editor'}
                                        onChange={(event) => {
                                            this.changeScopsToOther();
                                            this.setState({
                                                contentEditor: event.target.checked,
                                            });
                                        }}
                                        checked={this.state.contentEditor}
                                        id={"content-editor"}
                                        label="Content Editor"
                                        type={'checkbox'} />
                                </div>
                                <div className={'mx-2'}>
                                    <Form.Check
                                        className={''}
                                        custom
                                        name={'content-publisher'}
                                        onChange={(event) => {
                                            this.changeScopsToOther();
                                            this.setState({
                                                contentPublisher: event.target.checked,
                                            });
                                        }}
                                        checked={this.state.contentPublisher}
                                        id={"content-publisher"}
                                        label="Content Publisher"
                                        type={'checkbox'} />
                                </div>
                                <div className={'mx-2'}>
                                    <Form.Check
                                        className={''}
                                        custom
                                        name={'campaign-manager'}
                                        onChange={(event) => {
                                            this.changeScopsToOther();
                                            this.setState({
                                                campaignManager: event.target.checked,
                                            });
                                        }}
                                        checked={this.state.campaignManager}
                                        id={"campaign-manager"}
                                        label="Campaign Manager"
                                        type={'checkbox'} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className={'btn'} style={{ color: 'red' }} onClick={() => this.closeAddScops()}>
                            {"Close"}
                        </button>
                        <button disabled={this.state.btnUpdateScopsState} className={'btn btn-blue'} onClick={() => this.updateScops()}>
                            {this.state.btnUpdateScopsText}
                        </button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}
