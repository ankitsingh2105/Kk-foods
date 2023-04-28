import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
const AboutUs = () => (
  <div className='app__bg align' >
    <div className="about_history">
      <div className='one align' >
        <h1 className="headtext">About Us</h1>
        <p className="p__opnesans">Our restaurant is located on Kaladhungi Road, Lohariyasal Malla. We started with the motto to provide quality food to our customers.
          Our chef who is highly experienced and has worked in several restaurants and hotel chain, always makes sure that our customers get the best taste in every bite.
        </p></div>
      <div>
        <img loading="lazy" src={images.cookie5} id='video1' alt="" />
      </div>
      <div>
        <div className="two align">
          <h1 className="headtext">Our History</h1>
          <p className="p__opnesans">We first started serving in March 2020 just before the first lockdown. We might be new in the restaurant business but our team is not. Our chef who is also the co-founder along with other staff members always delivered the best in their fields.</p> </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
