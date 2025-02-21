import './App.css'
import { Container, Row } from 'react-bootstrap';
import CollapsibleExample from './component/Navbar/CollapsibleExample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import HotelList from './component/Hotellist/HotelList';


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
        <Route path='/HotelList/:id' element={<HotelList />}></Route>
      </Routes>


    </>
  )
}

export default App
