import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Hotelreview.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Appingreview from '../writereview/Appingreview';



export default function Hotelreview({ id }) {

  const [reviews, setReviews] = useState({})


  const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/summary?hotel_id=${id}&domain=IN&locale=en_IN`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f288f4fb1cmshadfa18f64a886e8p1b155bjsn407b3d6b2b7f',
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
    }
  };


  useEffect(() => {

    const fetchreviews = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setReviews(result[0])
        console.log(result[0])
      } catch (error) {
        console.error(error);
      }
    }

    fetchreviews();


  }, [id])





  return (
    <Container fluid="sm review-container">
      {reviews.averageOverallRating ? (
        <Fragment>
          <Row>
            <Col>
              <h3 className='mt-3'>Guest Reviews</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="overall-rating d-flex align-items-center">
                <span className='review-rating'>{reviews.averageOverallRating.raw} </span>
                <p className='m-0 overall-content ms-1'> - Overall Rating</p>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <div className="different-categories">
              <h6>Categories:</h6>
              <Row>
                <Col sm={6}>
                  <div className="cleanliness">
                    <div className="review-tagline">
                      <p className='m-0'>cleanliness</p>
                      <p className='m-0 text-right'>{reviews.cleanliness.raw}</p>
                    </div>
                    <ProgressBar now={reviews.cleanliness.raw * 20} />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="hotel-condition">
                    <div className="review-tagline">
                      <p className='m-0'>hotel condition</p>
                      <p className='m-0 text-right'>{reviews.hotelCondition.raw}</p>
                    </div>
                    <ProgressBar now={reviews.hotelCondition.raw * 20} />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="room-comfort">
                    <div className="review-tagline">
                      <p className='m-0'>Room-comfort</p>
                      <p className='m-0 text-right'>{reviews.roomComfort.raw}</p>
                    </div>
                    <ProgressBar now={reviews.roomComfort.raw * 20} />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="service-staff">
                    <div className="review-tagline">
                      <p className='m-0'>service-staff</p>
                      <p className='m-0 text-right'>{reviews.serviceAndStaff.raw}</p>
                    </div>
                    <ProgressBar now={reviews.serviceAndStaff.raw * 20} />
                  </div>
                </Col>

              </Row>
              <Row>
                <Col>
                  <div className="write-review-btn">
                    <Appingreview />
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Fragment>
      ) : (<>

      </>)}

    </Container>
  )
}
