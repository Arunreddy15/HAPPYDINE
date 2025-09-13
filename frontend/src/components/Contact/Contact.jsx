import './Contact.css'
import Header from "../Header/Header";
import { FiFacebook,FiTwitter,FiInstagram,FiYoutube  } from "react-icons/fi";
function Contact() {
    return(
        <footer id="contact" className="">
            <div className="container">
                <div className="sections grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="description">
                        <div className="logo">
                            <h3 className="brand">Dineezy</h3>
                        </div>
                        <p className="">
                        Discover amazing restaurants, book instantly, and enjoy unforgettable dining experiences. 
                        Your culinary adventure starts here.
                        </p>
                        <div className="footer-social-icons-container">
                            <a href="#" className="footer-social-icons">
                                <FiFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="footer-social-icons">
                                <FiTwitter  className="w-5 h-5" />
                            </a>
                            <a href="#" className="footer-social-icons">
                                <FiInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="footer-social-icons">
                                <FiYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="each-section">
                        <h3 className="cate-heading">Product</h3>
                        <ul className="">
                        <li><a href="#" className="">Features</a></li>
                        <li><a href="#" className="">How it Works</a></li>
                        <li><a href="#" className="">Pricing</a></li>
                        <li><a href="#" className="">API</a></li>
                        </ul>
                    </div>

                    <div className="each-section">
                        <h3 className="cate-heading">Company</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                        <li><a href="#" className="">About Us</a></li>
                        <li><a href="#" className="">Careers</a></li>
                        <li><a href="#" className="">Blog</a></li>
                        <li><a href="#" className="">Press</a></li>
                        </ul>
                    </div>

                    <div className="each-section">
                        <h3 className="cate-heading">Support</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                        <li><a href="#" className="">Help Center</a></li>
                        <li><a href="#" className="">Contact Us</a></li>
                        <li><a href="#" className="">Privacy Policy</a></li>
                        <li><a href="#" className="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright-container">
                    <p className="text-primary-foreground/80">
                        © 2025 DineApp. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-sm text-primary-foreground/80">
                        <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Contact