import React, { Component } from 'react'
import { Form, Table } from 'react-bootstrap';
import sicialIcon from '../../assets/icons/youtube.svg';
import edit from '../../assets/icons/edit-24px.svg';
import save from '../../assets/icons/save-24px.svg';
import deleteimg from '../../assets/icons/delete24.svg';


export default class YoutubeBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailRows: [],
            Columns: this.props.youtubeColumns, // Chnage this with correcr Social
            title: "Youtube", // Chnage this with correcr Social
        }
    }

    render() {
        this.state.detailRows = this.props.influencerDetail;
        if (this.state.detailRows.length === 0) {
            return null;
        }
        const social_id = "youtube_row_"; // Chnage this with correcr Social
        const ColumnsCheckBox = this.state.Columns.map((data, index) =>
            <div key={index} className={'data-item'}>
                <Form.Check
                    className={''}
                    custom
                    style={{ fontSize: 12 }}
                    name={social_id + index}
                    label={data.title + " " + data.subTitle}
                    id={social_id + index}
                    onChange={(event) => {
                        let Columns = [...this.state.Columns];
                        let item = {
                            ...Columns[index],
                            checked: event.target.checked,
                        }
                        Columns[index] = item;
                        this.setState({ Columns })
                        this.props.updateColumns(Columns);
                    }}
                    checked={this.state.Columns[index].checked}
                    type={'checkbox'} />
            </div>
        );

        return (
            <div>

                <div className={'my-4'}>
                    <p className={'data-p-tag'}>Data to be displayed</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {ColumnsCheckBox}
                    </div>
                </div>

                <div className={'influencer_details_header_block'}>
                    <div className={'d-flex align-items-center'}>
                        <img alt="" style={{}} src={sicialIcon} />
                        <p style={{ margin: '0px 20px', fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>
                            {this.state.title}
                        </p>
                    </div>
                    <div className={'d-flex align-items-center'} >
                        {/* <button
                            style={{ margin: '0 10px' }}
                            className="btn btn-blue px-4">
                            {"Edit"}
                        </button> */}
                        <span
                            onClick={() => {
                                let confirm = window.confirm("Are you sure? You want to remove all youtube rows");
                                if (confirm) {
                                    this.props.updateList([]);
                                }
                            }}
                            style={{ margin: '0 10px' }}
                            className="btn text-danger bg-white px-3">
                            {"Delete"}
                        </span>
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
                                                <td>{detail.name}</td>
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
                                                <td className={''}>
                                                    <div style={{ width: 60 }}>
                                                        <img data-id={social_id + "inf_detail_row_" + influencer.id + "_" + index}
                                                            className={"edit_influencer_detail_row"}
                                                            alt="" style={{ width: 20 }} src={edit} />
                                                        <span onClick={() => {
                                                            const newRows = this.state.detailRows.filter(ii => ii.influencer.id !== influencer.id);
                                                            this.props.updateList(newRows);
                                                        }} className={'mx-2'}>
                                                            <img alt="" style={{ width: 20 }} src={deleteimg} />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className={'d-none'} id={social_id + "inf_detail_row_" + influencer.id + "_" + index + "_edit"}>
                                                <td>
                                                    {detail.name}
                                                    {
                                                        this.state.Columns.map((item, i) => {
                                                            if (item.slug === "remark" && item.checked) {
                                                                return (
                                                                    <div key={i} className={'my-4'}>
                                                                        <p style={{ fontSize: 12, marginBottom: 10 }}>REMARKS</p>
                                                                        <input
                                                                            onChange={(event) => {
                                                                                let detailRows = [...this.state.detailRows];
                                                                                let detailRow = { ...detailRows[index] };
                                                                                detailRow.detailRow.remark = event.target.value;
                                                                                detailRows[index] = detailRow;
                                                                                this.setState({ detailRows: detailRows });
                                                                            }}
                                                                            style={{ width: '280%', maxWidth: 300, fontWeight: '600', border: '1px solid #cccccc' }} type="text"
                                                                            placeholder="Remark" value={detail.remark} />
                                                                    </div>
                                                                )
                                                            } else {
                                                                return null;
                                                            }
                                                        })

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
                                                            return (
                                                                <td key={i}>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            let detailRows = [...this.state.detailRows];
                                                                            let detailRow = { ...detailRows[index] };
                                                                            detailRow.detailRow[item.slug] = event.target.value;
                                                                            detailRows[index] = detailRow;
                                                                            this.setState({ detailRows });
                                                                        }}
                                                                        className={'table-input'} type="text"
                                                                        placeholder={item.title + " " + item.subTitle} value={detail[item.slug]} />
                                                                </td>
                                                            )
                                                        } else {
                                                            return null;
                                                        }
                                                    })
                                                }
                                                <td className={''}>
                                                    <div style={{ width: 60 }}>
                                                        <img data-id={social_id + "inf_detail_row_" + influencer.id + "_" + index}
                                                            className={"edit_influencer_detail_row"} alt="" style={{ width: 15 }} src={save} />
                                                    </div>
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
