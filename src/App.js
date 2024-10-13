

import { Home }  from "./pages/Home/Home.jsx";
import Top from "./component/Top/Top.jsx";
import Single from "./pages/Single/Single.jsx";
import Write from "./pages/Write/Write.jsx";
import Setting from "./pages/Settings/Setting.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Posts from "./component/Posts/Posts.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Logout from "./pages/Logout/Logout.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContest.js";


console.log("hello");
function App() {
  const {currentuser} =useContext(AuthContext)
  
  const RequireAuth =({ children }) => {
    return !currentuser ? children : <Navigate to="/login"/>
  };
console.log(currentuser)
  return (
    <>

    <Router>
    <Top/>
    <Routes>
    <Route element={ <Login />} path="/login" /> 
    <Route element={ <Register />} path="/register" /> 
    
    
      <Route element={<RequireAuth><Home /></RequireAuth>} path="/" /> 
      
      
      <Route element={ <RequireAuth>< Write/></RequireAuth>} path="/write" /> 
      <Route element={ <RequireAuth><Setting /></RequireAuth>} path="/setting" /> 
      <Route element={<RequireAuth><Single/></RequireAuth>} path="/single"/> 
      <Route element={<RequireAuth><About/></RequireAuth>} path="/about"/> 
      <Route element={<RequireAuth><Logout/></RequireAuth>} path="/logout"/> 
      <Route element={<RequireAuth><Contact/></RequireAuth>} path="/contact"/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
