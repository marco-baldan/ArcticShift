import { FaDesktop, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import { Breadcrumbs } from "../components/Breadcrumbs";
import FeaturesSection from "../components/FeaturesSection";
import HeroType1 from "../components/HeroType1";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function SeoPage() {
  const featuresList = [
    {
      icon: <FaSearch className="text-primary text-3xl md:text-4xl" />,
      title: "Comprehensive SEO Audits",
      description:
        "Uncover areas for improvement with in-depth analysis of your website's SEO performance and technical health.",
    },
    {
      icon: <FaChartLine className="text-primary text-3xl md:text-4xl" />,
      title: "Keyword Strategy & Research",
      description:
        "Identify the best keywords to target your ideal audience and improve your search engine visibility.",
    },
    {
      icon: <FaBullhorn className="text-primary text-3xl md:text-4xl" />,
      title: "Content Optimisation",
      description:
        "Enhance your content to rank higher on search engines, driving more organic traffic and engagement.",
    },
    {
      icon: <FaDesktop className="text-primary text-3xl md:text-4xl" />,
      title: "Local SEO",
      description:
        "Optimise your online presence to attract more local customers and dominate your local market.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "SEO", href: "/seo" }]} />
        <HeroType1
          topText="Rank Higher, Reach Further"
          h1Text="SEO - Search Engine Optimisation"
          descText="Boost your online visibility and attract the right audience with our expert SEO strategies. Let us help your website stand out in search results."
          btn1Text="Get Started"
          btn2Text="Learn More"
          link1="/get-started"
          link2="/services/seo"
        />

        <section className="py-20 bg-base-100">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Unlock Your Website&apos;s Full Potential
          </h2>
          <div className="flex justify-around">
            <AnimatedCounter
              end={1000}
              duration={2000}
              suffix="+"
              label="Keywords Ready to Rank"
            />
            <AnimatedCounter
              end={75}
              duration={2000}
              suffix="%"
              label="Potential Increase in Organic Traffic"
            />
            <AnimatedCounter
              end={50}
              duration={2000}
              prefix="Up to "
              suffix="X"
              label="Return on Your SEO Investment"
            />
          </div>
        </section>

        <FeaturesSection features={featuresList} />
      </div>
    </>
  );
}
