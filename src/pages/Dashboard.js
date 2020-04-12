import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container">                
                    <TopBarBlock {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ background: '#F5F5F5', display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <img style={{ width: '16px' }} src={searchIcon} alt="" />
                                <input placeholder="Search Influencer" style={{ border: 'none', background: 'none', padding: '8px', width: '300px' }} type="text" />
                            </div>
                            <div>
                                <button style={{ margin: '0 10px' }} className="btn btn-skyblue">Import CSV</button>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue">+ New Influencer
                                </a>
                            </div>
                        </div>
                    </TopBarBlock>
                    <h1>
                        Dashboard
                    </h1>

                </div>
            </div>
        );
    }
}

export default Dashboard;
