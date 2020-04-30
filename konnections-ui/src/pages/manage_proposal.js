import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import ManageProposalBody from '../components/ManageProposalBody';
import { Link } from 'react-router-dom';
import Global from '../data/Global';

const activeData = [
    {
        id: "1",
        title: "Approved list"
    },
    {
        id: "2",
        title: "Approved list"
    },
    {
        id: "3",
        title: "Approved list"
    },
    {
        id: "4",
        title: "Approved list"
    },
    {
        id: "5",
        title: "Approved list"
    },
    {
        id: "6",
        title: "Approved list"
    },
    {
        id: "7",
        title: "Approved list"
    },
    {
        id: "8",
        title: "Approved list"
    },
    {
        id: "9",
        title: "Approved list"
    },
    {
        id: "10",
        title: "Approved list"
    }
];

const pendingData = [
    {
        id: "1",
        title: "Pending title"
    },
    {
        id: "2",
        title: "Pending title"
    },

];

class Manage_influencer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'approved',
            list: activeData,
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        let url = Global.API.PROPOSAL_LIST;
        let data = this.state;
        let response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        let res = await response.json();
    }

    tabClick(e, tab) {
        e.preventDefault();
        if (tab === 'approved') {
            this.setState({
                list: activeData,
                activeTab: 'approved'
            });
        } else if (tab === 'pending') {
            this.setState({
                list: pendingData,
                activeTab: 'pending'
            });
        }

    }

    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar {...this.props} />
                </div>
                <div className="main_container">

                    <TopBarBlock {...this.props} backbutton="nodisplay" paddingbottom="nopaddingbottom">
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
                                <Link
                                    to={'/create-campaign'}
                                    style={{ margin: '10px 10px', }}
                                    className="btn btn-blue">
                                    Create Campaign
                                </Link>
                            </div>
                        </div>
                    </TopBarBlock>
                    <div style={{ margin: '30px auto', width: '1000px', maxWidth: '100%' }}>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <ManageProposalBody key={index} item={item} />
                                );
                            })
                        }
                    </div>

                </div>
            </div >
        );
    }
}

export default Manage_influencer;
