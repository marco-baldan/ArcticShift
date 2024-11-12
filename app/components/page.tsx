import { FaDesktop, FaSearch, FaBullhorn, FaChartLine, FaLightbulb, FaLaptopCode, FaRocket } from 'react-icons/fa';
import HeroType1 from './HeroType1';
import AboutUs from './AboutUs';
import ProcessSection from './ProcessSection';
import TechStack from './TechStack';
import FeaturesSection from './FeaturesSection';
import FeaturesSectionWithButton from './FeaturesSectionWithButton';
import ContactForm from './ContactForm';
import DynamicTestimonials from './Testimonials';
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
const contactInfo = {
    email: 'marco.baldan@hotmail.com',
    phone: '+44 (0) 7577717604',
    address: '39 Wellow Drive, Frome, Somerset'
  };
  const categories = [
    {
      title: "Our Tech Stack",
      items: [
        { prefix: "🚀", name: "Next.js" },
        { prefix: "⚛️", name: "React.js" },
        { prefix: "🌐", name: "Express.js" },
        { prefix: "🖥️", name: "Node.js" },
        { prefix: "🐍", name: "Python" },
        { prefix: "☁️", name: "AWS" },
        { prefix: "☁️", name: "Google Cloud" },
        { prefix: "📊", name: "MongoDB" },
      ],
    },
    {
      title: "Content Platforms",
      items: [
        { prefix: "🌐", name: "WordPress" },
        { prefix: "🛒", name: "Shopify" },
        { prefix: "📄", name: "Contentful" },
        { prefix: "💻", name: "Webflow" },
      ],
    },
    {
      title: "Marketing & Creative Tools",
      items: [
        { prefix: "📈", name: "HubSpot & CRM Integrations" },
        { prefix: "📈", name: "Google Analytics & SEO Tools" },
        { prefix: "💼", name: "Marketing Automation" },
        { prefix: "🎨", name: "Adobe Creative Suite" },
      ],
    },
  ];
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
  <AboutUs
      {...aboutUsContent}
      imagePosition="left"
    />
      <ProcessSection title="Our Process"
        steps={processSteps} />
      <TechStack
      categories={categories} />
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
    <ContactForm
      title="Get in Touch"
      subtitle="We are here to help you."
      contactInfo={contactInfo}
    />
        <DynamicTestimonials />
    </>      

);
}