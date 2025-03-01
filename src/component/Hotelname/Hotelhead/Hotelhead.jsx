import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import './Hotelhead.css'
import Example from '../Offcanvas/Offcanvas';
import { FaMedal } from "react-icons/fa";


export default function Hotelhead({ id }) {
    // console.log(id);

    const [lists, setLists] = useState({});

    const [imageslist, setImageslist] = useState("");

    const [amenties, setAmenties] = useState("")

    const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=IN&hotel_id=${id}&locale=en_IN`;
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f288f4fb1cmshadfa18f64a886e8p1b155bjsn407b3d6b2b7f',
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
                // console.log(result);
                setLists(result);
                setImageslist(result.propertyGallery.images);
                setAmenties(result.summary.amenities.topAmenities.items)
            } catch (error) {
                console.error(error);
            }
        }
        maindata();
    }, [id]);

    if (lists.summary) {
        // console.log(imageslist)
    }

    const mapopen = () => {
        const longitude = lists.summary.location.coordinates.longitude;
        const latitude = lists.summary.location.coordinates.latitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
    }

    return (
        <section>
            {lists.summary ? (
                <Container fluid="sm">
                    <Row>
                        <Col>
                            <div className="content1">
                                <div className="name">

                                    <h1>{lists.summary.name} </h1>
                                </div>
                                <div className="location d-flex">
                                    <p> <FaLocationDot />{lists.summary.location.address.addressLine}</p>
                                    <p className='show-map-link ms-2' onClick={() => mapopen()}> - show map </p>
                                </div>
                                <Row className='head-content'>
                                    <Col sm={9}>
                                        {/*  */}
                                        <Row className='front-row'>
                                            <Col className='p-0 h-100' sm={8}>
                                                <div className="big-image">
                                                    {imageslist && (
                                                        <img src={imageslist[1].image.url} alt="" className='img-fluid' />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col sm={4} className='d-flex flex-column justify-content-between pe-0 h-100'>
                                                <Row className='second-col'>
                                                    <Col sm={12} className=' small-col'>
                                                        <div className="small-image-1 h-100">
                                                            {imageslist && (
                                                                <img src={imageslist[0].image.url} alt="" />
                                                            )}
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className='second-col'>
                                                    <Col sm={12} className='small-col mt-1'>
                                                        <div className="small-image-1 h-100">
                                                            {imageslist && (
                                                                <img src={imageslist[2].image.url} alt="" />
                                                            )}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        {/*  */}
                                        <Row className='mt-2'>
                                            <Col className='p-0'>
                                                <div className="small-image">
                                                    {imageslist && (
                                                        <img src={imageslist[3]?.image.url} alt="" />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="small-image">
                                                    {imageslist && (
                                                        <img src={imageslist[4]?.image.url} alt="" />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col className='p-0'>
                                                <div className="small-image">
                                                    {imageslist && (
                                                        <img src={imageslist[5]?.image.url} alt="" />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="small-image">
                                                    {imageslist && (
                                                        <img src={imageslist[6]?.image.url || "couldn't load"} alt="" />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col className='position-relative p-0 more-images'>
                                                <Example images={imageslist} name={lists.summary.name} />
                                                <div className="small-image ">
                                                    {imageslist && (
                                                        <img src={imageslist[7]?.image.url || "couldn't load"} alt="" />
                                                    )}
                                                </div>

                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3} className='aside '>
                                        {/* <img src="../images/map.png" alt="" className='img-fluid'onClick={()=>mapopen()}/> */}
                                        <Row className='position-relative'>
                                            <video src="../images/map.videos.mp4" autoPlay loop muted className='img-fluid' onClick={() => mapopen()} />
                                            <div className="asside-content position-absolute top-50">
                                                View on map
                                            </div>
                                        </Row>
                                        <Row>
                                            <>s</>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    {amenties.map((elem, index) => {
                                        return (
                                            <Col key={index} lg={2} sm={3} className=''>
                                                <div className="amenties">
                                                    <p className='m-0'>{elem.text}</p>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                                <Row className='mt-4'>
                                    <Col sm={9}>
                                        <p className='about-property'>{lists.summary.location.whatsAround.editorial.content}</p>
                                        <div className="property-tagline">
                                            <p><FaMedal className='me-2' />{lists.summary.tagline}</p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>



            ) : (
                <h1>nothing match</h1>
            )
            }
        </section >
    )
}
