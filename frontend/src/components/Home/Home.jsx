import React from "react";
import { FaLinkedinIn,FaYoutube,FaInstagram ,FaRegClock ,FaStar} from "react-icons/fa";
import { MdOutlineArrowRightAlt,MdOutlineKeyboardArrowRight  } from "react-icons/md";
import "./Home.css"
import Samosa from '../images/Samosa.png'
import Biryani from "../images/biryani.png"
import Pizza from '../images/pizza.png'
import Chicken from '../images/chicken.png'
import Mutton from '../images/mutton.png'
import Fish from '../images/fish.png'
import Icecream from '../images/icecream.png'
import Wings from '../images/wings.png'
import Header from "../Header/Header";
export default function LaunchPage() {
  return (
  <>
    <div className="Home-container">
        <div className="inner-container">
            <Header className='HEADER'/>
        <div className="inner-container-body">
            <div className="content-left">
                <div>
                <h1 className="home-heading">Your Culinary </h1>
                <h1 className="home-heading">Adventure Awaits</h1>
                <p>We are commited to serve you best food in the town. We can come to our place or also can order online</p>
                <button>Get Started <MdOutlineArrowRightAlt/></button></div>
                <div className="review-container">
                        <h5>3000+ Cusomers</h5>
                        <p><FaStar fill="gold"/>4.7(300 reviews)</p>
                    {/* <div>
                    </div> */}
                </div>
                <div className="discount-coupon">
                    <div className="dc-heading">
                        <p>Discount Coupon</p>
                        <p>Next <MdOutlineKeyboardArrowRight /></p>
                    </div>
                    <div className="dc-body">
                        <div className="dc-body-name">
                            <img src={Wings} height='80'/>
                            <div>
                                <h3>Chicken Wings</h3>
                                <p>90 Calories</p>
                            </div>
                        </div>
                        <p>300/-</p>
                        <a><FaRegClock color="white"/> <p>30 min</p></a>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <span></span>
                    <img src={Chicken} className="main-img"/>
                    <p className="tagline">Let your food wait's for you from now!...</p>
                <div className="one">
                    <img src={Samosa} height='60' className="samosa"/>
                    <img src={Biryani} height='60' className="biryani"/>
                    <img src={Pizza} height='60' className="pizza"/>
                    <img src={Mutton} height='60' className="mutton"/>
                    <img src={Fish} height='60' className="fish"/>
                    <img src={Icecream} height='60' className="icecream"/>
                </div>
            </div>
            <div className="content-right-social">
                <FaYoutube size={20}/>
                <FaInstagram size={20}/>
                <FaLinkedinIn size={20}/>
                <span>Follow <br></br>Us</span>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}
