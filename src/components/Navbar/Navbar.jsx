import React from 'react';
import images from "../../constants/images";
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className="gallery">
        <Link to="/gallery">
          <div className="text_">
            Menu
            </div>
        </Link>
      </div>


      <nav className='app__navbar '>
        <div className="app__navbar-logo align2">
          <img src={images.head} alt="this" />
          <small >Haldwani</small>
        </div>

        <div className="app__navbar-login displayNav1">
          <a className="p__opensans contact" href='https://www.google.co.in/maps/place/K+K+Food+(A+Family+Restaurant)/@29.2270393,79.493065,17z/data=!3m1!4b1!4m5!3m4!1s0x39a09bf6e57d734f:0xe7a035148189c5ca!8m2!3d29.2270393!4d79.4952537'>OUR LOCATION</a>
          <a className="p__opensans contact" href='https://www.facebook.com/kkfoodshaldwani/photos'>GALLERY</a>
          <a className="p__opensans contact" href='http://wa.me/<+918171808082‬>'>ORDER NOW</a>
        </div>
        <div className="app__navbar-login displayNav2">
          <a className="p__opensans contact" href='https://www.google.co.in/maps/place/K+K+Food+(A+Family+Restaurant)/@29.2270393,79.493065,17z/data=!3m1!4b1!4m5!3m4!1s0x39a09bf6e57d734f:0xe7a035148189c5ca!8m2!3d29.2270393!4d79.4952537'>OUR LOCATION</a>
          <a className="p__opensans contact" href='https://www.facebook.com/kkfoodshaldwani/photos'>GALLERY</a>
          <a className="p__opensans contact" href='http://wa.me/<+918171808082‬>'>ORDER NOW</a>
        </div>
      </nav>
    </>
  )
}
