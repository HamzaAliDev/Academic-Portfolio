import AboutSection from "@/components/AboutSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ResearchSection from "@/components/ResearchSection";
import ServiceCard from "@/components/ServiceCard";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-20 px-4 dark:text-[#A1A1AA]">
      <HeroSection />
      <AboutSection />
      <ServiceCard />
      <EducationSection />
      <ResearchSection />
      <ProjectCard />
      <SkillSection />
      <CertificateSection />
      <ContactSection />
    </div>
  );
}
