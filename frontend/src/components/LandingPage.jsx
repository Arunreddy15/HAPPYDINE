import Contact from "../components/Contact/Contact";
// import LaunchPage from "../components/Home/Home";
import Howitwork from "../components/Howitwork/Howitwork";
import Features from "./Features/Features";
import Logo from "./Login/Logo";
import Restaurants from "./Restaurants/Restaurants";
import Transfer from "./Transfer/Transfer";
export default function LandingPage() {
  return (
    <>
      {/* <Logo/> */}
      <Features/>
      <Howitwork/>
      <Restaurants/>
      <Transfer/>
      <Contact/>
    </>
  )
}
