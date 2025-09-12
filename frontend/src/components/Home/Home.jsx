import React from "react";
import { FaLinkedinIn,FaYoutube,FaInstagram ,FaRegClock ,FaStar} from "react-icons/fa";
import { MdOutlineArrowRightAlt,MdOutlineKeyboardArrowRight  } from "react-icons/md";
import "./Home.css"
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
                            <img src='https://i.postimg.cc/fk4m17hr/wings.png' height='70'/>
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
                    <img src='https://i.postimg.cc/9Fd5wxKr/chicken.png' className="main-img"/>
                    <p className="tagline">Let your food wait's for you from now!...</p>
                <div className="one">
                    <img src='https://i.postimg.cc/xCKjjKrm/samosa.png' height='60' className="samosa"/>
                    <img src='https://i.postimg.cc/13ws9mcV/biryani.png' height='60' className="biryani"/>
                    <img src='https://i.postimg.cc/ZR79z86L/pizza.png' height='60' className="pizza"/>
                    <img src='https://i.postimg.cc/xCT2yKrL/mutton.png' height='60' className="mutton"/>
                    <img src='https://i.postimg.cc/rsx4kdjZ/fish.png' height='60' className="fish"/>
                    <img src='https://i.postimg.cc/PqMHwS7t/icecream.png' height='60' className="icecream"/>
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
