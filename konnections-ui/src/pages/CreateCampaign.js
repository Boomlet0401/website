import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import '../components/Jquery.js';
import AddInfluencer from './AddInfluencer';
import INFLUENCER_DATA from '../data/INFLUENCER_DATA';
import pie_chart from '../assets/icons/pie-chart.svg';
import male from '../assets/icons/male.svg';
import female from '../assets/icons/Female.svg';
import Disclaimer from '../components/widget/Disclaimer';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';
import YoutubeBlock from '../components/proposal/YoutubeBlock';
import { influencerMaper, influencerMaperAnalysis } from '../functions/proposalHelper';
import InstagramBlock from '../components/proposal/InstagramBlock';
import LinkedinBlock from '../components/proposal/LinkedinBlock';
import BlogBlock from '../components/proposal/BlogBlock';
import TwitterBlock from '../components/proposal/TwitterBlock';
import FacebookBlock from '../components/proposal/FacebookBlock';
import TiktokBlock from '../components/proposal/TiktokBlock';
import AnalyticBlock from '../components/proposal/AnalyticBlock';
import { Link } from 'react-router-dom';
import ProposalPreview from './ProposalPreview';
import {
    youtubeColumns, blogColumns, facebookColumns, twitterColumns,
    instagramColumns, linkedinColumns, tiktokColumns,
} from '../functions/proposalHelper';


class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.disClaimerRef = React.createRef();
        this.state = {
            preview: false,
            addInfluencer: false,
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
            client: "",
            client_list: [],
            client_detail: "",
            formError: [],
            messageSuccess: "",
            messageError: "",
            youtubeColumns: youtubeColumns,
            blogColumns: blogColumns,
            facebookColumns: facebookColumns,
            instagramColumns: instagramColumns,
            linkedinColumns: linkedinColumns,
            tiktokColumns: tiktokColumns,
            twitterColumns: twitterColumns,
            influencerDetailLinkedin: [],
            influencerDetailInstagram: [],
            influencerDetailBlog: [],
            influencerDetailTwitter: [],
            influencerDetailFacebook: [],
            influencerDetailTiktok: [],
            influencerDetailYoutube: [],
            influencerAnalysis: [],
            disclaimers: [],
            btnText: "Save & Create",
            btnState: "",
            statisticsSocialReach: "",
            statisticsEstimatedEngagement: "",
            statisticsEstimatedEngagementPrice: "",
            statisticsMale: "",
            statisticsFemale: "",
            addStatistics: false,
        }
        this.addInfluencer = this.addInfluencer.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.updateFacebook = this.updateFacebook.bind(this);
        this.updateLinkedin = this.updateLinkedin.bind(this);
        this.updateInstagram = this.updateInstagram.bind(this);
        this.updateTiktok = this.updateTiktok.bind(this);
        this.updateTwitter = this.updateTwitter.bind(this);
        this.updateYoutube = this.updateYoutube.bind(this);
        this.disclaimersChange = this.disclaimersChange.bind(this);
    }

    componentDidMount() {
        this.getClients();
    }

    async getClients() {
        let url = Global.API.GET_USERS;
        let data = {
            search: "",
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {
            let client = [];
            res.list.forEach((item, index) => {
                if (item.scops === "client") {
                    client.push(item);
                }
            });
            this.setState({
                client_list: client,
            });
        }
    }

    async formSubmit(e) {
        e.preventDefault();

        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
            messageSuccess: "",
            messageError: "",
        })

        let url = Global.API.CREATE_PROPOSAL;
        let data = this.state;
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        let formError = [];
        if (res.ferror !== undefined) {
            formError = res.ferror;
        }
        if (res.status === "success") {
            this.setState({
                messageSuccess: res.message,
                messageError: "",
                formError: res.ferror,
                preview: false,
                addInfluencer: false,
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
                youtubeColumns: youtubeColumns,
                blogColumns: blogColumns,
                facebookColumns: facebookColumns,
                instagramColumns: instagramColumns,
                linkedinColumns: linkedinColumns,
                tiktokColumns: tiktokColumns,
                twitterColumns: twitterColumns,
                influencerDetailLinkedin: [],
                influencerDetailInstagram: [],
                influencerDetailBlog: [],
                influencerDetailTwitter: [],
                influencerDetailFacebook: [],
                influencerDetailTiktok: [],
                influencerDetailYoutube: [],
                influencerAnalysis: [],
                btnText: "Save & Create",
                btnState: "",
                statisticsSocialReach: "",
                statisticsEstimatedEngagement: "",
                statisticsEstimatedEngagementPrice: "",
                statisticsMale: "",
                statisticsFemale: "",
                addStatistics: false,
            }, () => this.disClaimerRef.current.refreshDisclaimer());
        } else {
            this.setState({
                btnText: "Save & Create",
                btnState: "",
                messageSuccess: "",
                messageError: res.message,
                formError: res.ferror,
            });
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    addInfluencer(selectedInfluencer, type, selectedProfile) {
        if (type === "analysis") {
            influencerMaperAnalysis(selectedProfile, selectedInfluencer, this.state);
        } else if (type === "detail") {
            influencerMaper(selectedProfile, selectedInfluencer, this.state);
        }
        this.setState({
            addInfluencer: false,
        })
    }

    updateBlog(newList) {
        this.setState({ influencerDetailBlog: newList });
    }
    updateFacebook(newList) {
        this.setState({ influencerDetailFacebook: newList });
    }
    updateInstagram(newList) {
        this.setState({ influencerDetailInstagram: newList });
    }
    updateLinkedin(newList) {
        this.setState({ influencerDetailLinkedin: newList });
    }
    updateTiktok(newList) {
        this.setState({ influencerDetailTiktok: newList });
    }
    updateTwitter(newList) {
        this.setState({ influencerDetailTwitter: newList });
    }
    updateYoutube(newList) {
        this.setState({ influencerDetailYoutube: newList });
    }

    disclaimersChange(list) {
        this.setState({
            disclaimers: list,
        })
    }

    render() {

        return (
            <>
                <div className="main_bock">
                    <div className="main_container" style={{ maxWidth: 1400, width: "100%" }}>

                        <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                            <TopBarBlock showTopLogo={true} {...this.props}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontWeight: '600' }}>
                                        {"Create Proposal"}
                                    </div>
                                    <div>
                                        <span
                                            onClick={() => this.setState({ preview: true })}
                                            style={{ margin: '0 10px' }}
                                            className="btn btn-skyblue px-4">
                                            {"Preview"}
                                        </span>
                                        <button
                                            disabled={this.state.btnState}
                                            style={{ margin: '0 10px' }}
                                            className="btn btn-blue px-3">
                                            {this.state.btnText}
                                        </button>
                                    </div>
                                </div>
                            </TopBarBlock>

                            <div className={'py-5 px-5'}
                                style={{
                                    minHeight: '100vh',
                                    background: '#FBFAFF',
                                    margin: '0 -20px'
                                }}>
                                {
                                    this.state.messageSuccess !== "" &&
                                    <div className={'alert alert-success'}>
                                        {this.state.messageSuccess}
                                    </div>
                                }
                                {
                                    this.state.messageError !== "" &&
                                    <div className={'alert alert-danger'}>
                                        {this.state.messageError}
                                    </div>
                                }

                                <Container fluid={true}>
                                    <Row>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Proposal date</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                proposal_date: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.proposal_date}
                                                        type="date" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.proposal_date !== "" && <p className="text-danger small form_error">{this.state.formError.proposal_date}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Brand/Agency</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                brand_agency: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.brand_agency}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.brand_agency !== "" && <p className="text-danger small form_error">{this.state.formError.brand_agency}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Brand name</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                brand_name: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.brand_name}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.brand_name !== "" && <p className="text-danger small form_error">{this.state.formError.brand_name}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Client Name</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                client_name: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.client_name}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.client_name !== "" && <p className="text-danger small form_error">{this.state.formError.client_name}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Strategist</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                strategist: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.strategist}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.strategist !== "" && <p className="text-danger small form_error">{this.state.formError.strategist}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input border-bottom">
                                                    <label>Contact number</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                contact_number: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.contact_number}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.contact_number !== "" && <p className="text-danger small form_error">{this.state.formError.contact_number}</p>
                                            }
                                        </Col>
                                        <Col lg={4} md={6} xs={6}>
                                            <div>
                                                <div className="input_box width-input  border-bottom">
                                                    <label>Email Id</label>
                                                    <input
                                                        onChange={(event) => {
                                                            this.setState({
                                                                email_id: event.target.value,
                                                            });
                                                        }}
                                                        value={this.state.email_id}
                                                        type="text" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            {
                                                this.state.formError.email_id !== "" && <p className="text-danger small form_error">{this.state.formError.email_id}</p>
                                            }
                                        </Col>
                                    </Row>
                                </Container>

                                <div className={'px-4 py-2 bg-white'}>
                                    <p className={'font-weight-bold m-0 py-2'}>CLIENT DETAILS</p>
                                    <hr className={'my-1'} />
                                    <div className={'pt-4'}>
                                        <Container className={'p-0'} fluid={true}>
                                            <Row noGutters={true}>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label className="usernme">
                                                                {"Influencer Category"}
                                                            </label>
                                                            <select
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        influencer_category: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.influencer_category}>
                                                                <option value={""}>-- select --</option>
                                                                <option value={"life_style"}>Life style</option>
                                                                <option value={"life_style_1"}>Life style 1</option>
                                                                <option value={"life_style_2"}>Life style 2</option>
                                                                <option value={"life_style_3"}>Life style 3</option>
                                                                <option value={"life_style_4"}>Life style 4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.influencer_category !== "" && <p className="text-danger small form_error">{this.state.formError.influencer_category}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label>Influencer Type</label>
                                                            <select
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        influencer_type: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.influencer_type}>
                                                                <option value={""}>-- select --</option>
                                                                <option value={"influencer_type_1"}>Influencer Type 1</option>
                                                                <option value={"influencer_type_2"}>Influencer Type 2</option>
                                                                <option value={"influencer_type_3"}>Influencer Type 3</option>
                                                                <option value={"influencer_type_4"}>Influencer Type 4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.influencer_type !== "" && <p className="text-danger small form_error">{this.state.formError.influencer_type}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label>Platform</label>
                                                            <select
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        plateform: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.plateform}>
                                                                <option value={""}>-- select --</option>
                                                                <option value={"youtube"}>Youtube</option>
                                                                <option value={"twitter"}>Twitter</option>
                                                                <option value={"insta"}>Insta</option>
                                                                <option value={"facebook"}>Facebook</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.plateform !== "" && <p className="text-danger small form_error">{this.state.formError.plateform}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label>Deliverables</label>
                                                            <input
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        deliverables: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.deliverables}
                                                                type="text" placeholder="Enter Deliverables" />
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.deliverables !== "" && <p className="text-danger small form_error">{this.state.formError.deliverables}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label>Co-ordinates</label>
                                                            <input
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        co_ordinates: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.co_ordinates}
                                                                type="text" placeholder="Enter Co-ordinates" />
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.co_ordinates !== "" && <p className="text-danger small form_error">{this.state.formError.co_ordinates}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input border-bottom">
                                                            <label>Campaign Budget ( In Rs. )</label>
                                                            <input
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        campaign_budget: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.campaign_budget}
                                                                type="text" placeholder="Enter Campaign Budget" />
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.campaign_budget !== "" && <p className="text-danger small form_error">{this.state.formError.campaign_budget}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input  border-bottom">
                                                            <label>Campaign Duration</label>
                                                            <input
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        campaign_duration: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.campaign_duration}
                                                                type="text" placeholder="Enter Campaign Duration" />
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.campaign_duration !== "" && <p className="text-danger small form_error">{this.state.formError.campaign_duration}</p>
                                                    }
                                                </Col>
                                                <Col lg={4} md={6} xs={6}>
                                                    <div>
                                                        <div className="input_box width-input  border-bottom">
                                                            <label>Select Client</label>
                                                            <select
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        client: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.client}>
                                                                <option value={""}>-- select --</option>
                                                                {
                                                                    this.state.client_list.map((item, index) => {
                                                                        return (<option key={item.id} value={item.id}>{item.name}</option>);
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.client !== "" && <p className="text-danger small form_error">{this.state.formError.client}</p>
                                                    }
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <div className="input_box border-bottom">
                                                            <label>Client's Brief</label>
                                                            <textarea
                                                                onChange={(event) => {
                                                                    this.setState({
                                                                        client_detail: event.target.value,
                                                                    });
                                                                }}
                                                                value={this.state.client_detail}
                                                                rows={'5'} placeholder="Enter details" />
                                                        </div>
                                                    </div>
                                                    {
                                                        this.state.formError.client_detail !== "" && <p className="text-danger small form_error">{this.state.formError.client_detail}</p>
                                                    }
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className={'pt-4'}>
                                    <p className={'font-weight-bold m-0 py-2'}>INFLUENCER DETAILS</p>
                                </div>

                                <div className={'influencer_details_block'}>
                                    <YoutubeBlock
                                        updateColumns={(youtubeColumns) => {
                                            this.setState({ youtubeColumns });
                                        }}
                                        youtubeColumns={this.state.youtubeColumns}
                                        updateList={this.updateYoutube}
                                        influencerDetail={this.state.influencerDetailYoutube} />
                                    <InstagramBlock
                                        updateColumns={(instagramColumns) => {
                                            this.setState({ instagramColumns });
                                        }}
                                        instagramColumns={this.state.instagramColumns}
                                        updateList={this.updateInstagram}
                                        influencerDetail={this.state.influencerDetailInstagram} />
                                    <LinkedinBlock
                                        updateColumns={(linkedinColumns) => {
                                            this.setState({ linkedinColumns });
                                        }}
                                        linkedinColumns={this.state.linkedinColumns}
                                        updateList={this.updateLinkedin}
                                        influencerDetail={this.state.influencerDetailLinkedin} />
                                    <BlogBlock
                                        updateColumns={(blogColumns) => {
                                            this.setState({ blogColumns });
                                        }}
                                        blogColumns={this.state.blogColumns}
                                        updateList={this.updateBlog}
                                        influencerDetail={this.state.influencerDetailBlog} />
                                    <TwitterBlock
                                        updateColumns={(twitterColumns) => {
                                            this.setState({ twitterColumns });
                                        }}
                                        twitterColumns={this.state.twitterColumns}
                                        updateList={this.updateTwitter}
                                        influencerDetail={this.state.influencerDetailTwitter} />
                                    <FacebookBlock
                                        updateColumns={(facebookColumns) => {
                                            this.setState({ facebookColumns });
                                        }}
                                        facebookColumns={this.state.facebookColumns}
                                        updateList={this.updateFacebook}
                                        influencerDetail={this.state.influencerDetailFacebook} />
                                    <TiktokBlock
                                        updateColumns={(tiktokColumns) => {
                                            this.setState({ tiktokColumns });
                                        }}
                                        tiktokColumns={this.state.tiktokColumns}
                                        updateList={this.updateTiktok}
                                        influencerDetail={this.state.influencerDetailTiktok} />
                                </div>

                                <AnalyticBlock influencers={this.state.influencerAnalysis} />

                                <div className={'py-4'}>
                                    <button
                                        type={'button'}
                                        onClick={() => this.setState({ addInfluencer: true })}
                                        className={"btn btn-blue"}>
                                        + Add Influencer
                                    </button>
                                </div>
                                {
                                    this.state.influencerAnalysis.length > 0 &&
                                    <div>
                                        {/* Overall Statistics */}
                                        <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>
                                            {"Overall Statistics"}
                                            <span onClick={() => this.setState({ addStatistics: !this.state.addStatistics, })} className={'btn'}>
                                                {
                                                    this.state.addStatistics ?
                                                        <span className="material-icons">
                                                            {"save"}
                                                        </span>
                                                        :
                                                        <span className="material-icons">
                                                            {"edit"}
                                                        </span>
                                                }
                                            </span>
                                        </p>
                                        <div>
                                            {
                                                this.state.addStatistics &&
                                                <div>
                                                    <Row>
                                                        <Col lg={4} md={6} xs={6}>
                                                            <div>
                                                                <div className="input_box width-input border-bottom">
                                                                    <label>Social Reach</label>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                statisticsSocialReach: event.target.value,
                                                                            });
                                                                        }}
                                                                        value={this.state.statisticsSocialReach}
                                                                        type="text" placeholder="Enter Social Reach" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} md={6} xs={6}>
                                                            <div>
                                                                <div className="input_box width-input border-bottom">
                                                                    <label>Estimated Engagement</label>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                statisticsEstimatedEngagement: event.target.value,
                                                                            });
                                                                        }}
                                                                        value={this.state.statisticsEstimatedEngagement}
                                                                        type="text" placeholder="Enter Estimated Engagement" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} md={6} xs={6}>
                                                            <div>
                                                                <div className="input_box width-input border-bottom">
                                                                    <label>Estimated Engagement Price</label>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                statisticsEstimatedEngagementPrice: event.target.value,
                                                                            });
                                                                        }}
                                                                        value={this.state.statisticsEstimatedEngagementPrice}
                                                                        type="text" placeholder="Enter Estimated Engagement Price" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} md={6} xs={6}>
                                                            <div>
                                                                <div className="input_box width-input border-bottom">
                                                                    <label>Male</label>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                statisticsMale: event.target.value,
                                                                            });
                                                                        }}
                                                                        value={this.state.statisticsMale}
                                                                        type="text" placeholder="Enter Male in %" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} md={6} xs={6}>
                                                            <div>
                                                                <div className="input_box width-input border-bottom">
                                                                    <label>Female</label>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                statisticsFemale: event.target.value,
                                                                            });
                                                                        }}
                                                                        value={this.state.statisticsFemale}
                                                                        type="text" placeholder="Enter Female in %" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            }
                                            <Row>
                                                <Col lg={3}>
                                                    <div className={'analytic-widght-block'}>
                                                        <p className={'analytic-widght-heading'}>{this.state.influencerAnalysis.length}</p>
                                                        <p className={'analytic-widght-title'}>Influencer selected</p>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={'analytic-widght-block'} style={{ background: '#1DA1F2' }}>
                                                        <p className={'analytic-widght-heading'}>{this.state.statisticsSocialReach}</p>
                                                        <p className={'analytic-widght-title'}>Social Reach</p>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={'analytic-widght-block'} style={{ background: '#2FC996' }}>
                                                        <p className={'analytic-widght-heading'}>{this.state.statisticsEstimatedEngagement}</p>
                                                        <p className={'analytic-widght-title'}>Estimated Engagement</p>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={'gender-widght-block'}>
                                                        <div className={'gender-widght-contain mb-3'}>
                                                            <img alt="" style={{}} src={male} />
                                                            <p style={{ fontSize: 17, opacity: '84%', color: '#78909C', fontWeight: '600', margin: '0px 30px', }}>
                                                                {this.state.statisticsMale + "%"}
                                                            </p>
                                                        </div>
                                                        <div className={'gender-widght-contain'}>
                                                            <img alt="" style={{}} src={female} />
                                                            <p style={{ fontSize: 17, opacity: '84%', color: '#78909C', fontWeight: '600', margin: '0px 30px', }}>
                                                                {this.state.statisticsFemale + "%"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className={'analytic-widght-block'} style={{ background: '#D342D9' }}>
                                                        <p className={'analytic-widght-heading'}>{this.state.statisticsEstimatedEngagementPrice}</p>
                                                        <p className={'analytic-widght-title'}>Avg Estimated price</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* End Overall Statistics*/}
                                    </div>

                                }
                                {/* Disclaimer Block */}
                                <Disclaimer
                                    ref={this.disClaimerRef}
                                    disclaimers={this.state.disclaimers}
                                    disclaimersChange={this.disclaimersChange} />
                                {/*End Disclaimer Block */}

                            </div>
                        </form>
                    </div>
                </div>
                <Modal className={'full-width-model'} show={this.state.addInfluencer}>
                    <AddInfluencer hideModel={this.addInfluencer} />
                </Modal>

                <Modal className={'full-width-model'} show={this.state.preview}>
                    <ProposalPreview hideModel={() => this.setState({ preview: false })} state={this.state} />
                </Modal>


            </>
        );
    }
}

export default CreateCampaign;
