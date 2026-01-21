import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Calendar, User, Briefcase, GraduationCap, Award, Code, Users, Presentation } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would need to upload an actual PDF resume
    link.download = 'Robes_Leadership_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Technology Leader | UI/UX Designer | Network Administrator
              </p>
              <Button 
                onClick={handleDownload}
                size="lg"
                className="bg-purple hover:bg-purple-light text-white"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume PDF
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-background rounded-xl shadow-lg border border-border p-8 md:p-12">
              
              {/* Header Section */}
              <div className="text-center mb-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple/20">
                  <img 
                    src="/lovable-uploads/4652b48a-8c14-4955-b97c-df998d2d7d3e.png" 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-2">Christian Agba</h2>
                <p className="text-xl text-purple font-medium mb-4">Technology Leader & UI/UX Specialist</p>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    contact@robesleadership.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +234 816 679 7044
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Abuja, Nigeria
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-6 w-6 text-purple" />
                  <h3 className="text-2xl font-bold">Professional Summary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Purpose-driven technology leader with 10+ years of experience bridging the gap between technical excellence and people-centered leadership. 
                  Specializing in UI/UX design, network architecture, and team development, I bring a unique blend of technical depth and transformative 
                  leadership to drive organizational growth and innovation.
                </p>
              </motion.section>

              {/* Work Experience */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-6 w-6 text-purple" />
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-purple pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold">Senior Technology Lead</h4>
                      <span className="text-sm bg-purple/10 text-purple px-2 py-1 rounded">2022 - Present</span>
                    </div>
                    <p className="text-purple font-medium mb-2">InnovateTech Solutions</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Leading cross-functional teams in developing cutting-edge solutions</li>
                      <li>• Mentoring junior team members and fostering leadership development</li>
                      <li>• Architecting scalable systems and user-centered interfaces</li>
                      <li>• Bridging technical concepts with business objectives</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-purple pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold">UI/UX Designer & Developer</h4>
                      <span className="text-sm bg-purple/10 text-purple px-2 py-1 rounded">2018 - 2022</span>
                    </div>
                    <p className="text-purple font-medium mb-2">DesignForward Agency</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Created intuitive user interfaces using Figma and modern frameworks</li>
                      <li>• Implemented front-end solutions for diverse client projects</li>
                      <li>• Collaborated with stakeholders to translate requirements into designs</li>
                      <li>• Conducted user research and usability testing</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-purple pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold">Network Engineer</h4>
                      <span className="text-sm bg-purple/10 text-purple px-2 py-1 rounded">2014 - 2018</span>
                    </div>
                    <p className="text-purple font-medium mb-2">GlobalConnect Systems</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Designed and implemented enterprise network infrastructure</li>
                      <li>• Managed network security and performance optimization</li>
                      <li>• Provided technical support for international clients</li>
                      <li>• Created documentation and training materials</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Code className="h-6 w-6 text-purple" />
                  <h3 className="text-2xl font-bold">Core Skills</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple" />
                      Leadership
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Team Management</li>
                      <li>• Public Speaking</li>
                      <li>• Project Management</li>
                      <li>• Mentoring</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-5 w-5 text-purple" />
                      Technical
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• UI/UX Design (Figma)</li>
                      <li>• Web Development</li>
                      <li>• Network Architecture</li>
                      <li>• Graphics Design</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Presentation className="h-5 w-5 text-purple" />
                      Communication
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Technical Writing</li>
                      <li>• Stakeholder Management</li>
                      <li>• Cross-functional Collaboration</li>
                      <li>• Training & Development</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Education & Certifications */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-purple" />
                  <h3 className="text-2xl font-bold">Education & Certifications</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Bachelor of Science in Computer Science</p>
                        <p className="text-muted-foreground">University of Abuja • 2010-2014</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Professional Certifications</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Certified Network Professional (CNP)</p>
                      <p>• UI/UX Design Certification</p>
                      <p>• Project Management Professional (PMP)</p>
                      <p>• Leadership Development Certificate</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <div className="text-center mt-12 pt-8 border-t border-border">
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="bg-purple hover:bg-purple-light text-white"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Version
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resume;