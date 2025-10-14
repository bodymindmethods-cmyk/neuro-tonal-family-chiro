import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      link: "tel:5551234567"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@talskytonal.com",
      link: "mailto:info@talskytonal.com"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "123 Wellness Way, Health City, HC 12345",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Fri: 9am-6pm, Sat: 9am-2pm",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            We're here to answer your questions and welcome your family
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="border-2 hover:shadow-soft transition-smooth"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground mb-1">
                            {info.title}
                          </p>
                          {info.link.startsWith('#') ? (
                            <p className="text-sm text-foreground">{info.detail}</p>
                          ) : (
                            <a 
                              href={info.link}
                              className="text-sm text-foreground hover:text-primary transition-smooth"
                            >
                              {info.detail}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-2 p-6 bg-accent/50 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-bold text-lg mb-3">New Patient Special</h4>
              <p className="text-muted-foreground mb-4">
                Your first visit includes a comprehensive neuro-tonal assessment and consultation—perfect for understanding how we can help your family thrive.
              </p>
              <Button className="hero-gradient text-white">
                Schedule Now
              </Button>
            </Card>
          </div>

          <Card className="border-2 shadow-soft p-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="border-2"
                />
              </div>
              <div>
                <Textarea
                  placeholder="How can we help your family?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-2 min-h-32"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full hero-gradient text-white text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
