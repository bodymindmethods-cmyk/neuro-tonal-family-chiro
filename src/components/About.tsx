import { Brain, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import neuroImage from "@/assets/neuro-wellness.jpg";

const About = () => {
  const principles = [
    {
      icon: Brain,
      title: "Neuro-Tonal Focus",
      description: "We focus on optimizing nervous system tone, allowing your body's innate intelligence to express optimal health naturally."
    },
    {
      icon: Heart,
      title: "Gentle & Precise",
      description: "Using the Talsky tonal technique, we deliver specific, gentle adjustments that work with your body's natural healing capacity."
    },
    {
      icon: Users,
      title: "Family-Centered Care",
      description: "From newborns to seniors, we provide compassionate care tailored to each family member's unique needs and wellness journey."
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Talsky Tonal Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unique approach to chiropractic care that honors your nervous system's innate wisdom
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img 
              src={neuroImage}
              alt="Nervous system wellness - neuro-tonal chiropractic focus"
              className="rounded-3xl shadow-soft w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              What is Neuro-Tonal Chiropractic?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neuro-tonal chiropractic recognizes that your nervous system controls and coordinates every function in your body. When interference exists, your body cannot function at its best.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Talsky tonal technique uses precise, gentle touches to reduce nervous system tension, allowing your body to shift from stress mode to healing mode. This approach is safe for all ages and promotes natural, lasting wellness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rather than simply treating symptoms, we focus on removing interference so your body can heal itself from the inside out.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-accent">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
