import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import './Hotelhead.css'
import Example from '../Offcanvas/Offcanvas';



export default function Hotelhead({ id }) {
    // console.log(id);

    const [lists, setLists] = useState({});

    const [imageslist, setImageslist] = useState("")

    const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=IN&hotel_id=${id}&locale=en_IN`;
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6b589d747cmsh6bfc6f6a58159d8p10b9afjsn4f6d85818a10',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };


    useEffect(() => {
        const maindata = async () => {
            try {
                const response = await fetch(url2, options2);
                const result = await response.json();
                // console.log(result);
                setLists(result);
                setImageslist(result.propertyGallery.images);
            } catch (error) {
                console.error(error);
            }
        }
        maindata();
    }, [id]);

    if (lists.summary) {
        console.log(imageslist)
    }

    return (
        <section>
            {lists.summary ? (
                <Container >
                    <Row>
                        <Col>
                            <div className="content1">
                                <div className="name">

                                    <h1>{lists.summary.name} </h1>
                                </div>
                                <div className="location">
                                    <p> <FaLocationDot />{lists.summary.location.address.addressLine}</p>
                                </div>
                                <Row>
                                    {/*  */}
                                    <Row>
                                        <Col className='p-0' md={8}>
                                            <div className="big-image">
                                                {imageslist && (
                                                    <img src={imageslist[1].image.url} alt="" className='img-fluid' />
                                                )}
                                            </div>
                                        </Col>
                                        <Col md={4} className='d-flex flex-column justify-content-between'>
                                            <Row className='second-col'>
                                                <Col md={12} className=' small-col'>
                                                    <div className="small-image-1 h-100">
                                                        {imageslist && (
                                                            <img src={imageslist[0].image.url} alt="" />
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='second-col'>
                                                <Col md={12} className='small-col mt-1'>
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
                                        <Col className='position-relative'>
                                            <Example className="position-absolute top-50" images={imageslist} name={lists.summary.name} />
                                            <div className="small-image ">
                                                {imageslist && (
                                                    <img src={imageslist[7]?.image.url || "couldn't load"} alt="" />
                                                )}
                                            </div>

                                        </Col>
                                    </Row>
                                </Row>
                            </div>
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
