import React, { Component } from 'react';
import styles from './CampaignRow.module.css';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import '../Jquery.js';
import { Link } from 'react-router-dom';


class CampaignRow extends Component {
    constructor() {
        super();
        this.state = {

        };
    }



    render() {
        return (
            <div className={styles.Campaigns_block}>
                <div>
                    <h4 className={styles.block_heading}>Campaign Title</h4>
                </div>
                <div>
                    <p className={styles.content_heading}>Campaign Type : <strong>Lifestyle</strong></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className={styles.content_heading}>Campaign Platform : <strong>Youtube</strong></p>
                    <p className={styles.content_heading}>Deliverables : <strong>1 YT Video + 3 Stories</strong></p>
                </div>
                <div>
                    <p className={styles.content_heading}>Campaign Budget : <strong>1,20000</strong></p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #00000038', padding: '10px 0px', }}>
                    <div style={{ display: 'flex', }}>
                        <p className={styles.content_heading}><strong>Campaign Date: </strong>13-09-2019</p>
                        <p style={{ marginLeft: 50 }} className={styles.content_heading}><strong>Client: </strong>KKO</p>
                    </div>
                    <div>
                        <Link
                            to="/manage-influencer"
                            style={{ margin: '0 5px', padding: '5px 15px', border: '1px solid' }} className="btn">View Details
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CampaignRow;