/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Bli kjent med</h5>
      <h2>Om meg</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Informasjonsteknologi</h5>
              <small>Bachelor</small><br />
              <small>Høyskolen på Vestlandet</small>
            </article>
        
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Barnehagelærer</h5>
              <small>Bachelor</small><br />
              <small>Høyskolen i Volda</small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>WA.works</h5>
              <small>Praktikant</small><br />
              <small>Webutvikling</small>
            </article>
          </div>

          <p>
            Mitt navn er Håvard Svenkerud, jeg er 30 år gammel og bosatt i Bergen. Jeg studerer
            informasjonsteknologi på siste året ved Høyskolen på Vestlandet. Nå har jeg blant annet
            praksis hos WA.works hvor jeg lærer om webutvikling gjennom å skrive kode i React og Typescript.
          </p>

          <a href="#contact" className='btn btn-primary'>Kontakt meg</a>
        </div>
      </div>
    </section>
  )
}

export default About