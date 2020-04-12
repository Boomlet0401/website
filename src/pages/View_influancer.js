import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import correctimage from '../assets/icons/correct.svg';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import CampaignRow from '../components/CampaignRow/CampaignRow';




class View_influancer extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            options: [{ city: 'Pune', id: 1 }, { city: 'Indore', id: 2 }]
        };
    }
    onSelect(selectedList, selectedItem) {

    }

    onRemove(selectedList, removedItem) {

    }

    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar />
                </div>
                <div className="main_container">
                    <TopBarBlock {...this.props}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ margin: '0px' }}>Rishabh Shah</p>
                                <p style={{ margin: '0px 10px', color: '#6238F2' }}>Active</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div>
                                    <Link
                                        to="/manage-influencer"
                                        style={{ margin: '0 5px', border: '1px solid red', color: 'red', padding: '5px 15px' }} className="btn">Delete
                                        </Link>
                                    <Link
                                        to="/manage-influencer"
                                        style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }} className="btn">Save
                            </Link>
                                </div>
                            </div>
                        </div>
                    </TopBarBlock>

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
                                        <p className={'details-contain'}>BYN- Be you Nick</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Gender</p>
                                        <p className={'details-contain'}>Male</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Languages</p>
                                        <p className={'details-contain'}>Hindi</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Email</p>
                                        <p className={'details-contain'}>byn@gmail.com</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Location</p>
                                        <p className={'details-contain'}>Kormangla</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Category</p>
                                        <p className={'details-contain'}>CAT A</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Contact 1</p>
                                        <p className={'details-contain'}>9332456876</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Contact 2</p>
                                        <p className={'details-contain'}>9332456876</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Contact 3</p>
                                        <p className={'details-contain'}>9332456876</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Vendor</p>
                                        <p className={'details-contain'}>Anil, Samil</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Country</p>
                                        <p className={'details-contain'}>India</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Category</p>
                                        <p className={'details-contain'}>Travel, Lifestyle</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Remarks</p>
                                        <p className={'details-contain'}>N/A</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div style={{ margin: '15px 0px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>LinkedIn Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Connections</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ margin: '15px 0px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>Instagrams Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Followers</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Video Cost (in Rs.)</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Story Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                        <div style={{ margin: '15px 0px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>Blogs Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Connections</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                        <div style={{ margin: '15px 0px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>Twitter Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Connections</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                        <div style={{ margin: '15px 0px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>Facebook Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Followers</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Video Cost (in Rs.)</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Story Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <div className={'details-row'}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h4 className={'form-headings m-0'}>Tiktok Details</h4>
                                    <div style={{ display: 'flex', margin: '0px 25px', alignItems: 'center' }}>
                                        <img style={{ width: 18 }} src={correctimage} alt="" />
                                        <p className={'m-0 ml-2'} style={{ fontSize: 12, color: '#1877F2' }}>Verified</p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: 'center'
                                    }}>
                                        <div className={'active-dot'}></div>
                                        <p className={'m-0 ml-3'} style={{ fontSize: 12, color: '#14E699' }}>Active</p>
                                    </div>
                                </div>
                            </div>

                            <Row>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Link</p>
                                        <p className={'details-contain'}>https://www.youtube.com/byn</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Fans</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Hearts (in Rs.)</p>
                                        <p className={'details-contain'}>12123</p>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className={'detail-block'}>
                                        <p className={'details-heading'}>Post Cost (in Rs.)</p>
                                        <p className={'details-contain'}>1200</p>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </div>

                    <div className={'my-5'}>
                        <h4 className={'form-headings'}>Previous Campaigns</h4>
                    </div>

                    <CampaignRow {...this.props} />
                </div>
            </div>
        );
    }

}

export default View_influancer;