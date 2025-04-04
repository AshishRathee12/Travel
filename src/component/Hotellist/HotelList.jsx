import React, { useState, useEffect } from 'react';
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
import DatePicker from 'react-datepicker';
import './datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";

import { Range } from "react-range";
import { FaAngleDown } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




export default function HotelList() {

  // for checking if user is online or not and show alert if not
  const [open, setOpen] = React.useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );










  const [hotelsuggest, setHotelsuggest] = useState([]);
  const [numberof, setNumberof] = useState(0);
  const [filteredHotels, setFilteredHotels] = useState([]);

  // for recommendation places aside 
  const [asiderecom, setAsiderecom] = useState([]);

  // for sorting 
  const [sorting, setSorting] = useState("RECOMMENDED");

  const [showshort, setShowshort] = useState(false);

  const sortinglist = ["RECOMMENDED", "REVIEW", "DISTANCE", "PRICE_LOW_TO_HIGH", "PROPERTY_CLASS", "PRICE_RELEVANT"];

  // for dates 


  const [dateRange, setDateRange] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const maxdate3 = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
  const [endDate, setEndDate] = useState(new Date(maxdate3));

  // console.log(startDate, endDate)

  // for recommendation-suggestion 

  const [placerecommand, setPlacerecommand] = useState(false)

  // for range selection 
  const [values, setValues] = React.useState([1000]);



  const placerecommanding = () => {
    setPlacerecommand(!placerecommand)

    const rotatebutton = document.querySelector(".icon-down svg");
    rotatebutton.classList.toggle("rotate");


  }





  // converting date into redable format 
  const checkin = startDate?.toISOString().slice(0, 10);
  const checkout = endDate?.toISOString().slice(0, 10);

  // for save button =

  const dispatch = useDispatch()


  // applied validation that if internet is ON then the add to cart works 
  const saveditems = (elem) => {
    if (navigator.onLine === false) {
      setOpen(true);
    }
    if (navigator.onLine === true) {
      dispatch(addToCart(elem))
    }
  }




  // if (navigator.onLine === true) {
  //   console.log("online")
  // }
  // if (navigator.onLine === false) {
  //   console.log("offline")
  // }


  const id = useParams();
  const hotelid = id.id;
  const nameing = id.name;

  const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=700&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=${checkin}&locale=en_IN&adults_number=1&sort_order=${sorting}&page_number=1&domain=IN&price_max=${values}&region_id=${hotelid}&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=${checkout}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
    }
  };

  const list = async () => {
    setHotelsuggest([])
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const finalresult = result.properties;
      setHotelsuggest(finalresult);
      setAsiderecom(result.filterMetadata?.neighborhoods)
    } catch (error) {
      console.error(error);
    }
  };



  // fetching the data whent the id changes 
  useEffect(() => {
    list();
  }, [hotelid]);


  // for filter 
  useEffect(() => {
    if (hotelsuggest !== undefined && hotelsuggest !== null && hotelsuggest.length > 0) {
      const filteredHotels = hotelsuggest.filter((elem) => {
        return (
          elem?.propertyImage?.image?.url &&
          elem?.reviews?.total &&
          elem?.reviews?.score &&
          elem?.price?.lead?.amount <= values &&
          // elem?.availability.minRoomsLeft &&
          elem?.destinationInfo?.distanceFromDestination?.value
          // elem?.neighborhood?.name
        );
      });
      setFilteredHotels(filteredHotels);
      setNumberof(filteredHotels.length);
    }
  }, [hotelsuggest, values]);


  // when dates changes in dateRange 

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start)
    setEndDate(end);
  }
  const maxdate2 = new Date().getTime() + 60 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    // update the state herer 
    if (startDate && endDate) {
      setDateRange(`Selected date range: ${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}`);
    } else if (startDate) {
      setDateRange(`Selected end date:`);
    } else {
      setDateRange("");
    }
  }, [startDate, endDate]);




  // for sorting 

  const sortingselection = (elem) => {
    setSorting(elem.target.innerHTML);
    list();
  }



  // for date selction 

  const addingdates = () => {
    if (startDate && endDate) {
      // console.log(checkin, checkout);
      list();
      // console.log(calling())
    }
  }


  // for price range 
  let timeoutId;

  const changeprice = (values) => {
    setValues(values)
    timeoutId = setTimeout(() => {
      list();
    }, 2000);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }




  // reloading the page 
  const reload = () => {
    window.location.reload(false)
  }


  return (
    <Container fluid='xxl' className='mt-3'>
      <div >
        {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          // onClose={handleClose}
          message="Check your internet connection"
          action={action}
        />
      </div>
      <Row className='mb-4'>
        <Toaster />
        <div className="search-features">
          <div className="date-picker">
            <div className='d-flex date-content justify-content-center'>
              <div className="calender-icon">
                <FaRegCalendarAlt size={22} />
              </div>
              <DatePicker
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="yyyy/MM/dd"
                minDate={new Date()}
                maxDate={maxdate2}
                monthsShown={2}
              />
              {/* <p>{dateRange}</p> */}
              <div className="search-btn">
                <button onClick={addingdates}>Search</button>
              </div>
            </div>
            <div className="enter-checkoutdate">
              {endDate ? ("") : ("select end date")}
            </div>
          </div>
        </div>
      </Row>
      {hotelsuggest?.length > 0 ? (
        <Row>
          <Col sm={2} className='d-none d-lg-block'>
            <div className="filter-page mt-5">
              <div className="filter-title">
                <p className='mb-3'> Filter by :</p>
              </div>
              <div className="filter-price">
                <div className="filter-price-heading pt-4">
                  <p>Your budget (per night)</p>
                </div>
                <div className="filter-price-range d-flex">
                  <p>₹ 500 </p> - <p> ₹ {values[0]}</p>
                </div>
                <div className="price-range-slider">
                  <Range
                    label="Select your value"
                    step={100}
                    min={500}
                    max={5000}
                    values={values}
                    onChange={(values) => changeprice(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "6px",
                          width: "100%",
                          backgroundColor: "#0d6efd",
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div className='range-icon'
                        {...props}
                        key={props.key}
                        style={{
                          ...props.style,
                          top: "0%",
                          borderRadius: "50%",
                          height: "20px",
                          width: "20px",
                          backgroundColor: "#0d6efd",
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <Row className=' gy-3'>
              <div className="number-of-items">
                <p className='m-0'>{nameing}: {numberof} properties found</p>
              </div>
              <div className='d-flex justify-content-between'>
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
                      <div className='drop-down-content-inside'>
                        {sortinglist.map((elem, index) => {
                          return <p key={index} onClick={sortingselection}>{elem}</p>
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="smallsize-recommand  d-block d-md-none position-relative">
                  <p className='text-center recommand-heading mt-2 small-recommand-heading px-2' onClick={placerecommanding}>Places near {nameing} <div className="icon-down d-inline"><FaAngleDown /></div></p>
                  <Col sm={12} className={`${placerecommand ? "recommand-show" : "recommand-hide"} recommand-3-col ms-1 p-0 d-block d-md-none position-absolute xyz-recommand`}>
                    <div className="recommand-places position-relative mt-3">
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
                </div>
              </div>
              {
                filteredHotels && filteredHotels.length > 0 ? (
                  filteredHotels.map((elem, index) => {
                    console.log(elem)
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
                  })
                ) : (
                  <button onClick={reload}>Reload</button>
                )
              }
            </Row>
          </Col>
          {
            asiderecom.length > 0 ? (<>
              <Col sm={3} className='recommand-3-col ms-1 p-0 d-none d-md-block'>
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
            </>
            ) : (
              <></>
            )
          }
        </Row >
      ) : (
        <div className="loadingarea">
          <div className="containerer"></div>
        </div>
      )
      }
    </Container >
  )
}
