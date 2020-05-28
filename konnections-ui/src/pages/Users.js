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
            employee: [],
            client: [],
            activeTab: 'employee',
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
            let employee = [];
            let client = [];
            res.list.forEach((item, index) => {
                if (item.scops === "client") {
                    client.push(item);
                } else {
                    employee.push(item);
                }
            });
            if (this.state.activeTab === "employee") {
                this.setState({
                    loading: false,
                    list: employee,
                    client: client,
                    employee: employee,
                });
            } else {
                this.setState({
                    loading: false,
                    list: client,
                    client: client,
                    employee: employee,
                });
            }

        } else {
            this.setState({
                loading: false,
                list: [],
            });
        }
    }

    tabClick(e, tab) {
        e.preventDefault();
        if (tab === 'employee') {
            this.setState({
                list: this.state.employee,
                activeTab: 'employee'
            });
        } else if (tab === 'client') {
            this.setState({
                list: this.state.client,
                activeTab: 'client'
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

                        <TopBarBlock backbutton="nodisplay" paddingbottom="nopaddingbottom" {...this.props}>
                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ margin: '0px' }}>Users</p>
                                </div> */}

                                <span
                                    className={'btn'}
                                    onClick={(e) => this.tabClick(e, 'employee')}
                                    style={{
                                        borderBottom: this.state.activeTab === "employee" ? '3px solid #6238F2' : '3px solid #ffffff',
                                        color: this.state.activeTab === "employee" ? '#6238F2' : 'gray',
                                        textAlign: 'center',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        paddingBottom: 15,
                                        fontSize: '0.85rem',
                                        marginRight: 20
                                    }}>
                                    Employee
                                </span>

                                <span
                                    className={'btn'}
                                    onClick={(e) => this.tabClick(e, 'client')}
                                    style={{
                                        borderBottom: this.state.activeTab === "client" ? '3px solid #6238F2' : '3px solid #ffffff',
                                        textAlign: 'center',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        paddingBottom: 15,
                                        fontSize: '0.85rem',
                                        color: this.state.activeTab === "client" ? '#6238F2' : 'gray',
                                    }}>
                                    Client
                                </span>
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
