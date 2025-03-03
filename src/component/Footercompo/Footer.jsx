import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    return (
        <Container>
            <Footer>
                <div className="footer-content">
                    <Row>
                        <Col>
                            <div className="col-content">
                                <div className="heading">
                                    <h4>Support</h4>
                                </div>
                                <div className="footer-list-items">
                                    <ul>
                                        <li>Coronavirus (COVID-19) FAQs</li>
                                        <li>Manage your trips</li>
                                        <li>Contact Customer Service</li>
                                        <li>Safety resource centre</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-content">
                                <div className="heading">
                                    <h4>Discover</h4>
                                </div>
                                <div className="footer-list-items">
                                    <ul>
                                        <li>Genius loyalty programme</li>
                                        <li>Seasonal and holiday deals</li>
                                        <li>Travel articles</li>
                                        <li>Booking.com for Business</li>
                                        <li>Traveller Review Awards</li>
                                        <li>Car hire</li>
                                        <li>Flight finder</li>
                                        <li>Restaurant reservations</li>
                                        <li>Booking.com for Travel Agents</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-content">
                                <div className="heading">
                                    <h4>Terms and settings</h4>
                                </div>
                                <div className="footer-list-items">
                                    <ul>
                                        <li> Privacy & cookies</li>
                                        <li> Terms and conditions</li>
                                        <li> Grievance officer</li>
                                        <li> Modern Slavery Statement</li>
                                        <li> Human Rights Statement</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-content">
                                <div className="heading">
                                    <h4>Partners</h4>
                                </div>
                                <div className="footer-list-items">
                                    <ul>
                                        <li>Extranet login</li>
                                        <li>Partner help</li>
                                        <li>List your property</li>
                                        <li>Become an affiliate</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-content">
                                <div className="heading">
                                    <h4>About</h4>
                                </div>
                                <div className="footer-list-items">
                                    <ul>
                                        <li>About Booking.com</li>
                                        <li>How we work</li>
                                        <li>Sustainability</li>
                                        <li>Press centre</li>
                                        <li>Careers</li>
                                        <li>Investor relations</li>
                                        <li>Corporate contact</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Footer>
        </Container>
    )
}
