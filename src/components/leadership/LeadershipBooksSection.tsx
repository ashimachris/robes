import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    title: "Leading with Clarity",
    subtitle: "Principles for Technical and People Leadership",
    description:
      "A concise guide to communicating vision, aligning teams, and shipping outcomes without sacrificing technical excellence.",
    cta: { label: "Read Summary", href: "/speaking-topics" },
  },
  {
    title: "Bridging Tech and Business",
    subtitle: "Communicate Value, Drive Impact",
    description:
      "Frameworks to translate complex engineering work into clear business outcomes that executives understand and support.",
    cta: { label: "Preview Chapter", href: "/projects" },
  },
  {
    title: "High-Performance Teams",
    subtitle: "Scale Culture, Speed, and Quality",
    description:
      "Practical playbooks for hiring, mentoring, and creating a culture of ownership that delivers consistently.",
    cta: { label: "Get Updates", href: "/contact" },
  },
];

export default function LeadershipBooksSection() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Books & Writing</h2>
          <p className="text-muted-foreground mt-2">
            Insights on leadership, communication, and building great technical teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {books.map((book, i) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover-scale"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{book.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{book.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-6">{book.description}</p>
              <a
                href={book.cta.href}
                className="inline-flex items-center gap-2 text-primary story-link"
                aria-label={`${book.cta.label} for ${book.title}`}
              >
                {book.cta.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
