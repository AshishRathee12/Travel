import React, { useEffect, useState } from 'react'
import './section1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';


export default function Section1() {

  // In React, state updates are asynchronous. When you call setSearch(inputtext) in the searchforhotel function, it doesn't update the search state immediately. Instead, it schedules an update for the next render cycle.


  // for input content 
  const [search, setSearch] = useState('');


  // for suggestion content 
  const [suggestion, setSuggestion] = useState(false);

  // for giving data to api 
  const [hoteldata, setHoteldata] = useState("");


  // for storing api data 
  const [apiData, setApiData] = useState([]);




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
      'x-rapidapi-key': '8641b11c31mshf744e14304c5003p10ad49jsnfe556cb843cb',
      'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
    }
  };




  const adddata = async () => {


    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result)
      const resultdata = result.data;
      // console.log(resultdata)
      setApiData(resultdata)
      setSuggestion(true);
    } catch (error) {
      console.error(error);
    }
  }






  const searchforhotel = (e) => {
    const inputtext = e.target.value;

    setSearch(inputtext);
    // if (inputtext === "") {
    //   setSuggestion(false);
    //   return false;
    // }
    // setHoteldata(inputtext)
  }


  const searchhotel = (e) => {
    e.preventDefault();
    if (hoteldata != '') {
      adddata();
    } else {
      console.log(hoteldata)
    }
  }


  useEffect(() => {
    setHoteldata(search);
  }, [search])




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
                            <ul>
                              {apiData.map((elem, index) => {
                                // console.log(elem)
                                const ids = elem.gaiaId;
                                // console.log(ids)
                                const listing = `/hotelList/${elem.regionNames.shortName}/`+`${ids}`


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
