import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ManageProposalBody extends Component {


    render() {

        let item = this.props.item;

        return (
            <div
                style={{
                    background: '#FEFEFF',
                    marginBottom: '2rem',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 4px 0px',
                    borderRadius: '2px',
                }}>
                <div
                    style={{}}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: '15px 20px'
                        }}>
                        <div style={{}}>
                            <p
                                style={{
                                    color: '#000000',
                                    opacity: '0.74',
                                    margin: '0 0 10px',
                                    fontWeight: '500',
                                }}>
                                {item.title}
                            </p>
                            <p style={{ color: '#000000', fontSize: '0.85rem', opacity: '0.54', margin: '0 0 10px' }}>
                                Campaign Type : <strong>Lifestyle</strong>
                            </p>
                            <p style={{ color: '#000000', fontSize: '0.85rem', opacity: '0.54', margin: '0 0 0px' }}>
                                Campiagn platform : <strong>You Tube</strong>
                            </p>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem' }}>
                            <p
                                style={{
                                    color: 'rgb(150, 150, 150)',
                                    margin: '0 0 5px'
                                }}>
                                Deliverables :
                            </p>
                            <p style={{ color: '#000000' }}>
                                <span style={{ fontWeight: '700' }}>1 YT + 3 Stories</span>
                            </p>
                        </div>
                    </div>
                    <hr style={{ color: '#E2E2E2', marginTop: '0px', marginBottom: '0px' }}></hr>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: '0.8rem',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: '5px 20px',
                            alignItems: 'center',
                        }}>
                        <div
                            style={{
                                color: 'rgb(109, 109, 109)',
                                fontSize: '0.7rem',
                            }}>
                            <span
                                style={{
                                    display: 'inline-block',
                                    marginRight: 20
                                }}>
                                <span style={{ fontWeight: '500' }}>Client Name</span> : KKO
                            </span>
                            <span
                                style={{
                                    display: 'inline-block',
                                    color: 'rgb(109, 109, 109)',
                                }}>
                                <span style={{ fontWeight: '500' }}>Approved date</span> : 29-02-2020
                            </span>
                        </div>
                        <Link
                            className={'btn'}
                            style={{
                                color: '#6238F2',
                                background: 'white',
                                border: '1px solid #6238F2',
                                borderRadius: '3px',
                                padding: '3px 10px',
                                fontSize: '0.7rem',
                                fontWeight: '500',
                            }}
                            to="/view-proposal">
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageProposalBody;