import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import About from "../components/About/About";
import LaunchPage from "../components/Home/Home";
import Resetpassword from "../components/Resetpassword/Resetpassword";
import {REGISTER,LOGIN,HOME,ABOUT,LANDING,RESETPASSWORD} from "./AppRoutes";
import LandingPage from "../components/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import "../App.css"
export default function AppNavigation() {
  return (

    <Router>
      <Routes>
        <Route path={HOME} element={<LaunchPage/>} />
        <Route path={LOGIN} element={<Login/>} />
        <Route path={REGISTER} element={<Register/>} />
        <Route path={ABOUT} element={<About/>} />
        <Route path={RESETPASSWORD} element={<Resetpassword/>} />
        <Route path={LANDING} element={<ProtectedRoute><LandingPage/></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
