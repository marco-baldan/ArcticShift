import { FaDesktop, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import FeaturesSectionWithButton from "./components/FeaturesSectionWithButton";
import HeroType2 from "./components/HeroType2";
import DynamicTestimonials from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "designbath.",
  description: "Web Designers in Bath",
  openGraph: {
    title: "designbath.",
    description: "Web Designers in Bath",
    url: "https://www.designbath.co.uk",
    type: "website",
    images: [
      {
        url: "https://www.designbath.co.uk/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "designbath. - Web Designers in Bath",
      },
    ],
    siteName: "designbath",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@designbath",
    creator: "@designbath",
  },
};

export default function Home() {
  const featureWithButtonList = [
    {
      icon: <FaDesktop />,
      title: "Professional Website Design",
      description:
        "Designing sleek, responsive, and user-centred websites that enhance engagement and drive results.",
      buttonText: "Learn More",
      buttonLink: "/services/web-design",
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimisation (SEO)",
      description:
        "Improving your online presence and search rankings to connect with your target audience effectively.",
      buttonText: "Learn More",
      buttonLink: "/services/seo",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Advertising",
      description:
        "Developing targeted ad campaigns on Google, social media, and beyond to expand your reach.",
      buttonText: "Learn More",
      buttonLink: "/services/digital-advertising",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Marketing",
      description:
        "Leveraging data insights to create bespoke marketing strategies that deliver tangible outcomes.",
      buttonText: "Learn More",
      buttonLink: "/services/digital-marketing",
    },
  ];

  return (
    <>
      <main>
        <HeroType2
          src="/images/hero1.jpg"
          alt="Hero background"
          h1text="Welcome to designbath."
          ptext="Elevating your digital presence with bespoke web solutions. Let us help you create meaningful connections online."
          btntext="Get in Touch"
        />

        <FeaturesSectionWithButton
          features={featureWithButtonList}
          title="What We Offer"
          description="Explore our tailored services designed to elevate your digital presence and deliver exceptional results."
        />

        <DynamicTestimonials />
        <CTA />
      </main>
    </>
  );
}
