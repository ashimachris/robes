
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
