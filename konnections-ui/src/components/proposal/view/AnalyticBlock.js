import React, { Component } from 'react'
import CanvasJSReact from '../../../assets/css/canvasjs.react';
import { Row, Col } from 'react-bootstrap';
import pie_chart from '../../../assets/icons/pie-chart.svg';

export default class AnalyticBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            influencers: [],
        }
    }

    componentDidMount() {
        let influencer = this.props.influencers;
        this.setState({
            influencers: influencer,
        });
    }


    render() {

        if (this.state.influencers.length === 0) {
            return null;
        }

        var CanvasJSChart = CanvasJSReact.CanvasJSChart;

        return (
            <div>

                {
                    this.state.influencers.map((inf, index) => {

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
                            <div key={index}>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0px' }} >
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>
                                            {detailRow.avgViews === "" ? "N/A" : detailRow.avgViews}
                                        </h4>
                                        <p className={'analysis-small-widget-title'}>Avg. Likes</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>
                                            {detailRow.avgComments === "" ? "N/A" : detailRow.avgComments}
                                        </h4>
                                        <p className={'analysis-small-widget-title'}>Avg. Comments</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>
                                            {detailRow.CPE === "" ? "N/A" : detailRow.CPE}
                                        </h4>
                                        <p className={'analysis-small-widget-title'}>CPE</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>
                                            {detailRow.suggestedPrice === "" ? "N/A" : detailRow.suggestedPrice}
                                        </h4>
                                        <p className={'analysis-small-widget-title'}>Suggested price</p>
                                    </div>
                                    <div className={'analysis-small-widget'}>
                                        <h4 className={'analysis-small-widget-heading'}>
                                            {detailRow.avgEngagementRate === "" ? "N/A" : detailRow.avgEngagementRate}
                                        </h4>
                                        <p className={'analysis-small-widget-title'}>Avg Engagement rate</p>
                                    </div>
                                </div>


                                <div>
                                    <Row>
                                        <Col lg={4}>
                                            <div className={"analytic-hori-bar-widgit"}>
                                                <p className={'analytic-widgit-heading'}>Social Media Distribution</p>
                                                <div style={{ width: '100%' }}>
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
