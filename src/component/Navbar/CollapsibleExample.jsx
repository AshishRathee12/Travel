import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './Collapse.css'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';





function CollapsibleExample() {

  const [show, setShow] = useState(false);

  const showform = (e) => {
    setShow(!show)
  }
  // form submit 
  const formsubmit=(e)=>{
    e.preventDefault();
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src='/images/logo.png' className='logo-img'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing"><CiHeart size={28} /></Nav.Link>
          </Nav>
          <Nav className='login-btn'>
            <button onClick={showform}>Login</button>
            {/* login-form  */}
            <div className={`${show ? 'show' : 'hide'} login-form`}>
              <div className="login-content">
                <div className="profile-pic d-flex align-items-center justify-content-center mb-3">
                  <CgProfile size={50} color='#100225' />
                </div>
                <div className="form">
                  <form className='d-flex align-items-center flex-column'onSubmit={formsubmit}>
                    <input type="text" placeholder="Enter Username" className='mb-2' />
                    <input type="password" placeholder="Password" className='mb-3' />
                    <div className="submit-btn">
                      <button>Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;