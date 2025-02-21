import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoSearch } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { GiWaterRecycling } from "react-icons/gi";
import './section2.css'

export default function Section2() {






    return (
        <Container fluid='xl'>
            <Row>
                <Col className='mt-4'>
                    <div className="section2-line">
                        <p>Hotels</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={6}>
                    <div className="best-describ mt-2">
                        <div className="describ-icon">
                            <IoSearch />
                        </div>
                        <div className="best-describ-text">
                            <p>
                                Find the best-value hotel for your dates, search by price or preferences
                            </p>

                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6}>
                    <div className="best-describ">
                        <div className="describ-icon">
                            <IoMdPricetags />
                        </div>
                        <div className="best-describ-text">
                            <p>
                                Compare hotel deals across hundreds of providers, all in one place
                            </p>

                        </div>
                    </div>
                </Col>
                <Col md={4} >
                    <div className="best-describ">
                        <div className="describ-icon">
                            <GiWaterRecycling />
                        </div>
                        <div className="best-describ-text">
                            <p>
                                Look out for hotels with free cancellation or excellent ratings
                            </p>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='mt-5'>
                    <div className="discount-section">
                        <Row className='ms-sm-5 ms-2 flex-column discount-content'>
                            <Col sm={6} md={5}>
                                <div className="discount-content">
                                    <h1>Save on your next hotel booking</h1>
                                </div>
                            </Col>
                            <Col sm={6} md={5}>
                                <div className="discount-sub">
                                    <p>We’ve pulled together some top hotel deals, so you can find an amazing room at an even better price.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="discount-btn">
                                    <button>See hotel deals</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
