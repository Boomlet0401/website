import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import pew from '../assets/images/pew.jpg';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import { Link } from 'react-router-dom';
import INFLUENCER_LIST from '../data/INFLUENCER_LIST';
import InfluencerRow from '../components/InfluencerRow/InfluencerRow';

class Manage_influencer extends Component {
    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar />
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
                                INFLUENCER_LIST.map((item, index) => {
                                    return (
                                        <InfluencerRow item={item} key={index} />
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

