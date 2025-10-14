import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Talsky Tonal Chiropractic</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Nurturing families through gentle, neuro-tonal care that honors your body's innate wisdom.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <p className="text-primary-foreground/80 mb-2">
              Phone: (555) 123-4567
            </p>
            <p className="text-primary-foreground/80 mb-2">
              Email: info@talskytonal.com
            </p>
            <p className="text-primary-foreground/80">
              123 Wellness Way<br />
              Health City, HC 12345
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 fill-current" /> for family wellness
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            © {new Date().getFullYear()} Talsky Tonal Chiropractic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
