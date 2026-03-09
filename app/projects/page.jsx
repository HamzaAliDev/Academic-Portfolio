import Link from "next/link";
import Image from "next/image";
import { projects } from "../../contants/projects-data";
import { BlurFade } from "@/components/ui/blur-fade";
import TechBadge from "@/components/ui/badge";

import { ArrowUpRight } from "lucide-react";
export const metadata = {
  title: "Projects",
  description: "Ali hamza Portfolio",
};

export default function Projects() {
  return (
    <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-28 pb-14 md:pt-36 px-4 dark:text-[#A1A1AA]">
      <div className="">
        <BlurFade direction="right" inView>
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-purple-500 via-violet-500 to-pink-500">
              Projects
            </span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.1} direction="down" inView>
          <p className=" text-lg mb-12 max-w-5xl mt-8">
           These projects demonstrate my work at the intersection of web application development,
            machine learning, and computer vision. I design responsive, high-performance interfaces 
            alongside intelligent ML-powered systems for visual analysis and automation.{" "}
            <span className="hidden md:inline">
               Each solution focuses on solving real-world problems with a balance of 
               innovation, reliability, and practical engineering.
            </span>
          </p>
        </BlurFade>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index}>
              <BlurFade blur="16px" delay={0.05 + index * 0.08} direction="down" inView>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-500  hover:shadow-xl group ">
                  {/* Background with Image */}
                  <div className="absolute -top-10 inset-0 bg-linear-to-br from-violet-100 via-white to-white dark:from-violet-900/30 dark:via-zinc-800/20 dark:to-zinc-900/40 flex items-center justify-center p-5">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.slug}
                      width={200}
                      height={200}

                      className="w-full object-contain transition-all duration-500 group-hover:blur-lg"
                    />
                  </div>

                  {/* Project Title at Bottom (Always Visible) */}
                  <div className="absolute bottom-2 left-0 right-0 px-6 py-4 dark:bg-linear-to-t from-black/30 to-transparent rounded-2xl ">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {
                        project.technologies.slice(0, 3).map((tech, index) => (
                          <TechBadge
                            key={index}
                            // name={tech.name}
                            imageSrc={tech.icon}
                          />

                        ))
                      }
                    </div>
                  </div>

                  {/* Hover Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 bg-[#00000000]">
                    <div className="text-center ">
                      <h3 className="text-xl font-semibold mb-2 mt-[-70px] text-violet-400">{project.title}</h3>
                      <div className="text-gray-600 text-sm mb-3 line-clamp-3 px-10" dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br />') }}
                      />

                      <div className="w-8 h-8 md:w-10 md:h-10 mx-auto bg-white/50 dark:bg-[#dedede1a] backdrop-blur-sm rounded-xl flex items-center justify-center hover:border hover:border-gray-900 dark:hover:border-grey-400 transition-all duration-300" >
                        <ArrowUpRight className="w-4 h-4  md:w-4.5 md:h-4.5 " />
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
