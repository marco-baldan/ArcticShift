'use client'

import React, { useState } from 'react'

interface InteractiveCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="w-64 h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-base-100 shadow-xl rounded-lg p-6 flex items-center justify-center">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden bg-primary text-primary-content shadow-xl rounded-lg p-6 flex items-center justify-center rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  )
}

