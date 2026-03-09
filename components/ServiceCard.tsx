import { Gpu, BrainCircuit, Cpu } from 'lucide-react';
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
      icon: Cpu,
      color: "bg-sky-400",
      title: "Machine Learning",
      description: "Developing intelligent models that learn from datasets to provide predictive insights and automation.",
    },
    {
      icon: BrainCircuit,
      color: "bg-violet-400",
      title: "Deep Learning",
      description:"Exploring deep learning architectures to model complex data patterns, enabling intelligent systems for tasks.",
    },
    {
      icon: Gpu,
      color: "bg-rose-400",
      title: "Computer Vision ",
      description: "Applying advanced image processing and analysis techniques to enable machines to interpret and understand visual data.",
    },
    
  ]

  return (
    <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10">

      {/* title */}
      <BlurFade delay={0.15} inView >
        <LayeredText heading="Academic Interests" subheading="Future Directions —" />
      </BlurFade>

      {/* cards */}
      <BlurFade delay={0.2} inView >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-1">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-[#d4d4d434] dark:bg-[#27272B66] p-4 shadow-md flex flex-col items-start gap-4 min-h-40 ">
              <div
                className={`absolute -left-3 -top-3 flex h-[70px] w-[70px] items-center justify-center rounded-full ${feature.color}`}
              >
                <feature.icon className=" text-white ms-1 mt-1" size={28} />
              </div>
              <div className="px-3 py-4">
                <h3 className="text-heading-theme ms-7 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="py-2 text-theme mt-2 ps-2 text-md text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  )
}
