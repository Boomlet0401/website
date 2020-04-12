import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import filter from '../assets/icons/filter.svg';
import { Container, Row, Col, Form, Modal, Table } from 'react-bootstrap';
import styles from '../../src/components/CampaignRow/CampaignRow.module.css';
import yt from '../assets/icons/youtube.svg';
import pie_chart from '../assets/icons/pie-chart.svg';

import male from '../assets/icons/male.svg';
import female from '../assets/icons/Female.svg';
import Desclaimer_data from '../data/Desclaimer_data';



class ViewProposal extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main_bock">

                <div className="main_container bg-light">
                    <TopBarBlock showTopLogo={true} showBack={false} {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ fontSize: 16, fontWeight: '400', margin: 0 }}><strong>Proposal Status :</strong>  Ongoing</p>
                            <div>
                                <a
                                    href="/create-influancer"
                                    style={{ margin: '0 10px' }} className="btn btn-blue px-4">Approve
                                </a>
                            </div>
                        </div>
                    </TopBarBlock>
                    <Container className={'px-4'}>
                        <div className={'justify-content-between d-flex align-items-center my-4'}>
                            <div>
                                <p style={{ fontSize: 14, margin: 0, opacity: '74%' }}><strong>Proposal Date :</strong>  <span style={{ opacity: '54%' }}>23-02-2020</span></p>
                            </div>
                            <div className={'d-flex align-items-center'}>
                                <p style={{ fontSize: 14, fontWeight: '500', margin: '0px 15px' }}>Filter Proposal by Date </p>
                                <img src={filter} style={{ width: 22 }}></img>
                            </div>
                        </div>
                        <div style={{ margin: '35px 0px', }} className={styles.Campaigns_block}>
                            <div>
                                <h4 className={styles.block_heading}>Campaign Title</h4>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Agency : <strong className={'mx-4'}>Boomlet</strong></p>
                                <p className={styles.content_heading}>Client Name : <strong className={'mx-4'}>KKO</strong></p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Media contact : <strong className={'mx-4'}>Karan Khatri</strong></p>
                                <p className={styles.content_heading}>Co-ordinator : <strong className={'mx-4'}>Lifestyle</strong></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Email ID : <strong className={'mx-4'}>karan@boomlet.co</strong></p>
                                <p className={styles.content_heading}>Duration : : <strong className={'mx-4'}>YouTube</strong></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.content_heading}>Phone no. : <strong className={'mx-4'}>9967147535</strong></p>
                                <p className={styles.content_heading}>Campaign Budget : <strong className={'mx-4'}>1,20000</strong></p>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #00000038', padding: '10px 0px', }}>
                                <div style={{ display: 'flex', }}>
                                    <p className={styles.content_heading}><strong>Campaign Date: </strong>13-09-2019</p>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        {/* Influencer Details  Block */}
                        <div>
                            <p className={'font-weight-bold m-0 py-4'}>Influencer Details</p>
                            <div>

                                <div className={'influencer_details_header_block my-2'}>
                                    <div className={'d-flex align-items-center'}>
                                        <img style={{}} src={yt} />
                                        <p style={{ margin: '0px 20px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>YOUTUBE</p>
                                        <p style={{ margin: '0px 10px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Category A</p>
                                    </div>
                                </div>
                                <div className={'detail_table_block my-2'}>
                                    <Table className="detail_table" responsive>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Subscribers</th>
                                                <th>Language</th>
                                                <th>Average Views</th>
                                                <th>Average Views
                                                    <span style={{ display: 'block', fontSize: 10 }}>(Based on the breakdown from your end)</span></th>
                                                <th>Engagement on YT  <span style={{ display: 'block', fontSize: 10 }}>(Likes + Comments + Views)</span></th>
                                                <th>Cost Per YouTube Video <span style={{ display: 'block', fontSize: 10 }}>(Net + 18% GST Additonal)</span></th>
                                                <th>Deliverables</th>
                                                <th>Packaged Cost</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Bhuvan Bam
                                                <div className={'my-4'}>
                                                        <p style={{ fontSize: 12, marginBottom: 10 }}>REMARKS</p>
                                                        <input style={{ width: '280%', fontWeight: '600', border: '1px solid #cccccc' }} type="text" placeholder="" value="Reasonable/Useful Homemade Remedies" />
                                                    </div>
                                                </td>
                                                <td>15.7 M</td>
                                                <td>Hindi</td>
                                                <td>
                                                    300K
                                                </td>
                                                <td>
                                                    2,92,340
                                                </td>
                                                <td>
                                                    0.06
                                                </td>
                                                <td>
                                                    1,20,000
                                                </td>
                                                <td>
                                                    1 YT video
                                                </td>
                                                <td>
                                                    1,50000 Rs.
                                                </td>
                                                <td className={'d-flex'}>
                                                    <span style={{ border: '1px solid #00A50C', color: '#00A50C' }} className={'table-btn'}>Approve</span>
                                                    <span className={'text-danger table-btn mx-3'}>Reject</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Bhuvan Bam</td>
                                                <td>15.7 M</td>
                                                <td>Hindi</td>
                                                <td>300K</td>
                                                <td>2,92,340</td>
                                                <td>0.06</td>
                                                <td>1,20,000</td>
                                                <td>1 YT video</td>
                                                <td>1,50000 Rs.</td>
                                                <td className={'d-flex'}>
                                                    <span style={{ border: '1px solid #00A50C', color: '#00A50C' }} className={'table-btn'}>Approve</span>
                                                    <span className={'text-danger table-btn mx-3'}>Reject</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bhuvan Bam</td>
                                                <td>15.7 M</td>
                                                <td>Hindi</td>
                                                <td>300K</td>
                                                <td>2,92,340</td>
                                                <td>0.06</td>
                                                <td>1,20,000</td>
                                                <td>1 YT video</td>
                                                <td>1,50000 Rs.</td>
                                                <td className={'d-flex'}>
                                                    <span style={{ border: '1px solid #00A50C', color: '#00A50C' }} className={'table-btn'}>Approve</span>
                                                    <span className={'text-danger table-btn mx-3'}>Reject</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Bhuvan Bam</td>
                                                <td>15.7 M</td>
                                                <td>Hindi</td>
                                                <td>300K</td>
                                                <td>2,92,340</td>
                                                <td>0.06</td>
                                                <td>1,20,000</td>
                                                <td>1 YT video</td>
                                                <td>1,50000 Rs.</td>
                                                <td className={'d-flex'}>
                                                    <span style={{ border: '1px solid #00A50C', color: '#00A50C' }} className={'table-btn'}>Approve</span>
                                                    <span className={'text-danger table-btn mx-3'}>Reject</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Bhuvan Bam</td>
                                                <td>15.7 M</td>
                                                <td>Hindi</td>
                                                <td>300K</td>
                                                <td>2,92,340</td>
                                                <td>0.06</td>
                                                <td>1,20,000</td>
                                                <td>1 YT video</td>
                                                <td>1,50000 Rs.</td>
                                                <td className={'d-flex'}>
                                                    <span style={{ border: '1px solid #00A50C', color: '#00A50C' }} className={'table-btn'}>Approve</span>
                                                    <span className={'text-danger table-btn mx-3'}>Reject</span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                        </div>
                        {/* End Block */}

                        {/* Analysis Block */}
                        <div>
                            <p className={'font-weight-bold m-0 py-4'}>Analysis </p>
                            <div className={'analysis_main_container'}>
                                <Row>
                                    <Col lg={4}>
                                        <div className={'d-flex align-items-center'}>
                                            <img style={{ width: 25 }} src={pie_chart} />
                                            <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600', margin: '0px 15px' }}>Bhuvan Bam</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <p style={{ fontSize: 12, opacity: '84%', color: '#1492E6', fontWeight: '600', margin: '0px 15px' }}>15.6M Subscribers</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <p style={{ fontSize: 12, opacity: '84%', color: '#1492E6', fontWeight: '600', margin: '0px 15px' }}>https://www.youtube.com/bbkivines</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0px' }} >
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>1.3k</h4>
                                        <p className={'analysis-small-widget-title'}>Avg. Likes</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>44.59</h4>
                                        <p className={'analysis-small-widget-title'}>Avg. Comments</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>₹25,443</h4>
                                        <p className={'analysis-small-widget-title'}>CPE</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>₹25,443</h4>
                                        <p className={'analysis-small-widget-title'}>Suggested price</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>2.03%</h4>
                                        <p className={'analysis-small-widget-title'}>Avg Engagement rate</p>
                                    </div>
                                </div>



                                <div>
                                    <Row>
                                        <Col lg={4}>
                                            <div id="mychart"></div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Social Media Distribution</p>

                                                <div className={'my-5'}>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>77%</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "77%", background: '#448AFF' }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>Male</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>33%</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "33%", background: '#FF8A80' }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>Female</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Age Distribution</p>

                                                <div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>16%</p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'} style={{ height: "16%" }}></div>
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>0-17</p>
                                                    </div>

                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>14%</p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'} style={{ height: "14%" }}></div>
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>18-24</p>
                                                    </div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>24%</p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'} style={{ height: "24%" }}></div>
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>25-34</p>
                                                    </div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>64%</p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'} style={{ height: "64%" }}></div>
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>35-54</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className={'my-4'}>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>City wise Distribution</p>

                                                <div className={'my-2'}>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>Bengluru</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "77%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>16%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>Delhi</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "16%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>14%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>Kolkata</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "14%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>24%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>Hyderabad</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "64%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>64%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Country wise Distribution</p>

                                                <div className={'my-2'}>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>IN</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "16%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>16%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>US</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "14%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>14%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>UK</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "24%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>24%</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>CA</p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: "64%" }}></div>
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>64%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
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
                                                <img style={{}} src={male} />
                                                <p style={{ fontSize: 17, opacity: '84%', color: '#78909C', fontWeight: '600', margin: '0px 30px', }}>77%</p>
                                            </div>
                                            <div className={'gender-widght-contain'}>
                                                <img style={{}} src={female} />
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
                                    Desclaimer_data.map((item, index) =>
                                        <div key={index} className="d-flex align-items-center my-2">

                                            <p className="disclamer-content disclamer-content-text " >{item.title}</p>
                                        </div>

                                    )
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

export default ViewProposal;
