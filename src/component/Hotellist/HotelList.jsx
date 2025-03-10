import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, NavLink, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './HotelList.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaChevronRight } from "react-icons/fa6";
import { TbArrowsUpDown } from "react-icons/tb";
import { LuChevronsUpDown } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux for saving/createReducer';
import ReactDatePicker from './datepicker/ReactDatePicker';
import { CounterContext } from './datepicker/ReactDatePicker'


export default function HotelList() {
  const [hotelsuggest, setHotelsuggest] = useState([]);
  const [numberof, setNumberof] = useState(0);
  const [filteredHotels, setFilteredHotels] = useState([]);



  // for recommendation places aside 
  const [asiderecom, setAsiderecom] = useState([]);



  // for sorting 
  const [sorting, setSorting] = useState("RECOMMENDED");

  const [showshort, setShowshort] = useState(false);

  const sortinglist = ["RECOMMENDED", "REVIEW", "DISTANCE", "PRICE_LOW_TO_HIGH", "PROPERTY_CLASS", "PRICE_RELEVANT"];



  const { startDate, endDate } = useContext(CounterContext);
  // console.log(startDate.toISOString().slice(0, 10));
  const startDate1 = startDate.toISOString().slice(0, 10);
  const endDate1 = endDate.toISOString().slice(0, 10);



  // for save button =



  const dispatch = useDispatch()

  const saveditems = (elem) => {
    // console.log(elem)
    // console.log(elem.target)
    dispatch(addToCart(elem))

    // setSaved(!saved)
  }





  const id = useParams();
  const hotelid = id.id;
  const nameing = id.name;

  const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=10&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=${startDate1}&locale=en_IN&adults_number=1&sort_order=${sorting}&page_number=1&domain=IN&price_max=500&region_id=${hotelid}&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=${endDate1}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8641b11c31mshf744e14304c5003p10ad49jsnfe556cb843cb',
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
    }
  };

  const list = async () => {
    setHotelsuggest([])
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result)
      const finalresult = result.properties;
      setHotelsuggest(finalresult);
      setAsiderecom(result.filterMetadata.neighborhoods)
    } catch (error) {
      console.error(error);
    }
  };



  const onDateChange = () => {
    console.log(startDate, endDate)
  }



  useEffect(() => {
    list();
  }, [hotelid]);



  const sortingselection = (elem) => {
    setSorting(elem.target.innerHTML);
    list();
  }


  useEffect(() => {
    console.log(startDate)
  }, [startDate, endDate])


  // for filter 
  useEffect(() => {
    if (hotelsuggest.length > 0) {
      const filteredHotels = hotelsuggest.filter((elem) => {
        return (
          elem?.propertyImage?.image?.url &&
          elem?.reviews?.total &&
          elem?.reviews?.score &&
          // elem?.availability.minRoomsLeft &&
          elem?.destinationInfo?.distanceFromDestination?.value
          // elem?.neighborhood?.name
        );
      });
      setFilteredHotels(filteredHotels);
      setNumberof(filteredHotels.length);
    }
  }, [hotelsuggest]);



  if (hotelsuggest.length > 0) {
    return (
      <Container fluid='xxl' className='mt-5'>
        <Row>
          <Toaster />
          <div className="search-features">
            <div className="date-picker">
              <ReactDatePicker list={list} onDateChange={onDateChange} />
            </div>
          </div>
        </Row>
        <Row>
          <Col sm={2}>sdf</Col>
          <p>{startDate1}</p>
          <p>{endDate1}</p>
          {/* {endDate} */}
          <Col>
            <Row className=' gy-3'>
              <div className="number-of-items">
                <p className='m-0'>{nameing}: {numberof} properties found</p>
              </div>
              <div className="sortlist position-relative">
                <span className="inner-sortlist d-inline-flex p-2" onClick={() => setShowshort(!showshort)}>
                  <div className="up-down-icon">
                    <TbArrowsUpDown className='me-1' />
                  </div>
                  <div className="sorting-content">
                    <p className='m-0'>
                      Sort by: {sorting}
                    </p>
                  </div>
                  <div className="sort-up-down-icon">
                    <LuChevronsUpDown className='ms-1' />
                  </div>
                </span>
                {/* <div className="sorting-dropdown position-absolute"> */}
                <div className={`${showshort ? 'recommand-show' : 'recommand-hide'} sorting-dropdown position-absolute`}>
                  <div className="drop-down-content">
                    <div>
                      {sortinglist.map((elem, index) => {
                        return <p key={index} onClick={sortingselection}>{elem}</p>
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {filteredHotels.map((elem, index) => {
                // console.log(elem)
                const hotelname = '/hotelname/' + elem.name;
                const roomimg = elem?.propertyImage?.image?.url || "Coudn't Load Image";
                const totalreviews = elem?.reviews?.total || "Nice";
                const reviewscore = elem?.reviews?.score || "";
                const roomleft = elem?.availability.minRoomsLeft;
                const distance = elem?.destinationInfo?.distanceFromDestination?.value || " Couldn't found";
                const neighborhood = elem?.neighborhood?.name || "Not found";
                return (
                  // <Col md={10} lg={9} xl={7} sm={12} className='hotel-list-items offset-lg-3 offset-md-2' key={index}>
                  <Col sm={12} className='hotel-list-items ' key={index}>
                    <Row className='p-2'>
                      <Col sm={5} md={6} className='p-0'>
                        <div className="list-image position-relative">
                          <img src={roomimg} className='img-fluid'></img>
                          <div className="save-icon position-absolute top-0">
                            <span className='' onClick={() => saveditems(elem)}>
                              {/* <CiHeart size={22} className={`${saved ? "saved-red" : "saved-normal"} icon-background`} enableBackground='red'/> */}
                              <CiHeart size={22} className='icon-background' enableBackground='red' />
                            </span>
                          </div>
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
                );
              })}
            </Row>
          </Col>
          {asiderecom.length > 0 ? (
            <Col sm={3} className='recommand-3-col ms-1 p-0'>
              <p className='text-center recommand-heading mt-5'>Places near {nameing}</p>
              <div className="recommand-places mt-4 position-relative mt-5">
                <ul className='sticky-ul'>
                  {asiderecom.map((elem, index) => {
                    const ids = elem.regionId
                    const listing = `/hotelList/${elem.name}/` + `${ids}`
                    return (
                      <Link as={NavLink} to={listing} key={index}>
                        <li >{elem.name}</li>
                      </Link>
                    )
                  })}
                </ul>
              </div>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="loadingarea">
        <div className="containerer"></div>
      </div>
    );
  }
}