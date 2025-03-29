import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Facilities.css';
import { IoIosCheckmark } from "react-icons/io";

export default function Facilities({ id }) {

    const [totalfact, setTotalfact] = useState([]);
    const [hotelname, setHotelname] = useState("")

    const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=IN&hotel_id=${id}&locale=en_IN`;
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };


    useEffect(() => {
        const maindata = async () => {
            try {
                const response = await fetch(url2, options2);
                const result = await response.json();
                // console.log(result.summary.location.coordinates);
                // console.log(result.summary.location.coordinates.latitude);
                const facilites = result.summary.amenities.amenities;
                const name = result.summary.name;
                setHotelname(name)
                // console.log(result);
                setTotalfact(facilites);

            } catch (error) {
                console.error(error);
            }
        }
        maindata();
    }, [id]);






    return (
        <Container fluid="sm" id='facilities'>

            {totalfact.length >= 0 ? (
                <div className=' facility-main mt-5'>
                    <h5 className='mb-4'>Facilities of {hotelname}</h5>
                    <Row>
                        {
                            totalfact.map((elem, index) => {
                                return (
                                    <Fragment key={index}>
                                        {
                                            elem.contents.map((elem, index) => {
                                                return (
                                                    <Col key={index} sm={2} md={4} className='adzf'>

                                                        <div className='facility-content' key={index}>
                                                            <div className="facility-header">
                                                                <h6>{elem.header.text}</h6>
                                                            </div>
                                                            <div className="facility-items">
                                                                <div>{elem.items.map((elem, index) => {
                                                                    return (
                                                                        <p key={index} className='m-0'><IoIosCheckmark className='me-2' color='green'/>{elem.text}</p>
                                                                    )
                                                                })}</div>

                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </Row>
                </div>
            ) : (<></>)}
        </Container>
    )
}
