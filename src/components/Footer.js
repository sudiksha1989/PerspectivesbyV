import React from 'react'
import { LINKS } from '../assets/constants'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href={LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="icon fa-facebook">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="icon fa-instagram">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href={LINKS.EMAIL} target="_blank" rel="noreferrer" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li> &copy; Copyright</li>
        <li>
          <a href="http://html5up.net">2020 All rights reserved</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
