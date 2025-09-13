import './Restaurants.css'
import {  MapPin, Clock } from "lucide-react";
import { FaStar } from "react-icons/fa";
const restaurants = [
  {
    id: 1,
    name: "The Garden Bistro",
    cuisine: "Mediterranean",
    rating: 4.8,
    reviews: 324,
    location: "Downtown",
    openUntil: "11:00 PM",
    image: "https://images.unsplash.com/photo-1750943082020-4969b2a63084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGxhdGluZyUyMGdvdXJtZXR8ZW58MXx8fHwxNzU3Njk5NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Fine Dining", "Romantic"],
    priceRange: "$$"
  },
  {
    id: 2,
    name: "Modern Kitchen",
    cuisine: "Contemporary",
    rating: 4.9,
    reviews: 567,
    location: "Midtown",
    openUntil: "10:30 PM",
    image: "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzU3NjAxMjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Trendy", "Date Night"],
    priceRange: "$$"
  },
  {
    id: 3,
    name: "Chef's Table",
    cuisine: "International",
    rating: 4.7,
    reviews: 892,
    location: "Uptown",
    openUntil: "12:00 AM",
    image: "https://images.unsplash.com/photo-1697659602792-31dcb2a5a4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzU3NjA2ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Chef's Special", "Groups"],
    priceRange: "$$"
  }
];

export default function Restaurants() {
  return (
    <section id="restaurants">
        <div className="restaurants-inner-container">
            <div className="heading-description">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Featured Restaurants
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover some of the amazing restaurants already partnered with DineApp
                </p>
            </div>
            <div className="restaurants-card-container">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="restaurants-card">
                        <div className="relative">
                            <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="card-price">
                                <div variant="secondary" className="bg-background/90 text-foreground">
                                    {restaurant.priceRange}
                                </div>
                            </div>
                        </div>
                        
                        <div className="restaurants-card-info">
                            <div className="space-y-2">
                                <div className="restaurants-card-info-title">
                                    <h3 className="title">{restaurant.name}</h3>
                                    <div className="rating">
                                        <FaStar className="star-icon" />
                                        <p className="font-medium">{restaurant.rating}</p>
                                        <p className="text-muted-foreground text-sm">({restaurant.reviews})</p>
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground">{restaurant.cuisine}</p>
                                
                                <div className="location-time">
                                    <div className="location">
                                        <MapPin size={18} className="w-4 h-4" />
                                        <p>{restaurant.location}</p>
                                    </div>
                                    <div className="time">
                                        <Clock size={18} className="w-4 h-4" />
                                        <p>Open until {restaurant.openUntil}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="kind">
                                {restaurant.tags.map((tag) => (
                                    <p key={tag} variant="outline" className="text">
                                    {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
