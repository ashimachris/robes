
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-muted-foreground">
                A Transformative leader intersecting technology and leadership
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
                <h2 className="text-3xl font-bold">My Value Journey</h2>
                <div className="space-y-4">
                  <p>
                    <b>Tech-Savvy Leader | UI/UX & Frontend Specialist | Network Architect</b><br></br>
                    With 10+ years in leadership, I specialize in bridging creative design with technical execution
                    from user interfaces and scalable networks to team growth and strategic thinking. 
                    I’m passionate about helping people and businesses thrive through smart, user-centered solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple to-purple-dark opacity-30 rounded-2xl z-10"></div>
                  <img
                    src="/lovable-uploads/4652b48a-8c14-4955-b97c-df998d2d7d3e.png"
                    alt="Professional portrait"
                    className="rounded-2xl shadow-xl object-cover h-full w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-purple text-white p-4 rounded-xl shadow-lg">
                    <p className="font-heading font-bold">10+ Years</p>
                    <p className="text-sm">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
                  title: "Leadership",
                  description: "Project management, leadership development and public speaking expertise"
                },
                {
                  icon: <code className="text-3xl">&#123;&#125;</code>,
                  title: "Development",
                  description: "Web master, prompt engineer with focus on modern framework and clean architecture "
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
                  title: "UI/UX Design",
                  description: "Creating intuitive and visually appealing interfaces with Figma and other design tools"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 16.99L20 20.99C20 21.54 19.55 21.99 19 21.99L5 21.99C4.45 21.99 4 21.54 4 20.99L4 16.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16L12 4M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
                  title: "Networking",
                  description: "Network architecture and infrastructure design for enterprise environments"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-purple/10 rounded-full flex items-center justify-center mb-4 text-purple">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Timeline</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {[
                {
                  year: "2022 - Present",
                  role: "Senior Technology Lead",
                  company: "InnovateTech Solutions",
                  description: "Leading cross-functional teams in developing cutting-edge solutions while mentoring junior team members"
                },
                {
                  year: "2018 - 2022",
                  role: "UI/UX Designer & Developer",
                  company: "DesignForward Agency",
                  description: "Created intuitive user interfaces and implemented front-end solutions for diverse client projects"
                },
                {
                  year: "2014 - 2018",
                  role: "Network Engineer",
                  company: "GlobalConnect Systems",
                  description: "Designed and implemented enterprise network infrastructure solutions for international clients"
                },
                {
                  year: "2010 - 2014",
                  role: "Software Developer",
                  company: "CodeCraft Technologies",
                  description: "Developed web applications and internal tools using various programming languages and frameworks"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 ${index % 2 === 0 ? 'ml-auto pl-12 pr-0' : 'mr-auto pr-12 pl-0'} w-full md:w-[calc(50%-20px)]`}
                >
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-center md:justify-start md:left-[calc(0%-20px)] md:right-auto">
                    <div className={`w-10 h-10 rounded-full border-4 border-background bg-purple z-10 ${index % 2 === 0 ? 'md:-translate-x-full' : ''}`}></div>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                    <div className="text-sm font-medium text-purple mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <div className="text-muted-foreground mb-3">{item.company}</div>
                    <p>{item.description}</p>
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

export default About;
