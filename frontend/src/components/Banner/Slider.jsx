import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slide.css'

const sliderData=[
    {'id':2,'title':'Rich Salads','image':'https://plus.unsplash.com/premium_photo-1698867577020-38ae235fd612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxmb29kJTIwcGhvdG9ncmFwaHklMjBpbmRpYW4lMjB3aXRoJTIwZ3JlZW4lMjBiYWNrZ3JvdW5kfGVufDB8MnwwfHx8MA%3D%3D'},
    {'id':3,'title':'Gongura Chicken','image':'https://images.unsplash.com/photo-1708782345205-94e1d1c54005?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {'id':4,'title':'Chicken Drumsticks','image':'https://images.unsplash.com/photo-1696950169965-e7a3f3858d90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2QlMjBwaG90b2dyYXBoeSUyMGluZGlhbnxlbnwwfDJ8MHx8fDA%3D'},
    {'id':1,'title':'Dosa','image':'https://images.unsplash.com/photo-1606888476625-ddf0393a172d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxmb29kJTIwcGhvdG9ncmFwaHklMjBpbmRpYW4lMjB3aXRoJTIwZ3JlZW4lMjBiYWNrZ3JvdW5kfGVufDB8MnwwfHx8MA%3D%3D'},
    {'id':5,'title':'Idli Sambar','image':'https://images.unsplash.com/photo-1680359873197-c3eb21ec05c0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}

]
export default function Slide() {
    const settings = { dots: false, infinite: true, autoplay: true, slidesToShow: 1, slidesToScroll: 1 };
  return (
    <div className='slider-container'>
        <div className='slider-inner-container'>
            <Slider {...settings}>
                {sliderData.map((url) => (
                    <div key={url.id} className="image-container">
                        <img src={url.image} />
                        <h3>{url.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}
