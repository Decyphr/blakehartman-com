import { Code, Globe, Smartphone } from "lucide-react";

import { BrutalistHeader } from "./brutalist-header";
import { LottieAnimation } from "./lottie-animation";
import { FadeInSection } from "./motions/fade-in";
import { SectionSeparator } from "./section-separator";
import { Badge } from "./ui/badge";

// Service data
const services = [
  {
    id: 1,
    title: "Website Development",
    icon: Globe,
    animation: "website",
    description:
      "Custom websites built with modern technologies that deliver exceptional user experiences. Specializing in Next.js and Payload CMS to create fast, scalable, and content-rich web applications.",
    technologies: ["NEXT.JS", "PAYLOAD CMS", "TYPESCRIPT", "TAILWIND CSS", "VERCEL"],
    features: [
      "Responsive designs that work on all devices",
      "Content management systems for easy updates",
      "SEO optimization for better visibility",
      "Performance optimization for fast loading",
      "Secure authentication and authorization",
      "API integration with third-party services",
      "Analytics and tracking implementation",
      "Accessibility compliance",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Software Development",
    icon: Code,
    animation: "software",
    description:
      "Robust software solutions tailored to your business needs. From backend services to full-stack applications, I build reliable software using a variety of languages and frameworks.",
    technologies: ["NODE.JS", "PYTHON", "GOLANG", "POSTGRESQL", "MONGODB", "AWS", "DOCKER"],
    features: [
      "Custom API development",
      "Database design and optimization",
      "Cloud infrastructure setup and management",
      "Microservices architecture",
      "Real-time data processing",
      "Automated testing and CI/CD pipelines",
      "Performance monitoring and logging",
      "Scalable and maintainable codebases",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: Smartphone,
    animation: "mobile",
    description:
      "Cross-platform mobile applications that provide native-like experiences. Using React Native to build apps that work seamlessly on both iOS and Android from a single codebase.",
    technologies: ["REACT NATIVE", "EXPO", "REDUX", "FIREBASE", "APP STORE", "PLAY STORE"],
    features: [
      "Cross-platform development for iOS and Android",
      "Native device feature integration",
      "Offline functionality",
      "Push notifications",
      "Authentication and user management",
      "In-app purchases",
      "Analytics and crash reporting",
      "App store submission assistance",
    ],
    link: "#",
  },
];

export function Services() {
  return (
    <SectionSeparator id="services">
      <FadeInSection>
        <BrutalistHeader title="Services_" subtitle="Solutions tailored to your specific needs" />
        {services.map((service, index) => (
          <FadeInSection key={service.id}>
            <div className={`py-12 lg:py-20 ${index !== services.length - 1 ? "border-b-2 border-black" : ""}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Service Icon & Title */}
                <div className="md:col-span-4 flex flex-col items-center lg:flex-col-reverse lg:items-start gap-6">
                  <div className="max-w-md lg:max-w-xs mt-0 mb-6 md:mt-6">
                    <LottieAnimation
                      animation={service.animation as "website" | "software" | "mobile"}
                    />
                  </div>
                  <div className="max-w-none md:max-w-xs flex items-center">
                    <div className="p-4 rounded-full bg-foreground text-background border-2 border-black mr-4">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase">{service.title}</h3>
                  </div>
                </div>

                {/* Service Description & Technologies */}
                <div className="md:col-span-8">
                  <p className="text-lg mb-8 font-mono">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase font-bold mb-4 font-mono">Technologies_</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map(tech => (
                        <Badge key={tech}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm uppercase font-bold mb-4 font-mono">Features_</h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-start font-mono text-sm">
                          <span className="mr-2">—</span>
                          {" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="md:hidden mt-6 uppercase">
                    <Link href={service.link} className={cn(buttonVariants({ variant: "default" }), "w-full flex items-center justify-between")}>
                      Learn_more
                      {" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </FadeInSection>
    </SectionSeparator>
  );
}
