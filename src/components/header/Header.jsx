import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hei, jeg er</h5>
        <h1>Håvard Svenkerud</h1>
        <h5 className='text-light'>Tredjeårs student informasjonsteknologi</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Bla nedover</a>

      </div>
    </header>
  )
}

export default Header