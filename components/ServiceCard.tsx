import { Globe, BrainCircuit, Rocket } from 'lucide-react';
import LayeredText from './LayeredText';
import { BlurFade } from './ui/blur-fade';

type Feature = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  title: string;
  description: string;
};
export default function ServiceCard() {
  const features: Feature[] = [
    {
      icon: Globe,
      color: "bg-sky-400",
      title: "Modern Applications",
      description: "Designing and developing high-performance web & mobile apps with modern frameworks and great user experience.",
    },
    {
      icon: BrainCircuit,
      color: "bg-violet-400",
      title: "AI-Powered Systems",
      description: "Integrating cutting-edge AI technologies to create intelligent, real-time, agentic and interactive applications.",
    },
    {
      icon: Rocket,
      color: "bg-rose-400",
      title: "Optimized Solutions",
      description: "Crafting scalable systems with fast load times, optimized SEO, and best development practices for future growth."
    },
  ]

  return (
    <div className="w-full mt-15">

      {/* title */}
      <BlurFade delay={0.25 * 3} inView >
        <LayeredText heading="Professional Highlights" subheading="I like building things —" />
      </BlurFade>

      {/* cards */}
      <BlurFade delay={0.15} inView >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-[#d4d4d434] dark:bg-[#27272B66] p-4 shadow-md flex flex-col items-start gap-4 min-h-40 ">
              <div
                className={`absolute -left-3 -top-3 flex h-[70px] w-[70px] items-center justify-center rounded-full ${feature.color}`}
              >
                <feature.icon className=" text-white ms-1 mt-1" size={28} />
              </div>
              <div className="p-4 ">
                <h3 className="text-heading-theme ms-8 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="py-2 text-theme mt-2 text-md text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  )
}
