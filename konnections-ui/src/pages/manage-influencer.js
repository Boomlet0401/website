import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import { Link } from 'react-router-dom';
// import INFLUENCER_LIST from '../data/INFLUENCER_LIST';
import InfluencerRow from '../components/InfluencerRow/InfluencerRow';
import { Spinner } from 'react-bootstrap';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';

class Manage_influencer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            list: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true,
        });
        let url = Global.API.INFLUENCER_LIST;
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

        const INFLUENCER_LIST = this.state.list;

        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar {...this.props} />
                </div>
                <div className="main_container">
                    <TopBarBlock {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ background: '#F5F5F5', display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <img style={{ width: '16px' }} src={searchIcon} alt="" />
                                <input placeholder="Search Influencer" style={{ border: 'none', background: 'none', padding: '8px', width: '300px' }} type="text" />
                            </div>
                            <div>
                                <button style={{ margin: '0 10px' }} className="btn btn-skyblue">Import CSV</button>
                                <Link
                                    to="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue">+ New Influencer
                            </Link>
                            </div>
                        </div>
                    </TopBarBlock>

                    <div className="inner_block py-4">
                        <div style={{ marginBottom: 30 }} className="">
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
                                    INFLUENCER_LIST.length === 0 ?
                                        <p style={{ padding: 20 }}>NO DATA</p>
                                        :
                                        INFLUENCER_LIST.map((item, index) => {
                                            return (
                                                <InfluencerRow showCheckBox={false} item={item} key={index} />
                                            )
                                        })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Manage_influencer;

