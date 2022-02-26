import React from 'react';
import instagram from '../img/instagram.jfif'
import youtube from '../img/logo.jfif'
import das from '../img/das.jfif'

const Portfolio = () => {
  return <div className='portfolio'>
      <div className='text'>
      <h1>Portfolio</h1>
      </div>
      <div className='link'>
          <div className="link1">
               <a href="https://github.com/FeridMemmedov112/instagram-login"><img src={instagram} alt="" className='img'/></a>
               <p>INSTAGRAM UI</p>
         </div>
            <div className="link1">
               <a href="https://github.com/FeridMemmedov112/youtube"><img src={youtube} alt="" className='img'/></a>
               <p>YOUTUBE UI</p>
            </div>
            <div className='link1'>
               <a href="https://github.com/FeridMemmedov112/stone-paper-scicors"><img src={das} alt="" className='img'/> </a>
               <p>STONE-PAPER-SCICOR game</p>
            </div>
       </div>     
        </div>;
}

export default Portfolio;
