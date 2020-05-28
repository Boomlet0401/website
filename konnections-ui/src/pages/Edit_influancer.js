import React, { Component, } from 'react';
import Sidebar from '../components/Sidebar';
import TopBarBlock from '../components/TopBarBlock';
import { Container, Alert, Spinner, Tabs, Tab, } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import uploadimage from '../assets/icons/upload image.svg';
import { Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';


class Edit_influancer extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            Languages: ["Hindi", "English"],
            Locations: ['Kormangla, 31st Main', 'Kormangla, 25st Main'],
            categories: ['Travel', 'driving'],
            vendors: ['salman', 'kajal'],
            influencer_id: 0,
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
            verified_yt: false,
            yt_link: "",
            yt_subscribers: "",
            yt_video_cost: "",
            btnText: "UPDATE",
            btnState: "",
            formError: [],
            message_success: "",
            message_error: "",
            fetchData: false,
            loading: true,
            added_by: "",
            added_date: "",
            updated_by: "",
            updated_date: "",
            btnTextDelete: "Delete",
            btnStateDelete: "",
            countries: [],
            state: [],
            city: [],
        };
    }

    componentDidMount() {
        this.loadData();
        this.loadCountries();
    }

    async loadCountries() {
        let url = Global.API.GET_COUNTRIES;
        let response = await requestAPI(url, "post", {});
        let res = await response.json();
        this.setState({ countries: res.list });
    }

    async loadStates(countryId) {
        let url = Global.API.GET_STATES;
        let response = await requestAPI(url, "post", { id: countryId });
        let res = await response.json();
        this.setState({ state: res.list });
    }

    async loadCities(countryId) {
        let url = Global.API.GET_CITIES;
        let response = await requestAPI(url, "post", { id: countryId });
        let res = await response.json();
        this.setState({ city: res.list });
    }

    async loadData() {
        let id = this.props.match.params.id;
        let url = Global.API.EDIT_INFLUENCER;
        let data = {
            id: id,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        if (res.status === "success") {

            let influencer = res.influencer;
            let language = JSON.parse(influencer.language);
            let location = JSON.parse(influencer.location);
            let category = JSON.parse(influencer.category);
            let vendor = JSON.parse(influencer.vendor);

            // Get Social data
            let blog = res.blog;
            let facebook = res.facebook;
            let instagram = res.instagram;
            let linkedin = res.linkedin;
            let tiktok = res.tiktok;
            let twitter = res.twitter;
            let youtube = res.youtube;

            let added_date = new Date(influencer.created_at);
            let updated_date = new Date(influencer.last_update_date);


            this.setState({
                influencer_id: influencer.id,
                name: influencer.name,
                country: influencer.country,
                email: influencer.email,
                contact_1: influencer.contact_1,
                contact_2: influencer.contact_2,
                contact_3: influencer.contact_3,
                gender: influencer.gender,
                type: influencer.type,
                selectedLanguages: language,
                selectedLocations: location,
                selectedCategories: category,
                selectedVendors: vendor,
                remark: influencer.remark,
                added_by: influencer.added_by,
                added_date: added_date,
                updated_by: influencer.updated_by,
                updated_date: updated_date,
                l_verified: linkedin.verified,
                l_active: linkedin.active,
                l_link: linkedin.link,
                l_connections: linkedin.connections,
                l_post_cost: linkedin.post_cost,
                verified_insta: instagram.verified,
                active_insta: instagram.active,
                insta_link: instagram.link,
                insta_followers: instagram.followers,
                insta_video_cost: instagram.video_cost,
                insta_story_cost: instagram.story_cost,
                insta_post_cost: instagram.post_cost,
                active_blog: blog.active,
                blog_link: blog.link,
                blog_page_view: blog.page_views,
                blog_article_cost: blog.article_cost,
                verified_tw: twitter.verified,
                active_tw: twitter.active,
                tw_link: twitter.link,
                tw_connections: twitter.connections,
                tw_post_cost: twitter.post_cost,
                verified_fb: facebook.verified,
                active_fb: facebook.active,
                fb_link: facebook.link,
                fb_followers: facebook.followers,
                fb_video_cost: facebook.video_cost,
                fb_story_cost: facebook.story_cost,
                fb_post_cost: facebook.post_cost,
                verified_tt: tiktok.verified,
                active_tt: tiktok.active,
                tt_link: tiktok.link,
                tt_fans: tiktok.fans,
                tt_hearts: tiktok.hearts,
                tt_post_cost: tiktok.post_cost,
                verified_yt: youtube.verified,
                yt_link: youtube.link,
                yt_subscribers: youtube.subscribers,
                yt_video_cost: youtube.video_cost,
                fetchData: true,
                loading: false,
            });
        } else {
            this.setState({
                fetchData: false,
                loading: false,
            });
        }

    }

    async formSubmit(e) {
        e.preventDefault();
        if (this.state.btnState === "disabled") {
            return;
        }
        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
            formError: [],
            showMessage: false,
        });

        let url = Global.API.UPDATE_INFLUENCER;
        let data = this.state;
        let response = await requestAPI(url, "post", data);
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

    async deleteInfluencer(id) {
        this.setState({
            btnTextDelete: "Please wait...",
            btnStateDelete: "disabled",
        });
        let url = Global.API.DELETE_INFLUENCER;
        let data = {
            id: id
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {
            // this.setState({
            //     btnTextDelete: "Please wait...",
            //     btnStateDelete: "disabled",
            // });
            this.props.history.goBack();
        } else {
            this.setState({
                btnTextDelete: "Please wait...",
                btnStateDelete: "disabled",
            });
            alert(res.message);
        }

    }

    render() {

        return (
            <div className="main_bock">
                <div className="right">
                    <Sidebar {...this.props} />
                </div>
                <div className="main_container">
                    <form className="form" onSubmit={(e) => this.formSubmit(e)}>
                        <TopBarBlock {...this.props}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ margin: '0px' }}>{this.state.name}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <button
                                            type={'button'}
                                            disabled={this.state.btnStateDelete}
                                            onClick={() => {
                                                if (window.confirm(`Are you sure you wish to delete influencer "${this.state.name}" ?`)) this.deleteInfluencer(this.state.influencer_id)
                                            }}
                                            style={{ margin: '0 5px', border: '1px solid red', color: 'red', padding: '5px 15px' }} className="btn">
                                            {this.state.btnTextDelete}
                                        </button>
                                        <button style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }} className="btn">
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
                                this.state.fetchData ?
                                    <div>
                                        <div className={'mx-3'} style={{
                                            borderBottom: '1px solid #e8e8e8',
                                            marginTop: '25px',
                                            borderTop: '1px solid #e8e8e8'
                                        }}>
                                            <div className={'create-credits-row'}>
                                                <p><strong>Updated by : </strong>{this.state.updated_by} {this.state.updated_date.getDate() + "-" + (this.state.updated_date.getMonth() + 1) + "-" + this.state.updated_date.getFullYear()}</p>
                                                <p><strong>Added by: </strong>{this.state.added_by} {this.state.added_date.getDate() + "-" + (this.state.added_date.getMonth() + 1) + "-" + this.state.added_date.getFullYear()}</p>
                                            </div>
                                        </div>
                                        <div className="inner-container my-4">

                                            <Container fluid={true}>
                                                <div>
                                                    <h4 className={'form-headings my-3'}>Basic Details</h4>
                                                </div>

                                                <Row>
                                                    <Col lg={4} md={6} xs={6}>
                                                        <div>
                                                            <div className="input_box width-input border-bottom">
                                                                <label>Influencer Name</label>
                                                                <input
                                                                    onChange={(event) => {
                                                                        this.setState({
                                                                            name: event.target.value,
                                                                        });
                                                                    }}
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
                                                                selectedValues={this.state.selectedLanguages}
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
                                                                selectedValues={this.state.selectedLocations}
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
                                                                selectedValues={this.state.selectedCategories}
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
                                                                selectedValues={this.state.selectedVendors}
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

                                                <Tabs defaultActiveKey="linkedin" id="social-tab-controll">
                                                    <Tab eventKey="linkedin" title="Linkedin">
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
                                                                                    checked={this.state.l_verified}
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
                                                                                    checked={this.state.l_active}
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

                                                    </Tab>
                                                    <Tab eventKey="instagram" title="Instagram">
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
                                                                                    checked={this.state.verified_insta}
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
                                                                                    checked={this.state.active_insta}
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

                                                    </Tab>
                                                    <Tab eventKey="blog" title="Blog">
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
                                                                                    checked={this.state.active_blog}
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

                                                    </Tab>
                                                    <Tab eventKey="twitter" title="Twitter">
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
                                                                                    checked={this.state.verified_tw}
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
                                                                                    checked={this.state.active_tw}
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

                                                    </Tab>
                                                    <Tab eventKey="facebook" title="Facebook">
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
                                                                                    checked={this.state.verified_fb}
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
                                                                                    checked={this.state.active_fb}
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

                                                    </Tab>
                                                    <Tab eventKey="tiktok" title="Tiktok">
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
                                                                                    checked={this.state.verified_tt}
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
                                                                                    checked={this.state.active_tt}
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

                                                    </Tab>
                                                    <Tab eventKey="youtube" title="Youtube">
                                                        <Row>
                                                            <Col lg={12} style={{ marginTop: 15, marginBottom: 15 }}>
                                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <div style={{}}>
                                                                        <h4 className={'form-headings'}>Youtube Details</h4>
                                                                    </div>
                                                                    <div style={{}}>
                                                                        <div style={{ display: 'flex' }}>
                                                                            <div className={'mx-4'}>
                                                                                <Form.Check
                                                                                    custom
                                                                                    name={'verified_yt'}
                                                                                    checked={this.state.verified_yt}
                                                                                    onChange={(event) => {
                                                                                        this.setState({
                                                                                            verified_yt: event.target.checked,
                                                                                        });
                                                                                    }}
                                                                                    label="Verified"
                                                                                    id="verified_yt"
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
                                                                                    yt_link: event.target.value,
                                                                                });
                                                                            }}
                                                                            value={this.state.yt_link}
                                                                            type="text" placeholder="Enter link" name="yt_link" />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col lg={4} md={6} xs={6}>
                                                                <div>
                                                                    <div className="input_box width-input border-bottom">
                                                                        <label>Subscribers</label>
                                                                        <input
                                                                            onChange={(event) => {
                                                                                this.setState({
                                                                                    yt_subscribers: event.target.value,
                                                                                });
                                                                            }}
                                                                            value={this.state.yt_subscribers}
                                                                            type="number" placeholder="Enter fans" name="yt_subscribers" />
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
                                                                                    yt_video_cost: event.target.value,
                                                                                });
                                                                            }}
                                                                            value={this.state.yt_video_cost}
                                                                            type="text" placeholder="Enter cost" name="yt_video_cost" />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                    </Tab>
                                                </Tabs>
                                            </Container>


                                        </div>

                                    </div>
                                    :
                                    <Alert style={{ marginTop: 20 }} variant={'danger'}>
                                        OOPS! Influencer not found
                                </Alert>
                        }
                    </form>
                </div>
            </div>
        );
    }

}

export default Edit_influancer;