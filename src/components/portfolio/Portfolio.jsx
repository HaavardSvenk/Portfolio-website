import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Ringenes Herre karakterer',
    github: 'https://github.com/HaavardSvenk/LoTR-characters',
  },
  {
    id:3,
    image: IMG2,
    title: 'Egen hjemmeside',
    github: 'https://www.github.com',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Noe av mitt arbeid</h5>
      <h2>Portefølje</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio