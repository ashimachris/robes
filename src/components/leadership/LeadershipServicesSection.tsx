import { motion } from "framer-motion";
import { Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Leadership Coaching",
    description:
      "1:1 and team coaching to uplevel communication, ownership, and execution across engineering teams.",
  },
  {
    icon: Lightbulb,
    title: "Technology Strategy",
    description:
      "Clarity on roadmaps, architecture tradeoffs, and aligning delivery to measurable business outcomes.",
  },
  {
    icon: Target,
    title: "Speaking & Workshops",
    description:
      "High-impact talks and hands-on sessions on leadership, agile delivery, and technical excellence.",
  },
];

export default function LeadershipServicesSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-muted-foreground mt-2">
            Practical, outcomes-focused support for leaders and teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <svc.icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{svc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{svc.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <a href="/contact" aria-label="Enquire about services">
              Enquire about Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
