import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import { Container, Row, Col, Form, Modal, Table } from 'react-bootstrap';
import '../components/Jquery.js';
import AddInfluencer from './AddInfluencer';
import edit from '../assets/icons/edit-24px.svg';
import deleteimg from '../assets/icons/delete24.svg';
import yt from '../assets/icons/youtube.svg';
import INFLUENCER_DATA from '../data/INFLUENCER_DATA';
import insta from '../assets/icons/Instagram.svg';
import pie_chart from '../assets/icons/pie-chart.svg';
import male from '../assets/icons/male.svg';
import female from '../assets/icons/Female.svg';
import Disclaimer from '../components/widget/Disclaimer';
import Global from '../data/Global';


class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addInfluencer: false,
        };
    }

    async sendData() {
        let url = Global.API.CREATE_PROPOSAL;
        let data = this.state;
        console.log(data);
        let response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        let res = await response.json();
    }


    render() {
        const Influencer_details_data = [
            { id: 1, title: 'Deliverables' },
            { id: 2, title: 'Packaged cost' },
            { id: 3, title: 'Remarks' },
            { id: 4, title: 'Average Views' },
            { id: 5, title: 'Engagement on YT' },
            { id: 6, title: 'Cost Per YouTube Video' },
            { id: 7, title: 'Packaged Cost' },
        ];
        const DataItems = Influencer_details_data.map((data) =>
            <p key={data.id} className={'data-item'}>
                <Form.Check
                    className={''}
                    custom
                    style={{ fontSize: 12 }}
                    name={data.id}
                    label={data.title}
                    id={data.id}
                    checked
                    type={'checkbox'} />
            </p>
        );

        return (
            <>
                <div className="main_bock">
                    <div className="main_container">

                        <TopBarBlock showTopLogo={true} {...this.props}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: '600' }}>
                                    Create Proposal
                            </div>
                                <div>
                                    <button
                                        style={{ margin: '0 10px' }}
                                        className="btn btn-skyblue px-4">
                                        Preview
                                </button>
                                    <button
                                        style={{ margin: '0 10px' }}
                                        className="btn btn-blue px-3">
                                        Save &amp; Create
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

                            <Container fluid={true}>
                                <Row>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Proposal date</label>
                                                <input type="date" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Brand/Agency</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Brand name</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Client Name</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Strategist</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Contact number</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input  border-bottom">
                                                <label>Email Id</label>
                                                <input type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
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
                                                        <label
                                                            className="usernme">Influencer Category
                                                    </label>
                                                        <select>
                                                            <option>Life style</option>
                                                            <option>Life style 1</option>
                                                            <option>Life style 2</option>
                                                            <option>Life style 3</option>
                                                            <option>Life style 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input border-bottom">
                                                        <label>Influencer Type</label>
                                                        <select>
                                                            <option>Influencer Type </option>
                                                            <option>Influencer Type 1</option>
                                                            <option>Influencer Type 2</option>
                                                            <option>Influencer Type 3</option>
                                                            <option>Influencer Type 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input border-bottom">
                                                        <label>Platform</label>
                                                        <select>
                                                            <option>Youtube</option>
                                                            <option>Twitter</option>
                                                            <option>Insta</option>
                                                            <option>Facebook</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input border-bottom">
                                                        <label>Deliverables</label>
                                                        <input type="text" placeholder="Enter Deliverables" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input border-bottom">
                                                        <label>Co-ordinates</label>
                                                        <input type="text" placeholder="Enter Co-ordinates" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input border-bottom">
                                                        <label>Campaign Budget ( In Rs. )</label>
                                                        <input type="text" placeholder="Enter Campaign Budget" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={6} xs={6}>
                                                <div>
                                                    <div className="input_box width-input  border-bottom">
                                                        <label>Campaign Duration</label>
                                                        <input type="text" placeholder="Enter Campaign Duration" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <div className="input_box border-bottom">
                                                        <label>Client's Brief</label>
                                                        <textarea rows={'5'} placeholder="Enter details" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <div className={'pt-4'}>
                                <p className={'font-weight-bold m-0 py-2'}>INFLUENCER DETAILS</p>

                                <div className={'my-4'}>
                                    <p className={'data-p-tag'}>Data to be displayed</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {DataItems}
                                    </div>
                                </div>



                            </div>

                            <div className={'influencer_details_block'}>
                                <div>
                                    <p style={{ margin: '10px 0px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Category A</p>
                                    <div className={'influencer_details_header_block'}>
                                        <div className={'d-flex align-items-center'}>
                                            <img alt="" style={{}} src={yt} />
                                            <p style={{ margin: '0px 20px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>YouTube</p>
                                        </div>
                                        <div className={'d-flex align-items-center'} >
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn btn-blue px-4">
                                                Edit
                                </button>
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn text-danger bg-white px-3">
                                                Delete
                                </button>
                                        </div>
                                    </div>

                                    <div className={'detail_table_block'}>
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
                                                        <input className={'table-input'} type="text" placeholder="" value="300K" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="2,92,340" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="0.06" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1,20,000" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1 YT video" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1,50000" /> Rs.
                                                </td>
                                                    <td className={'d-flex'}>
                                                        <span><img alt="" style={{ width: 45 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 45 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>

                                </div>


                                <div className={'my-4'}>
                                    <p className={'data-p-tag'}>Data to be displayed</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {
                                            INFLUENCER_DATA.map((item, index) =>
                                                <p key={index} className={'data-item'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        checked
                                                        style={{ fontSize: 12 }}
                                                        name={item.title}
                                                        label={item.title}
                                                        id={item.title}
                                                        type={'checkbox'} />
                                                </p>

                                            )
                                        }
                                    </div>
                                </div>

                                <div>
                                    <p style={{ margin: '10px 0px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Category B</p>
                                    <div className={'influencer_details_header_block'}>
                                        <div className={'d-flex align-items-center'}>
                                            <img alt="" style={{}} src={insta} />
                                            <p style={{ margin: '0px 20px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Instagram</p>
                                        </div>
                                        <div className={'d-flex align-items-center'} >
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn btn-blue px-4">
                                                Edit
                                </button>
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn text-danger bg-white px-3">
                                                Delete
                                </button>
                                        </div>
                                    </div>
                                    <div className={'detail_table_block'}>
                                        <Table className="detail_table" responsive>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Subscribers</th>
                                                    <th>Language</th>
                                                    <th>Average Views</th>
                                                    <th>Average Views
                                                    <span style={{ display: 'block', fontSize: 10 }}>(Based on the breakdown from your end)</span></th>
                                                    <th>Engagement</th>
                                                    <th>Followers Audit <span style={{ display: 'block', fontSize: 10 }}>(Net + 18% GST Additonal)</span></th>
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
                                                        <input className={'table-input'} type="text" placeholder="" value="300K" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="2,92,340" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="0.06" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1,20,000" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1 YT video" />
                                                    </td>
                                                    <td>
                                                        <input className={'table-input'} type="text" placeholder="" value="1,50000" /> Rs.
                                                </td>
                                                    <td className={'d-flex'}>
                                                        <span><img alt="" style={{ width: 45 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 45 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
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
                                                        <span><img alt="" style={{ width: 35 }} src={edit} /></span>
                                                        <span className={'mx-3'}><img alt="" style={{ width: 35 }} src={deleteimg} /></span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                                {/* Analysis Details Block */}
                                <div>
                                    <div className={'influencer_details_header_block'}>
                                        <div className={'d-flex align-items-center'}>
                                            <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Analysis</p>
                                        </div>
                                        <div className={'d-flex align-items-center'} >
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn btn-blue px-4">
                                                Edit
                                </button>
                                            <button
                                                style={{ margin: '0 10px' }}
                                                className="btn text-danger bg-white px-3">
                                                Delete
                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={'analysis_main_container'}>
                                    <Row>
                                        <Col lg={4}>
                                            <div className={'d-flex align-items-center'}>
                                                <img alt="" style={{ width: 25 }} src={pie_chart} />
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} className={'my-4 mt-5'}>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Avg. Likes</label>
                                                <input type="text" value="1.3k" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Avg. Comments</label>
                                                <input type="text" value="1.3k" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>CPE</label>
                                                <input type="text" value="₹25,443" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Suggested price</label>
                                                <input type="text" value="₹25,443" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Avg Engagement rate</label>
                                                <input type="text" value="1.3k" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Form.Check
                                            className={''}
                                            custom
                                            style={{ fontSize: 12 }}
                                            name='smd'
                                            label={'Social Media Distribution'}
                                            id={'smd'}

                                            type={'checkbox'} />
                                    </div>
                                    <div className={'my-4'}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <div>
                                                <div className="input_box  border-bottom">
                                                    <label>Youtube</label>
                                                    <input type="text" value="1.3k" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="input_box  border-bottom">
                                                    <label>Twitter</label>
                                                    <input type="text" value="1.3k" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="input_box  border-bottom">
                                                    <label>Facebook</label>
                                                    <input type="text" value="₹25,443" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="input_box  border-bottom">
                                                    <label>Linkedin</label>
                                                    <input type="text" value="₹25,443" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="input_box  border-bottom">
                                                    <label>Blog</label>
                                                    <input type="text" value="1.3k" placeholder="Enter user name" />
                                                </div>
                                            </div>
                                        </div>
                                        <Row>
                                            <Col lg={3}>
                                                <div>
                                                    <div style={{ width: 150 }} className="input_box border-bottom">
                                                        <label>Tiktok</label>
                                                        <input type="text" value="1.3k" placeholder="Enter user name" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div>
                                        <Form.Check
                                            className={''}
                                            custom
                                            style={{ fontSize: 12 }}
                                            name='gd'
                                            label={'Gender Distribution'}
                                            id={'gd'}

                                            type={'checkbox'} />
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                    }} className={'my-4'}>
                                        <div style={{ marginRight: "70px" }}>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Male ( in %)</label>
                                                <input type="text" value="70" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Female ( in %)</label>
                                                <input type="text" value="66" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Form.Check
                                            className={''}
                                            custom
                                            style={{ fontSize: 12 }}
                                            name='Ad'
                                            label={'Age Distribution'}
                                            id={'Ad'}

                                            type={'checkbox'} />
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                    }} className={'my-4'}>
                                        <div style={{ marginRight: "70px" }}>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Age 0-17 ( in %)</label>
                                                <input type="text" value="70" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div style={{ marginRight: "70px" }}>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Age 18-24 ( in %)</label>
                                                <input type="text" value="66" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div style={{ marginRight: "70px" }}>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Age 25-34 ( in %)</label>
                                                <input type="text" value="66" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box small-width-input border-bottom">
                                                <label>Age 35-54 ( in %)</label>
                                                <input type="text" value="66" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                    </div>


                                    <Row>
                                        <Col lg={4}>
                                            <div>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    style={{ fontSize: 12 }}
                                                    name='cwd'
                                                    label={'City wise Distribution'}
                                                    id={'cwd'}
                                                    type={'checkbox'} />
                                                <div className={'d-flex my-4'}>
                                                    <div>
                                                        <div>
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="City 1" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'d-flex mt-4'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="City 2" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'d-flex mt-4'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="City 3" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'d-flex mt-4 mb-0'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom">
                                                                <input style={{ padding: 12 }} type="text" value="City 4" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    style={{ fontSize: 12 }}
                                                    name='CWd'
                                                    label={'Country wise Distribution'}
                                                    id={'CWd'}
                                                    type={'checkbox'} />
                                                <div className={'d-flex my-4'}>
                                                    <div>
                                                        <div>
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="Country 1" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'d-flex mt-4'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="Country 2" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'d-flex mt-4'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom mb-0">
                                                                <input style={{ padding: 12 }} type="text" value="Country 3" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'d-flex mt-4 mb-0'}>
                                                    <div>
                                                        <div >
                                                            <div className="input_box small-width-input border-bottom">
                                                                <input style={{ padding: 12 }} type="text" value="Country 4" placeholder="Enter user name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <input className="other-input" type="text" value="" placeholder="Amount in %" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>

                                    </Row>


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

                                {/* End Analysis Details Block */}
                            </div>
                            <div className={'py-4'}>
                                <button
                                    onClick={() => this.setState({ addInfluencer: true })}
                                    className={"btn btn-blue"}>
                                    + Add Influencer
                                    </button>
                            </div>


                            {/* Overall Statistics */}

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
                            {/* End Overall Statistics*/}
                            {/* Disclaimer Block */}
                            <Disclaimer />

                            {/*End Disclaimer Block */}

                        </div>
                    </div>
                </div>
                <Modal className={'full-width-model'} show={this.state.addInfluencer}>
                    <AddInfluencer hideModel={() => this.setState({ addInfluencer: false })} />
                </Modal>

            </>
        );
    }
}

export default CreateCampaign;
