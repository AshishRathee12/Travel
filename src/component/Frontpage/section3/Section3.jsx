import React from 'react';
import './section3.css'
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Section3() {
    return (
        <Container fluid="xl" className='my-4'>
            <div className="trending-places">
                <div className="trending-heading">
                    <h4>Trending Destination</h4>
                    <p>Most popular choices for travelers from India</p>
                </div>
                <Row>
                    <Col sm={6}>
                        <Link to={"hotelList/New Delhi/177865"} as={NavLink}>
                            <div className="trending-place-img">
                                <div className="img">
                                    <img src='../images/trending-1.jpg' alt="" className='img-fluid' />
                                </div>
                                <div className="trending-place-name">
                                    <p className='location'>Delhi</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col sm={6}>
                        <Link to={"hotelList/New Delhi/622"} as={NavLink}>
                            <div className="trending-place-img">
                                <div className="img">
                                    <img src='../images/trending-2.jpg' alt="" className='img-fluid' />
                                </div>
                                <div className="trending-place-name">
                                    <p className='location'>Bengaluru</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col md={4} className='small-suggest-trend'>
                        <Link to={"hotelList/Jaipur/1669"} as={NavLink}>
                            <div className="trending-place-img">
                                <div className="img">
                                    <img src='../images/trending-3.jpg' alt="" className='img-fluid' />
                                </div>
                                <div className="trending-place-name">
                                    <p className='location'>Jaipur</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4} className='small-suggest-trend'>
                        <Link to={"hotelList/Jaipur/313"} as={NavLink}>
                            <div className="trending-place-img">
                                <div className="img">
                                    <img src='../images/trending-5.jpg' alt="" className='img-fluid' />
                                </div>
                                <div className="trending-place-name">
                                    <p className='location'>Agra</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4} className='small-suggest-trend'>
                        <Link to={"hotelList/Jaipur/3210"} as={NavLink}>
                            <div className="trending-place-img">
                                <div className="img">
                                    <img src='../images/trending-4.jpg' alt="" className='img-fluid' />
                                </div>
                                <div className="trending-place-name">
                                    <p className='location'>Shimla</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container >
    )
}
