import type { Metadata } from "next";
import ActivitiesAbout from "@/components/activities/ActivitiesAbout";
import WorkshopsSection from "@/components/activities/WorkshopsSection";
import SeminarsSection from "@/components/activities/SeminarsSection";
import VolunteeringSection from "@/components/activities/VolunteeringSection";
import { BlurFade } from "@/components/ui/blur-fade";
import ExperienceSection from "@/components/ExperienceSection";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore the extracurricular activities, workshops, seminars, and volunteering experiences of Ali Hamza.",
};

export default function ActivitiesPage() {
  return (
    <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-28 pb-14 md:pt-36 px-4 dark:text-[#A1A1AA]">
      {/* Page Header */}
      <div>
        <BlurFade direction="right" inView>
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-purple-500 via-violet-500 to-pink-500">
              Activities
            </span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.1} direction="down" inView>
          <p className="text-lg mb-12 max-w-5xl mt-8">
            Beyond academics, I actively participate in workshops, seminars, and
            volunteering opportunities that broaden my perspective and strengthen
            my skills.{" "}
            <span className="hidden md:inline">
              These experiences complement my technical journey with teamwork,
              leadership, and real-world exposure.
            </span>
          </p>
        </BlurFade>
      </div>

      {/* Sections */}
      <ActivitiesAbout />
      <ExperienceSection />
      <WorkshopsSection />
      <SeminarsSection />
      <VolunteeringSection />
    </div>
  );
}
