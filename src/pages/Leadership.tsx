
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Lightbulb, Target, BookOpen } from "lucide-react";
import { useEffect } from "react";
import LeadershipBooksSection from "@/components/leadership/LeadershipBooksSection";
import LeadershipServicesSection from "@/components/leadership/LeadershipServicesSection";

const Leadership = () => {
  useEffect(() => {
    document.title = "Leadership & IT Career Expertise | Robes";
    const desc =
      "Leadership, public speaking, coaching and technology strategy for high-performing teams.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership</h1>
              <p className="text-lg text-muted-foreground">
                Combining technical expertise with leadership skills to inspire and guide teams towards excellence
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Leadership Philosophy</h2>
                <div className="space-y-4">
                  <p>
                    My leadership approach is built on a foundation of excellence, 
                    effective communication, and a deep commitment to developing those around me. 
                    I believe that great leaders don't just direct—they inspire, guide, and 
                    empower their teams to achieve their full potential.
                  </p>
                  <p>
                    In the rapidly evolving technology landscape, leadership requires both 
                    technical acumen and strong interpersonal skills. I strive to bridge 
                    these domains by maintaining technical proficiency while cultivating the 
                    emotional intelligence needed to lead diverse teams through complex challenges.
                  </p>
                  <p>
                    Public speaking is a cornerstone of my leadership practice. Whether addressing 
                    large audiences at conferences or facilitating team workshops, I use communication 
                    to clarify complex concepts, align team efforts, and inspire action.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card shadow-lg rounded-xl p-8 border border-border"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple">Core Leadership Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Users className="h-5 w-5 text-purple" />,
                      title: "Team Empowerment",
                      description: "Creating an environment where individuals are trusted and empowered to contribute their best work"
                    },
                    {
                      icon: <Lightbulb className="h-5 w-5 text-purple" />,
                      title: "Innovation & Creativity",
                      description: "Encouraging creative problem-solving and innovative approaches to technical challenges"
                    },
                    {
                      icon: <BookOpen className="h-5 w-5 text-purple" />,
                      title: "Continuous Learning",
                      description: "Fostering a culture of growth and knowledge-sharing within teams"
                    },
                    {
                      icon: <Target className="h-5 w-5 text-purple" />,
                      title: "Vision & Purpose",
                      description: "Setting clear direction and connecting daily work to meaningful objectives"
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="mt-1">{value.icon}</div>
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Speaking & Workshops</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Technical Leadership in Agile Environments",
                  image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
                  description: "A workshop focused on how technical leaders can drive agile adoption while maintaining technical excellence",
                  details: "3-hour interactive workshop | 50+ participants"
                },
                {
                  title: "Bridging the Gap: Technology and Business Communication",
                  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
                  description: "Keynote address on effective communication strategies for technical professionals when working with business stakeholders",
                  details: "Conference keynote | 300+ attendees"
                },
                {
                  title: "Building High-Performance Technical Teams",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                  description: "Strategies for assembling, motivating, and leading technical teams through challenging projects",
                  details: "Leadership summit presentation | 150+ attendees"
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border h-full flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
                    <div className="text-sm text-purple font-medium">{event.details}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-purple hover:bg-purple-light text-white">
                View All Speaking Engagements
              </Button>
            </div>
          </div>
        </section>

        <LeadershipBooksSection />
        <LeadershipServicesSection />

        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote: "An exceptional leader who seamlessly combines technical expertise with people skills. Their guidance transformed our team's approach to problem-solving.",
                  author: "Sarah Johnson",
                  role: "CTO, TechInnovate"
                },
                {
                  quote: "Their workshop on technical leadership was transformative for our organization. The practical insights and frameworks presented are still guiding our work months later.",
                  author: "Michael Chen",
                  role: "Engineering Director, DataSolutions"
                },
                {
                  quote: "A rare combination of technical brilliance and leadership acumen. Their ability to explain complex concepts in accessible ways makes them an invaluable mentor.",
                  author: "Priya Sharma",
                  role: "Senior Developer"
                },
                {
                  quote: "The keynote address at our conference was the highlight of the event. Insightful, engaging, and delivered with exceptional clarity and charisma.",
                  author: "Robert Torres",
                  role: "Conference Organizer, TechConnect"
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-md border border-border relative"
                >
                  <div className="absolute -top-5 left-6 text-4xl text-purple">"</div>
                  <blockquote className="pt-4">
                    <p className="italic text-muted-foreground">{testimonial.quote}</p>
                    <footer className="mt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </footer>
                  </blockquote>
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

export default Leadership;
