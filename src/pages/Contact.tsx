
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question about my work or interested in collaborating? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-purple" />,
                  title: "Email",
                  description: "contact@robesleadership.com",
                  info: "Typically responds within 24 hours"
                },
                {
                  icon: <Phone className="h-6 w-6 text-purple" />,
                  title: "Phone",
                  description: "+234 816 679 7044",
                  info: "Available Monday-Friday, 9am-5pm EST"
                },
                {
                  icon: <MapPin className="h-6 w-6 text-purple" />,
                  title: "Location",
                  description: "Abuja, Nigeria",
                  info: "Available for remote work worldwide"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-md border border-border text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-medium mb-1">{item.description}</p>
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-purple p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                    <div className="space-y-6">
                      <p>
                        I'm always interested in hearing about new opportunities, 
                        collaborations, or just connecting with fellow professionals.
                      </p>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-white/80" />
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-sm text-white/80">Monday-Friday, 9am-5pm EST</p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 font-medium">Connect on social media:</p>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.linkedin.com/in/christopher-agba-910bb9193?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFJmpt%2FWQK%2B3rppLIC2NjQ%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>
                          <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            aria-label="Twitter"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                          </a>
                          <a 
                            href="https://github.com/ashimachris" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            aria-label="GitHub"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="md:col-span-3 p-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <ContactForm />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="bg-secondary/50 rounded-xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Looking for a Speaker?</h3>
              <p className="text-muted-foreground mb-6">
                I'm available for speaking engagements on topics related to technology leadership, 
                technical communication, and bridging the gap between technology and business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:speaking@robesleadership.com" 
                  className="bg-purple hover:bg-purple-light text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Book for Speaking
                </a>
                <a 
                  href="/speaking-topics" 
                  className="border border-purple text-purple hover:bg-purple/10 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  View Speaking Topics
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

export default Contact;
