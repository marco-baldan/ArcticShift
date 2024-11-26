import { FaLightbulb, FaLaptopCode, FaRocket, FaChartLine } from "react-icons/fa";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PortfolioGallery } from "../components/PortfolioGallery";
import ProcessSection from "../components/ProcessSection";
import DynamicTestimonials from "../components/Testimonials";

export default function WorkPage() {
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
      const processSteps = [
        {
          icon: <FaLightbulb />, 
          title: "Discovery",
          description: "Understanding your goals and audience.",
          subSteps: [
            { title: "Initial Meeting", description: "Discuss goals, challenges, and project scope." },
            { title: "Market Research", description: "Analyze competitors and industry standards." },
          ],
        },
        {
          icon: <FaLaptopCode />, 
          title: "Design & Development",
          description: "Crafting a user-friendly experience.",
          subSteps: [
            { title: "Wireframe Review", description: "Client feedback on wireframes for layout." },
            { title: "Prototype Revisions", description: "Iterate based on user feedback and testing." },
          ],
        },
        {
          icon: <FaRocket />, 
          title: "Launch",
          description: "Seamlessly bringing your project to life.",
          subSteps: [
            { title: "Pre-Launch Testing", description: "Quality assurance and final checks." },
            { title: "Deployment", description: "Launch the platform and monitor initial performance." },
          ],
        },
        {
          icon: <FaChartLine />,
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
    <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Work', href: '/work' }]} />
        <section>
    <h2 className="text-3xl font-bold text-primary mb-8">Our Portfolio</h2>
    <PortfolioGallery projects={projects} />
    </section>
    <ProcessSection title="Our Process"
        steps={processSteps} />
    <DynamicTestimonials />
    </div>
    </>
    );
};