// App.jsx
import './App.css'
import { Container, Row } from 'react-bootstrap';
import CollapsibleExample from './component/Navbar/CollapsibleExample';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './component/Home';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import HotelList from './component/Hotellist/HotelList';
import Hotelname from './component/Hotelname/Hotelname';
import Footer from './component/Footercompo/Footer';
import Addedtocart from './component/Adding to cart/Addedtocart';
import ReactDatePicker from './component/Hotellist/datepicker/ReactDatePicker';

function App() {

  return (
    <>
      <Row>
        <CollapsibleExample />
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="info">
            Please note that we currently only provide Indian hotel data.
          </Alert>
        </Stack>
      </Row>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/HotelList/:name/:id' element={
          <ReactDatePicker onDateChange={()=>{}}>
            <HotelList/>
          </ReactDatePicker>
        }>
        </Route>
        <Route path='/Hotelname/:id' element={<Hotelname />}></Route>
        <Route path='/Saved-items/' element={<Addedtocart />}></Route>
      </Routes >

      {/* <Footer /> */}
      {/* <Row>
     </Row> */}

    </>
  )
}

export default App