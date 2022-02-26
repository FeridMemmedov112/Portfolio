import react from "react"
import Typed from 'react-typed';
import backgroundImage from '../img/img.jpg'
import cv from '../fakeCV.pdf'



const Header = () =>{
   
   return(
       <div className="header-wrapper">
           <div className="main-info">
                <h1>Farid Mammadov</h1> 
                 

           <Typed
           className="typed-text"
                strings={[
                    'Mechatronics engineering',
                    'Front-end developer',
                    'Back end developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>
                <a href={cv} download className="downloadCV">CV-mi endir</a>
           </div>
       </div>
   )

}
export default Header

