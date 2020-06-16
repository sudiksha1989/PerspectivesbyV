import React from 'react'
import { Link } from "gatsby";

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg';
import { ROUTES } from '../assets/constants';

const Header = () => (
  <>
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={avatar} alt="" />
        </a>
        <h1>
          <strong>I am Vaibhav</strong>, specialising 
        <br />
         in photographing architecture and
        <br />
        landscape.
      </h1>
      </div>
      <Footer />
    </header>
    <nav className='topnav'>
      <Link to={ROUTES.LANDSCAPE}>Landscape</Link>
      <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>      
      <Link to={ROUTES.HOME}>Home</Link>
    </nav>
  </>
)

export default Header
