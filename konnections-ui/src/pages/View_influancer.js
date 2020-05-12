import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import { Link } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import correctimage from '../assets/icons/correct.svg';
import CampaignRow from '../components/CampaignRow/CampaignRow';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';

class View_influancer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            influencer: null,
            blog: null,
            facebook: null,
            instagram: null,
            linkedin: null,
            tiktok: null,
            twitter: null,
            youtube: null,
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true,
        });
        let url = Global.API.GET_INFLUENCER;
        let data = {
            id: this.props.match.params.id,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);

        if (res.status === "success") {
            this.setState({
                loading: false,
                influencer: res.influencer,
                blog: res.blog,
                facebook: res.facebook,
                instagram: res.instagram,
                linkedin: res.linkedin,
                tiktok: res.tiktok,
                twitter: res.twitter,
                youtube: res.youtube,
            });
        } else {
            this.setState({
                loading: false,
            });
        }

    }

    render() {


        if (this.state.loading) {
            return (
                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <p style={{ marginTop: 10 }}>Loading wait ...</p>
                    </div>
                </div>
            );
        }

        const { influencer, blog, facebook, instagram, linkedin, tiktok, twitter, youtube } = this.state;

        console.log(influencer);

        let influencerName = "";
        if (influencer != undefined) {
            influencerName = influencer.name;
        }

        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar {...this.props} />
                </div>
                <div className="main_container">
                    <TopBarBlock {...this.props}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ margin: '0px' }}>{influencerName}</p>
                                {/* <p style={{ margin: '0px 10px', color: '#6238F2' }}>Active</p> */}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div>
                                    <Link
                                        to="/manage-influencer"
                                        style={{ margin: '0 5px', border: '1px solid red', color: 'red', padding: '5px 15px' }} className="btn">Delete
                                        </Link>
                                    <Link
                                        to="/manage-influencer"
                                        style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }} className="btn">Edit
                            </Link>
                                </div>
                            </div>
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

                            influencer === null ?
                                <div>
                                    <p className="m-4" style={{ fontSize: 24, fontWeight: 'bold' }}>OOPS!</p>
                                    <p>Influencer not found</p>
                                </div>
                                :
                                <div>
                                    <div>
                                        <div className={'create-credits-row py-4'}>
                                            <p><strong>Updated by : </strong> Sabista 13-09-2019</p>
                                            <p><strong>Added by: </strong> Sabista 13-09-2019</p>
                                        </div>
                                    </div>

                                    <div className="inner-container">
                                        <div>
                                            <h4 className={'form-headings'}>Influancer Details</h4>
                                        </div>

                                        <Container fluid={true}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Influencer Name</p>
                                                        <p className={'details-contain'}>{influencer.name}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Gender</p>
                                                        <p className={'details-contain'}>{influencer.gender}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Languages</p>
                                                        <p className={'details-contain'}>{influencer.language}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Email</p>
                                                        <p className={'details-contain'}>{influencer.email}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Location</p>
                                                        <p className={'details-contain'}>{influencer.location}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Type</p>
                                                        <p className={'details-contain'}>{influencer.type}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Contact 1</p>
                                                        <p className={'details-contain'}>{influencer.contact_1}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Contact 2</p>
                                                        <p className={'details-contain'}>{influencer.contact_2}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Contact 3</p>
                                                        <p className={'details-contain'}>{influencer.contact_3}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Vendor</p>
                                                        <p className={'details-contain'}>{influencer.vendor}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Country</p>
                                                        <p className={'details-contain'}>{influencer.country}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Category</p>
                                                        <p className={'details-contain'}>{influencer.category}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Remarks</p>
                                                        <p className={'details-contain'}>{influencer.remark === "" ? "N/A" : influencer.remark}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <div style={{ margin: '15px 0px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>LinkedIn Details</h4>
                                                    {
                                                        linkedin.verified &&
                                                        <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                                            <img style={{ width: 18 }} src={correctimage} alt="" />
                                                            <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                                        </div>
                                                    }

                                                    {
                                                        linkedin.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>
                                                    }


                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{linkedin.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Connections</p>
                                                        <p className={'details-contain'}>{linkedin.connections}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{linkedin.post_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div style={{ margin: '15px 0px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>Instagrams Details</h4>
                                                    {
                                                        instagram.verified &&
                                                        <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                                            <img style={{ width: 18 }} src={correctimage} alt="" />
                                                            <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                                        </div>
                                                    }
                                                    {
                                                        instagram.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>
                                                    }


                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{instagram.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Followers</p>
                                                        <p className={'details-contain'}>{instagram.followers}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Video Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{instagram.video_cost}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Story Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{instagram.story_cost}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{instagram.post_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                        <div style={{ margin: '15px 0px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>Blogs Details</h4>
                                                    {
                                                        blog.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>
                                                    }

                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{blog.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Monthly Page View (mpv)</p>
                                                        <p className={'details-contain'}>{blog.page_views}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Article Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{blog.article_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                        <div style={{ margin: '15px 0px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>Twitter Details</h4>
                                                    {
                                                        twitter.verified &&
                                                        <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                                            <img style={{ width: 18 }} src={correctimage} alt="" />
                                                            <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                                        </div>
                                                    }
                                                    {
                                                        twitter.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>

                                                    }


                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{twitter.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Connections</p>
                                                        <p className={'details-contain'}>{twitter.connections}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{twitter.post_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                        <div style={{ margin: '15px 0px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>Facebook Details</h4>
                                                    {
                                                        facebook.verified &&
                                                        <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                                            <img style={{ width: 18 }} src={correctimage} alt="" />
                                                            <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                                        </div>
                                                    }
                                                    {
                                                        facebook.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>
                                                    }

                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{facebook.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Followers</p>
                                                        <p className={'details-contain'}>{facebook.followers}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Video Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{facebook.video_cost}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Story Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{facebook.story_cost}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{facebook.post_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                        <div style={{ marginTop: '15px' }}>
                                            <div className={'details-row'}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 className={'form-headings m-0'}>Tiktok Details</h4>
                                                    {
                                                        tiktok.verified &&
                                                        <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                                            <img style={{ width: 18 }} src={correctimage} alt="" />
                                                            <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                                        </div>
                                                    }
                                                    {
                                                        tiktok.active &&
                                                        <div style={{
                                                            display: "flex",
                                                            alignItems: 'center'
                                                        }}>
                                                            <div className={'active-dot'}></div>
                                                            <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>

                                            <Row>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Link</p>
                                                        <p className={'details-contain'}>{tiktok.link}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Fans</p>
                                                        <p className={'details-contain'}>{tiktok.fans}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Hearts (in Rs.)</p>
                                                        <p className={'details-contain'}>{tiktok.hearts}</p>
                                                    </div>
                                                </Col>

                                                <Col lg={4}>
                                                    <div className={'detail-block'}>
                                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                                        <p className={'details-contain'}>{tiktok.post_cost}</p>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                    </div>

                                    {/* <div className={'my-5'}>
                                        <h4 className={'form-headings'}>Previous Campaigns</h4>
                                    </div> */}

                                    {/* <CampaignRow {...this.props} /> */}
                                </div>

                    }
                </div>
            </div>
        );
    }

}

export default View_influancer;