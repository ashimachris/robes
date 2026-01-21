
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10 dark:opacity-20">
        <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-purple blur-3xl"></div>
        <div className="absolute left-20 bottom-20 w-64 h-64 rounded-full bg-purple-dark blur-3xl"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where <span className="text-purple">Leadership</span> Meets <span className="text-purple">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Empowering teams and businesses through a unique blend of people skills and technical expertise.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-purple hover:bg-purple-light text-white">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple text-foreground hover:text-purple">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple/20 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple/60 to-purple-dark/60 mix-blend-overlay z-10"></div>
            <img 
              src="/lovable-uploads/7fb1d335-f2b4-40fc-8b02-9e509637d22e.png" 
              alt="Professional portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
