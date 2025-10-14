import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Improved sleep quality and patterns",
    "Enhanced immune system function",
    "Better stress response and emotional balance",
    "Reduced tension and physical discomfort",
    "Improved focus and mental clarity",
    "Enhanced digestive function",
    "Better posture and body awareness",
    "Support for natural healing processes"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Benefits of Neuro-Tonal Care
            </h2>
            <p className="text-xl text-muted-foreground">
              When your nervous system functions optimally, your whole body thrives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-accent/50 border-2 border-primary/20 animate-fade-in">
            <p className="text-lg text-center text-foreground leading-relaxed">
              <span className="font-bold text-primary">Remember:</span> These benefits emerge naturally as your body's innate intelligence is freed from nervous system interference. We don't treat conditions—we optimize function.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
