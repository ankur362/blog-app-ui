import React from 'react'
import "./Single.css"
import Sidebar from '../../component/Sidebar/Sidebar'
import Singlepost from '../../component/Singlepost/Singlepost'

const Single = () => {
  return (
    <div className="single">
        <Singlepost/>
        <Sidebar/></div>
  )
}

export default Single