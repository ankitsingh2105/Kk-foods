import React from 'react';
import { SubHeading } from '../../components';
import { images } from "../../constants"

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Happy eating" />
      <h1 className='app__header-h1'>K.K Food.<br/>Family Resturant</h1>
      <p className="p__opensans1">
        <br/>
        "Our mission is to make customers happy, to give good value and recipes, and to give our customers a place to celebrate life’s special moments by offering the best food, service, and ambiance."
      </p>
      <button type='button' className='custom__button' >Explore More</button>
    </div>
    <div className="">
      <img className='Top_img' src={images.sidbakery} alt="" />
    </div>
  </div>
);

export default Header;
