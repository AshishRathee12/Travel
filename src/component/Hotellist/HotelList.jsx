import React, { useEffect, useState } from 'react'
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './HotelList.css';
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function HotelList() {


    const [hotelsuggest, setHotelsuggest] = useState([]);


    const id = useParams();
    const hotelid = id.id;
    // console.log(hotelid)
    const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=1000&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=2025-05-26&locale=es_AR&adults_number=1&sort_order=REVIEW&page_number=1&domain=AR&price_max=5000&region_id=${hotelid}&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=2025-05-27`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6b589d747cmsh6bfc6f6a58159d8p10b9afjsn4f6d85818a10',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };


    const list = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result.properties);
            const finalresult = result.properties;
            setHotelsuggest(finalresult)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        list();
    }, [hotelid])

    if (hotelsuggest.length > 0) {
        return (

            // <>
            //     <h1>element present</h1></>

            <Container fluid='md'>
                <Row>
                    {hotelsuggest.map((elem, index) => {
                        // console.log(elem);
                        const roomimg = elem?.propertyImage?.image?.url || "Coudn't Load Image";
                        const totalreviews = elem?.reviews?.total || "Nice";
                        const reviewscore=elem?.reviews?.score || "";
                        const roomleft=elem?.availability?.minRoomsLeft || "Check Availability";
                        const distance = elem?.destinationInfo?.distanceFromDestination?.value || " Couldn't found";
                        const neighborhood = elem?.neighborhood?.name || "Not found";


                        const hotelname = '/hotelname/' + elem.name;
                        return (
                            <Col md={10} lg={9} xl={7} sm={12} className='hotel-list-items offset-lg-3 offset-md-2' key={index}>
                                <Row className='p-2'>
                                    <Col sm={5} md={6} className='p-0'>
                                        <div className="list-image">
                                            {/* <img src={propertyImage.image.url}></img> */}
                                            <img src={roomimg} className='img-fluid'></img>
                                        </div>
                                    </Col>
                                    <Col sm={7} md={6} className='pe-0'>
                                        <div className="hotel-list-content">
                                            <div className="hotel-name">
                                                <div className="hotel-description d-flex justify-content-between">
                                                    <div className="name">
                                                        <h2>{elem.name}</h2>
                                                    </div>
                                                    <div className="reviews-box d-flex">
                                                        <div className="score me-2">
                                                            <p className='mb-0 review-heading'>Review Score</p>
                                                            <p className='mb-0 total-review text-end'>{totalreviews} Reviews</p>
                                                        </div>
                                                        <div className="rating">
                                                            <p className='mb-0'>{reviewscore}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="location d-flex mt-2">
                                                    <a href="http://" target="_blank" rel="noopener noreferrer" className=''>{neighborhood}</a>
                                                    <ul className='mb-0 mt-1 p-0 ps-3'>
                                                        <li className='location-distance'>{distance}Km from center</li>
                                                    </ul>
                                                </div>
                                                <div className="availability mt-2">
                                                    <p>{roomleft} left</p>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <p className='rate'>{elem.mapMarker.label}</p>
                                                <div className="available-button">
                                                    <Link as={NavLink} to={hotelname}>
                                                        <button className='btn btn-primary'>See Availability <FaChevronRight /></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container className=' loading-stage d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div className="container3">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

