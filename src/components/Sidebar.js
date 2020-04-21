import React, { Component } from 'react';
import menuLogo from '../assets/images/menu_logo.png';
import dashboardIcon from '../assets/icons/dashboard.svg';
import promotionIcon from '../assets/icons/promotion.svg';
import influencerIcon from '../assets/icons/Influencer.svg';
import Auth from './Auth';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="side_nav">
                <a href={'/dashboard'}>
                    <img alt="Boomlet" src={menuLogo} />
                </a>
                <div className="side_menu">
                    <a href="/manage-proposal" className="menu_item">
                        <img className="menu_icon" alt="" src={dashboardIcon} />
                        <span>OVERVIEW</span>
                    </a>
                    <a href="./manage-proposal" className="menu_item">
                        <img className="menu_icon" alt="" src={promotionIcon} />
                        <span>CAMPAIGN</span>
                    </a>
                    <a href="./manage-influencer" className="menu_item">
                        <img className="menu_icon" alt="" src={influencerIcon} />
                        <span>INFLUENCER</span>
                    </a>
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
        );
    }
}

export default Sidebar;
