import React, { Component } from 'react'
import Desclaimer_data from '../../data/Desclaimer_data';
import { Form } from 'react-bootstrap';
import Global from '../../data/Global';
import { requestAPI } from '../../functions/load';

class Disclaimer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            disclaimers: [],
            addDisclaimer: false,
            btnText: "ADD DISCLAIMER",
            btnState: "",
            addMessage: "",
            disclaimerText: "",
        }
    }

    componentDidMount() {
        this.loadData()
    }

    refreshDisclaimer() {
        this.loadData();
    }

    async loadData() {
        let url = Global.API.GET_DISCLAIMER;
        let data = this.state;
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        if (res.status === 'success') {
            let list = [];
            res.list.forEach((item, index) => {
                const disc = { disclaimer: item, checked: false, }
                list.push(disc);
            });
            this.setState({
                disclaimers: list,
            });
            this.props.disclaimersChange(list);
        } else {
            alert(res.message);
        }

    }

    changeDisclaimer(index, checked) {
        let dis = [...this.state.disclaimers];
        let changeItem = dis[index];
        changeItem.checked = checked;
        dis[index] = changeItem;
        // this.setState({
        //     disclaimers: dis,
        // })
        this.props.disclaimersChange(dis);
    }

    async addDisclaimer() {
        this.setState({
            btnText: "Please wait...",
            btnState: "disabled",
            addMessage: "",
        });
        let url = Global.API.ADD_DISCLAIMER;
        let data = {
            disclaimer: this.state.disclaimerText,
        }
        let response = await requestAPI(url, "post", data);
        let res = await response.json();
        console.log(res);
        if (res.status === "success") {

            const newDisclaimer = {
                disclaimer: {
                    id: res.id,
                    detail: this.state.disclaimerText,
                }, checked: false,
            }
            let dis = [...this.state.disclaimers];
            dis.push(newDisclaimer);
            this.props.disclaimersChange(dis);
            this.setState({
                addDisclaimer: false,
                btnText: "ADD DISCLAIMER",
                btnState: "",
                addMessage: "",
                disclaimerText: "",
                disclaimers: dis,
            })
        } else {
            this.setState({
                btnText: "ADD DISCLAIMER",
                btnState: "",
                addMessage: res.message,
            })
        }

    }

    render() {

        // let disclaimers = this.props.disclaimers;

        return (
            <div className={'my-4'}>
                <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>
                    {"Disclaimer"}
                </p>
                <div>
                    {
                        this.state.disclaimers.map((item, index) => {
                            let disclaimer = item.disclaimer;
                            return (
                                <div key={index} className="d-flex align-items-center my-2">
                                    <div className="m-0">
                                        <Form.Check
                                            className={''}
                                            custom
                                            style={{ fontSize: 12 }}
                                            name={"disclaimer_" + disclaimer.id}
                                            id={"disclaimer_" + disclaimer.id}
                                            label={disclaimer.detail}
                                            onChange={(event) => this.changeDisclaimer(index, event.target.checked)}
                                            type={'checkbox'} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.state.addDisclaimer &&
                    <div className={'mt-3'}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                value={this.state.disclaimerText}
                                onChange={(event) => {
                                    this.setState({
                                        disclaimerText: event.target.value
                                    })
                                }}
                                type="text" placeholder="Enter Disclaimer" />
                        </Form.Group>
                        <p>{this.state.addMessage}</p>
                        <button
                            onClick={() => this.addDisclaimer()}
                            disabled={this.state.btnState} className={"btn btn-blue"} type={'button'}>
                            {this.state.btnText}
                        </button>
                    </div>
                }
                <div className={'my-4'}>
                    <span className={'btn'}
                        onClick={() => this.setState({ addDisclaimer: true })}
                        style={{ fontSize: 12, color: "#6238F2", fontWeight: 'bold' }}>
                        {"+ Add New"}
                    </span>
                </div>
            </div>
        );


    }
}

export default Disclaimer;