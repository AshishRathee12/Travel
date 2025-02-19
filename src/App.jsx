import './App.css'
import { Container, Row } from 'react-bootstrap';
import CollapsibleExample from './component/Navbar/CollapsibleExample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';



function App() {

  return (
    <>
      <Row>
        <CollapsibleExample />
      </Row>

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>


    </>
  )
}

export default App
