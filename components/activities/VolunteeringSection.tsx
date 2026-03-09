"use client";

import { BlurFade } from "../ui/blur-fade";
import LayeredText from "../LayeredText";
import {
  Heart,
  BookOpen,
  Leaf,
  Monitor,
  Calendar,
  Clock,
  Users,
} from "lucide-react";

interface VolunteerItem {
  icon: React.ReactNode;
  title: string;
  organization: string;
  period: string;
  hours: string;
  impact: string;
  description: string;
  responsibilities: string[];
  accentColor: string;
  badgeColor: string;
}

const volunteeringData: VolunteerItem[] = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Tech Instructor & Mentor",
    organization: "GCUF Computer Science Society",
    period: "Sep 2025 – Present",
    hours: "120+ hours",
    impact: "30+ students mentored",
    description:
      "Mentored junior students in web development and programming fundamentals. Organized coding sessions and helped students prepare for competitive programming contests.",
    responsibilities: [
      "Conducted weekly coding workshops on JavaScript & React",
      "Provided one-on-one mentorship for final year projects",
      "Helped organize the annual departmental hackathon",
    ],
    accentColor: "text-violet-500",
    badgeColor: "bg-violet-500",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Academic Tutor",
    organization: "Teaching Assistant",
    period: "Jan 2024 – Jun 2024",
    hours: "80+ hours",
    impact: "40+ students supported",
    description:
      "Volunteered as a peer tutor for Data Structures and Algorithms courses. Created study guides and practice problem sets for exam preparation.",
    responsibilities: [
      "Tutored students in DSA concepts and problem-solving",
      "Developed practice worksheets for exam preparation",
      "Assisted professors in lab sessions as a teaching aide",
    ],
    accentColor: "text-sky-500",
    badgeColor: "bg-sky-500",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Campus Green Drive Volunteer",
    organization: "GCUF Environmental Society",
    period: "Mar 2024 – May 2024",
    hours: "40+ hours",
    impact: "200+ trees planted",
    description:
      "Participated in the university's green campus initiative. Helped organize tree plantation drives and awareness campaigns about environmental sustainability.",
    responsibilities: [
      "Coordinated tree plantation drives across campus",
      "Created social media content for awareness campaigns",
      "Managed volunteer registration and event logistics",
    ],
    accentColor: "text-emerald-500",
    badgeColor: "bg-emerald-500",
  },
];

export default function VolunteeringSection() {
  return (
    <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-14 mb-6">
      {/* Title */}
      <BlurFade delay={0.15} inView>
        <LayeredText
          heading="Volunteering"
          subheading="Giving back to the community —"
        />
      </BlurFade>

      {/* Volunteering Cards */}
      <BlurFade delay={0.2} inView>
        <div className="space-y-6">
          {volunteeringData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#d4d4d434] dark:bg-[#27272B66] rounded-xl overflow-hidden "
            >
              <div className="p-6 md:p-8">
                {/* Top Row: Icon + Title + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  <div
                    className={`shrink-0 w-12 h-12 ${item.badgeColor}/10 dark:${item.badgeColor}/20 rounded-xl flex items-center justify-center bg-opacity-10`}
                    style={{
                      backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)`,
                    }}
                  >
                    <span className={item.accentColor}>{item.icon}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full text-white ${item.badgeColor}`}
                      >
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:ml-16">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <ul className="list-none space-y-2 mb-4 md:ml-16">
                  {item.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.badgeColor}`}
                      />
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Footer Stats */}
                <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-gray-200/60 dark:border-gray-700/60 md:ml-16">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {item.hours}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Users className="w-3.5 h-3.5" />
                    {item.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
