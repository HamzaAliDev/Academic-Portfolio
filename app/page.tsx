import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-20 px-4 dark:text-[#A1A1AA]">
      <HeroSection />
      <ServiceCard />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
