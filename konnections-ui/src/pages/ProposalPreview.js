import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../src/components/CampaignRow/CampaignRow.module.css';
import male from '../assets/icons/male.svg';
import female from '../assets/icons/Female.svg';
import YoutubeBlock from '../components/proposal/view/YoutubeBlock';
import BlogBlock from '../components/proposal/view/BlogBlock';
import FacebookBlock from '../components/proposal/view/FacebookBlock';
import InstagramBlock from '../components/proposal/view/InstagramBlock';
import LinkedinBlock from '../components/proposal/view/LinkedinBlock';
import TiktokBlock from '../components/proposal/view/TiktokBlock';
import TwitterBlock from '../components/proposal/view/TwitterBlock';
import AnalyticBlock from '../components/proposal/view/AnalyticBlock';

class ProposalPreview extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    render() {
        return (
            <div className="main_bock">

                <div className="main_container bg-light">
                    <TopBarBlock showTopLogo={true} showBack={false} {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ fontSize: 16, fontWeight: '400', margin: 0 }}><strong>Proposal Preview :</strong></p>
                            <div>
                                <span
                                    onClick={() => this.props.hideModel()}
                                    style={{ margin: '0 10px' }} className="btn btn-blue px-4">
                                    {"CLOSE"}
                                </span>
                            </div>
                        </div>
                    </TopBarBlock>
                    <Container className={'px-4'}>

                        <div style={{ margin: '35px 0px', }} className={styles.Campaigns_block}>
                            <div>
                                <h4 className={styles.block_heading}>Campaign Detail</h4>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Agency : <strong className={'mx-4'}>{this.state.brand_agency}</strong></p>
                                <p className={styles.content_heading}>Client Name : <strong className={'mx-4'}>{this.state.client_name}</strong></p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Media contact : <strong className={'mx-4'}>{this.state.brand_name}</strong></p>
                                <p className={styles.content_heading}>Co-ordinator : <strong className={'mx-4'}>{this.state.co_ordinates}</strong></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Email ID : <strong className={'mx-4'}>{this.state.email_id}</strong></p>
                                <p className={styles.content_heading}>Duration : : <strong className={'mx-4'}>{this.state.plateform}</strong></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Phone no. : <strong className={'mx-4'}>{this.state.contact_number}</strong></p>
                                <p className={styles.content_heading}>Campaign Budget : <strong className={'mx-4'}>{this.state.campaign_budget}</strong></p>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #00000038', padding: '10px 0px', }}>
                                <div style={{ display: 'flex', }}>
                                    <p className={styles.content_heading}><strong>Campaign Date: </strong>{this.state.proposal_date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Influencer Details  Block */}
                        <div>
                            <p className={'font-weight-bold m-0 py-4'}>Influencer Details</p>

                            <YoutubeBlock
                                youtubeColumns={this.state.youtubeColumns}
                                influencerDetail={this.state.influencerDetailYoutube} />
                            <BlogBlock
                                Columns={this.state.blogColumns}
                                influencerDetail={this.state.influencerDetailBlog} />
                            <FacebookBlock
                                Columns={this.state.facebookColumns}
                                influencerDetail={this.state.influencerDetailFacebook} />
                            <InstagramBlock
                                Columns={this.state.instagramColumns}
                                influencerDetail={this.state.influencerDetailInstagram} />
                            <LinkedinBlock
                                Columns={this.state.linkedinColumns}
                                influencerDetail={this.state.influencerDetailLinkedin} />
                            <TiktokBlock
                                Columns={this.state.tiktokColumns}
                                influencerDetail={this.state.influencerDetailTiktok} />
                            <TwitterBlock
                                Columns={this.state.twitterColumns}
                                influencerDetail={this.state.influencerDetailTwitter} />
                        </div>
                        {/* End Block */}

                        {/* Analysis Block */}
                        <div>
                            <p className={'font-weight-bold m-0 py-4'}>Analysis </p>
                            <div className={'analysis_main_container'}>
                                <AnalyticBlock influencers={this.state.influencerAnalysis} />
                            </div>

                        </div>
                        {/* End Analysis Block */}

                        {/* Overall analysis Block */}

                        <div>
                            <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Overall Statistics</p>

                            <div>
                                <Row>
                                    <Col lg={3}>
                                        <div className={'analytic-widght-block'}>
                                            <p className={'analytic-widght-heading'}>1</p>
                                            <p className={'analytic-widght-title'}>Influencer selected</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className={'analytic-widght-block'} style={{ background: '#1DA1F2' }}>
                                            <p className={'analytic-widght-heading'}>5.7M</p>
                                            <p className={'analytic-widght-title'}>Social Reach</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className={'analytic-widght-block'} style={{ background: '#2FC996' }}>
                                            <p className={'analytic-widght-heading'}>35k</p>
                                            <p className={'analytic-widght-title'}>Estimated Engagement</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className={'gender-widght-block'}>
                                            <div className={'gender-widght-contain mb-3'}>
                                                <img alt="" style={{}} src={male} />
                                                <p style={{ fontSize: 17, opacity: '84%', color: '#78909C', fontWeight: '600', margin: '0px 30px', }}>77%</p>
                                            </div>
                                            <div className={'gender-widght-contain'}>
                                                <img alt="" style={{}} src={female} />
                                                <p style={{ fontSize: 17, opacity: '84%', color: '#78909C', fontWeight: '600', margin: '0px 30px', }}>37%</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className={'analytic-widght-block'} style={{ background: '#D342D9' }}>
                                            <p className={'analytic-widght-heading'}>35k</p>
                                            <p className={'analytic-widght-title'}>Estimated Engagement</p>
                                            <p className={'analytic-widght-title mt-3'}>Avg Estimated price</p>
                                            <p className={'analytic-widght-title'}>$894</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* End block */}

                        {/* Disclaimer Block */}
                        <div className={'my-4'}>
                            <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Disclaimer</p>
                            <div>

                                {
                                    this.state.disclaimers.map((item, index) => {
                                        let disclaimer = item.disclaimer;
                                        if (item.checked) {
                                            return (
                                                <div key={index} className="d-flex align-items-center my-2">
                                                    <p className="disclamer-content disclamer-content-text " >
                                                        {disclaimer.detail}
                                                    </p>
                                                </div>
                                            );
                                        } else {
                                            return null;
                                        }

                                    })
                                }
                            </div>
                        </div>
                        {/* End this block */}
                    </Container>

                </div>
            </div>
        );
    }
}

export default ProposalPreview;
