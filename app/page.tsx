import { FaDesktop, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import FeaturesSectionWithButton from "./components/FeaturesSectionWithButton";
import HeroType2 from "./components/HeroType2";
import { AnimatedCounter } from "./components/AnimatedCounter";
import DynamicTestimonials from "./components/Testimonials";
import { CTA } from "./components/CTA";


export default function Home() {
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

  return (
    <>
      <main>
    <HeroType2 
    src="/images/hero1.jpg"
    alt="Hero background"
    h1text ="Hello there" 
    ptext= "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
    btntext="Get in Touch"
    />
    <FeaturesSectionWithButton 
        features={featureWithButtonList} 
        title="Our Features" 
        description="We provide cutting-edge features to bring the best user experience." 
      />
      <DynamicTestimonials />
      <CTA />

      </main>
    </>
  );
}
