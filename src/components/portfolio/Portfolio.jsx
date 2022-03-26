import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
           <img src={IMG1} alt='' />
         </div>
         <h3>My First Portfolio Deployed through Firebase</h3>
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/manu-portfolio' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>

        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
         <img src={IMG2} alt='' />
         </div>
         <h3>Socio: Rest-API Project</h3> 
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/socio-assignment-rest-Api-' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>

        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
         <img src={IMG3} alt='' />
         </div>
         <h3>Material-UI Project</h3> 
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/material-ui' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>

        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
         <img src={IMG4} alt='' />
         </div>
         <h3>Pagination Project</h3> 
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/Pagination' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>

        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
         <img src={IMG5} alt='' />
         </div>
         <h3>McDonald's Sample Page UI Project</h3> 
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/axeonic-assignment' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>

        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
         <img src={IMG6} alt='' />
         </div>
         <h3>Sample Form and Registration page validation with transition Project</h3> 
         <div className='portfolio__item-cta'>
         <a href='https://github.com/Manubharadwaj5772/project' className='btn' target='_blank'>Github</a>
         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
         </div> 
        </article>
      </div>
      </section>
  )
}

export default Portfolio