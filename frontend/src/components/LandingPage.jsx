import Contact from "../components/Contact/Contact";
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
        <Restaurants/>
        <Transfer/>
        <Contact/>
      </main>
    </>
  )
}
