import React, { Component } from 'react';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import '../Jquery.js';
import { Multiselect } from 'multiselect-react-dropdown';

class InfluencerFilter extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            options: [{ city: 'Pune', id: 1 }, { city: 'Indore', id: 2 }]
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onSelect(selectedList, selectedItem) {

    }

    onRemove(selectedList, removedItem) {

    }

    formSubmit(e) {
        e.preventDefault();
        this.setState({ showPopup: false });
    }

    render() {
        return (
            <div className='filter_app'>
                <div>
                    Filter <span style={{ fontSize: '1.3rem' }} className={'btn p-0 m-0'}><i className="fa fa-sliders" aria-hidden="true" onClick={this.togglePopup.bind(this)}></i></span>
                </div>
                <Modal
                    className={'filter_model'}
                    style={{ background: 'rgba(0, 0, 0, 0.7)', }}
                    show={this.state.showPopup}>

                    <form onSubmit={this.formSubmit} ref={form => this.filter_form = form}>
                        <div className={'px-4 py-3'}>

                            <div className={'pb-2'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className={'font-weight-bold'}>Filters</span>
                                <span
                                    onClick={() => this.filter_form.reset()}
                                    className={'text-danger btn'}>
                                    Reset All
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <div>
                                    <div className="input_box width-input border-bottom m-0">
                                        <label>Choose Platform</label>
                                        <select>
                                            <option>Youtube</option>
                                            <option>Twitter</option>
                                            <option>Insta</option>
                                            <option>Facebook</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <Form.Check
                                        className={''}
                                        custom
                                        inline
                                        name={'type'}
                                        label="Male"
                                        id="type_male"
                                        type={'checkbox'} />
                                    <Form.Check
                                        className={''}
                                        custom
                                        inline
                                        name={'type'}
                                        label="Female"
                                        id="type_female"
                                        type={'checkbox'} />
                                    <Form.Check
                                        className={''}
                                        custom
                                        inline
                                        name={'type'}
                                        label="Couple"
                                        id="type_couple"
                                        type={'checkbox'} />
                                </div>
                            </div>

                            <div className={'py-4 ms-multiselect-container'}>
                                <Multiselect
                                    options={this.state.options}
                                    selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect}
                                    onRemove={this.onRemove}
                                    displayValue="city"
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

                            <div>
                                <div className="input_box border-bottom mb-4">
                                    <label>Choose Vendor</label>
                                    <select>
                                        <option>-- select --</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                                <div className="input_box border-bottom mb-4">
                                    <label>Choose Influencer Category..</label>
                                    <select>
                                        <option>-- select --</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                                <div className="input_box border-bottom mb-4">
                                    <label>Choose Influencer Type</label>
                                    <select>
                                        <option>-- select --</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                                <div className="input_box border-bottom mb-4">
                                    <label>Choose Select Languages..</label>
                                    <select>
                                        <option>-- select --</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>

                            <Container fluid className={'p-0'}>
                                <Row>
                                    <Col md={6}>
                                        <div>
                                            <div>
                                                <p style={{ fontWeight: '500', fontSize: '0.8rem' }} className={'mb-1'}>Followers</p>
                                                <Row>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Min</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Max</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div>
                                                <p style={{ fontWeight: '500', fontSize: '0.8rem' }} className={'mb-1'}>Post Cost</p>
                                                <Row>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Min</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Max</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <div>
                                                <p style={{ fontWeight: '500', fontSize: '0.8rem' }} className={'mb-1'}>Story Cost</p>
                                                <Row>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Min</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Max</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div>
                                                <p style={{ fontWeight: '500', fontSize: '0.8rem' }} className={'mb-1'}>Video Cost</p>
                                                <Row>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Min</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <div className="input_box border-bottom mb-4">
                                                            <label>Max</label>
                                                            <select>
                                                                <option>-- select --</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className={'text-right py-3'}>
                                <span className={'btn mx-2'} onClick={() => this.setState({ showPopup: false })}>
                                    Discard
                                </span>
                                <button className={'btn btn-blue px-3 mx-2'}>
                                    Apply Filter
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default InfluencerFilter;