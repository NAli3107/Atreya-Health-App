import React from 'react'
import './Testimonials.css'
import ME1 from '../../images/AWS.jpeg'
import ME2 from '../../images/AWS.jpeg'
import ME3 from '../../images/AWS.jpeg'
import ME4 from '../../images/AWS.jpeg'


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const data = [
  {
    avatar: ME1,
    fname: 'Judy Peach',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit corrupti natus eius est. Repudiandae, magnam rerum. Ab quod illo dolores delectus, natus necessitatibus magni. Adipisci voluptatum laudantium repellendus odio?'
  },
  {
    avatar: ME2,
    fname: 'Jo Smith',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit corrupti natus eius est. Repudiandae, magnam rerum. Ab quod illo dolores delectus, natus necessitatibus magni. Adipisci voluptatum laudantium repellendus odio?'
  },
  {
    avatar: ME3,
    fname: 'Linda Holdsworth',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit corrupti natus eius est. Repudiandae, magnam rerum. Ab quod illo dolores delectus, natus necessitatibus magni. Adipisci voluptatum laudantium repellendus odio?'
  },
  {
    avatar: ME4,
    fname: 'Mary O-Reilly',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit corrupti natus eius est. Repudiandae, magnam rerum. Ab quod illo dolores delectus, natus necessitatibus magni. Adipisci voluptatum laudantium repellendus odio?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Reviews from others</h5>
      <h2> Testimonials</h2>
      
      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, fname, review}, index) => {
          return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} />
         </div>
         <h5 className='client_name'>{fname}</h5>        
         <small className='client_review'>{review}</small>
        </SwiperSlide>
          )
      })
        }
      </Swiper>
    </section>  
  )
}


export default Testimonials
