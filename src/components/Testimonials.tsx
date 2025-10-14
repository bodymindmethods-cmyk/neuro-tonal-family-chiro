import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of 3",
      text: "Our whole family has experienced incredible improvements since starting care. My kids sleep better, my husband's stress levels are down, and I feel more balanced than ever."
    },
    {
      name: "James T.",
      role: "New Parent",
      text: "The gentle care our newborn received was amazing. The chiropractor took time to explain everything and made us feel completely comfortable. Our baby is thriving!"
    },
    {
      name: "Linda R.",
      role: "Retired Teacher",
      text: "After years of tension and discomfort, I finally found relief through neuro-tonal care. The approach is so gentle yet incredibly effective. I wish I'd found this years ago!"
    }
  ];

  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Families Are Saying
          </h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from families on their wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 shadow-soft hover:shadow-glow transition-smooth bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
