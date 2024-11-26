interface PricingCardProps {
    title: string
    price: string
    features: string[]
    isPopular?: boolean
  }
  
  export const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular = false }) => {
    return (
      <div className={`card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${isPopular ? 'border-2 border-primary' : ''}`}>
        {isPopular && <div className="badge badge-primary absolute right-2 top-2">Most Popular</div>}
        <div className="card-body">
          <h2 className="card-title justify-center text-primary">{title}</h2>
          <p className="text-center text-4xl font-bold text-base-content">{price}</p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="card-actions justify-center mt-6">
            <button className={`btn ${isPopular ? 'btn-primary' : 'btn-outline btn-primary'} btn-block`}>Choose Plan</button>
          </div>
        </div>
      </div>
    )
  }
  
  