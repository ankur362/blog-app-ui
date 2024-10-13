import React from 'react'
import './Write.css'
const Write = () => {
  return (
    <div className="write">
    <img className="wimg"  src='https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?w=1060&t=st=1727641564~exp=1727642164~hmac=2b918795e6042d8b4fd7fe484f4edef827eb979ad485cc1beaddb17075a57ef0'/>
       
        <form className="wform">
            <div className="wformgroup">
                <label htmlFor="fileInput">
                <i className="wicon fa-regular fa-plus"></i>
                </label>
                <input type="file" id="fileInput"  style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="winput" autoFocus={true} />
            </div>
            <div className="wformgroup">
                <textarea placeholder="tell your story" type="text" className="winput wtext"></textarea>
            </div>
            <button className="wsubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write