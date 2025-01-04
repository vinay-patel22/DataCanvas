import React from 'react';

const testimonials = [
  {
    quote: "DataCanvas has transformed how we present data to our clients. The AI suggestions are spot-on, and the visualizations are beautiful.",
    author: "Sarah Chen",
    role: "Data Analytics Lead",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "The automated insights feature has saved us countless hours of analysis. It's like having a data scientist on the team.",
    author: "Michael Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "We've seen a 40% increase in client engagement since using DataCanvas for our reports. The interactive dashboards are a game-changer.",
    author: "Emily Thompson",
    role: "Business Intelligence Director",
    company: "DataDrive",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=128&h=128&q=80"
  }
];

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Data Teams Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about DataCanvas
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}