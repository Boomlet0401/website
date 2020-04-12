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
    render() {
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
                                <div className={styles.influencerName}>{this.props.item.name}</div>
                                <p className={styles.influencerPhone}> {this.props.item.phone} </p>
                                <p className={styles.influencerEmail}> {this.props.item.email} </p>
                                <p className={styles.influencerCity}> {this.props.item.city} </p>
                                <div style={{ margin: 0 }}>
                                    <button className={styles.tag}> travel </button>
                                    <button className={styles.tag}> sports </button>
                                    <button className={styles.tag}> travel </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.social}>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={insta} />
                                    <p className={styles.social_count}>{this.props.item.instagram_follower}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={facebook} />
                                    <p className={styles.social_count}>{this.props.item.facebook_follower}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={lk} />
                                    <p className={styles.social_count}>{this.props.item.linkedin_follower}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={tw} />
                                    <p className={styles.social_count}>{this.props.item.twitter_follower}</p>
                                </div>
                                <div className={styles.social_block}>
                                    <img className={styles.social_icon} alt="" src={yt} />
                                    <p className={styles.social_count}>{this.props.item.youtube_follower}</p>
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
                            <Link className={'btn mx-2 btn-blue-hollow px-3 py-1'} target={'_blank'} to="/view-influancer">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfluencerRow;