import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

export default function Footers() {
    return (
        <footer>
            somet
            <Container>
                <div className="footer-content pt-5 ">
                    <Row>
                        <Col md={3} className='col-6'>
                            <div className="col-content">
                                <div className="heading">
                                    <h6>Support</h6>
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
                        <Col md={3} className='col-6'>
                            <div className="col-content">
                                <div className="heading">
                                    <h6>Terms and settings</h6>
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
                        <Col md={3} className='col-6'>
                            <div className="col-content">
                                <div className="heading">
                                    <h6>Partners</h6>
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
                        <Col md={3} className='col-6'>
                            <div className="col-content">
                                <div className="heading">
                                    <h6>About</h6>
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
            </Container>
        </footer>
    )
}
