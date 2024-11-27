import { FaDesktop, FaSearch, FaBullhorn, FaChartLine, FaLightbulb, FaLaptopCode, FaRocket } from 'react-icons/fa';
import HeroType1 from './HeroType1';
import AboutUs from './AboutUs';
import ProcessSection from './ProcessSection';
import TechStack from './TechStack';
import FeaturesSection from './FeaturesSection';
import FeaturesSectionWithButton from './FeaturesSectionWithButton';
import DynamicTestimonials from './Testimonials';
import { PricingCard } from './PricingCard';
import { ServiceCard } from './ServiceCard';
import { CTA } from './CTA';
import { ProgressCircle } from './ProgressCircle';
import { InteractiveCard } from './InteractiveCards';
import { TimelineEvent } from './TimelineEvent';
import { FeatureShowcase } from './FeatureShowcase';
import { AnimatedCounter } from './AnimatedCounter';
import { ServiceComparison } from './ServiceComparison';
import { ResultsCarousel } from './ResultsCarousel';
import { PortfolioGallery } from './PortfolioGallery';
export default function Components() {


const aboutUsContent = {
    title: 'Our Journey',
    description: 'We started with a simple mission to revolutionize our industry.',
    points: [
      'Innovative solutions tailored for you.',
      'A dedicated team of experts.',
      'Global reach with local insights.',
    ],
    imageSrc: '/images/hero1.jpg',

}
const projects = [
  {
    id: '1',
    title: 'E-commerce Redesign',
    category: 'web design',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Complete overhaul of an e-commerce platform, resulting in a 40% increase in conversions.'
  },
  {
    id: '2',
    title: 'Local SEO Campaign',
    category: 'seo',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Boosted local search rankings for a chain of restaurants, increasing foot traffic by 25%.'
  },
  {
    id: '3',
    title: 'Social Media Strategy',
    category: 'digital marketing',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Developed and executed a social media strategy that doubled engagement rates.'
  },
  {
    id: '4',
    title: 'Mobile App UI/UX',
    category: 'web design',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Redesigned the UI/UX of a mobile app, improving user retention by 35%.'
  },
  {
    id: '5',
    title: 'Content Marketing Campaign',
    category: 'digital marketing',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Created and distributed high-quality content, resulting in a 50% increase in organic traffic.'
  },
  {
    id: '6',
    title: 'Technical SEO Audit',
    category: 'seo',
    imageUrl: '/placeholder.svg?height=300&width=400',
    description: 'Conducted a comprehensive technical SEO audit, fixing issues that led to a 30% boost in search visibility.'
  }
]
const results = [
  {
    id: '1',
    clientName: 'TechStart Inc.',
    metric: 'Increase in Organic Traffic',
    value: '150%',
    description: 'Our SEO strategies helped TechStart Inc. significantly boost their organic traffic over 6 months.'
  },
  {
    id: '2',
    clientName: 'GreenLeaf Ecommerce',
    metric: 'Conversion Rate Improvement',
    value: '75%',
    description: 'A combination of UX improvements and targeted marketing campaigns led to a substantial increase in GreenLeaf\'s conversion rates.'
  },
  {
    id: '3',
    clientName: 'MetroFit Gyms',
    metric: 'New Member Sign-ups',
    value: '200+',
    description: 'Our local SEO and PPC campaigns helped MetroFit Gyms attract over 200 new members in just 3 months.'
  }
]

const services = [
  {
    name: 'Basic',
    features: {
      'Website Design': true,
      'SEO Optimization': true,
      'Content Creation': false,
      'Social Media Management': false,
      'PPC Campaigns': false,
      '24/7 Support': false
    }
  },
  {
    name: 'Pro',
    features: {
      'Website Design': true,
      'SEO Optimization': true,
      'Content Creation': true,
      'Social Media Management': true,
      'PPC Campaigns': false,
      '24/7 Support': false
    }
  },
  {
    name: 'Enterprise',
    features: {
      'Website Design': true,
      'SEO Optimization': true,
      'Content Creation': true,
      'Social Media Management': true,
      'PPC Campaigns': true,
      '24/7 Support': true
    }
  }
]
  
  const featureWithButtonList = [
    {
      icon: <FaDesktop />,
      title: 'Professional Web Design',
      description: 'Crafting modern, responsive, and user-focused websites that drive engagement and conversions.',
      buttonText: 'Learn More',
      buttonLink: '/services/web-design',
    },
    {
      icon: <FaSearch />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boosting your online visibility and search rankings to reach the right audience effectively.',
      buttonText: 'Learn More',
      buttonLink: '/services/seo',
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Advertising',
      description: 'Creating targeted ad campaigns across Google, social media, and other platforms to grow your reach.',
      buttonText: 'Learn More',
      buttonLink: '/services/digital-advertising',
    },
    {
      icon: <FaChartLine />,
      title: 'Data-Driven Digital Marketing',
      description: 'Using data insights to craft personalized marketing strategies that yield measurable results.',
      buttonText: 'Learn More',
      buttonLink: '/services/digital-marketing',
    },
  ];

  const featuresList = [
    {
      icon: <FaDesktop className="text-primary text-3xl md:text-4xl" />,
      title: 'Professional Web Design',
      description: 'Crafting modern, responsive, and user-focused websites that drive engagement and conversions.',
    },
    {
      icon: <FaSearch className="text-primary text-3xl md:text-4xl" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boosting your online visibility and search rankings to reach the right audience effectively.',
    },
    {
      icon: <FaBullhorn className="text-primary text-3xl md:text-4xl" />,
      title: 'Digital Advertising',
      description: 'Creating targeted ad campaigns across Google, social media, and other platforms to grow your reach.',
    },
    {
      icon: <FaChartLine className="text-primary text-3xl md:text-4xl" />,
      title: 'Data-Driven Digital Marketing',
      description: 'Using data insights to craft personalized marketing strategies that yield measurable results.',
    },
    
  ];
  const processSteps = [
    {
      icon: <FaLightbulb />, // Pass the instantiated JSX element instead of the function
      title: "Discovery",
      description: "Understanding your goals and audience.",
      subSteps: [
        { title: "Initial Meeting", description: "Discuss goals, challenges, and project scope." },
        { title: "Market Research", description: "Analyze competitors and industry standards." },
      ],
    },
    {
      icon: <FaLaptopCode />, // Pass the instantiated JSX element
      title: "Design & Development",
      description: "Crafting a user-friendly experience.",
      subSteps: [
        { title: "Wireframe Review", description: "Client feedback on wireframes for layout." },
        { title: "Prototype Revisions", description: "Iterate based on user feedback and testing." },
      ],
    },
    {
      icon: <FaRocket />, // Pass the instantiated JSX element
      title: "Launch",
      description: "Seamlessly bringing your project to life.",
      subSteps: [
        { title: "Pre-Launch Testing", description: "Quality assurance and final checks." },
        { title: "Deployment", description: "Launch the platform and monitor initial performance." },
      ],
    },
    {
      icon: <FaChartLine />, // Pass the instantiated JSX element
      title: "Growth",
      description: "Driving sustained growth.",
      subSteps: [
        { title: "Performance Analytics", description: "Monthly reporting on key metrics." },
        { title: "Continuous Optimization", description: "Ongoing adjustments to maximize impact." },
      ],
    },
  ];
return(
    <>
    <HeroType1 
    topText="Welcome to Our Agency"
    h1Text="Boost Your Online Presence"
    descText="We specialize in web design, SEO, and digital marketing to help your business grow."
    btn1Text="Get Started"
    btn2Text="Read Our Blog"
    link1="/get-started"
    link2="/blog"
  />
        <section className="py-20 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Premium Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard 
            title="Bespoke Web Solutions" 
            description="Tailored web applications that set new industry standards."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
          <ServiceCard 
            title="Elite Mobile Experiences" 
            description="Cutting-edge mobile apps that redefine user engagement."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
          />
          <ServiceCard 
            title="Strategic UX/UI Design" 
            description="Intuitive designs that elevate your brand and captivate users."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
          />
        </div>

      </section>
      <CTA />
  <AboutUs
      {...aboutUsContent}
      imagePosition="left"
    />
      <ProcessSection title="Our Process"
        steps={processSteps} />
      <TechStack />
        <FeaturesSection 
        features={featuresList} 
        title="Our Features" 
        description="We provide cutting-edge features to bring the best user experience." 
      />
              <FeaturesSectionWithButton 
        features={featureWithButtonList} 
        title="Our Features" 
        description="We provide cutting-edge features to bring the best user experience." 
      />
    
        <DynamicTestimonials />
        <section className="py-20 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Tailored Solutions for Your Success</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <PricingCard 
            title="Startup Accelerator" 
            price="$999/mo" 
            features={["5 Team Members", "50 Projects", "100GB Cloud Storage", "24/7 Support"]}
          />
          <PricingCard 
            title="Business Elite" 
            price="$2,499/mo" 
            features={["Unlimited Team Members", "Unlimited Projects", "1TB Cloud Storage", "24/7 Priority Support", "Custom Integrations"]}
            isPopular={true}
          />
          <PricingCard 
            title="Enterprise Suite" 
            price="Custom" 
            features={["Bespoke Solutions", "Dedicated Account Manager", "On-Premise Deployment Options", "Custom SLA", "Executive Dashboard"]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Progress Circles</h2>
        <div className="flex justify-around">
          <ProgressCircle percentage={75} />
          <ProgressCircle percentage={90} size={150} strokeWidth={10} />
          <ProgressCircle percentage={60} size={100} strokeWidth={6} />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Interactive Cards</h2>
        <div className="flex justify-around">
          <InteractiveCard 
            frontContent={<h3 className="text-2xl font-bold">Hover Me</h3>}
            backContent={<p className="text-center">Discover our premium features and unparalleled service.</p>}
          />
          <InteractiveCard 
            frontContent={<h3 className="text-2xl font-bold">Elite Service</h3>}
            backContent={<p className="text-center">24/7 dedicated support and personalized solutions.</p>}
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Company Timeline</h2>
        <div className="space-y-8">
          <TimelineEvent 
            date="2023"
            title="Global Expansion"
            description="Opened offices in 5 new countries, extending our reach to every continent."
          />
          <TimelineEvent 
            date="2022"
            title="Series C Funding"
            description="Secured $100M in funding to accelerate product development and market growth."
          />
          <TimelineEvent 
            date="2021"
            title="Product Launch"
            description="Successfully launched our flagship product, revolutionizing the industry."
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Feature Showcase</h2>
        <FeatureShowcase 
          features={[
            { title: "Advanced Analytics", description: "Gain deep insights with our cutting-edge analytics tools.", icon: "/images/hero1.jpg" },
            { title: "Secure Platform", description: "Your data is protected with enterprise-grade security measures.", icon: "/images/hero1.jpg" },
            { title: "24/7 Support", description: "Our expert team is always available to assist you.", icon: "/images/hero1.jpg" },
          ]}
          image="/images/hero1.jpg"
        />
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Animated Counter</h2>
        <div className="flex justify-around">
          <AnimatedCounter end={1000} duration={2000} suffix="+" />
          <AnimatedCounter end={50} duration={2000} prefix="$" suffix="M" />
          <AnimatedCounter end={99} duration={2000} suffix="%" />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Our Portfolio</h2>
        <PortfolioGallery projects={projects} />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Client Success Stories</h2>
        <ResultsCarousel results={results} />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>
        <ServiceComparison services={services} />
      </section>
          </>      

);
}