import { Baby, UserCheck, Activity, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Gentle, specialized care for infants and children to support optimal development and wellness from the very start."
    },
    {
      icon: UserCheck,
      title: "Prenatal Wellness",
      description: "Support for expectant mothers to maintain nervous system balance throughout pregnancy and prepare for birth."
    },
    {
      icon: Activity,
      title: "Family Wellness",
      description: "Comprehensive care for all ages, helping your entire family achieve and maintain optimal nervous system function."
    },
    {
      icon: Sparkles,
      title: "Wellness Coaching",
      description: "Guidance on lifestyle, nutrition, and stress management to complement your neuro-tonal adjustments."
    }
  ];

  return (
    <section id="services" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services for Every Family Member
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive neuro-tonal care tailored to your family's unique wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-soft transition-smooth hover:-translate-y-2 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-3 inline-flex p-3 rounded-xl warm-gradient">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
