'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  description: string
}

interface PortfolioGalleryProps {
  projects: Project[]
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ projects }) => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = ['all', ...new Set(projects.map(project => project.category))]

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <button
            key={category}
            className={`btn btn-sm ${filter === category ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <figure className="px-4 pt-4">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="rounded-xl object-cover h-48 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{project.title}</h2>
              <p className="text-base-content">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-base-100 p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-primary mb-4">{selectedProject.title}</h2>
            <Image 
              src={selectedProject.imageUrl} 
              alt={selectedProject.title} 
              width={800} 
              height={600} 
              className="rounded-lg mb-4 object-cover w-full h-64"
            />
            <p className="text-base-content mb-4">{selectedProject.description}</p>
            <button 
              className="btn btn-primary"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

