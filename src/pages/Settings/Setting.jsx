import React from 'react'
import "./Stting.css"
import Sidebar from '../../component/Sidebar/Sidebar'
const Setting = () => {
  return (
    <div className="setting">
        <div className="swrapper">
            <div className="settingtitle">
                <span className="supdatetitle">Update Your Account</span>
                <span className="sdeletetitle">Delete  Account</span>
                </div> 
                <form className="settingform">
                    <label >Profile Picture</label>
                    <div className="settingpp">
        <img  className="settingprofile" src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp?w=780" alt="" />
        <label htmlFor="fileinput">
        <i className="sppicicon fa-regular fa-circle-user"></i>
        </label>
        <input type="file" name="" id="fileinput" style={{display:"none"}} />
                        
</div>
<label>Username</label>
<input type="text" placeholder="ANKUR KUMAR" />
<label>Email</label>
<input type="email" placeholder="ankur@gmail.com" />
<label>Password</label>
<input type="password"/>
<button className="settingsubmit">UPDATE</button>

         </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting