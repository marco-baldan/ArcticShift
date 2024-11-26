import { FaDesktop, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import { Breadcrumbs } from "../components/Breadcrumbs";
import FeaturesSection from "../components/FeaturesSection";
import HeroType1 from "../components/HeroType1";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function SeoPage() {
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
    return(
        <>
        <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'SEO', href: '/seo' }]} />
        <HeroType1 
            topText=""
            h1Text="SEO - Search Engine Optimisation"
            descText="Our web development services"
            btn1Text="Get Started"
            btn2Text="Read Our Blog"
            link1="/get-started"
            link2="/blog"
        />
        <section className="py-20 bg-base-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Animated Counter</h2>
            <div className="flex justify-around">
            <AnimatedCounter end={1000} duration={2000} suffix="+" />
            <AnimatedCounter end={50} duration={2000} prefix="$" suffix="M" />
            <AnimatedCounter end={99} duration={2000} suffix="%" />
            </div>
        </section>
        <FeaturesSection features={featuresList}/>
        </div>
        </>
    );
};