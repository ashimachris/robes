
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  youtubeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Leadership Summit",
    description: "Organized and led a leadership conference for professionals",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    category: "Leadership",
    youtubeUrl: "https://www.youtube.com/channel/UCTBvtGeUdEun20bPP2hZRPw"
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    description: "Workshop designed to improve public speaking skills",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1970&auto=format&fit=crop",
    category: "Leadership",
    youtubeUrl: "https://www.youtube.com/channel/UCTBvtGeUdEun20bPP2hZRPw"
  },
  {
    id: 3,
    title: "Web Master",
    description: "Modern web application built with React and Node.js",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    category: "Development"
  },
  {
    id: 4,
    title: "UI/UX Design System",
    description: "Comprehensive design system created with Figma",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    category: "Design"
  },
  {
    id: 5,
    title: "Network Infrastructure Upgrade",
    description: "Enterprise network architecture redesign and implementation",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    category: "Networking"
  },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Showcasing my diverse expertise and accomplishments</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous project">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next project">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div 
          ref={carouselRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: -activeIndex * 320 }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              damping: 30
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[280px] md:min-w-[320px] p-3"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg hover-scale">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-purple text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    {project.youtubeUrl && (
                      <div className="mt-3">
                        <a 
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-purple hover:text-purple-light text-sm font-medium transition-colors"
                        >
                          <Youtube className="h-4 w-4 mr-1" />
                          Watch on YouTube
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
