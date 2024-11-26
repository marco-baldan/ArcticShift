import { FaDesktop, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTA } from "../components/CTA";
import FeaturesSection from "../components/FeaturesSection";
import HeroType1 from "../components/HeroType1";
import { PortfolioGallery } from "../components/PortfolioGallery";

export default function DigitalMarketingPage() {
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

    return(
        <>
        <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Digital Marketing', href: '/digital-marketing' }]} />
        <HeroType1 
            topText=""
            h1Text="Digital Marketing"
            descText="Our Digital Marketing services"
            btn1Text="Get Started"
            btn2Text="Read Our Blog"
            link1="/get-started"
            link2="/blog"
        />
        <FeaturesSection features={featuresList} />
        <PortfolioGallery projects={projects}/>
        <CTA />
        </div>
        </>
    );
};