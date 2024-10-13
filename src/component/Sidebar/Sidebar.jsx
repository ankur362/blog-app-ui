import React from 'react'

import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sitem">
        <span className="stitle">ABOUT ME</span>
        <img src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp?w=780"/>
        <p>Ankur Kumar, a passionate Computer Science Engineering student at Dayananda Sagar College of Engineering, Bangalore. Originally from Bihar, I'm eager to leverage my technical skills and grow in the ever-evolving field of technology.</p>
      </div>
      <div className="sitem">
      <span className="stitle">CATEGORIES</span>
      <div className="slist">
        <ul className="slitem">
          <li className="slistitem">Life</li>
          <li className="slistitem">Music</li>
          <li className="slistitem">Style</li>
          <li className="slistitem">Sport</li>
          <li className="slistitem">Tech</li>
          <li className="slistitem">Cinema</li>
        </ul>
      </div>
      </div>
      <div className="sitem">
      <span className="stitle">FOLLOW US</span>
      <div className="ssocial">
      <i className="sidesocial fa-brands fa-facebook"></i>
     <i className="sidesocial fa-brands fa-square-x-twitter"></i>
     <i className="sidesocial fa-brands fa-square-pinterest"></i>
     <i className="sidesocial fa-brands fa-square-instagram"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar