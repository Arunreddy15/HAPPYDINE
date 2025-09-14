import { FaStar } from "react-icons/fa";

import './Banner.css'

export default function Banner() {
  
  return (
    <section id="banner">
        <div className="banner-inner-container">
            <div className="banner-rightside-info">
                <div className="heading">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Discover & Book Amazing
                        <p className="second-heading">Dining Experiences</p>
                    </h1>
                    <p className="description">
                        Find the perfect restaurant, read real reviews, and book your table instantly. 
                        Your next great meal is just a tap away.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div size="lg" className="dwnld-btn">
                        Get Start
                    </div>
                </div>

                <div className="banner-feedback-info">
                    <div className="rating-container">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar key={star} size={20} className="star-icon" />
                            ))}
                        </div>
                        <p className="rating">4.9/5</p>
                    </div>
                    <div className="feedback-container">
                        <p className="font-medium text-foreground">50K+</p> Happy Diners
                    </div>
                </div>
            </div>
            <div className="bg-box"></div>
            
                {/* <img className="banner-main-img" src="https://i.postimg.cc/vm382kr3/be.png"/> */}
            <img className="banner-main-img" src="https://i.postimg.cc/vm382kr3/be.png"/>
            {/* <img src='https://i.postimg.cc/9Fd5wxKr/chicken.png' className="banner-main-img"/> */}
            {/* <img src="https://images.unsplash.com/photo-1631880383152-f29099b0fd16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGN1bGluYXJ5fGVufDB8fDB8fHww"/> */}
        </div>
    </section>
  )
}
