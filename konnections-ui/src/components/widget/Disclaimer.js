import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Desclaimer_data from '../../data/Desclaimer_data';
import { Form } from 'react-bootstrap';

class Disclaimer extends Component {


    render() {
        return (
            <div className={'my-4'}>
                <p style={{ fontSize: 14, opacity: '84%', color: '#262626', fontWeight: '600' }}>Disclaimer</p>
                <div>

                    {
                        Desclaimer_data.map((item, index) =>
                            <div key={index} className="d-flex align-items-center my-2">
                                <p className="m-0">
                                    <Form.Check
                                        className={''}
                                        custom
                                        style={{ fontSize: 12 }}
                                        name={item.title}
                                        id={item.title}
                                        label=" "
                                        type={'checkbox'} />
                                </p>
                                <p className="disclamer-content" >{item.title}</p>
                            </div>

                        )
                    }


                </div>
                <div className={'my-4'}>
                    <Link >
                        <p style={{ fontSize: 12, color: "#6238F2", fontWeight: 'bold' }}>+ Add New</p>
                    </Link>
                </div>
            </div>
        );


    }
}

export default Disclaimer;