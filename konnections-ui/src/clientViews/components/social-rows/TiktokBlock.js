import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import sicialIcon from '../../../assets/icons/pie-chart.svg';

export default class TiktokBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailRows: [],
            Columns: this.props.Columns,
            title: "Tiktok", // Chnage this with correcr Social
        }
    }
    componentDidMount() {
        this.setState({
            detailRows: this.props.influencerDetail,
        });
    }

    render() {
        // this.state.detailRows = this.props.influencerDetail;
        if (this.state.detailRows.length === 0) {
            return null;
        }
        const social_id = "tiktok_row_"; // Chnage this with correcr Social

        return (
            <div>

                <div className={'influencer_details_header_block'}>
                    <div className={'d-flex align-items-center'}>
                        <img alt="" style={{}} src={sicialIcon} />
                        <p style={{ margin: '0px 20px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>
                            {this.state.title}
                        </p>
                    </div>
                </div>

                <div className={'detail_table_block'}>
                    <Table className="detail_table" responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subscribers</th>
                                <th>Language</th>
                                {
                                    this.state.Columns.map((item, i) => {
                                        if (item.slug === "remark") {
                                            return null;
                                        }
                                        if (item.checked) {
                                            return (
                                                <th key={i}>{item.title}
                                                    <span style={{ display: 'block', fontSize: 10 }}>
                                                        {item.subTitle}
                                                    </span>
                                                </th>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.detailRows.map((influencerDetail, index) => {

                                    let influencer = influencerDetail.influencer;
                                    let detail = influencerDetail.detailRow;

                                    detail.name = influencer.name;
                                    detail.subscribers = "--";
                                    detail.language = "--";

                                    return (
                                        <React.Fragment key={index}>
                                            <tr id={social_id + "inf_detail_row_" + influencer.id + "_" + index}>
                                                <td>
                                                    {detail.name}
                                                    {
                                                        detail.remark !== "" &&
                                                        <div className={'py-4'}>
                                                            <p style={{ fontSize: 12, marginBottom: 10 }}>REMARKS</p>
                                                            <span style={{ width: 'auto', position: 'absolute', padding: "3px 10px", fontWeight: '600', border: '1px solid #cccccc' }}>
                                                                {detail.remark}
                                                            </span>
                                                        </div>
                                                    }
                                                </td>
                                                <td>{detail.subscribers}</td>
                                                <td>{detail.language}</td>
                                                {
                                                    this.state.Columns.map((item, i) => {
                                                        if (item.slug === "remark") {
                                                            return null;
                                                        }
                                                        if (item.checked) {
                                                            return (<td key={i}>{detail[item.slug]}</td>)
                                                        } else {
                                                            return null;
                                                        }
                                                    })
                                                }
                                                <td>
                                                    <button className={'btn btn-approve'}>
                                                        {"Approve"}
                                                    </button>
                                                    <button className={'btn btn-reject'}>
                                                        {"Reject"}
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }
}
