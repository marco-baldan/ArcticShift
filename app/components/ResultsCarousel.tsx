'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Result {
  id: string
  clientName: string
  metric: string
  value: string
  description: string
}

interface ResultsCarouselProps {
  results: Result[]
}

export const ResultsCarousel: React.FC<ResultsCarouselProps> = ({ results }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {results.map((result) => (
            <div key={result.id} className="w-full flex-shrink-0 p-8 bg-base-200">
              <h3 className="text-2xl font-bold text-primary mb-4">{result.clientName}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-accent mr-2">{result.value}</span>
                <span className="text-xl text-base-content">{result.metric}</span>
              </div>
              <p className="text-base-content">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 btn btn-circle"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </button>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 btn btn-circle"
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

