interface ServiceCardProps {
    title: string
    description: string
    icon: React.ReactNode
  }
  
  export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <figure className="px-10 pt-10">
          <div className="rounded-full bg-primary p-3 text-primary-content">
            {icon}
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{title}</h2>
          <p className="text-base-content">{description}</p>
        </div>
      </div>
    )
  }
  
  