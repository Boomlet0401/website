import React, { Component } from 'react';
import backIcon from '../assets/icons/back-arrow.svg';
import menuLogo from '../assets/images/menu_logo.png';

class TopBarBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBack: true,
            showTopLogo: false,
            modelClose: false,
        };
        if (this.props.showBack !== undefined) {
            this.state.showBack = this.props.showBack;
        }
        if (this.props.showTopLogo !== undefined) {
            this.state.showTopLogo = this.props.showTopLogo;
        }
        if (this.props.modelClose !== undefined) {
            this.state.modelClose = this.props.modelClose;
        }
    }

    goBack() {
        if (this.state.modelClose) {
            this.props.hideModel();
        } else {
            this.props.history.goBack();
        }
    }

    render() {

        return (
            <div className="top_bar">
                {
                    this.state.showTopLogo &&
                    <a
                        style={{
                            display: 'inline-block',
                            width: '100px',
                            marginLeft: '10px',
                            marginTop: '10px',
                        }} href={'/dashboard'}>
                        <img alt="Boomlet" src={menuLogo} />
                    </a>
                }
                <div className="top_bar_bottom" id={this.props.paddingbottom}>
                    {
                        this.state.showBack &&
                        <img
                            style={{ width: '25px', margin: '0 10px' }}
                            onClick={() => this.goBack()}
                            className="back_arrow top_bar_icon"
                            id={this.props.backbutton} alt="" src={backIcon} />
                    }
                    <div className="top_bar_right_block">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBarBlock;
