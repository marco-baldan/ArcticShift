'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft, FaBuilding, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Innovators Inc.',
    text: 'Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence are unparalleled.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Global Solutions Ltd.',
    text: "I'm impressed by their ability to deliver complex projects on time and within budget. Their expertise and professionalism are top-notch.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Minds Agency',
    text: 'Their creative approach to problem-solving has helped us stay ahead of the curve. I highly recommend their services to anyone looking for cutting-edge solutions.',
    rating: 4,
  },
  {
    name: 'Alex Thompson',
    company: 'Future Tech Co.',
    text: "The level of innovation and technical expertise this team brings to the table is truly remarkable. They've consistently exceeded our expectations.",
    rating: 5,
  },
];

export default function DynamicTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (event.key === 'ArrowRight') {
        nextTestimonial();
      }
    },
    [nextTestimonial, prevTestimonial]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">What Our Clients Say</h2>
        <div className="card bg-base-100 shadow-xl overflow-hidden">
          <div className="card-body p-0">
            <div className="relative h-[400px] sm:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="h-full flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="avatar placeholder mr-4">
                          <div className="bg-primary text-primary-content rounded-full w-16">
                            <span className="text-2xl">{testimonial.name.charAt(0)}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-base-content flex items-center">
                            <FaUser className="w-4 h-4 mr-2" />
                            {testimonial.name}
                          </h3>
                          <p className="text-base-content/70 flex items-center">
                            <FaBuilding className="w-4 h-4 mr-2" />
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <FaQuoteLeft className="absolute top-0 left-0 w-8 h-8 text-primary opacity-20 transform -translate-x-2 -translate-y-2" />
                        <p className="text-base-content text-lg italic pl-6">{testimonial.text}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-warning fill-warning' : 'text-base-content/20'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-base-content/50 text-sm">
                        {currentTestimonial + 1} / {testimonials.length}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center bg-base-200 p-4">
              <button
                className="btn btn-circle btn-primary hover:btn-secondary transition-colors duration-300"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-base-content/20'
                    }`}
                  />
                ))}
              </div>
              <button
                className="btn btn-circle btn-primary hover:btn-secondary transition-colors duration-300"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}