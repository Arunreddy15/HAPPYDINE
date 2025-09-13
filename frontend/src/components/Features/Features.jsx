import React from 'react'
import './Features.css'
import { Search, Calendar, Star, MapPin, CreditCard, Users } from "lucide-react";
const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Find restaurants that match your taste preferences, dietary requirements, and mood with our AI-powered recommendations."
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Reserve your table in seconds with real-time availability. No more calling around or waiting for confirmations."
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Read honest reviews from real diners and share your own experiences to help the community."
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Discover amazing restaurants near you or explore dining options for your next destination."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay deposits or full meals securely through the app with multiple payment options."
  },
  {
    icon: Users,
    title: "Group Dining",
    description: "Easily coordinate group bookings and split bills with friends and family."
  }
];

export default function Features() {
  return (
    <section id="features">
        <div className="features-inner-container">
            <div className="heading-description">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Everything You Need for Perfect Dining
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    From discovery to payment, we've built the complete dining experience platform 
                    that puts you in control of your culinary adventures.
                </p>
            </div>
        
            <div className="features-card-container">
                {features.map((feature, index) => (
                    
                    <div key ={index} className="features-card">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" size={26} color={'#092327'}/>
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
