import { FaDesktop, FaRocket, FaCode, FaTools, FaCloud } from "react-icons/fa";
import { Breadcrumbs } from "../components/Breadcrumbs";
import FeaturesSection from "../components/FeaturesSection";
import HeroType1 from "../components/HeroType1";
import TechStack from "../components/TechStack";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { CTA } from "../components/CTA";

export default function WebDevelopmentPage() {
  const featuresList = [
    {
      icon: <FaDesktop className="text-primary text-3xl md:text-4xl" />,
      title: "Responsive Website Design",
      description:
        "Creating visually appealing, mobile-friendly designs to ensure seamless user experiences across devices.",
    },
    {
      icon: <FaCode className="text-primary text-3xl md:text-4xl" />,
      title: "Framework Expertise",
      description:
        "Specialising in modern frameworks like Node.js, Next.js, Shopify, and WordPress to build scalable solutions.",
    },
    {
      icon: <FaCloud className="text-primary text-3xl md:text-4xl" />,
      title: "Cloud Hosting Solutions",
      description:
        "Leveraging top cloud providers like AWS, Azure, and Google Cloud for reliable and scalable hosting services.",
    },
    {
      icon: <FaTools className="text-primary text-3xl md:text-4xl" />,
      title: "Maintenance & Support",
      description:
        "Providing ongoing support and updates to keep your website secure, fast, and running smoothly.",
    },
    {
      icon: <FaRocket className="text-primary text-3xl md:text-4xl" />,
      title: "Performance Optimisation",
      description:
        "Optimising website performance for faster load times, improved SEO, and enhanced user satisfaction.",
    },
  ];

  const projects = [
    {
      id: "1",
      title: "E-commerce Redesign",
      category: "web design",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Complete overhaul of an e-commerce platform, resulting in a 40% increase in conversions.",
    },
    {
      id: "2",
      title: "Local SEO Campaign",
      category: "seo",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Boosted local search rankings for a chain of restaurants, increasing foot traffic by 25%.",
    },
    {
      id: "3",
      title: "Social Media Strategy",
      category: "digital marketing",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Developed and executed a social media strategy that doubled engagement rates.",
    },
    {
      id: "4",
      title: "Mobile App UI/UX",
      category: "web design",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Redesigned the UI/UX of a mobile app, improving user retention by 35%.",
    },
    {
      id: "5",
      title: "Content Marketing Campaign",
      category: "digital marketing",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Created and distributed high-quality content, resulting in a 50% increase in organic traffic.",
    },
    {
      id: "6",
      title: "Technical SEO Audit",
      category: "seo",
      imageUrl: "/placeholder.svg?height=300&width=400",
      description:
        "Conducted a comprehensive technical SEO audit, fixing issues that led to a 30% boost in search visibility.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[{ label: "Web Development", href: "/web-development" }]}
        />
        <HeroType1
          topText="Building the Future of Your Business Online"
          h1Text="Web Development Excellence"
          descText="From custom frameworks to cloud hosting, we deliver scalable, secure, and high-performing web solutions tailored to your needs."
          btn1Text="Get Started"
          btn2Text="Explore Our Blog"
          link1="/get-started"
          link2="/blog"
        />

        <FeaturesSection features={featuresList} />
        <section className="py-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            🚀 Our Tech Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Explore the tools, platforms, and technologies we use to build
            scalable, secure, and high-performing web solutions.
          </p>
          <TechStack />
        </section>

        <PortfolioGallery projects={projects} />
        <CTA />
      </div>
    </>
  );
}
