import React, { useEffect, useState } from 'react'
import './section1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
// import ErrorBoundary1 from './Errorboundries1';
import { ErrorBoundary } from 'react-error-boundary';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';





export default function Section1() {

  // for checking if user is online or not 

  const [open, setOpen] = React.useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
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


  const ErrorFallback = () => {
    return <div>Error occured</div>;
  };




  // In React, state updates are asynchronous. When you call setSearch(inputtext) in the searchforhotel function, it doesn't update the search state immediately. Instead, it schedules an update for the next render cycle.


  // for input content 
  const [search, setSearch] = useState('');


  // for suggestion content 
  const [suggestion, setSuggestion] = useState(false);

  // for giving data to api 
  const [hoteldata, setHoteldata] = useState("");


  // for storing api data 
  const [apiData, setApiData] = useState([]);


  // Add a state variable to track the loading state
  const [isLoading, setIsLoading] = useState(false);




  const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${hoteldata}&domain=IN&locale=en_IN`;
  const options = {
    method: 'GET',
    headers: {
      // my api =
      // 'x-rapidapi-key': 'ba5add63eamsh923b36e54af893ep14f893jsn0aaa91cf53f9',
      // disha api limit exceeds
      // 'x-rapidapi-key': 'bd52f8d6a4msh8eb450807febe1bp1b3e5djsn175ae6c6f60b',
      // sonia 
      // 'x-rapidapi-key': 'f288f4fb1cmshadfa18f64a886e8p1b155bjsn407b3d6b2b7f',
      // parveen 

      // vinita =
      // 'x-rapidapi-key': '8641b11c31mshf744e14304c5003p10ad49jsnfe556cb843cb',

      'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
    }
  };




  const adddata = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      const resultdata = result.data;
      // console.log(resultdata)
      setApiData(resultdata)
      setSuggestion(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state to false when fetch completes
    }
  }


  const searchforhotel = (e) => {
    const inputtext = e.target.value;
    setSearch(inputtext);
  }



  const searchhotel = (e) => {
    setSuggestion(false)
    e.preventDefault();
    if (hoteldata != '') {
      if (navigator.onLine === true) {
        adddata();
      }
      if (navigator.onLine === false) {
        setOpen(true);
      }
    } else {
      console.log(hoteldata)
    }
  }


  useEffect(() => {
    setHoteldata(search);
  }, [search])




  return (
    <ErrorBoundary fallback={<>Error occured</>}>
      <div className='front-image'>
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
                              <IoSearch size={26} className='' />
                              <input type="text" className="form-control" placeholder="Enter destination or hotel name" value={search} onChange={searchforhotel} />
                            </div>
                          </Col>
                          <Col xs={12} md={3}>
                            <div className="form-btn">
                              <button type="submit" className="" onClick={searchhotel}>Search hotels <FaArrowRight /></button>
                            </div>
                          </Col>
                        </div>

                        <div className={`${suggestion ? 'sugg-show' : 'sugg-hide'} auto-suggestion`}>
                          <Col>
                            <div className="auto-suggestion-list">
                              {apiData && apiData.length > 0 ? (
                                <ul>
                                  {apiData.map((elem, index) => {
                                    // console.log(elem)
                                    const ids = elem.gaiaId;
                                    // console.log(ids)
                                    const listing = `/hotelList/${elem.regionNames.shortName}/` + `${ids}`
                                    if (!ids) {
                                      return null
                                    } else {
                                      return (
                                        <Link as={NavLink} to={listing} key={index}>
                                          <li >{elem.regionNames.shortName} </li>
                                        </Link>
                                      )
                                    }
                                  })}
                                </ul>
                              ) : (
                                <div>No data available</div>
                              )}
                            </div>
                          </Col>
                        </div>

                        {isLoading && (
                          <div className="loadingarea loadingdata-icon">
                            <div className="containerer"></div>
                          </div>
                        )}
                      </Row>
                    </form>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </ErrorBoundary>
  )
}
