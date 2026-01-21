import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";

const SpeakingTopics = () => {
  const topics = [
    {
      id: 1,
      title: "Leadership in the Digital Age",
      description: "Exploring modern leadership principles and how to lead effectively in today's technology-driven world.",
      duration: "45-60 minutes",
      audience: "Executives, Managers, Team Leaders",
      category: "Leadership",
      keyPoints: [
        "Digital transformation leadership",
        "Remote team management",
        "Building trust in virtual environments",
        "Leading through change"
      ]
    },
    {
      id: 2,
      title: "Effective Communication for Technical Leaders",
      description: "Bridging the gap between technical complexity and business understanding through clear communication.",
      duration: "30-45 minutes",
      audience: "Technical Managers, CTOs, Engineers",
      category: "Communication",
      keyPoints: [
        "Translating technical concepts for stakeholders",
        "Presentation skills for technical audiences",
        "Cross-functional collaboration",
        "Building executive presence"
      ]
    },
    {
      id: 3,
      title: "Building High-Performance Teams",
      description: "Strategies for creating, motivating, and sustaining high-performing teams in any organization.",
      duration: "60-90 minutes",
      audience: "Team Leaders, HR Professionals, Managers",
      category: "Team Building",
      keyPoints: [
        "Team dynamics and psychology",
        "Performance management strategies",
        "Conflict resolution techniques",
        "Creating psychological safety"
      ]
    },
    {
      id: 4,
      title: "Innovation and Strategic Thinking",
      description: "Developing innovative mindsets and strategic approaches to problem-solving in business.",
      duration: "45-60 minutes",
      audience: "Business Leaders, Entrepreneurs, Strategists",
      category: "Strategy",
      keyPoints: [
        "Design thinking methodologies",
        "Strategic planning frameworks",
        "Innovation culture development",
        "Risk management in innovation"
      ]
    },
    {
      id: 5,
      title: "Network Infrastructure and Security",
      description: "Understanding modern network architecture, security principles, and best practices for enterprise environments.",
      duration: "60-90 minutes",
      audience: "IT Professionals, System Administrators, Security Teams",
      category: "Technical",
      keyPoints: [
        "Network security fundamentals",
        "Infrastructure design principles",
        "Cloud networking strategies",
        "Security compliance frameworks"
      ]
    },
    {
      id: 6,
      title: "Public Speaking Mastery",
      description: "Developing confidence and skills for effective public speaking and presentation delivery.",
      duration: "90-120 minutes",
      audience: "Professionals, Students, Anyone seeking to improve speaking skills",
      category: "Personal Development",
      keyPoints: [
        "Overcoming speaking anxiety",
        "Audience engagement techniques",
        "Story-telling for impact",
        "Non-verbal communication"
      ]
    }
  ];

  const categories = ["All", "Leadership", "Communication", "Team Building", "Strategy", "Technical", "Personal Development"];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Speaking Topics</h1>
              <p className="text-lg text-muted-foreground">
                Explore my range of speaking topics covering leadership, technology, communication, and professional development
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {topic.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{topic.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-purple" />
                          <span className="font-medium">Duration:</span>
                          <span className="text-muted-foreground">{topic.duration}</span>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm">
                          <Users className="h-4 w-4 text-purple mt-0.5" />
                          <div>
                            <span className="font-medium">Target Audience:</span>
                            <p className="text-muted-foreground">{topic.audience}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <BookOpen className="h-4 w-4 text-purple" />
                          <span className="font-medium">Key Points:</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {topic.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple rounded-full" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Book a Speaking Engagement?</h2>
              <p className="text-muted-foreground mb-6">
                Contact me to discuss how these topics can be customized for your event, audience, and specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:speaking@robesleadership.com" 
                  className="bg-purple hover:bg-purple-light text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Book Speaking Engagement
                </a>
                <a 
                  href="/contact" 
                  className="border border-purple text-purple hover:bg-purple/10 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact for Details
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SpeakingTopics;