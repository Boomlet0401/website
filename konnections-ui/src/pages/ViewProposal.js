import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import filter from '../assets/icons/filter.svg';
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap';
import styles from '../../src/components/CampaignRow/CampaignRow.module.css';
import yt from '../assets/icons/youtube.svg';
import pie_chart from '../assets/icons/pie-chart.svg';

import male from '../assets/icons/male.svg';
import female from '../assets/icons/Female.svg';
import Desclaimer_data from '../data/Desclaimer_data';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';

import YoutubeBlock from '../components/proposal/view/YoutubeBlock';
import BlogBlock from '../components/proposal/view/BlogBlock';
import FacebookBlock from '../components/proposal/view/FacebookBlock';
import InstagramBlock from '../components/proposal/view/InstagramBlock';
import LinkedinBlock from '../components/proposal/view/LinkedinBlock';
import TiktokBlock from '../components/proposal/view/TiktokBlock';
import TwitterBlock from '../components/proposal/view/TwitterBlock';
import AnalyticBlock from '../components/proposal/view/AnalyticBlock';


class ViewProposal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            proposal: false,
            proposal_date: "",
            brand_agency: "",
            brand_name: "",
            client_name: "",
            strategist: "",
            contact_number: "",
            email_id: "",
            influencer_category: "",
            influencer_type: "",
            plateform: "",
            deliverables: "",
            co_ordinates: "",
            campaign_budget: "",
            campaign_duration: "",
            client_detail: "",
            messageError: "",
            youtubeColumns: [],
            blogColumns: [],
            facebookColumns: [],
            instagramColumns: [],
            linkedinColumns: [],
            tiktokColumns: [],
            twitterColumns: [],
            influencerDetailLinkedin: [],
            influencerDetailInstagram: [],
            influencerDetailBlog: [],
            influencerDetailTwitter: [],
            influencerDetailFacebook: [],
            influencerDetailTiktok: [],
            influencerDetailYoutube: [],
            influencerAnalysis: [],
            disclaimers: [],
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true,
        });
        let url = Global.API.GET_PROPOSAL;
        let data = {
            id: this.props.match.params.id,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {

            let proposal = res.proposal;

            this.setState({
                loading: false,
                proposal: true,
                proposal_date: proposal.proposal_date,
                brand_agency: proposal.brand_agency,
                brand_name: proposal.brand_name,
                client_name: proposal.client_name,
                strategist: proposal.strategist,
                contact_number: proposal.contact_number,
                email_id: proposal.email_id,
                influencer_category: proposal.influencer_category,
                influencer_type: proposal.influencer_type,
                plateform: proposal.plateform,
                deliverables: proposal.deliverables,
                co_ordinates: proposal.co_ordinates,
                campaign_budget: proposal.campaign_budget,
                campaign_duration: proposal.campaign_duration,
                client_detail: proposal.client_detail,
                youtubeColumns: JSON.parse(proposal.youtubeColumns),
                blogColumns: JSON.parse(proposal.blogColumns),
                facebookColumns: JSON.parse(proposal.facebookColumns),
                instagramColumns: JSON.parse(proposal.instagramColumns),
                linkedinColumns: JSON.parse(proposal.linkedinColumns),
                tiktokColumns: JSON.parse(proposal.tiktokColumns),
                twitterColumns: JSON.parse(proposal.twitterColumns),
                influencerDetailLinkedin: JSON.parse(proposal.influencerDetailLinkedin),
                influencerDetailInstagram: JSON.parse(proposal.influencerDetailInstagram),
                influencerDetailBlog: JSON.parse(proposal.influencerDetailBlog),
                influencerDetailTwitter: JSON.parse(proposal.influencerDetailTwitter),
                influencerDetailFacebook: JSON.parse(proposal.influencerDetailFacebook),
                influencerDetailTiktok: JSON.parse(proposal.influencerDetailTiktok),
                influencerDetailYoutube: JSON.parse(proposal.influencerDetailYoutube),
                influencerAnalysis: JSON.parse(proposal.influencerAnalysis),
                disclaimers: JSON.parse(proposal.disclaimers),
            });
        } else {
            this.setState({
                loading: false,
            });
        }

    }

    render() {
        return (
            <div className="main_bock">

                <div className="main_container bg-light">
                    <TopBarBlock showTopLogo={true} showBack={false} {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ fontSize: 16, fontWeight: '400', margin: 0 }}><strong>Proposal Status :</strong>  Ongoing</p>
                            {/* <div>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue px-4">Approve
                                </a>
                            </div> */}
                        </div>
                    </TopBarBlock>

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

                            this.state.proposal === false ?

                                <div>
                                    <p className="m-4" style={{ fontSize: 24, fontWeight: 'bold' }}>OOPS!</p>
                                    <p>Proposal not found</p>
                                </div>

                                :
                                <>
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
                                </>

                    }

                </div>
            </div>
        );
    }
}

export default ViewProposal;
