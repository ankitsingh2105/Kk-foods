import React from 'react';
import images from "../../constants/images";

import './Gallery.css';

const Gallery = () => (
  <div>
    <div className="image_grid">
    <img className='imageGrid' src={images.menu1} alt="" />
    <img className='imageGrid' src={images.menu2} alt="" />
    <img className='imageGrid' src={images.menu3} alt="" />
    <img className='imageGrid' src={images.menu4} alt="" />
    <img className='imageGrid' src={images.menu5} alt="" />
    </div>
  </div>
);

export default Gallery;
