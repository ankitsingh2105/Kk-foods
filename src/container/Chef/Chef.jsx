import React from 'react';

import './Chef.css';
import { images } from "../../constants"
const Chef = () => (
  <>
  
    <div className="about_chef">
      <div  className='chnagecolor' >
      <div className="align">
      <div className="heading_here">ABOUT OUR CHEF</div>
        <div className="chef_name">
          Himanshu Bisht
        </div>
      </div>
        <div className="photo_and_about">
          <img loading="lazy"className='chef_photo' src={images.chefimg} alt="" />
        <div className="about_him">
            <i className="comma">"</i> &nbsp;&nbsp; Our chef <strong className='strong' >Mr.Himanshu Bisht</strong> started his journey as a junior chef with the known hotel chain ITC HOTELS located 
            in Jodhpur Rajasthan. After working for some time there he continued his journey with world-renowned, The Taj Hotels
            Along with these wonderful hotels he has experience with IGH Group, Carlson Group, Marriott Hotels, Starwood, and many more.
            <br />
            Last, he worked in the Mumbai chain of the ITC Group before starting this Restaurant with <strong className='strong' >Mr. Kushal.</strong>   <br />
            Our chef uses all his experience to provide a wonderful taste in every bite.&nbsp;&nbsp;
            <i className="comma">"</i>
        </div>
        </div>
    <div className="location">
        <div className="location_text">
      OUR LOCATION
        </div>
        <div className="loction_icom">
          <div></div>
        <i class="fa-solid fa-location-dot"></i>
        <div  className='loction_reach_text' >
          Click on the map below to reach our location
        </div>
        </div>
        <div className="location_imag">
          <a href="https://www.google.co.in/maps/place/K+K+Food+(A+Family+Restaurant)/@29.2270393,79.493065,17z/data=!3m1!4b1!4m5!3m4!1s0x39a09bf6e57d734f:0xe7a035148189c5ca!8m2!3d29.2270393!4d79.4952537" target="_blank" rel="noopener noreferrer">
        <img loading="lazy"className="location_image" src={images.location} alt="" />
          </a>
        </div>


        <div className='align_socials' >
          <div className="follow">Follow us on our social handles</div>
        <div className="socials">
          <ul className='social_links' >
            <li className="social_icons"> <a href="https://www.instagram.com/kkfoodshaldwani/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a> </li>
            <li className="social_icons"> <a href="http://wa.me/<918171808082>" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a> </li>
            <li className="social_icons"> <a href="https://www.facebook.com/kkfoodshaldwani/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a> </li>
          </ul>
        </div>
        </div>


    </div>
    </div>

  <div className="credits">
      <div className="my_name">
        MADE BY - ANKIT SINGH CHAUHAN
      </div>

      <div className="align1">

      <div>
        <a className='port' href="https://ankitsinghchauhan.tech/" target="_blank" rel="noopener noreferrer">
          PORTFOLIO
        </a>
      </div>
      <div>
        <a className='free' href="http://wa.me/<918954057108>" target="_blank" rel="noopener noreferrer">
        CONTACT
        </a>
      </div>


      </div>

  </div>



  </div>
  </>
);

export default Chef;
