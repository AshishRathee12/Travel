import React from 'react'
import './section1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function Section1() {

const searchhotel=(e)=>{
e.preventDefault();
}



  return (
    <div className='front-image'>
      <div className="middle-content">
        <Container className=' '>
          <Row>
            <div className="search-details">
              <Col className='mb-4'>
                <div className="search-heading">
                  <h1 className='text-center'>Find the right hotel today</h1>
                </div>
              </Col>
              <Col>
                <div className="search-form">
                  <form >
                    <Row className='justify-content-center align-items-center d-flex '>
                      <div className="row-main d-md-flex justify-content-center align-items-center">
                        <Col xs={12} md={9} >
                          <div className="search-input-field d-flex justify-content-center align-items-center">
                            <IoSearch size={26} className=''/>
                            <input type="text" className="form-control" placeholder="Enter destination or hotel name" />
                          </div>
                        </Col>
                        <Col xs={12} md={3}>
                          <div className="form-btn">
                            <button type="submit" className="" onClick={searchhotel}>Search hotels <FaArrowRight /></button>
                          </div>
                        </Col>
                      </div>
                    </Row>
                  </form>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}
