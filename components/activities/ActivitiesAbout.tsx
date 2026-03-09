import { BlurFade } from "../ui/blur-fade";
import LayeredText from "../LayeredText";
import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    color: "bg-amber-400",
    label: "Leadership",
    description: "Led student teams in university-level tech events and hackathons.",
  },
  {
    icon: Target,
    color: "bg-violet-400",
    label: "Research-Driven",
    description: "Contributed to AI/ML workshops and academic-level research studies.",
  },
  {
    icon: Users,
    color: "bg-sky-400",
    label: "Community",
    description: "Engaged in open-source communities and tech volunteer programs.",
  },
  {
    icon: TrendingUp,
    color: "bg-emerald-400",
    label: "Growth",
    description: "Consistently seeking opportunities for intellectual development.",
  },
];

export default function ActivitiesAbout() {
  return (
    <div className="w-full md:w-[82%] lg:w-[82%] mx-auto my-10">
      {/* Title */}
      <BlurFade delay={0.15} inView>
        <LayeredText heading="About" subheading="My extracurricular journey —" />
      </BlurFade>

      {/* Description */}
      <div className="-mt-3 ms-3">
        <BlurFade delay={0.2} inView>
          <p className="text-lg md:text-lg leading-relaxed text-foreground/80">
            Outside the classroom, I actively seek opportunities that help me
            grow as a well-rounded individual. From organizing and attending
            tech workshops to volunteering in community-driven initiatives,
            these experiences have sharpened my{" "}
            <span className="font-semibold dark:text-white">
              communication
            </span>
            ,{" "}
            <span className="font-semibold dark:text-white">
              problem-solving
            </span>
            , and{" "}
            <span className="font-semibold dark:text-white">leadership</span>{" "}
            abilities.
          </p>

          <p className="text-lg md:text-lg leading-relaxed text-foreground/80 mt-5">
            I believe in the power of collaborative learning and giving back to
            the community. Whether it&apos;s mentoring juniors, participating in
            hackathons, or attending academic seminars, every experience adds a
            new dimension to my journey as a{" "}
            <span className="font-semibold dark:text-white">
              computer science student
            </span>{" "}
            and an{" "}
            <span className="font-semibold dark:text-white">
              aspiring researcher
            </span>
            .
          </p>
        </BlurFade>
      </div>

      {/* Highlight Cards */}
      <BlurFade delay={0.25} inView>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-[#d4d4d434] dark:bg-[#27272B66] p-5 shadow-sm"
            >
              <div
                className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-3`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
