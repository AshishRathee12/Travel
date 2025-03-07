import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './Collapse.css'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Addedtocart from '../Adding to cart/Addedtocart';
import { NavLink } from 'react-bootstrap';





function CollapsibleExample() {

  const [show, setShow] = useState(false);

  const showform = (e) => {
    setShow(!show)
  }
  // form submit 
  const formsubmit = (e) => {
    e.preventDefault();
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid='xl' className='p-0'>
        <Navbar.Brand href="/" className='col-md-4'>
          <img src='/images/logo.png' className='logo-img'></img>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='order-4'/> */}
        <Nav className="offset-md-5 offset-sm-4 offset-3">
          <Link to="/saved-items/" as={NavLink}>
            <CiHeart size={28} />
          </Link>
        </Nav>
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className='login-btn ms-2 me-4'>
          <button onClick={showform} className='px-3'>Log in</button>
          {/* login-form  */}
          <div className={`${show ? 'show' : 'hide'} login-form`}>
            <div className="login-content">
              <div className="profile-pic d-flex align-items-center justify-content-center mb-3">
                <CgProfile size={70} color='#003b95' />
              </div>
              <div className="form">
                <form className='d-flex align-items-center flex-column' onSubmit={formsubmit}>
                  <input type="text" placeholder="Enter Username" className='' />
                  <input type="password" placeholder="Password" className='' />
                  <div className="submit-btn w-100">
                    <button className='w-100'>Login</button>
                  </div>
                  <div className="register mt-3">
                    <p>Not a member? <span>Register</span></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;