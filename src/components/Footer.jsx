import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
      <div className='footer'>
    
             
                  <h2>Samshad Ali</h2>
                  <p> All right reserved &#169; 2023</p>
              
              <div>
                  <p>Follow Us</p>
              <footer>
              <a target='_blank' href="https://github.com/Samshad-Ali/"> <FaGithub /> </a>
                  <a target='_blank' href="https://www.linkedin.com/in/samshad-ali-406525256/"> <FaLinkedinIn /> </a>
                  <a target='_blank' href="https://www.instagram.com/___sam___102/"> <FaInstagram/> </a>
                  </footer>
              </div>
           
    </div>
  )
}

export default Footer;