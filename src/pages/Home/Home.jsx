import React from 'react'
import "./Home.css"
import Header from '../../component/Header/Header'
import Post from '../../component/Post/Post'
import Sidebar from "../../component/Sidebar/Sidebar"
export const Home = () => {
  return (
    <>
    <Header/>
    <div className="home">
      <Post/>
      <Sidebar/>
                  
    </div>
     </>
  )
}
