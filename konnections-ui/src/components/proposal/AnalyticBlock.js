import React, { Component } from 'react'
import INFLUENCER_DATA from '../../data/INFLUENCER_DATA';
import { Form, Row, Col } from 'react-bootstrap';
import pie_chart from '../../assets/icons/pie-chart.svg';
import CanvasJSReact from '../../assets/css/canvasjs.react';

export default class AnalyticBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            influencers: [],
        }
    }


    render() {

        this.state.influencers = this.props.influencers;
        if (this.state.influencers.length === 0) {
            return null;
        }


        var CanvasJS = CanvasJSReact.CanvasJS;
        var CanvasJSChart = CanvasJSReact.CanvasJSChart;

        const CheckBox = INFLUENCER_DATA.map((item, index) =>
            <p key={index} className={'data-item'}>
                <Form.Check
                    className={''}
                    custom
                    checked
                    style={{ fontSize: 12 }}
                    name={item.title}
                    label={item.title}
                    id={item.title}
                    type={'checkbox'} />
            </p>
        )

        return (
            <div className={'mt-4'}>
                {/* <div className={'my-4'}>
                    <p className={'data-p-tag'}>Data to be displayed</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {CheckBox}
                    </div>
                </div> */}
                <div className={'influencer_details_header_block'}>
                    <div className={'d-flex align-items-center'}>
                        <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600', margin: 0, }}>Analysis</p>
                    </div>
                    <div className={'d-flex align-items-center'} >
                        {/* <button
                                style={{ margin: '0 10px' }}
                                className="btn btn-blue px-4">
                                {"Edit"}
                            </button> */}
                        <span
                            onClick={() => {
                                alert("under work");
                            }}
                            style={{ margin: '0 10px' }}
                            className="btn text-danger bg-white px-3">
                            {"Delete"}
                        </span>
                    </div>
                </div>

                {
                    this.state.influencers.map((inf, index) => {

                        let profile = inf.profile;
                        let influencer = inf.influencer;
                        let detailRow = inf.detailRow;

                        const options = {
                            animationEnabled: true,
                            data: [{
                                type: "doughnut",
                                showInLegend: true,
                                // indexLabel: "{name}: {y}",
                                yValueFormatString: "#,###'%'",
                                radius: "100%",
                                innerRadius: "80%",  //change the innerRadius here.
                                dataPoints: [
                                    { name: "Youtube", y: detailRow.youtube },
                                    { name: "Twitter", y: detailRow.twitter },
                                    { name: "Facebook", y: detailRow.facebook },
                                    { name: "Linkedin", y: detailRow.linkedin },
                                    { name: "Blog", y: detailRow.blog },
                                    { name: "Tiktok", y: detailRow.tiktok },
                                ]
                            }]
                        }

                        return (
                            <div key={index} className={'analysis_main_container'}>

                                <Row>
                                    <Col lg={4}>
                                        <div className={'d-flex align-items-center'}>
                                            <img alt="" style={{ width: 25 }} src={pie_chart} />
                                            <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600', margin: '0px 15px' }}>
                                                {influencer.name}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <p style={{ fontSize: 12, opacity: '84%', color: '#1492E6', fontWeight: '600', margin: '0px 15px' }}>
                                                {"15.6M Subscribers"}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <p style={{ fontSize: 12, opacity: '84%', color: '#1492E6', fontWeight: '600', margin: '0px 15px' }}>
                                                {"https://www.youtube.com/bbkivines"}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} className={'my-4 mt-5'}>
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>Avg. Likes</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.avgViews = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Enter Avg. Linkes" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>Avg. Comments</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.avgComments = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Enter Avg. Comments" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>CPE</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.CPE = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Enter CPE" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>Suggested price</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.suggestedPrice = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Suggested price" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box  border-bottom">
                                            <label>Avg Engagement rate</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.avgEngagementRate = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Avg Engagement rate" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Form.Check
                                        className={''}
                                        custom
                                        style={{ fontSize: 12 }}
                                        name='smd'
                                        label={'Social Media Distribution'}
                                        onChange={(event) => {
                                            let influencers = [...this.state.influencers];
                                            let newInfluencer = { ...influencers[index] };
                                            newInfluencer.detailRow.socialMediaDistribution = event.target.checked;
                                            influencers[index] = newInfluencer;
                                            this.setState({ influencers: influencers });
                                        }}
                                        checked={detailRow.socialMediaDistribution}
                                        id={'smd'}
                                        type={'checkbox'} />
                                </div>
                                <div className={'my-4'}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Youtube</label>
                                                <input
                                                    onChange={(event) => {
                                                        let influencers = [...this.state.influencers];
                                                        let newInfluencer = { ...influencers[index] };
                                                        newInfluencer.detailRow.youtube = event.target.value;
                                                        influencers[index] = newInfluencer;
                                                        this.setState({ influencers: influencers });
                                                    }}
                                                    type="number" placeholder="Enter youtube" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Twitter</label>
                                                <input
                                                    onChange={(event) => {
                                                        let influencers = [...this.state.influencers];
                                                        let newInfluencer = { ...influencers[index] };
                                                        newInfluencer.detailRow.twitter = event.target.value;
                                                        influencers[index] = newInfluencer;
                                                        this.setState({ influencers: influencers });
                                                    }}
                                                    type="number" placeholder="Enter twitter" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Facebook</label>
                                                <input
                                                    onChange={(event) => {
                                                        let influencers = [...this.state.influencers];
                                                        let newInfluencer = { ...influencers[index] };
                                                        newInfluencer.detailRow.facebook = event.target.value;
                                                        influencers[index] = newInfluencer;
                                                        this.setState({ influencers: influencers });
                                                    }}
                                                    type="number" placeholder="Enter facebook" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Linkedin</label>
                                                <input
                                                    onChange={(event) => {
                                                        let influencers = [...this.state.influencers];
                                                        let newInfluencer = { ...influencers[index] };
                                                        newInfluencer.detailRow.linkedin = event.target.value;
                                                        influencers[index] = newInfluencer;
                                                        this.setState({ influencers: influencers });
                                                    }}
                                                    type="number" placeholder="Enter linkedin" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="input_box  border-bottom">
                                                <label>Blog</label>
                                                <input
                                                    onChange={(event) => {
                                                        let influencers = [...this.state.influencers];
                                                        let newInfluencer = { ...influencers[index] };
                                                        newInfluencer.detailRow.blog = event.target.value;
                                                        influencers[index] = newInfluencer;
                                                        this.setState({ influencers: influencers });
                                                    }}
                                                    type="number" placeholder="Enter blog" />
                                            </div>
                                        </div>
                                    </div>
                                    <Row>
                                        <Col lg={3}>
                                            <div>
                                                <div style={{ width: 150 }} className="input_box border-bottom">
                                                    <label>Tiktok</label>
                                                    <input
                                                        onChange={(event) => {
                                                            let influencers = [...this.state.influencers];
                                                            let newInfluencer = { ...influencers[index] };
                                                            newInfluencer.detailRow.tiktok = event.target.value;
                                                            influencers[index] = newInfluencer;
                                                            this.setState({ influencers: influencers });
                                                        }}
                                                        type="number" placeholder="Enter tiktok" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div>
                                    <Form.Check
                                        className={''}
                                        custom
                                        style={{ fontSize: 12 }}
                                        name='gd'
                                        label={'Gender Distribution'}
                                        id={'gd'}
                                        onChange={(event) => {
                                            let influencers = [...this.state.influencers];
                                            let newInfluencer = { ...influencers[index] };
                                            newInfluencer.detailRow.gender = event.target.checked;
                                            influencers[index] = newInfluencer;
                                            this.setState({ influencers: influencers });
                                        }}
                                        checked={detailRow.gender}
                                        type={'checkbox'} />
                                </div>
                                <div style={{
                                    display: 'flex',
                                }} className={'my-4'}>
                                    <div style={{ marginRight: "70px" }}>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Male ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.male = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Enter male" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Female ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.female = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Enter female" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Form.Check
                                        className={''}
                                        custom
                                        style={{ fontSize: 12 }}
                                        name='Ad'
                                        label={'Age Distribution'}
                                        id={'Ad'}
                                        onChange={(event) => {
                                            let influencers = [...this.state.influencers];
                                            let newInfluencer = { ...influencers[index] };
                                            newInfluencer.detailRow.age = event.target.checked;
                                            influencers[index] = newInfluencer;
                                            this.setState({ influencers: influencers });
                                        }}
                                        checked={detailRow.age}
                                        type={'checkbox'} />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                    }} className={'my-4'}>
                                    <div style={{ marginRight: "70px" }}>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Age 0-17 ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.age0017 = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Age 0-17 ( in %)" />
                                        </div>
                                    </div>
                                    <div style={{ marginRight: "70px" }}>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Age 18-24 ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.age1824 = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Age 18-24 ( in %)" />
                                        </div>
                                    </div>
                                    <div style={{ marginRight: "70px" }}>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Age 25-34 ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.age2534 = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Age 25-34 ( in %)" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input_box small-width-input border-bottom">
                                            <label>Age 35-54 ( in %)</label>
                                            <input
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.age3554 = event.target.value;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                type="number" placeholder="Age 35-54 ( in %)" />
                                        </div>
                                    </div>
                                </div>

                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <Form.Check
                                                className={''}
                                                custom
                                                style={{ fontSize: 12 }}
                                                name='cwd'
                                                label={'City wise Distribution'}
                                                id={'cwd'}
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.cityWise = event.target.checked;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                checked={detailRow.cityWise}
                                                type={'checkbox'} />
                                            {
                                                detailRow.cities.map((item, i) => {
                                                    return (
                                                        <div key={i} className={'d-flex my-4'}>
                                                            <div>
                                                                <div>
                                                                    <div className="input_box small-width-input border-bottom mb-0">
                                                                        <input
                                                                            onChange={(event) => {
                                                                                let influencers = [...this.state.influencers];
                                                                                let newInfluencer = { ...influencers[index] };
                                                                                newInfluencer.detailRow.cities[i].city = event.target.value;
                                                                                influencers[index] = newInfluencer;
                                                                                this.setState({ influencers: influencers });
                                                                            }}
                                                                            style={{ padding: 12 }}
                                                                            type="text"
                                                                            placeholder="City Name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            let influencers = [...this.state.influencers];
                                                                            let newInfluencer = { ...influencers[index] };
                                                                            newInfluencer.detailRow.cities[i].percentage = event.target.value;
                                                                            influencers[index] = newInfluencer;
                                                                            this.setState({ influencers: influencers });
                                                                        }}
                                                                        className="other-input" type="number"
                                                                        placeholder="Amount in %" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <Form.Check
                                                className={''}
                                                custom
                                                style={{ fontSize: 12 }}
                                                name='CWd'
                                                label={'Country wise Distribution'}
                                                id={'CWd'}
                                                onChange={(event) => {
                                                    let influencers = [...this.state.influencers];
                                                    let newInfluencer = { ...influencers[index] };
                                                    newInfluencer.detailRow.countryWise = event.target.checked;
                                                    influencers[index] = newInfluencer;
                                                    this.setState({ influencers: influencers });
                                                }}
                                                checked={detailRow.countryWise}
                                                type={'checkbox'} />
                                            {
                                                detailRow.countries.map((item, i) => {
                                                    return (
                                                        <div key={i} className={'d-flex my-4'}>
                                                            <div>
                                                                <div>
                                                                    <div className="input_box small-width-input border-bottom mb-0">
                                                                        <input
                                                                            onChange={(event) => {
                                                                                let influencers = [...this.state.influencers];
                                                                                let newInfluencer = { ...influencers[index] };
                                                                                newInfluencer.detailRow.countries[i].country = event.target.value;
                                                                                influencers[index] = newInfluencer;
                                                                                this.setState({ influencers: influencers });
                                                                            }}
                                                                            style={{ padding: 12 }}
                                                                            type="text"
                                                                            placeholder="Country Name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <input
                                                                        onChange={(event) => {
                                                                            let influencers = [...this.state.influencers];
                                                                            let newInfluencer = { ...influencers[index] };
                                                                            newInfluencer.detailRow.countries[i].percentage = event.target.value;
                                                                            influencers[index] = newInfluencer;
                                                                            this.setState({ influencers: influencers });
                                                                        }}
                                                                        className="other-input" type="number"
                                                                        placeholder="Amount in %" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </Col>
                                </Row>

                                <div>
                                    <Row>
                                        <Col lg={4}>
                                            <div className={"analytic-hori-bar-widgit"}>
                                                <p className={'analytic-widgit-heading'}>Social Media Distribution</p>
                                                <div style={{}}>
                                                    <CanvasJSChart containerProps={{
                                                        height: 150,
                                                        width: 150,
                                                        textAlign: "center",
                                                    }} options={options}
                                                    /* onRef = {ref => this.chart = ref} */
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Gender Distribution</p>
                                                <div className={'my-5'}>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>
                                                            {detailRow.male + "%"}
                                                        </p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: detailRow.male + "%", background: '#448AFF' }} />
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>Male</p>
                                                    </div>
                                                    <div className={'analytic-ber-block'}>
                                                        <p className={'analytic-widgit-text'}>
                                                            {detailRow.female + "%"}
                                                        </p>
                                                        <div className={'analytic-bar'}>
                                                            <div className={'analytic-bar-progress'} style={{ width: detailRow.female + "%", background: '#FF8A80' }} />
                                                        </div>
                                                        <p className={'analytic-widgit-text'}>Female</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Age Distribution</p>

                                                <div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>
                                                            {detailRow.age0017 + "%"}
                                                        </p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'}
                                                                style={{ height: detailRow.age0017 + "%" }} />
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>0-17</p>
                                                    </div>

                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>
                                                            {detailRow.age1824 + "%"}
                                                        </p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'}
                                                                style={{ height: detailRow.age1824 + "%" }} />
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>18-24</p>
                                                    </div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>
                                                            {detailRow.age2534 + "%"}
                                                        </p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'}
                                                                style={{ height: detailRow.age2534 + "%" }} />
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>25-34</p>
                                                    </div>
                                                    <div className={'analytic-verticle-bar-block'}>
                                                        <p className={'analytic-verticle-widgit-text'}>
                                                            {detailRow.age3554 + "%"}
                                                        </p>
                                                        <div className={'analytic-verticle-bar'}>
                                                            <div className={'analytic-verticle-bar-progress'}
                                                                style={{ height: detailRow.age3554 + "%" }} />
                                                        </div>
                                                        <p className={'analytic-verticle-widgit-text'}>35-54</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className={'my-4'}>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>City wise Distribution</p>

                                                <div className={'my-2'}>
                                                    {
                                                        detailRow.cities.map((item, i) => {
                                                            return (
                                                                <div key={i} className={'analytic-ber-block'}>
                                                                    <p className={'analytic-widgit-text'}>
                                                                        {item.city}
                                                                    </p>
                                                                    <div className={'analytic-bar'}>
                                                                        <div className={'analytic-bar-progress'}
                                                                            style={{ width: item.percentage + "%" }}></div>
                                                                    </div>
                                                                    <p className={'analytic-widgit-text'}>
                                                                        {item.percentage}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={'analytic-hori-bar-widgit'}>
                                                <p className={'analytic-widgit-heading'}>Country wise Distribution</p>
                                                <div className={'my-2'}>
                                                    {
                                                        detailRow.countries.map((item, i) => {
                                                            return (
                                                                <div key={i} className={'analytic-ber-block'}>
                                                                    <p className={'analytic-widgit-text'}>
                                                                        {item.country}
                                                                    </p>
                                                                    <div className={'analytic-bar'}>
                                                                        <div className={'analytic-bar-progress'}
                                                                            style={{ width: item.percentage + "%" }}></div>
                                                                    </div>
                                                                    <p className={'analytic-widgit-text'}>
                                                                        {item.percentage + "%"}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        )
    }
}
