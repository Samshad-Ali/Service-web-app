import React from 'react'
import { Carousel } from "react-responsive-carousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image3 from '../assets/3.jpg'
import Image4 from '../assets/4.jpg'

const Services = () => {
  return (
      <div className='services'>
          <Carousel autoPlay showArrows={false} showThumbs={false} infiniteLoop interval={1000} showStatus={false} >
              <div>
                  <img src={Image3} alt="" />
                  <p className='legend'>24 X 7 Hours Services</p>
              </div>
              <div>
                  <img src={Image4} alt="" />
                  <p className="legend">Your Deserve Better</p>
              </div>
          </Carousel>
    </div>
  )
}

export default Services