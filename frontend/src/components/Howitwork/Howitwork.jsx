import { Search, Calendar, Utensils } from "lucide-react";
import './Howitwork.css'

import React from 'react'

export default function Howitwork() {
    const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Browse restaurants near you or search by cuisine, price, or special features. Use filters to find exactly what you're craving."
  },
  {
    icon: Calendar,
    step: "02",
    title: "Book",
    description: "Select your preferred date, time, and party size. See real-time availability and book instantly with just a few taps."
  },
  {
    icon: Utensils,
    step: "03", 
    title: "Dine",
    description: "Arrive at your restaurant with confirmed reservation details. Enjoy your meal and leave a review to help others."
  }
];
  return (
    <>
    <section id="howitwork">
        <div className="howitwork-inner-container">
          <div className="heading-description">
            <h2 className="text-3xl md:text-5xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to your perfect dining experience
            </p>
          </div>
          <div className="cards-container">
            {/* Connection lines for desktop */}
            
              {steps.map((step, index) => (
                  <div key ={index} className="card">
                      <div className="card-icon-container">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <p className="card-description">
                      {step.description}
                      </p>
                  </div>
              ))}
          </div>
        </div>
    </section>
    </>
  )
}
