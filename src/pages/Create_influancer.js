import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import uploadimage from '../assets/icons/upload image.svg';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';




class Create_influancer extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            Languages: [{ language: 'Hindi', id: 1 }, { language: 'English', id: 2 }],
            Locations: [{ location: 'Kormangla, 31st Main', id: 1 }, { location: 'Kormangla, 25st Main', id: 2 }],
            categories: [{ category: 'Travel', id: 1 }, { category: 'driving', id: 2 }],
            vendors: [{ vendor: 'salman', id: 1 }, { vendor: 'kajal', id: 2 }],
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
                                <p style={{ margin: '0px' }}>Create Influencer</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div>
                                    <Link to="/manage-influencer" style={{ margin: '0 5px', border: '1px solid red', color: 'red', padding: '5px 15px' }} className="btn">Delete</Link>
                                    <Link
                                        to="/manage-influencer"
                                        style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }} className="btn">Save
                            </Link>
                                </div>
                            </div>
                        </div>
                    </TopBarBlock>

                    <div className="inner-container my-4">

                        <Container fluid={true}>
                            <div className={'my-3'}>
                                <h4 className={'form-headings'}>Basic Details</h4>
                            </div>

                            <Row>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Influencer Name</label>
                                            <input type="text" placeholder="Enter user name" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Contact Details
                                                    </label>
                                            <select>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Email</label>
                                            <input type="text" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Influencer type</label>
                                            <input type="text" placeholder="" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Contact Details</label>
                                            <input type="text" placeholder="" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Country</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={3} md={6} xs={6}>
                                    <div>
                                        <p style={{ fontSize: 12, color: 'black' }}>Influencer photo</p>
                                        <label for="influencer_img" className="select-image-block d-block">
                                            <div style={{ display: 'block', margin: '5px 0px' }}>
                                                <img style={{ width: 35 }} src={uploadimage} alt="" />
                                            </div>
                                            <h4 style={{ fontSize: 12, color: '#a5a5a5' }}>
                                                Drag Image here
                                            </h4>
                                        </label>
                                        <input type="file" id="influencer_img" name="influencer_img" hidden />
                                    </div>
                                </Col>
                            </Row>
                            <Row className={'my-5'}>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <p style={{ fontSize: 14, color: 'black' }}>Gender</p>
                                        <div style={{ display: 'flex' }}>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'gender'}
                                                    label="Male"
                                                    id="type_male"
                                                    type={'radio'} />
                                            </p>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'gender'}
                                                    label="Female"
                                                    id="type_female"
                                                    type={'radio'} />
                                            </p>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'gender'}
                                                    label="Couple"
                                                    id="type_couple"
                                                    type={'radio'} />
                                            </p>

                                        </div>

                                    </div>
                                </Col>
                                <Col lg={8} md={6} xs={6}>
                                    <div>
                                        <p style={{ fontSize: 14, color: 'black' }}>Influencer type</p>
                                        <div style={{ display: 'flex' }}>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    custom
                                                    name={'type'}
                                                    label="CAT A"
                                                    id="cat_a"
                                                    type={'radio'} />
                                            </p>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'type'}
                                                    label="CAT B"
                                                    id="cat_b"
                                                    type={'radio'} />
                                            </p>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'type'}
                                                    label="CAT C"
                                                    id="cat_c"
                                                    type={'radio'} />
                                            </p>
                                            <p className={'mx-2'}>
                                                <Form.Check
                                                    className={''}
                                                    custom
                                                    name={'type'}
                                                    label="CELEBRITY"
                                                    id="celebrity"
                                                    type={'radio'} />
                                            </p>

                                        </div>

                                    </div>
                                </Col>

                            </Row>

                            <Row className={''}>
                                <Col lg={12}>
                                    <div className={'ms-multiselect-container'}>
                                        <Multiselect
                                            options={this.state.Languages}
                                            selectedValues={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="language"
                                            placeholder={'Choose Languages....'}
                                            style={{
                                                inputField: {

                                                },
                                                searchBox: {
                                                    background: '#f7f7f7',
                                                    borderBottom: '1px solid #dee2e6',
                                                    borderRadius: '0',
                                                    padding: '8px 15px',
                                                    fontSize: '0.9em',
                                                    borderTop: 'none',
                                                    borderLeft: 0,
                                                    borderRight: 0,
                                                },
                                                chips: {
                                                    background: '#EBEBEB',
                                                    color: 'black',
                                                    marginBottom: 0,
                                                },
                                                optionContainer: {
                                                },
                                                option: {

                                                }
                                            }}
                                        />
                                    </div>

                                </Col>
                            </Row>

                            <Row className={'my-4'}>
                                <Col lg={12}>
                                    <div className={'ms-multiselect-container'}>
                                        <Multiselect
                                            options={this.state.Locations}
                                            selectedValues={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="location"
                                            placeholder={'Choose Location..'}
                                            style={{
                                                inputField: {

                                                },
                                                searchBox: {
                                                    background: '#f7f7f7',
                                                    borderBottom: '1px solid #dee2e6',
                                                    borderRadius: '0',
                                                    padding: '8px 15px',
                                                    fontSize: '0.9em',
                                                    borderTop: 'none',
                                                    borderLeft: 0,
                                                    borderRight: 0,
                                                },
                                                chips: {
                                                    background: '#EBEBEB',
                                                    color: 'black',
                                                    marginBottom: 0,
                                                },
                                                optionContainer: {
                                                },
                                                option: {

                                                }
                                            }}
                                        />
                                    </div>

                                </Col>
                            </Row>

                            <Row className={'my-4'}>
                                <Col lg={12}>
                                    <div className={'ms-multiselect-container'}>
                                        <Multiselect
                                            options={this.state.categories}
                                            selectedValues={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="category"
                                            placeholder={'Choose Category..'}
                                            style={{
                                                inputField: {

                                                },
                                                searchBox: {
                                                    background: '#f7f7f7',
                                                    borderBottom: '1px solid #dee2e6',
                                                    borderRadius: '0',
                                                    padding: '8px 15px',
                                                    fontSize: '0.9em',
                                                    borderTop: 'none',
                                                    borderLeft: 0,
                                                    borderRight: 0,
                                                },
                                                chips: {
                                                    background: '#EBEBEB',
                                                    color: 'black',
                                                    marginBottom: 0,
                                                },
                                                optionContainer: {
                                                },
                                                option: {

                                                }
                                            }}
                                        />
                                    </div>

                                </Col>
                            </Row>

                            <Row className={'my-4'}>
                                <Col lg={12}>
                                    <div className={'ms-multiselect-container'}>
                                        <Multiselect
                                            options={this.state.vendors}
                                            selectedValues={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="vendor"
                                            placeholder={'Choose Vendor..'}
                                            style={{
                                                inputField: {

                                                },
                                                searchBox: {
                                                    background: '#f7f7f7',
                                                    borderBottom: '1px solid #dee2e6',
                                                    borderRadius: '0',
                                                    padding: '8px 15px',
                                                    fontSize: '0.9em',
                                                    borderTop: 'none',
                                                    borderLeft: 0,
                                                    borderRight: 0,
                                                },
                                                chips: {
                                                    background: '#EBEBEB',
                                                    color: 'black',
                                                    marginBottom: 0,
                                                },
                                                optionContainer: {
                                                },
                                                option: {

                                                }
                                            }}
                                        />
                                    </div>

                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12} >
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>Remarks</label>
                                            <textarea value="Enter Remarks..." style={{ fontSize: 12 }}>Enter Remarks... </textarea>
                                        </div>
                                    </div>
                                </Col>
                            </Row>


                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Linkedin Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        custom
                                                        name={'verified'}
                                                        label="Verified"
                                                        id="verified"
                                                        type={'checkbox'} />
                                                </p>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active'}
                                                        label="Active"
                                                        id="active"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Connections
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Post Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Instagram Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        custom
                                                        name={'verified_insta'}
                                                        label="Verified"
                                                        id="verified_insta"
                                                        type={'checkbox'} />
                                                </p>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active_insta'}
                                                        label="Active"
                                                        id="Active_insta"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Followers
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Video Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Story Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Post Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Blog Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>

                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active_blog'}
                                                        label="Active"
                                                        id="Active_blog"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Monthly Page View (mpv)
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Article Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Twitter Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        custom
                                                        name={'verified_tw'}
                                                        label="Verified"
                                                        id="verified_tw"
                                                        type={'checkbox'} />
                                                </p>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active_tw'}
                                                        label="Active"
                                                        id="Active_tw"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Connections
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Post Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Facebook Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        custom
                                                        name={'verified_fb'}
                                                        label="Verified"
                                                        id="verified_fb"
                                                        type={'checkbox'} />
                                                </p>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active_fb'}
                                                        label="Active"
                                                        id="Active_fb"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Followers
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Video Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Story Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Post Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{}}>
                                            <h4 className={'form-headings'}>Tiktok Details</h4>
                                        </div>
                                        <div style={{}}>
                                            <div style={{ display: 'flex' }}>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        custom
                                                        name={'verified_tt'}
                                                        label="Verified"
                                                        id="verified_tt"
                                                        type={'checkbox'} />
                                                </p>
                                                <p className={'mx-4'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'Active_tt'}
                                                        label="Active"
                                                        id="Active_tt"
                                                        type={'checkbox'} />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Link</label>
                                            <input type="text" placeholder="Enter user name" value="XYZ" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label
                                            >Fans
                                                    </label>
                                            <input type="text" placeholder="Enter user name" value="12123" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Hearts </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <div className="input_box width-input border-bottom">
                                            <label>Post Cost (in Rs.) </label>
                                            <input type="text" placeholder="Enter your email" value="1200" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>


                    </div>

                </div>
            </div>
        );
    }

}

export default Create_influancer;