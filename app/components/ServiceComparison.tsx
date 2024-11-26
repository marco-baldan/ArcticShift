import React from 'react'
import { Check, X } from 'lucide-react'

interface Service {
  name: string
  features: {
    [key: string]: boolean
  }
}

interface ServiceComparisonProps {
  services: Service[]
}

export const ServiceComparison: React.FC<ServiceComparisonProps> = ({ services }) => {
  const allFeatures = Array.from(
    new Set(services.flatMap(service => Object.keys(service.features)))
  )

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="bg-base-200">Feature</th>
            {services.map(service => (
              <th key={service.name} className="bg-base-200 text-center">{service.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map(feature => (
            <tr key={feature}>
              <td className="font-medium">{feature}</td>
              {services.map(service => (
                <td key={`${service.name}-${feature}`} className="text-center">
                  {service.features[feature] ? (
                    <Check className="inline-block text-success" />
                  ) : (
                    <X className="inline-block text-error" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

