import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Top.css"


import { useContext } from "react";

const Top = () => {
  const navigate = useNavigate(); 
  

  
  const handleNavigation = (path) => {
    navigate(path); 
  };
  const user=true;
  return (
    <div className="topbar">
     <div className="topleft">
     <i className="social fa-brands fa-facebook"></i>
     <i className="social fa-brands fa-square-x-twitter"></i>
     <i className="social fa-brands fa-square-pinterest"></i>
     <i className="social fa-brands fa-square-instagram"></i>
     </div> 
     <div className="topcenter">
        <ul className="toplist">
            <li className="item" onClick={() => handleNavigation("/")}>HOME</li>
            <li className="item" onClick={() => handleNavigation('/about')}>ABOUT</li>
            <li className="item" onClick={() => handleNavigation('/contact')}>CONTACT</li>
            <li className="item" onClick={() => handleNavigation("/write")}>WRITE</li>
            <li className="item" onClick={() => handleNavigation('/logout')}>LOGOUT</li>
        </ul>
        </div>  
     <div className="topright">
      
        
      {
      user ? 
        (
          
          <img  className="profile"  onClick={() => handleNavigation('/setting')} src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp?w=780" alt="" />
        
        )
        : (
                         <>
                         <ul className="toplist">
                         <li className="item" onClick={() => handleNavigation("/login")}>LOGIN</li>
                         <li className="item" onClick={() => handleNavigation("/register")}>REGISTER</li>
                         </ul>
                         </>
        )
      }
        <i className="search fa-solid fa-magnifying-glass"></i>
        
     </div>
    </div>
  )
}

export default Top
