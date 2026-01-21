
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Leadership",
  "Speaking Engagement",
  "WebMaster & Prompt Engineer",
  "Network Administrator",
  "UI/UX Design (Figma)",
  "Graphics Design",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-lg">
                <p>
                <b>Inspiring Leadership. Delivering Tech Solutions.</b><br></br>
                  I’m a purpose-driven leader passionate about empowering others to lead by 
                  unlocking their hidden potential. My mission is to inspire leadership by example 
                  helping individuals and teams grow into their capabilities.
                </p>
                <p>
                  With a strong foundation in computer technologies, including programming, networking, research, and UI/UX design
                  I bring both technical depth and people-centered thinking to the table.
                </p>
                <p>
                  Over the years, I’ve developed a reputation for translating complex tech concepts into practical solutions. 
                  My ability to lead teams, communicate clearly, and balance soft and hard skills has allowed me to bridge the gap 
                  between technology and its real-world impact.
                </p>
                <p>
                  Whether I’m designing intuitive user experiences or architecting scalable systems, 
                  I approach every challenge with a blend of analytical problem-solving and creative thinking. 
                  I'm committed to continuous learning and staying ahead in a fast-evolving tech landscape.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-card shadow-lg rounded-xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-purple" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Professional Philosophy</h4>
                <blockquote className="pl-4 border-l-4 border-purple italic text-muted-foreground">
                  "Transformative Leadership that inspires team and organization to reach new heightes combined with Technical excellence."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
