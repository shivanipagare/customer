import React from 'react'
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaLock, FaGreaterThan,FaInstagramSquare,FaFacebook,FaTwitter} from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
function NavbarCustomer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className='my-2' style={{ backgroundColor: "white", borderBottom: "1px solid grey" }} expand="lg">
        <Container fluid>
          <div className='logo'>SHOPPER's</div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mx-6 my-3 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/men' className='link1' style={{ textDecoration: "none" }} ><p className='navlink'>Men</p></Link>
              <Link to='/women' className='link2' style={{ textDecoration: "none" }}  ><p className='navlink'>WoMen</p></Link>
              <Link to='/kids' className='link3' style={{ textDecoration: "none" }}  ><p className='navlink'>Kids</p></Link>
              <Link to='/beauty' className='link4' style={{ textDecoration: "none" }} ><p className='navlink'>Beauty</p></Link>
              <Link to='/electronics' className='link5' style={{ textDecoration: "none" }} ><p className='navlink'>Electronics</p></Link>


            </Nav>
            <Form className="d-flex ">

              <Form.Control
                type="search"
                placeholder="Search for product "
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='mr-4'> <Link className="icon"><FaSearch /></Link></Button>

            </Form>
          </Navbar.Collapse>
          <Button className='mx-2 ' variant="primary" onClick={handleShow}>
            Login
          </Button>
          <Button variant=''>
            Become a Seller
          </Button>
        </Container>
      </Navbar>



      <Modal show={show} onHide={handleClose}>
       
       

        <div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
       < FaUserCircle/>
					<input type="text" class="login__input" placeholder="User name / Email" />
				</div>
				<div class="login__field">
				<FaLock/>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit" onClick={handleClose}>
					<span class="button__text">Log In Now</span>
					<span><FaGreaterThan/></span>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<span className='social_icons_login'> < FaInstagramSquare/></span>
          <span className='social_icons_login'> <FaFacebook/></span>
          <span className='social_icons_login'><FaTwitter/></span>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
      
      
      </Modal>
  

    </div>
  )
}

export default NavbarCustomer;

