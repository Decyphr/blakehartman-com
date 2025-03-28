import { CodeXmlIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import { BrutalistHeader } from "./brutalist-header";
import { FadeInSection } from "./motions/fade-in";
import { SectionSeparator } from "./section-separator";
import { Badge } from "./ui/badge";

const imageSrc = "https://picsum.photos/1600/900";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-COMMERCE PLATFORM",
    description: "Full-stack e-commerce solution with inventory management and payment processing.",
    image: imageSrc,
    category: "web",
    tags: ["NEXT.JS", "TYPESCRIPT", "STRIPE"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
    year: "2023",
  },
  {
    id: 2,
    title: "FINANCE DASHBOARD",
    description: "Interactive dashboard for financial data visualization and analysis.",
    image: imageSrc,
    category: "web",
    tags: ["REACT", "D3.JS", "FIREBASE"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
    year: "2022",
  },
  {
    id: 3,
    title: "FITNESS TRACKING APP",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    image: imageSrc,
    category: "mobile",
    tags: ["REACT NATIVE", "REDUX", "FIREBASE"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
    year: "2022",
  },
  {
    id: 4,
    title: "BRAND IDENTITY SYSTEM",
    description: "Complete brand identity design including logo, color palette, and style guide.",
    image: imageSrc,
    category: "design",
    tags: ["BRANDING", "LOGO DESIGN", "TYPOGRAPHY"],
    liveUrl: "https://example.com",
    featured: false,
    year: "2021",
  },
  {
    id: 5,
    title: "REAL ESTATE PLATFORM",
    description: "Property listing and management system with virtual tours and agent dashboard.",
    image: imageSrc,
    category: "web",
    tags: ["VUE.JS", "NODE.JS", "MONGODB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
    year: "2021",
  },
  {
    id: 6,
    title: "SOCIAL MEDIA DASHBOARD",
    description: "Analytics dashboard for tracking engagement across multiple social platforms.",
    image: imageSrc,
    category: "web",
    tags: ["REACT", "GRAPHQL", "CHART.JS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
    year: "2020",
  },
];

export default function ProjectShowcase() {
  return (
    <SectionSeparator id="projects">
      <FadeInSection>
        <BrutalistHeader title="Projects_" subtitle="A collection of work that has been done" />

        {/* Brutalist Project Gallery Grid */}
        <Carousel>
          <CarouselContent>
            {projects.map(project => (
              <CarouselItem
                key={project.id}
              >
                <div className="rounded-md overflow-hidden group shadow-sm bg-foreground text-background flex flex-col justify-between border-4 border-primary">
                  <div className="relative aspect-video overflow-hidden border-b border-primary">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                      <span className="font-mono text-sm">{project.year}</span>
                    </div>

                    <p className="mb-4 font-mono text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pt-6 flex gap-6 items-center justify-between">
            <Button variant="outline" size="wide" className="h-8 flex justify-between">
              View All Projects
              <CodeXmlIcon className="size-4" />
            </Button>
            <div className="flex items-center justify-end gap-6">
              <CarouselPrevious variant="default" className="md:min-w-[120px] md:justify-start md:pl-2" />
              <CarouselNext variant="default" className="md:min-w-[120px] md:justify-end md:pr-2" />
            </div>
          </div>
        </Carousel>
      </FadeInSection>
    </SectionSeparator>
  );
}
