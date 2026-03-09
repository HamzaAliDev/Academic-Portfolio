import Safari from "@/components/ui/safari";
import TechBadge from "@/components/ui/badge";
import Link from "next/link";
import { BlurFade } from "./ui/blur-fade";
import LayeredText from "./LayeredText";
import { ChevronRight } from "lucide-react";

export default function HighlightedProjectCards() {
    const projects = [
        {
            title: "Face Recognition",
            slug: "face-recognition",
            description:
                "A computer vision based real-time face recognition system designed to identify individuals under challenging conditions such as poor lighting and partial occlusion.",
            imageSrc: "/projects/face-recognize.png",
            stack: [
                { name: "Next.js", imageSrc: "/tools/nextjs.webp" },
                { name: "NumPy", imageSrc: "/tools/numpy.png" },
                { name: "MongoDB", imageSrc: "/tools/mongodb.png" },
            ],
        },

        {
            title: "Face Privacy",
            description:
                "A computer vision based face blurring tool that detects and obscures faces in images and videos to enhance privacy and anonymize visual data.",
            href: "/projects/face-privacy",
            slug: "face-privacy",
            imageSrc: "/projects/face-privacy.png",
            stack: [
                { name: "Next.js", imageSrc: "/tools/nextjs.webp" },
                { name: "NumPy", imageSrc: "/tools/numpy.png" },
                { name: "OpenCV", imageSrc: "/tools/opencv.png" },
            ],
        }
        ,
        {
            title: "Spoof Detection",
            description:
                "A computer vision based eye blink spoof detection system that distinguishes real human blinks from fake attempts to enhance biometric security.",
            href: "/projects/eye-blink",
            slug: "eye-blink",
            imageSrc: "/projects/eye-blink.png",
            stack: [
                { name: "Next.js", imageSrc: "/tools/nextjs.webp" },
                { name: "NumPy", imageSrc: "/tools/numpy.png" },
                { name: "OpenCV", imageSrc: "/tools/opencv.png" },
            ],
        },
    ];

    return (
        <>
            <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10">
                {/* title */}
                <BlurFade delay={0.25} inView >
                    <LayeredText heading="Highlighted Projects" subheading="What I've been working on —" />
                </BlurFade>

                <BlurFade delay={0.45} direction="down" inView>
                    <div className="flex flex-wrap mt-1 gap-4">
                        {projects.map((project, index) => (
                            <Link href={`/projects/${project.slug}`} key={index}>
                                <div className="bg-[#d4d4d434] dark:bg-[#27272B66] cursor-pointer flex whitespace-nowrap text-4xl shadow-sm  w-[370px] rounded-xl ">
                                    <div className="project-card py-5 rounded-lg w-fit">
                                        <div className="flex justify-center overflow-hidden">
                                            <Safari
                                                className="w-[88%] h-min rounded-lg"
                                                imageSrc={project.imageSrc}
                                            />
                                        </div>
                                        <div className="px-5">
                                            <h2 className="font-semibold text-xl mt-3 mb-1.5 dark:text-gray-50">{project.title}</h2>
                                            <p className="text-sm text-wrap line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {project.stack.map((tech, index) => (
                                                    <TechBadge
                                                        key={index}
                                                        name={tech.name as any}
                                                        imageSrc={tech.imageSrc}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link href={"/projects"}>
                        <button className="border px-4 py-2 mt-4 rounded-lg flex hover:border-gray-300 dark:hover:border-zinc-700 cursor-pointer transition-all duration-100">
                            See all projects
                            <ChevronRight
                                size={18}
                                className="ml-0.5 mt-1 transition-all duration-100"
                            />
                        </button>
                    </Link>
                </BlurFade>
            </div>
        </>
    );
}
