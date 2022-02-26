import React from 'react'
import Instagram from '../img/instagram.jfif'
import Facebook from '../img/fb.png'
import Whatsapp from '../img/wp.jfif'
import Linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <div className='Footer'>
<div className="elaqe">
    <a href="#">Baku,Binagadi</a>
    <a href="#">+994(55)713-68-72</a>
    <a href="#">feridm153@gmail.com</a>
</div>

<div className="elaqe">
    <a href="#">HOME</a>
    <a href="#">ABOUT ME</a>
    <a href="#">Portfolio</a>
</div>

<div className="elaqe">
    <a href="#">EXPERIENCE</a>
    <a href="#">Contact US</a>
</div>

<div className="elaqe">
    <div className="image">
<a href="https://instagram.com/m._ferid?utm_medium=copy_link"><img src={Instagram} alt="" /></a>
<a href="https://www.facebook.com/profile.php?id=100056508919743"><img src={Facebook} alt="" /></a>
<a href="#"><img src={Whatsapp} alt="" /></a>
<a href="https://www.linkedin.com/in/ferid-memmedov-429207226"><img src={Linkedin} alt="" /></a>
</div>
<a href="#">Copyright©2022 Farid Mammadov/ All Rights Reserved</a>
</div>



    </div>
  )
}

export default Footer