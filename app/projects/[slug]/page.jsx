import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../../../contants/projects-data";


export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    return {
        title: ` ${project.title}`,
        description: `${project.description}`
    }
}
export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[900px] mx-auto pt-28 md:pt-36 px-4 text-black dark:text-[#A1A1AA]">
            <div className="max-w-6xl mx-auto space-y-10 mb-5">
                {/* Header */}
                <div className="flex items-center justify-between gap-y-6 flex-wrap">
                    <div className="mb-8 flex items-center">
                        <button className="mr-4 rounded-full p-2">
                            <Link href="/projects">
                                <ArrowLeft className="h-5 w-5" />
                                <span className="sr-only">Back to projects</span>
                            </Link>
                        </button>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-purple-500 via-violet-500 to-pink-500">
                            {project.title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        {project.isApp ? (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={project.githubUrlFrontened}
                                className="bg-[#d4d4d434] dark:bg-[#26262656] px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 rounded-lg flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300"
                            >
                                <span className="text-sm font-medium">
                                    Frontend
                                </span>
                                <Github className="w-4 h-4" />
                            </a>
                        ) : (
                            project.liveUrl && <a
                                target="_blank"
                                href={project.liveUrl}
                                className="ps-5 bg-[#d4d4d445] dark:bg-[#26262683] px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 rounded-lg flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-all duration-300 "
                            >
                                <span className="text-sm font-medium">
                                    Live URL
                                </span>
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.githubUrl}
                            className="bg-[#d4d4d434] dark:bg-[#26262656] px-4 py-3 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 rounded-lg flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300"
                        >
                            <span className="text-sm font-medium">
                                {project.isApp ? "Backend" : "Github"}
                            </span>
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Overview */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Overview</h2>
                    <div
                        className="text-black dark:text-gray-400 text-[17px] leading-relaxed whitespace-pre-line tracking-[0.4px]"
                        dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br />') }}
                    />
                </section>

                {/* Technologies */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Technologies</h2>
                    <ul className="flex flex-col gap-3">
                        {project.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center w-[200px] gap-3 p-3 rounded-lg transition-all duration-300"
                            >
                                <Image
                                    src={tech.icon}
                                    width={24}
                                    height={24}
                                    alt={tech.name}
                                    className="rounded"
                                />
                                <li className="text-gray-600 dark:text-gray-400">
                                    {tech.name}
                                </li>
                            </div>
                        ))}
                    </ul>
                </section>

                {/* Features */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <span className="text-gray-400 font-normal">#</span>{" "}
                        Features
                    </h2>
                    <ul className="grid gap-3 text-black dark:text-gray-400 list-disc pl-5">
                        {project.features.map((feature, index) => (
                            <li key={index} className="pl-2 text-[17px]">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}