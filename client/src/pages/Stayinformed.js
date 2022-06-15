import React, { useState } from 'react'
import './BeInformed/BeInformed.css'
import IMG1 from '../images/AWS.jpeg'
import IMG2 from '../images/jogger.jpeg'
import IMG3 from '../images/silicon-canal.jpeg'


const data = [
  {
  id: 1,
  image: IMG1,
  title: ' Mind',
  place: 'https://www.psychotherapy.org.uk/', 
  demo: 'https://www.mind.org.uk/',
  test: "ENTER YOUR MIND STUFF"

},
{
  id: 2,
  image: IMG2,
  title: 'Body',
  place: 'https://www.arbonne.com/gb/en/arb/jeanmcleod/cart?shareId=8821428899367', 
  demo: 'https://youtu.be/YFcSDbKbPn8',
  test: "ENTER YOUR BODY STUFF"
},
{
  id: 3,
  image: IMG3,
  title: 'Spirit',
  place: 'https://www.malvern-hills.co.uk/', 
  demo: 'https://baronseden.com/hoar-cross-hall',
  test: "ENTER YOUR SPIRIT STUFF"
  },
  
]


const BeInformed = () => {


  return (
    <section id='portfolio' className='col-sm-4'>
      <h5>News</h5>
      <h2>Be Informed</h2>

      <div className=' beInformed_container'>
       {
         data.map(({id, image, title, place, demo, test})=> {
           return (
      <div key={id} className='beInformed_item'>
          <div className='beInformed_item-image'>
            <img src={image} alt={title}/>
            </div>
         <h3>{title}</h3>
          <div className='beInformed_item-cta'>
          <a href={place}  className='btn' target='_blank'>Get help?</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Further Info</a>
          <div>What is {title}? {test}</div>
          </div>
          </div>
      

           )
         })
       }


      </div> 
        

    </section>
  )
}

export default BeInformed





