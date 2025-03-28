import React, { useEffect, useLayoutEffect, useState } from 'react'
import lists from "../section4/lists.json";
import "./section4.css"
import { Container, Row } from 'react-bootstrap';
export default function Section4() {


  const [showdatalists, setShowdatalists] = useState("Domestic Cities")

  const listsname = ["Domestic Cities", "Regions", "Countries"]

  const changinglists = (e) => {
    const itemname = e.target.innerText;
    setShowdatalists(itemname)
  }


  // for applying border 
  useEffect(() => {
    const elements = document.querySelectorAll('.button-popular p');
    elements.forEach((element) => {
      if (element.innerText === showdatalists) {
        element.style = "border: 2px solid #006ce4; background-color:rgba(0, 106, 228, 0.24);color:#006ce4";
      } else {
        element.style = 'none';
      }
    });
  }, [showdatalists]);



  // call functoin for visiting page =

  const visithotelpage = (datahotle) => {
    console.log(datahotle)
    const ids = datahotle.gaiaId;
    window.location.href = `/hotelList/${datahotle.regionNames.shortName}/` + `${ids}`
  }









  const adddata = async (nameofhotel) => {


    const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${nameofhotel}&domain=IN&locale=en_IN`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '65585d9e15mshd5c370d9d7ed9b9p1dd305jsn98f4ca42270f',
        'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
      }
    };





    // setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const resultdata = result.data;
      console.log(resultdata)
      visithotelpage(resultdata[0])
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false); // Set loading state to false when fetch completes
    }
  }


  const popularvisit = (e) => {
    console.log(e.target.innerText)
    adddata(e.target.innerText)

  }









  return (
    <Container className='mt-4'>
      <Row>
        <p className='travel-popular-heading'>Popular with travelers from India</p>
      </Row>
      <Row>
        <div className="travelers-popular d-flex ms-2">
          {listsname.map((elem, index) => {
            // console.log(elem)
            return (
              <div className="button-popular me-5" key={index} onClick={changinglists}>
                <p>{elem}</p>
              </div>
            )
          })}
        </div>
      </Row>
      <Row className='mt-4'>
        <div className="travelers-popular-lists">
          <ul>
            {lists.filter((elem) => elem.title === showdatalists)
              .map((elem) => {
                return elem.lists.map((listItem, index) => {
                  return (
                    <li key={index} onClick={popularvisit}>{listItem}</li>
                  )
                })
              })}
          </ul>
        </div>
      </Row>
    </Container>
  )
}
