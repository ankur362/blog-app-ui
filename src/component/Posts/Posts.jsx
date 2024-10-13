import React from 'react'
import"./Posts.css"


const Posts = () => {
  return (
    <div className="posts"> 
   
    <img className="postimg"  src='https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?w=1060&t=st=1727641564~exp=1727642164~hmac=2b918795e6042d8b4fd7fe484f4edef827eb979ad485cc1beaddb17075a57ef0'/>
    <div className="postinfo">
      <div className="postcats">
        <span className="postcat">Music</span>
        <span className="postcat">Life</span>
      </div>
      <span className="posttitle">The Beauty of Nature</span>
      <hr/>
      <span className="postdate">1 hour ago </span>
    </div>
  <p className="postdesc">Nature is a timeless source of peace and wonder.
     The rustling of leaves, the gentle sound of flowing water,
      or the vastness of the sky can calm the mind and refresh 
      the soul. Every landscape—from the lush forests to the 
      grand mountains—offers a unique beauty that reconnects 
      us with the simplicity of life.

Spending time in nature has proven to reduce stress,
 improve mental clarity, and boost creativity. It reminds
  us of the balance and harmony that exist in the world,
   encouraging us to slow down and appreciate life's moments.

As we continue to advance in technology, it's essential
 to nurture our bond with the natural world. 
 By protecting and preserving it, we ensure 
 future generations can experience the same beauty
  and tranquility that nature offers today.</p>
    </div>
  )
}

export default Posts