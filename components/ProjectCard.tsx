import Link from "next/link"
import Image from "next/image"
import { projects } from "@/contants/project";
import { div } from "framer-motion/client";
import { BlurFade } from "./ui/blur-fade";
import LayeredText from "./LayeredText";
import { ChevronRight } from "lucide-react";

type cardComponentProps = {
    length?: number;
    showIcon?: boolean;
};

export default function PageCard({ length, showIcon }: cardComponentProps) {

    // Limit the number of projects displayed based on the length prop
    const projectsToShow = length ? projects.slice(0, length) : projects;
    const filteredProjects = length ? projectsToShow : projects;
    return (
        <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10">
            {/* title */}
            <BlurFade delay={0.25} inView >
                <LayeredText heading="Projects" subheading="What I've been working on —" />
            </BlurFade>

            <BlurFade delay={0.25} inView >
                <div className="flex flex-wrap gap-6">
                    {filteredProjects.map((project, index) => (

                        <div key={index} className="w-[375px] group overflow-hidden rounded-xl bg-[#d4d4d434] dark:bg-[#27272B66] shadow-md  hover:shadow-lg">
                            <div className={` p-10 overflow-hidden flex items-center justify-center relative ${project.colorGradient}`}
                                style={{ height: "241px" }}>
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    // placeholder="blur"
                                    alt={project.title}
                                    width={200}
                                    height={80}
                                    className="h-auto w-auto object-cover"
                                />
                                {project.featured && (
                                    <div className="absolute left-0 top-4 rounded-r-lg bg-linear-to-r from-purple-600 to-fuchsia-600 px-3 py-1 text-xs font-medium text-white">
                                        Featured
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold dark:text-gray-50">{project.title}</h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                                <div className=" flex flex-wrap gap-2 justify-between items-center">
                                    <div className="bg-green-200/50 dark:bg-[#15291D] border border-green-100/80 dark:border-[#15291D] px-1 rounded-md text-sm  inline-block">
                                        <div className="inline-flex items-center">
                                            <div className="relative flex items-center justify-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
                                                <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                                            </div>
                                            <span className=" ms-1 -mt-0.5 dark:text-gray-50">All systems operational</span>
                                        </div>
                                    </div>

                                    <div>
                                        <Link href='/projects' className=" cursor-pointer flex items-center justify-center">
                                            <span className="font-light text-gray-400">View Details</span>
                                            <ChevronRight className="text-gray-400" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="flex mt-10">
                    <Link href='/projects' className=" border-2 py-2 px-4 rounded-md cursor-pointer flex items-center justify-center gap-2">
                        <span className="font-medium text-gray-400">See All Projects</span>
                        <ChevronRight className="text-gray-400" />
                    </Link>
                </div>
            </BlurFade>
        </div>
    )
}