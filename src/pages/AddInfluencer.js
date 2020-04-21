import React, { Component } from 'react';
import TopBarBlock from '../components/TopBarBlock';
import searchIcon from '../assets/icons/search.svg';
import InfluencerRow from '../components/InfluencerRow/InfluencerRow';
import INFLUENCER_LIST from '../data/INFLUENCER_LIST';
import InfluencerFilter from '../components/InfluencerFilter/InfluencerFilter';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class AddInfluencer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTypeModel: false,
        }
    }

    addToPraposel() {
        this.props.hideModel();
    }

    render() {
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
                        <InfluencerFilter />
                        <div style={{ marginBottom: 30 }} className="">
                            {
                                INFLUENCER_LIST.map((item, index) => {
                                    return (
                                        <InfluencerRow item={item} key={index} />
                                    )
                                })
                            }
                        </div>
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
                        <div className={'mt-5'}>
                            <p>
                                <Form.Check
                                    className={''}
                                    custom
                                    name={'type'}
                                    label="Create Influencer details"
                                    id="type_male"
                                    type={'radio'} />
                            </p>
                            <p>
                                <Form.Check
                                    className={''}
                                    custom
                                    name={'type'}
                                    label="Create Influencer Analysis"
                                    id="type_female"
                                    type={'radio'} />
                            </p>
                            <div className="input_box border-bottom mb-0 mt-4">
                                <label>Choose Influencer Category..</label>
                                <input type="text" placeholder={'Enter category name'} />
                            </div>
                            <p style={{ fontSize: '0.7rem' }} className={'text-secondary'}>e.g: category A, Couple, Male, Female etc</p>
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

