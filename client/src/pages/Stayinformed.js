import React, { useState } from 'react'
import './BeInformed/BeInformed.css'
import IMG1 from '../images/brain.jpeg'
import IMG2 from '../images/jogger.jpeg'
import IMG3 from '../images/silicon-canal.jpeg'


const data = [
  {
  id: 1,
  image: IMG1,
  title: ' Mind',
  place: 'https://www.psychotherapy.org.uk/', 
  demo: 'https://www.mind.org.uk/',
    test: 'The Mind is a very delicate yet powerful tool. It is essential to look after it.'

},
{
  id: 2,
  image: IMG2,
  title: 'Body',
  place: 'https://www.arbonne.com/gb/en/arb/jeanmcleod/cart?shareId=8821428899367', 
  demo: 'https://youtu.be/YFcSDbKbPn8',
test:'Physical health is required for a good life. '
},
{
  id: 3,
  image: IMG3,
  title: 'Spirit',
  place: 'https://www.malvern-hills.co.uk/', 
  demo: 'https://baronseden.com/hoar-cross-hall',
test:'The power of the spirit in us cannot be restrained or explained by simple cognitive reasoning.'
  },
  
]


const BeInformed = () => {


  return (
    <section id='portfolio' className='col-sm-4'>
      
      <h2 id ='text'>Be Informed</h2>

      <div className=' beInformed_container'>
       {
         data.map(({id, image, title, place, demo, test})=> {
           return (
          <div>
            {/* <img src={IMG1} /> */}
         

      <div key={id} className='beInformed_item'>
        
             <h3>{title}</h3>
             <div> {test}</div>
          <div className='beInformed_item-image'>
            <img src={image} alt={title}/>
            </div>
    
          <div className='beInformed_item-cta'>
          <a href={place}  className='btn' target='_blank'>Get help?</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Further Info</a> 
 

          </div>
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





