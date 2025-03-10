import React from 'react'
import './section5.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillBuildingsFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { IoBed } from "react-icons/io5";
import DatePicker from '../../Hotellist/datepicker/ReactDatePicker';

export default function Section5() {
  return (
    <Container fluid='xl' className='mt-5'>
      <div className="facts mt-2">
        <Row>
          <Col>
            <div className="heading">
              <h2>Fast facts</h2>
              <p>Sleep easy, armed with the stuff that's good to know before you go.</p>
            </div>
          </Col>
        </Row>
        <div className="info mt-4 ms-3">
          <Row>
            <Col sm={4} className='col-6'>
              <div className="info-content">
                <div className="info-icon">
                  <BsFillBuildingsFill />
                </div>
                <div className="info-lines">
                  Hotel brands to choose from
                </div>
                <div className="info-numbers">
                  <p>60 +</p>
                </div>

              </div>
            </Col>
            <Col sm={4} className='col-6'>
              <div className="info-content">
                <div className="info-icon">
                  <TiLocation />
                </div>
                <div className="info-lines">
                  Hotel destinations to explore
                </div>
                <div className="info-numbers">
                  <p>1500 +</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="info-content">
                <div className="info-icon">
                  <IoBed />
                </div>
                <div className="info-lines">
                  Hotels available worldwide
                </div>
                <div className="info-numbers">
                  <p>2.1 million</p>
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="world-img-content my-5">
        <Row className='align-items-center justify-content-center'>
          <Col md={6}>
            <div className="world-img-heading">
              <h3 className='text-center'>We search hotel and travel booking sites across the web to find the world's lowest prices</h3>
            </div>
          </Col>
          <Col md={4}  className='offset-md-1 col-8 mt-4 mt-md-0'>
          <div className="world-img text-center">
            <img src="../images/world-map.webp" alt="" className='img-fluid'/>
          </div>
          </Col>
        </Row>
      </div>
      <div className="facts-different mt-5">
        <Row>
          <Col md={4}>
            <div className="inner-info">
              <div className="info-img">
                <img src='../images/facts1.svg' className='img-fluid'></img>
              </div>
              <div className="hot-deals text-center">
                <div className="hot-deals-head">
                  <h4>Great hotel deals</h4>
                  <p>We search for deals with the world’s leading hotels, and share our findings with you.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="inner-info">
              <div className="info-img">
                <img src='../images/facts2.svg' className='img-fluid'></img>
              </div>
              <div className="hot-deals text-center">
                <div className="hot-deals-head">
                  <h4>Up-to-date pricing</h4>
                  <p>We always show you the most recent pricing overview we can find, so you know exactly what to expect.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="inner-info">
              <div className="info-img">
                <img src='../images/facts3.svg' className='img-fluid'></img>
              </div>
              <div className="hot-deals text-center">
                <div className="hot-deals-head">
                  <h4>Precise searching</h4>
                  <p>Find hotels with swimming pools, free cancellation, and flexible booking. Or whatever matters most to you.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
