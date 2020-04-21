import React, { Component } from 'react';
import insta from '../../assets/icons/Instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import yt from '../../assets/icons/youtube.svg';
import tw from '../../assets/icons/twitter.svg';
import lk from '../../assets/icons/linkedin.svg';
import bhuvan from '../../assets/images/Bhuvan.png';
import { Link } from 'react-router-dom';
import styles from './InfluencerRow.module.css';

class InfluencerRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setdata();
    }

    setdata() {

    }

    render() {

        const influencer = this.props.item;
        const language = JSON.parse(influencer.language);
        const location = JSON.parse(influencer.location);
        const category = JSON.parse(influencer.category);
        const vendor = JSON.parse(influencer.vendor);

        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                <div>
                    <label className={styles.checkbox_influencer}>
                        <input type="checkbox" />
                        {/* <span class="checkmark"></span> */}
                    </label>
                </div>
                <div className={styles.influencer_block} style={{ flexGrow: 1 }}>
                    <div className={styles.influencer_detail}>
                        <div style={{ display: 'flex' }}>
                            <div className={'px-2'}>
                                {/* <img className={styles.influencerImage} alt="" src={this.props.item.image} /> */}
                                <img className={styles.influencerImage} alt="" src={bhuvan} />
                                <p className={'py-2 text-center'}>{this.props.item.type}</p>
                            </div>
                            <div className={'px-2'}>
                                <div className={styles.influencerName}>{influencer.name}</div>
                                <p className={styles.influencerPhone}> {influencer.contact_1} </p>
                                <p className={styles.influencerEmail}> {influencer.email} </p>
                                <p className={styles.influencerCity}> {influencer.country} </p>
                                <div style={{ margin: 0 }}>
                                    {
                                        category.map((item, index) => {
                                            return (
                                                <button key={index} className={styles.tag}> {item} </button>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={insta} />
                                    <p className={styles.social_count}>{influencer.insta_followers === "" ? "N/A" : influencer.insta_followers}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={facebook} />
                                    <p className={styles.social_count}>{influencer.fb_followers === "" ? "N/A" : influencer.fb_followers}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={lk} />
                                    <p className={styles.social_count}>{influencer.lk_connections === "" ? "N/A" : influencer.lk_connections}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={tw} />
                                    <p className={styles.social_count}>{influencer.tw_connections === "" ? "N/A" : influencer.tw_connections}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={yt} />
                                    <p className={styles.social_count}>{influencer.insta_followers === "" ? "N/A" : influencer.insta_followers}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottomBlock}>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <p className={'m-0 small text-secondary mr-sm-5'}>
                                <span className={'font-weight-bold '}>Updated by:</span> {this.props.item.updated_by}
                            </p>
                            <p className={'m-0 small text-secondary'}>
                                <span className={'font-weight-bold '}>Added by:</span> {this.props.item.added_by}
                            </p>
                        </div>
                        <div>
                            <button className="btn  mx-2">Delete</button>
                            <Link to="/edit-influancer" className="btn mx-2">Edit</Link>
                            <Link className={'btn mx-2 btn-blue-hollow px-3 py-1'} target={'_blank'} to={"/view-influancer/" + influencer.id}>View</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfluencerRow;