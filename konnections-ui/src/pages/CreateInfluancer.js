import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import { Container, Alert } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import uploadimage from '../assets/icons/upload image.svg';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import Global from '../data/Global';


class CreateInfluancer extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            Languages: ["Hindi", "English"],
            Locations: ['Kormangla, 31st Main', 'Kormangla, 25st Main'],
            categories: ['Travel', 'driving'],
            vendors: ['salman', 'kajal'],
            name: "",
            country: "",
            email: "",
            contact_1: "",
            contact_2: "",
            contact_3: "",
            gender: "",
            type: "",
            selectedLanguages: [],
            selectedLocations: [],
            selectedCategories: [],
            selectedVendors: [],
            remark: "",
            l_verified: false,
            l_active: false,
            l_link: "",
            l_connections: "",
            l_post_cost: "",
            verified_insta: false,
            active_insta: false,
            insta_link: "",
            insta_followers: "",
            insta_video_cost: "",
            insta_story_cost: "",
            insta_post_cost: "",
            active_blog: false,
            blog_link: "",
            blog_page_view: "",
            blog_article_cost: "",
            verified_tw: false,
            active_tw: false,
            tw_link: "",
            tw_connections: "",
            tw_post_cost: "",
            verified_fb: false,
            active_fb: false,
            fb_link: "",
            fb_followers: "",
            fb_video_cost: "",
            fb_story_cost: "",
            fb_post_cost: "",
            verified_tt: false,
            active_tt: false,
            tt_link: "",
            tt_fans: "",
            tt_hearts: "",
            tt_post_cost: "",
            btnText: "SAVE",
            btnState: "",
            formError: [],
            message_success: "",
            message_error: "",
        };
        this.nameHandler = this.nameHandler.bind(this);
    }

    async formSubmit(e) {
        e.preventDefault();

        // if (this.state.btnState === "disabled") {
        //     return;
        // }

        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
            formError: [],
            showMessage: false,
        });

        let url = Global.API.CREATE_INFLUANCER;
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
        this.setState({
            btnText: "SAVE",
            btnState: "",
            formError: res.ferror,
        });
        console.log(res);
        if (res.status === "success") {
            this.setState({
                message_success: res.message,
                message_error: "",
                name: "",
                country: "",
                email: "",
                contact_1: "",
                contact_2: "",
                contact_3: "",
                gender: "",
                type: "",
                selectedLanguages: [],
                selectedLocations: [],
                selectedCategories: [],
                selectedVendors: [],
                remark: "",
                l_verified: false,
                l_active: false,
                l_link: "",
                l_connections: "",
                l_post_cost: "",
                verified_insta: false,
                active_insta: false,
                insta_link: "",
                insta_followers: "",
                insta_video_cost: "",
                insta_story_cost: "",
                insta_post_cost: "",
                active_blog: false,
                blog_link: "",
                blog_page_view: "",
                blog_article_cost: "",
                verified_tw: false,
                active_tw: false,
                tw_link: "",
                tw_connections: "",
                tw_post_cost: "",
                verified_fb: false,
                active_fb: false,
                fb_link: "",
                fb_followers: "",
                fb_video_cost: "",
                fb_story_cost: "",
                fb_post_cost: "",
                verified_tt: false,
                active_tt: false,
                tt_link: "",
                tt_fans: "",
                tt_hearts: "",
                tt_post_cost: "",
            });
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            this.setState({
                message_success: "",
                message_error: res.message,
            });
            if (res.message !== "") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    nameHandler(event) {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar {...this.props} />
                </div>
                <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                    <div className="main_container">
                        <TopBarBlock {...this.props}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ margin: '0px' }}>Create Influencer</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <button
                                            onClick={() => {
                                                this.props.history.goBack();
                                            }}
                                            className="btn"
                                            style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid red', color: 'red', }}
                                            type={'button'}>
                                            Delete
                                        </button>
                                        <button
                                            className={"btn " + this.state.btnState}
                                            style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }}
                                            type={'submit'}>
                                            {this.state.btnText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </TopBarBlock>
                        <Alert className="mt-3"
                            show={this.state.message_error === "" ? false : true}
                            variant={"danger"}
                            onClose={() => this.setState({ message_error: "" })} dismissible>
                            {this.state.message_error}
                        </Alert>

                        <Alert className="mt-3"
                            show={this.state.message_success === "" ? false : true}
                            variant={"success"}
                            onClose={() => this.setState({ message_success: "" })} dismissible>
                            {this.state.message_success}
                        </Alert>

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
                                                <input
                                                    onChange={this.nameHandler}
                                                    value={this.state.name}
                                                    type="text" placeholder="Enter user name" />
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.name !== "" && <p className="text-danger small form_error">{this.state.formError.name}</p>
                                        }
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Country</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            country: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.country}
                                                    type="text" placeholder="Enter country" name="country" />
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.country !== "" && <p className="text-danger small form_error">{this.state.formError.country}</p>
                                        }
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Email</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            email: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.email}
                                                    type="text" placeholder="Enter email address" name="email" />
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.email !== "" && <p className="text-danger small form_error">{this.state.formError.email}</p>
                                        }
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Contact 1</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            contact_1: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.contact_1}
                                                    type="text" placeholder="First contact" name="contact_1" />
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.contact_1 !== "" && <p className="text-danger small form_error">{this.state.formError.contact_1}</p>
                                        }
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Contact 2</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            contact_2: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.contact_2}
                                                    type="text" placeholder="Second contact" name="contact_2" />
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.contact_2 !== "" && <p className="text-danger small form_error">{this.state.formError.contact_2}</p>
                                        }
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Contact 3</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            contact_3: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.contact_3}
                                                    type="text" placeholder="Third contact" name="contact_3" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={3} md={6} xs={6}>
                                        <div>
                                            <p style={{ fontSize: 12, color: 'black' }}>Influencer photo</p>
                                            <label htmlFor="influencer_img" className="select-image-block d-block">
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
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'gender'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                gender: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.gender === "male"}
                                                        value={'male'}
                                                        label="Male"
                                                        id="type_male"
                                                        type={'radio'} />
                                                </div>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'gender'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                gender: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.gender === "female"}
                                                        value={'female'}
                                                        label="Female"
                                                        id="type_female"
                                                        type={'radio'} />
                                                </div>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'gender'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                gender: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.gender === "couple"}
                                                        value={'couple'}
                                                        label="Couple"
                                                        id="type_couple"
                                                        type={'radio'} />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.gender !== "" && <p className="text-danger small">{this.state.formError.gender}</p>
                                        }
                                    </Col>
                                    <Col lg={8} md={6} xs={6}>
                                        <div>
                                            <p style={{ fontSize: 14, color: 'black' }}>Influencer type</p>
                                            <div style={{ display: 'flex' }}>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        custom
                                                        name={'type'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                type: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.type === "cat_a"}
                                                        value={'cat_a'}
                                                        label="CAT A"
                                                        id="cat_a"
                                                        type={'radio'} />
                                                </div>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'type'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                type: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.type === "cat_b"}
                                                        value={'cat_b'}
                                                        label="CAT B"
                                                        id="cat_b"
                                                        type={'radio'} />
                                                </div>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'type'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                type: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.type === "cat_c"}
                                                        value={'cat_c'}
                                                        label="CAT C"
                                                        id="cat_c"
                                                        type={'radio'} />
                                                </div>
                                                <div className={'mx-2'}>
                                                    <Form.Check
                                                        className={''}
                                                        custom
                                                        name={'type'}
                                                        onChange={(event) => {
                                                            this.setState({
                                                                type: event.target.value,
                                                            });
                                                        }}
                                                        checked={this.state.type === "celebrity"}
                                                        value={'celebrity'}
                                                        label="CELEBRITY"
                                                        id="celebrity"
                                                        type={'radio'} />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            this.state.formError.type !== "" && <p className="text-danger small">{this.state.formError.type}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row className={''}>
                                    <Col lg={12}>
                                        <div className={'ms-multiselect-container'}>
                                            <Multiselect
                                                options={this.state.Languages}
                                                onSelect={(selectedList, selectedItem) => {
                                                    this.setState({
                                                        selectedLanguages: selectedList,
                                                    });
                                                }}
                                                isObject={false}
                                                placeholder={'Choose Languages....'}
                                                style={{
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
                                                }}
                                            />
                                        </div>
                                        {
                                            this.state.formError.language !== "" && <p className="text-danger small m-0">{this.state.formError.language}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row className={'my-4'}>
                                    <Col lg={12}>
                                        <div className={'ms-multiselect-container'}>
                                            <Multiselect
                                                options={this.state.Locations}
                                                onSelect={(selectedList, selectedItem) => {
                                                    this.setState({
                                                        selectedLocations: selectedList,
                                                    });
                                                }}
                                                isObject={false}
                                                placeholder={'Choose Location..'}
                                                style={{
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
                                                }}
                                            />
                                        </div>
                                        {
                                            this.state.formError.location !== "" && <p className="text-danger small m-0">{this.state.formError.location}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row className={'my-4'}>
                                    <Col lg={12}>
                                        <div className={'ms-multiselect-container'}>
                                            <Multiselect
                                                options={this.state.categories}
                                                onSelect={(selectedList, selectedItem) => {
                                                    this.setState({
                                                        selectedCategories: selectedList,
                                                    });
                                                }}
                                                isObject={false}
                                                placeholder={'Choose Category..'}
                                                style={{
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
                                                }}
                                            />
                                        </div>
                                        {
                                            this.state.formError.category !== "" && <p className="text-danger small m-0">{this.state.formError.category}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row className={'my-4'}>
                                    <Col lg={12}>
                                        <div className={'ms-multiselect-container'}>
                                            <Multiselect
                                                options={this.state.vendors}
                                                onSelect={(selectedList, selectedItem) => {
                                                    this.setState({
                                                        selectedVendors: selectedList,
                                                    });
                                                }}
                                                isObject={false}
                                                placeholder={'Choose Vendor..'}
                                                style={{
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
                                                }}
                                            />
                                        </div>
                                        {
                                            this.state.formError.vendor !== "" && <p className="text-danger small m-0">{this.state.formError.vendor}</p>
                                        }
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} >
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Remarks</label>
                                                <textarea
                                                    onChange={(event) => {
                                                        this.setState({
                                                            remark: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.remark}
                                                    name="remark" style={{ fontSize: 12 }} placeholder="Enter remark"></textarea>
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            custom
                                                            name={'l_verified'}
                                                            label="Verified"
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    l_verified: event.target.checked,
                                                                });
                                                            }}
                                                            id="verified"
                                                            type={'checkbox'} />
                                                    </div>
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'l_active'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    l_active: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="active"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            l_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.l_link}
                                                    type="text" placeholder="Enter link" name="l_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Connections</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            l_connections: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.l_connections}
                                                    type="text" placeholder="Enter connections" name="l_connection" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Post Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            l_post_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.l_post_cost}
                                                    type="text" placeholder="Enter post cost" name="l_post_cost" />
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            custom
                                                            name={'verified_insta'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    verified_insta: event.target.checked,
                                                                });
                                                            }}
                                                            label="Verified"
                                                            id="verified_insta"
                                                            type={'checkbox'} />
                                                    </div>
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'active_insta'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    active_insta: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="Active_insta"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            insta_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.insta_link}
                                                    type="text" placeholder="Enter link" name="insta_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Followers</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            insta_followers: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.insta_followers}
                                                    type="text" placeholder="Enter followers" name="insta_followers" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Video Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            insta_video_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.insta_video_cost}
                                                    type="text" placeholder="Enter cost" name="insta_video_cost" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Story Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            insta_story_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.insta_story_cost}
                                                    type="text" placeholder="Enter cost" name="insta_story_cost" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Post Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            insta_post_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.insta_post_cost}
                                                    type="text" placeholder="Enter cost" name="insta_post_cost" />
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'active_blog'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    active_blog: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="Active_blog"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            blog_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.blog_link}
                                                    type="text" placeholder="Enter link" name="blog_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Monthly Page View (mpv)</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            blog_page_view: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.blog_page_view}
                                                    type="text" placeholder="Enter page view" name="blog_page_view" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Article Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            blog_article_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.blog_article_cost}
                                                    type="text" placeholder="Enter article cost" name="blog_article_cost" />
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            custom
                                                            name={'verified_tw'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    verified_tw: event.target.checked,
                                                                });
                                                            }}
                                                            label="Verified"
                                                            id="verified_tw"
                                                            type={'checkbox'} />
                                                    </div>
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'active_tw'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    active_tw: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="Active_tw"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tw_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tw_link}
                                                    type="text" placeholder="Enter link" name="tw_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Connections</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tw_connections: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tw_connections}
                                                    type="text" placeholder="Enter connections" name="tw_connections" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Post Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tw_post_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tw_post_cost}
                                                    type="text" placeholder="Enter cost" name="tw_post_cost" />
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            custom
                                                            name={'verified_fb'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    verified_fb: event.target.checked,
                                                                });
                                                            }}
                                                            label="Verified"
                                                            id="verified_fb"
                                                            type={'checkbox'} />
                                                    </div>
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'active_fb'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    active_fb: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="Active_fb"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            fb_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.fb_link}
                                                    type="text" placeholder="Enter link" name="fb_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Followers</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            fb_followers: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.fb_followers}
                                                    type="text" placeholder="Enter followers" name="fb_followers" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Video Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            fb_video_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.fb_video_cost}
                                                    type="text" placeholder="Enter cost" name="fb_video_cost" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Story Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            fb_story_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.fb_story_cost}
                                                    type="text" placeholder="Enter cost" name="fb_story_cost" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Post Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            fb_post_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.fb_post_cost}
                                                    type="text" placeholder="Enter cost" name="fb_post_cost" />
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
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            custom
                                                            name={'verified_tt'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    verified_tt: event.target.checked,
                                                                });
                                                            }}
                                                            label="Verified"
                                                            id="verified_tt"
                                                            type={'checkbox'} />
                                                    </div>
                                                    <div className={'mx-4'}>
                                                        <Form.Check
                                                            className={''}
                                                            custom
                                                            name={'active_tt'}
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    active_tt: event.target.checked,
                                                                });
                                                            }}
                                                            label="Active"
                                                            id="Active_tt"
                                                            type={'checkbox'} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Link</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tt_link: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tt_link}
                                                    type="text" placeholder="Enter link" name="tt_link" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Fans</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tt_fans: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tt_fans}
                                                    type="text" placeholder="Enter fans" name="tt_fans" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Hearts</label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tt_hearts: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tt_hearts}
                                                    type="text" placeholder="Enter hearts" name="tt_hearts" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} xs={6}>
                                        <div>
                                            <div className="input_box width-input border-bottom">
                                                <label>Post Cost (in Rs.) </label>
                                                <input
                                                    onChange={(event) => {
                                                        this.setState({
                                                            tt_post_cost: event.target.value,
                                                        });
                                                    }}
                                                    value={this.state.tt_post_cost}
                                                    type="text" placeholder="Enter cost" name="tt_post_cost" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </form>
            </div >
        );
    }

}

export default CreateInfluancer;