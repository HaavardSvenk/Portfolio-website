/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HÅVARD SVENKERUD</a>

      <ul className='permalinks'>
        <li><a href="#">Hjem</a></li>
        <li><a href="#about">Om meg</a></li>
        <li><a href="#experience">Erfaring</a></li>
        <li><a href="#portfolio">Portefølje</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/havard.svenkerud/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/haavardsvenk/" target="_blank" rel="noreferrer"><FiInstagram /></a>
      </div>

      <div className="footer__bottom">
        <small>
          Håvard Svenkerud 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer