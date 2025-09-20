import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../App.css";
import About from "../components/About/About";
import LaunchPage from "../components/Home/Home";
import LandingPage from "../components/LandingPage";
import NotFound from "../components/NotFound/NotFound";
import Register from "../components/Register/Register";
import Resetpassword from "../components/Resetpassword/Resetpassword";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { ABOUT, HOME, LANDING, LOGIN, REGISTER, RESETPASSWORD } from "./routes";
export default function AppNavigation() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<LaunchPage />} />
        <Route
          path={LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path={REGISTER} element={<Register />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={RESETPASSWORD} element={<Resetpassword />} />
        <Route
          path={LANDING}
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
