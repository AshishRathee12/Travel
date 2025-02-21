import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './HotelList.css';

export default function HotelList() {

    const id = useParams();
    const hotelid = id.id;
    // console.log(hotelid)
    const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=1000&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=2025-05-26&locale=es_AR&adults_number=1&sort_order=REVIEW&page_number=1&domain=AR&price_max=5000&region_id=${hotelid}&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=2025-05-27`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };


    const list = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        // list();
    }, [])

    return (
        <Container fluid='md'>
            <Row>
                <Col md={8} className='hotel-list-items'>
                    <Row>
                        <Col md={7} className='p-0'>
                            <div className="list-image">
                                {/* <img src={propertyImage.image.url}></img> */}
                                <img src="https://travelfreak.com/wp-content/uploads/2021/12/best-hotel-booking-websites-1.jpg" className='img-fluid'></img>
                            </div>
                        </Col>
                        <Col md={5} className='p-0'>
                            <div className="hotel-list-content">
                                <div className="hotel-name">
                                    <div className="hotel-description">
                                        <div className="name">
                                            <h2>Leela</h2>
                                        </div>
                                        <div className="reviews">
                                            <div className="score">
                                                <p>Review Score</p>
                                                <p>Number of Reviews</p>
                                            </div>
                                            <div className="rating">
                                                <p>8.3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <p>Chandigarh</p>
                                        <p>1.2 kilometer from sector 17</p>
                                    </div>

                                    <div className="availability">
                                        <p>1 left</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>₹ 2,500</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
