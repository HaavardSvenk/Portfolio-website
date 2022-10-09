import React from 'react'
import './experience.css'
import {BsCheckLg} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Hvilke teknologier jeg har vært borti</h5>
      <h2>Min Erfaring</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>God kunnskap</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>God kunnskap</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>God kunnskap</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Grunnleggende</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Grunnleggende</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Kjennskap til</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>God kunnskap</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>Java Servlets</h4>
                <small className='text-light'>Grunnleggende</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Kjennskap til</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Grunnleggende</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Grunnleggende</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Experience