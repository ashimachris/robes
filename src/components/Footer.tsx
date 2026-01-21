
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link 
              to="/" 
              className="text-2xl font-heading font-bold text-purple hover:text-purple-light transition-colors"
            >
              Robes <span className="text-white"> </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Connecting leadership with technology. Showcasing soft and hard skills expertise.
            </p>
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <p><strong>Email:</strong> <a href="mailto:agbachris555@gmail.com" className="hover:text-purple transition-colors">agbachris555@gmail.com</a></p>
              <p><strong>Phone/WhatsApp:</strong> <a href="https://wa.me/2348166797044" className="hover:text-purple transition-colors">+234 816 679 7044</a></p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-light p-2 rounded-full hover:bg-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-light p-2 rounded-full hover:bg-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-light p-2 rounded-full hover:bg-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="bg-dark-light p-2 rounded-full hover:bg-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-purple transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-400 hover:text-purple transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Robes Leadership || Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
