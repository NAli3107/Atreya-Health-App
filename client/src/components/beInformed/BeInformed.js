import React from 'react'
import './BeInformed.css'
import IMG1 from '../../images/AWS.jpeg'
import IMG2 from '../../images/jogger.jpeg'
import IMG3 from '../../images/silicon-canal.jpeg'


const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Mind  image by John Hain',
  place: 'https://www.tripadvisor.co.uk/Attractions-g187063-Activities-Leamington_Spa_Warwickshire_England.html', 
  demo: 'https://baronseden.com/hoar-cross-hall'
},
{
  id: 2,
  image: IMG2,
  title: 'Body',
  place: 'https://www.tripadvisor.co.uk/Attractions-g187063-Activities-Leamington_Spa_Warwickshire_England.html', 
  demo: 'https://baronseden.com/hoar-cross-hall'
},
{
  id: 3,
  image: IMG3,
  title: 'Spirit',
  place: 'https://www.tripadvisor.co.uk/Attractions-g187063-Activities-Leamington_Spa_Warwickshire_England.html', 
  demo: 'https://baronseden.com/hoar-cross-hall'
  },
  
]


const BeInformed = () => {
  return (
    <section id='portfolio'>
      <h5>News</h5>
      <h2>Be Informed</h2>

      <div className='beInformed_container'>
       {
         data.map(({id, image, title, place, demo})=> {
           return (
      <article key={id} className='beInformed_item'>
          <div className='beInformed_item-image'>
            <img src={image} alt={title}/>
            </div>
         <h3>{title}</h3>
          <div className='beInformed_item-cta'>
          <a href={place}  className='btn' target='_blank'>Place</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Video</a>
          </div>
        </article>
           )
         })
       }
       
      </div> 
        
    </section>
  )
}

export default BeInformed







