import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import InfluencerRow from '../components/InfluencerRow/InfluencerRow';
import INFLUENCER_LIST from '../data/INFLUENCER_LIST';
import InfluencerFilter from '../components/InfluencerFilter/InfluencerFilter';
import { Modal, Spinner } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Global from '../data/Global';
import { requestAPI } from '../functions/load';

class AddInfluencer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTypeModel: false,
            loading: true,
            list: [],
            selectedInfluencer: [],
            type: "",
            selectedProfile: {
                "linkedin": false,
                "instagram": false,
                "blog": false,
                "twitter": false,
                "facebook": false,
                "tiktok": false,
                "youtube": false,
            }
        }
        this.addInfluencer = this.addInfluencer.bind(this);
        this.removeInfluencer = this.removeInfluencer.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true,
        });
        let url = Global.API.INFLUENCER_LIST;
        let data = {
            search: "",
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        if (res.status === "success") {
            this.setState({
                loading: false,
                list: res.list,
            });
        } else {
            this.setState({
                loading: false,
                list: [],
            });
        }

    }

    addToPraposel() {

        console.log(this.state);

        if (this.state.type === "") {
            alert("Please select type");
            return;
        }

        if (this.state.selectedInfluencer.length === 0) {
            alert("Please select atleat one influencer");
            return;
        }

        this.props.hideModel(this.state.selectedInfluencer, this.state.type, this.state.selectedProfile);
    }

    addInfluencer(influencer) {
        this.state.selectedInfluencer.push(influencer);
        console.log(this.state.selectedInfluencer);
    }

    removeInfluencer(id) {
        let newInfluencer = [];
        this.state.selectedInfluencer.map((influencer, index) => {
            if (influencer.id !== id) {
                newInfluencer.push(influencer);
            }
        });
        this.state.selectedInfluencer = newInfluencer;
        console.log(this.state.selectedInfluencer);
    }

    render() {

        const INFLUENCER_LIST = this.state.list;

        return (
            <div className="main_bock">
                <div className="main_container" style={{ padding: 0 }}>
                    <TopBarBlock showTopLogo={true} modelClose={true} {...this.props}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ background: '#F5F5F5', display: 'flex', padding: '0 15px', borderRadius: '3px' }}>
                                <img style={{ width: '16px' }} src={searchIcon} alt="" />
                                <input placeholder="Search Influencer" style={{ border: 'none', background: 'none', padding: '8px', width: '300px' }} type="text" />
                            </div>
                            <div>
                                <button
                                    onClick={() => this.setState({ dataTypeModel: true })}
                                    style={{ margin: '0 10px' }} className="btn btn-blue">
                                    Add to Proposal
                                </button>
                            </div>
                        </div>
                    </TopBarBlock>
                    <div className="inner_block">

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
                                <>
                                    <InfluencerFilter />
                                    {
                                        INFLUENCER_LIST.length === 0 ?
                                            <p style={{ padding: 20 }}>NO DATA</p>
                                            :
                                            INFLUENCER_LIST.map((item, index) => {
                                                return (
                                                    <InfluencerRow
                                                        addInfluencer={this.addInfluencer}
                                                        removeInfluencer={this.removeInfluencer}
                                                        showCheckBox={true} item={item} key={index} />
                                                )
                                            })
                                    }
                                </>
                        }


                        {/* <div style={{ marginBottom: 30 }} className="">
                            {
                                INFLUENCER_LIST.map((item, index) => {
                                    return (
                                        <InfluencerRow item={item} key={index} />
                                    )
                                })
                            }
                        </div> */}
                    </div>
                </div>

                <Modal
                    className={'data_type_model'}
                    style={{ background: 'rgba(0, 0, 0, 0.7)', }}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.dataTypeModel}>
                    <div className={'px-4 py-4'}>
                        <p className={'font-weight-bold'}>Choose Data Type</p>
                        <div className={'mt-1'}>
                            <p>
                                <Form.Check
                                    className={''}
                                    custom
                                    name={'type'}
                                    label="Create Influencer details"
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        if (checked) {
                                            this.state.type = "detail";
                                        }
                                    }}
                                    id="type_detail"
                                    type={'radio'} />
                            </p>
                            <p>
                                <Form.Check
                                    className={''}
                                    custom
                                    name={'type'}
                                    label="Create Influencer Analysis"
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        if (checked) {
                                            this.state.type = "analysis";
                                        }
                                    }}
                                    id="type_analysis"
                                    type={'radio'} />
                            </p>
                        </div>
                        <hr />
                        <div>
                            <p className={'font-weight-bold'}>Select Profile</p>
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"linkedin"}
                                id={"linkedin"}
                                label={"Linkedin"}
                                onChange={(event) => {
                                    this.state.selectedProfile.linkedin = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"instagram"}
                                id={"instagram"}
                                label={"Instagram"}
                                onChange={(event) => {
                                    this.state.selectedProfile.instagram = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"blog"}
                                id={"blog"}
                                label={"Blog"}
                                onChange={(event) => {
                                    this.state.selectedProfile.blog = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"twitter"}
                                id={"twitter"}
                                label={"Twitter"}
                                onChange={(event) => {
                                    this.state.selectedProfile.twitter = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"facebook"}
                                id={"facebook"}
                                label={"Facebook"}
                                onChange={(event) => {
                                    this.state.selectedProfile.facebook = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"tiktok"}
                                id={"tiktok"}
                                label={"Tiktok"}
                                onChange={(event) => {
                                    this.state.selectedProfile.tiktok = event.target.checked;
                                }}
                                type={'checkbox'} />
                            <Form.Check
                                className={''}
                                custom
                                inline
                                style={{ fontSize: 12 }}
                                name={"youtube"}
                                id={"youtube"}
                                label={"Youtube"}
                                onChange={(event) => {
                                    this.state.selectedProfile.youtube = event.target.checked;
                                }}
                                type={'checkbox'} />
                        </div>

                        <div className={'text-right py-3'}>
                            <span className={'btn mx-2'} onClick={() => this.setState({ dataTypeModel: false })}>
                                Discard
                            </span>
                            <button onClick={() => this.addToPraposel()} className={'btn btn-blue px-3 mx-2'}>
                                Continue
                            </button>
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default AddInfluencer;

