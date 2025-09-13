import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import LaunchPage from "../components/Home/Home";
import Howitwork from "../components/Howitwork/Howitwork";
import {REGISTER,LOGIN,HOME,ABOUT,CONTACT,LANDING,HOWITWORK} from "./AppRoutes";
import LandingPage from "../components/LandingPage";
import "../App.css"
export default function AppNavigation() {
  return (

    <Router>
      <Routes>
        <Route path={HOME} element={<LaunchPage/>} />
        <Route path={LOGIN} element={<Login/>} />
        <Route path={REGISTER} element={<Register/>} />
        <Route path={ABOUT} element={<About/>} />
        <Route path={CONTACT} element={<Contact/>} />
        <Route path={LANDING} element={<LandingPage/>} />
        <Route path={HOWITWORK} element={<Howitwork/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
