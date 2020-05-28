import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Global from '../../data/Global';
import { requestAPI } from '../../functions/load';

export default class UserRow extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }


    async activeInactiveUser(user) {
        let url = Global.API.ACTIVE_INACTIVE_USER;
        let data = {
            selectedUserId: user.id,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        if (res.status === "success") {
            this.props.refereshList();
        } else {
            alert(res.message);
        }
    }



    render() {

        let user = this.props.user;
        let index = this.props.index;
        let active = this.props.user.active;

        return (
            <>
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                        {
                            user.scops == null ?
                                <button onClick={() => this.props.showAddScops(user)} className={'btn btn-blue small'}>
                                    {"ADD ROLES"}
                                </button>
                                :
                                <span>
                                    {user.scops}
                                    <button onClick={() => this.props.showAddScops(user)} className={'btn'}>
                                        <span className="material-icons small">
                                            {"edit"}
                                        </span>
                                    </button>
                                </span>
                        }
                    </td>
                    <td>
                        <Form.Check
                            type="switch"
                            id={"user-active-switch-" + user.id}
                            label="Active/In-active user"
                            checked={active}
                            onChange={(event) => {
                                this.activeInactiveUser(user);
                            }}
                        />
                    </td>
                </tr>
            </>
        )
    }
}
