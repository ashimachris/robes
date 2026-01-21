
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Leadership Summit",
    description: "Organized and led a conference focused on leadership and opportunities for professionals.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    category: "Leadership",
    technologies: ["Event Planning", "Public Speaking", "Networking"],
    liveUrl: "https://example.com/summit"
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    description: "Workshop designed to improve public speaking skills, focusing on presentation techniques and audience engagement strategies.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1970&auto=format&fit=crop",
    category: "Leadership",
    technologies: ["Communication", "Leadership", "Presentation Skills"],
    liveUrl: "https://example.com/workshop"
  },
  {
    id: 3,
    title: "Team Collaboration Platform",
    description: "Custom-built collaboration platform designed to streamline team communication and project management workflows.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "Development",
    technologies: ["Vue.js", "Express", "Socket.io"],
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Web Master",
    description: "Modern web application built with React and Node.js, featuring real-time data processing and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    category: "Development",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/webapp"
  },
  {
    id: 5,
    title: "UI/UX Design System",
    description: "Comprehensive design system created with Figma, establishing consistent patterns and components for product development.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    category: "Design",
    technologies: ["Figma", "UI/UX", "Design Systems"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/design"
  },
  {
    id: 6,
    title: "Network Infrastructure Upgrade",
    description: "Enterprise network architecture redesign and implementation for a multinational corporation, enhancing security and performance.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    category: "Networking",
    technologies: ["Network Architecture", "Security", "Infrastructure"]
  },
];

const categories = ["All", "Development", "Design", "Networking", "Leadership"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
              <p className="text-lg text-muted-foreground">
                A showcase of technical projects, leadership initiatives, and creative works
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-purple hover:bg-purple-light" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-purple text-white text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-border rounded-md hover:bg-secondary transition-colors"
                              aria-label="View on GitHub"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-border rounded-md hover:bg-secondary transition-colors"
                              aria-label="View live project"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="text-purple hover:text-purple-light">
                          Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
