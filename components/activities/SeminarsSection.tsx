"use client";

import { BlurFade } from "../ui/blur-fade";
import LayeredText from "../LayeredText";
import { ArrowRight, Calendar, MapPin, Mic } from "lucide-react";

interface Seminar {
  title: string;
  speaker: string;
  role: string;
  date: string;
  location: string;
  description: string;
  keyTakeaways: string[];
  tag: string;
  tagColor: string;
}

const seminars: Seminar[] = [
  {
    title: "The Future of Artificial Intelligence in Education",
    speaker: "Dr. Ahmed Khan",
    role: "Professor, AI & Data Sciences, GCUF",
    date: "February 2025",
    location: "GCUF Auditorium",
    description:
      "Explored how AI-powered adaptive learning systems and intelligent tutoring can transform education accessibility and quality.",
    keyTakeaways: [
      "AI-driven personalized learning paths",
      "LLMs in assessment and feedback",
      "Ethical considerations in EdTech AI",
    ],
    tag: "AI & Education",
    tagColor: "bg-purple-500",
  },
    {
    title: "Industry-Academia Bridge: Software Engineering Practices",
    speaker: "Engr. Naveed Sarwar",
    role: "CEO, Techloset Solutions",
    date: "November 2023",
    location: "GCUF Conference Hall",
    description:
      "A talk bridging the gap between academic knowledge and industry expectations in software engineering roles.",
    keyTakeaways: [
      "Agile & Scrum in real-world teams",
      "Code review and CI/CD pipelines",
      "Building a professional portfolio",
    ],
    tag: "Software Engineering",
    tagColor: "bg-teal-500",
  },
  {
    title: "Cybersecurity in the Age of AI",
    speaker: "Mr. Usman Tariq",
    role: "Security Analyst, CyberPak",
    date: "October 2024",
    location: "Virtual (Zoom)",
    description:
      "Discussed emerging cybersecurity threats amplified by AI, defensive AI strategies, and career paths in cybersecurity.",
    keyTakeaways: [
      "AI-generated phishing and deepfakes",
      "ML-based threat detection systems",
      "Zero Trust architecture principles",
    ],
    tag: "Cybersecurity",
    tagColor: "bg-orange-500",
  },
];

export default function SeminarsSection() {
  return (
    <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-14">
      {/* Title */}
      <BlurFade delay={0.15} inView>
        <LayeredText
          heading="Seminars"
          subheading="Knowledge through listening —"
        />
      </BlurFade>

      {/* Seminar Cards */}
      <BlurFade delay={0.2} inView>
        <div className="space-y-4">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#d4d4d434] dark:bg-[#27272B66] "
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Accent Bar */}
                <div
                  className={`hidden md:block w-1.5 ${seminar.tagColor} rounded-l-xl shrink-0`}
                />

                {/* Content */}
                <div className="flex-1 p-6 md:px-8 md:py-6">
                  {/* Top Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full text-white ${seminar.tagColor}`}
                    >
                      <Mic className="w-3 h-3" />
                      {seminar.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {seminar.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {seminar.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-50 mb-1 ">
                    {seminar.title}
                  </h3>

                  {/* Speaker */}
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-2">
                    {seminar.speaker}{" "}
                    <span className="text-gray-500 dark:text-gray-500 font-normal">
                      — {seminar.role}
                    </span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {seminar.description}
                  </p>

                  {/* Key Takeaways */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {seminar.keyTakeaways.map((takeaway, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <ArrowRight className="w-3 h-3 text-violet-400" />
                        {takeaway}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
