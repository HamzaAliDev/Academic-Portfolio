import LayeredText from "./LayeredText";
import { BlurFade } from "./ui/blur-fade";
import { Highlighter } from "./ui/highlighter";

export default function AboutSection() {
    return (
        <div className="w-full md:w-[82%] lg:w-[82%] mx-auto my-10 ">
            {/* title */}
            <BlurFade delay={0.25 * 3} inView >
                <LayeredText heading="About" subheading="A short story of me —" />
            </BlurFade>

            {/* Content Section */}
            <div className="-mt-3 ms-3">
                <BlurFade delay={0.15} inView >
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
                        I&apos;m a 7th-semester Computer Science student at <span className="font-semibold">GCUF</span>,
                        My academic journey is driven by a strong motivation to explore
                        how intelligent systems and AI can solve real-world problems.
                        With a solid foundation in <span className="font-semibold dark:text-white">algorithms</span>, <span className="font-semibold dark:text-white">data structures, AI</span>, and modern
                        <Highlighter action="circle" color="#FF9800"><span className="font-semibold dark:text-white">&nbsp;web development</span></Highlighter>.
                        I focus on building high-performance web applications and
                        AI-enhanced solutions.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light mt-5">
                        My interests span across <span className="font-semibold dark:text-white">Machine Learning</span>,
                        <Highlighter action="highlight" color="#A684FF" iterations={1}><span className="font-normal dark:text-white">&nbsp;Artificial Intelligence</span></Highlighter>, and
                        <span className="font-semibold dark:text-white">&nbsp;Full-Stack Engineering</span>,
                        and I aim to pursue advanced research in these
                        areas through the international Master&apos;s programs. I combine strong technical skills
                        with continuous curiosity, disciplined learning, and a passion for turning complex
                        ideas into impactful, intelligent applications.
                    </p>
                </BlurFade>
            </div>
        </div>
    )
}
