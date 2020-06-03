import React, { Component } from 'react';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';
import TopBarBlock from '../components/TopBarBlock';
import { Spinner } from 'react-bootstrap';
import Auth from '../components/Auth';
import ProposalRow from './components/ProposalRow';

class ClientHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            activeTab: 'approved',
            list: [],
            activeList: [],
            pendingList: [],
        };
    }

    componentDidMount() {
        this.loadData();
    }

    tabClick(e, tab) {
        e.preventDefault();
        if (tab === 'approved') {
            this.setState({
                list: this.state.activeList,
                activeTab: 'approved'
            });
        } else if (tab === 'pending') {
            this.setState({
                list: this.state.pendingList,
                activeTab: 'pending'
            });
        }
    }

    async loadData() {
        let url = Global.API.PROPOSAL_LIST;
        let data = this.state;
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        if (res.status === "success") {
            let approvedList = [];
            let pendingList = [];
            res.list.forEach((item) => {
                if (item.approved) {
                    approvedList.push(item);
                } else {
                    pendingList.push(item);
                }
            })
            this.setState({
                list: approvedList,
                loading: false,
                activeList: approvedList,
                pendingList: pendingList,
                activeTab: 'approved',
            });
        } else {
            this.setState({
                list: [],
                loading: false,
            });
            alert(res.message);
        }
    }

    render() {
        return (
            <div className="main_bock">

                <div className="main_container" style={{ maxWidth: 1400, width: "100%" }}>

                    <TopBarBlock {...this.props}
                        showTopLogo={true}
                        backbutton="nodisplay"
                        paddingbottom="nopaddingbottom">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                            }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span
                                    className={'btn'}
                                    onClick={(e) => this.tabClick(e, 'approved')}
                                    style={{
                                        borderBottom: this.state.activeTab === "approved" ? '3px solid #6238F2' : '3px solid #ffffff',
                                        color: this.state.activeTab === "approved" ? '#6238F2' : 'gray',
                                        textAlign: 'center',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        paddingBottom: 15,
                                        fontSize: '0.85rem',
                                        marginRight: 20
                                    }}>
                                    Approve
                                </span>
                                <span
                                    className={'btn'}
                                    onClick={(e) => this.tabClick(e, 'pending')}
                                    style={{
                                        borderBottom: this.state.activeTab === "pending" ? '3px solid #6238F2' : '3px solid #ffffff',
                                        textAlign: 'center',
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        paddingBottom: 15,
                                        fontSize: '0.85rem',
                                        color: this.state.activeTab === "pending" ? '#6238F2' : 'gray',
                                    }}>
                                    Pending
                                </span>
                            </div>

                            <div>
                                <button className="btn btn-blue"
                                    onClick={() => {
                                        Auth.logout(() => {
                                            this.props.history.push("/");
                                        });
                                    }}>
                                    <span>LOGOUT</span>
                                </button>
                            </div>

                        </div>
                    </TopBarBlock>


                    <div style={{ margin: '30px auto', width: '1000px', maxWidth: '100%' }}>
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
                                this.state.list.length === 0 ?
                                    <div>
                                        <p>NO DATA</p>
                                    </div>
                                    :
                                    this.state.list.map((item, index) => {
                                        return (
                                            <ProposalRow key={index} item={item} />
                                        );
                                    })
                        }
                    </div>


                </div>
            </div>
        )
    }

}

export default ClientHome;