import Contact from "../components/Contact/Contact";
// import LaunchPage from "../components/Home/Home";
import Howitwork from "../components/Howitwork/Howitwork";
import Features from "./Features/Features";
import Logo from "./Login/Logo";
import Restaurants from "./Restaurants/Restaurants";
import Transfer from "./Transfer/Transfer";
import Banner from "./Banner/Banner";
import HeaderOpt from "./Header/HeaderOpt";
import Slide from "./Banner/Slider";
export default function LandingPage() {
  return (
    <>
      {/* <Logo/> */}
      <HeaderOpt/>
      <main>
        <Banner/>
        <Slide/>
        <Features/>
        <Howitwork/>
        <Restaurants/>
        <Transfer/>
        <Contact/>
      </main>
    </>
  )
}
