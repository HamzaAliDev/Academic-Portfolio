"use client";

import { BlurFade } from "../ui/blur-fade";
import LayeredText from "../LayeredText";
import {
  BrainCircuit,
  Code,
  Presentation,
  Wrench,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

interface Workshop {
  icon: React.ReactNode;
  title: string;
  organizer: string;
  date: string;
  location: string;
  description: string;
  topics: string[];
  iconBgColor: string;
  link?: string;
}

const workshops: Workshop[] = [
  // {
  //   icon: <BrainCircuit className="w-5 h-5" />,
  //   title: "Hands-on Machine Learning with Python",
  //   organizer: "GCUF CS Department",
  //   date: "March 2025",
  //   location: "GCUF, Faisalabad",
  //   description:
  //     "An intensive workshop covering supervised and unsupervised machine learning algorithms. Built end-to-end ML pipelines using scikit-learn and TensorFlow on real-world datasets.",
  //   topics: ["Regression", "Classification", "Clustering", "TensorFlow"],
  //   iconBgColor: "bg-violet-600",
  //   link: "#",
  // },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full Stack Web Development Bootcamp",
    organizer: "Software Engineering Society, GCUF",
    date: "January 2024",
    location: "SE Department, GCUF",
    description:
      "A 3-day bootcamp focused on building production-ready web apps using React, Node.js, and MongoDB. Covered best practices for API design and frontend architecture.",
    topics: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    iconBgColor: "bg-sky-600",
    // link: "#",
  },
  // {
  //   icon: <Presentation className="w-5 h-5" />,
  //   title: "Computer Vision & Deep Learning Workshop",
  //   organizer: "AI Research Lab, GCUF",
  //   date: "November 2024",
  //   location: "GCUF, Faisalabad",
  //   description:
  //     "Explored CNN architectures, transfer learning, and real-time object detection techniques. Implemented YOLO-based detection pipeline as a hands-on project.",
  //   topics: ["CNNs", "Transfer Learning", "YOLO", "OpenCV"],
  //   iconBgColor: "bg-rose-600",
  //   link: "#",
  // },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Git & GitHub for Open Source Contribution",
    organizer: "GDSC GCUF",
    date: "September 2025",
    location: "Data Science Department, GCUF",
    description:
      "Learned collaborative development workflows using Git and GitHub. Practiced branching strategies, pull requests, and contributing to open source projects.",
    topics: ["Git", "GitHub", "Open Source", "CI/CD"],
    iconBgColor: "bg-amber-600",
    // link: "#",
  },
];

export default function WorkshopsSection() {
  return (
    <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10">
      {/* Title */}
      <BlurFade delay={0.15} inView>
        <LayeredText
          heading="Workshops"
          subheading="Hands-on learning experiences —"
        />
      </BlurFade>

      {/* Workshop Cards */}
      <BlurFade delay={0.2} inView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="group bg-[#d4d4d434] dark:bg-[#27272B66] rounded-xl p-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`${workshop.iconBgColor} text-white p-2.5 rounded-lg`}
                >
                  {workshop.icon}
                </div>
                {workshop.link && (
                  <a
                    href={workshop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-500 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 ">
                {workshop.title}
              </h3>
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
                {workshop.organizer}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {workshop.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {workshop.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-200/60 dark:border-gray-700/60 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {workshop.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {workshop.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
