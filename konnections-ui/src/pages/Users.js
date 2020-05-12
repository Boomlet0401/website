import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import TopBarBlock from '../components/TopBarBlock'
import { Spinner } from 'react-bootstrap'
import Global from '../data/Global'
import UserTable from '../components/user/UserTable'
import { requestAPI } from '../functions/load'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            list: [],
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true,
        });
        let url = Global.API.GET_USERS;
        let data = {
            search: "",
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {
            this.setState({
                loading: false,
                list: res.list,
            });
        } else {
            this.setState({
                loading: false,
                list: [],
            });
        }
    }

    render() {

        const userList = this.state.list;

        return (
            <>
                <div className="main_bock">
                    <div className="right">
                        <Sidebar {...this.props} />
                    </div>

                    <div className="main_container">

                        <TopBarBlock {...this.props}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ margin: '0px' }}>Users</p>
                                </div>
                            </div>
                        </TopBarBlock>

                        <div className="mt-5">

                            {
                                this.state.loading ?
                                    <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                            <p style={{ marginTop: 10 }}>Loading wait ...</p>
                                        </div>
                                    </div>
                                    :
                                    userList.length === 0 ?
                                        <p style={{ padding: 20 }}>NO DATA</p>
                                        :
                                        <UserTable refereshList={this.loadData} userList={userList} />
                            }
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
