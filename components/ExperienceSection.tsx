import Image from 'next/image';
import { BlurFade } from './ui/blur-fade';
import LayeredText from './LayeredText';
import FreelanceLogo from "../public/images/freelancer-logo.png";

const responsibilitiesAsFreelancer: string[] = [
    "Developed and maintained web applications for diverse clients using React, Next.js, and Node.js.",
    "Developed secure backend APIs with Node.js, Express, and MongoDB.",
    "Integrated AI-powered features for automation and intelligent user experiences.",
    "Collaborated with clients to gather requirements and deliver tailored solutions.",
]
export default function ExperienceSection() {
    return (
        <div>
            {/* Experience Section */}
            <BlurFade delay={0.1} direction="up" inView>
                <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10 ">
                    <LayeredText heading="Experience" subheading="Professional Journey —" />

                    {/* <div className="flex gap-4 mb-9 ">
                        <div>
                            <Image
                                src="/assets/images/aivex.jpg"
                                alt="Aivex Logo"
                                width={50}
                                height={33}
                                className="object-cover rounded-lg max-w-[50px]"
                            />
                        </div>
                        <div className="space-y-6 mt-[-5px]">
                            <div>
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Full Stack Intern at Aivex
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    April 2025 - Present
                                </p>
                                <ul className="list-disc ml-5 flex flex-col gap-1 marker:text-[18px] ">
                                    {responsibilitiesAtAivex.map((responsibility, index) => {
                                        return (
                                            <li key={index} className="text-[16.5px]">
                                                {responsibility}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex gap-4">
                        <div>
                            <Image
                                src={FreelanceLogo}
                                alt="Freelancer Logo"
                                width={50}
                                height={33}
                                className="object-cover rounded-lg max-w-[50px]"
                            />
                        </div>
                        <div className="space-y-6 mt-[-5px]">
                            <div>
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Freelance Full Stack Developer
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    March 2024 - Present
                                </p>
                                <ul className="list-disc ml-5 flex flex-col gap-1 marker:text-[18px] ">
                                    {responsibilitiesAsFreelancer.map((responsibility, index) => {
                                        return (
                                            <li key={index} className="text-[16.5px]">
                                                {responsibility}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}
