import React from 'react';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='change'>
    <div className="container">
      <h3 className='h3' >ALWAYS SPECIAL</h3>
      <h1 className='head' >Best in taste Veg and Non-veg food</h1>
      <div className="menu">

        <div className="menu1">
          <div className="item">
            <h3 className='cookies1'>Vegetarian Corner</h3>
            <img className='imgone' src={images.veg} alt="" /> 
          </div>
            <div className="specility">
                  <ul className="specility-cookies">
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Kadhai Paneer  with roti</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Indian Combo</h2>
                      </div>
                    </div>
      
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Sahi Paneer</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Indian Special</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Rice Noodle Thuppa</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Special KK Combo</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Chilly Paneer</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Starter Chinese</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Veg. Manchurian</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Starter Chinese</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Mango Shake</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Shakes</h2>
                      </div>
                    </div>
                  </ul>
            </div>
        </div>

        <hr className="lineonee" />
        <div className="image">
        <video autoPlay loop muted src={images.cookie3} type="video/mp4" id='video1' />
        </div>

        <hr className="lineonee" />
        <div className="menu2">
          <div className="item">
        <h3 className='cookies1'>Non - Vegetarian</h3>
        <img className='imgone' src={images.nonveg} alt="" />
          </div>
            <div className="specility">
                  <ul className="specility-cookies">
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Kadhai Chicken</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Indian</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Chicken Spring Rolls</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Starter Chinese</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Chicken Kathi Roll</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Rolls</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Kali Mirch Momos</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Special KK Combo</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Mutton Mashala</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Indian</h2>
                      </div>
                    </div>
                    <div className="specility-cookies-list">
                      <div className="list1">
                      <h3 className="name">Chiken Lollypop</h3>
                      <div className="line">
                        <hr className='newline'/>
                      </div>
                      <h2 className="type">From - Starters</h2>
                      </div>
                    </div>
                  </ul>
            </div>
        </div>

        </div>
        <div className="additional_info">
        These are some of the few dishes we serve. We have a variety you will find nowhere.
          To see the complete Menu with price click below.
        </div>
        <Link to='gallery' >
        <div className="icon">
        <i class="fa-solid fa-book"></i>
        </div>
        </Link>
      </div>
    </div>
);

export default SpecialMenu;
