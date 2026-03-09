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
                    <p className="text-lg md:text-lg leading-relaxed text-foreground/80 ">
                        I&apos;m a 8th-semester Computer Science student at <span className="font-semibold">GCUF</span>,
                        My academic journey is driven by a strong motivation to explore
                        how intelligent systems and AI can solve real-world problems.
                        With a solid foundation in <span className="font-semibold dark:text-white">data structures</span>, 
                        <span className="font-semibold dark:text-white"> algorithms</span>, modern <span className="font-semibold dark:text-white">web technologies</span> and 
                        <Highlighter action="circle" color="#FF9800"><span className="font-semibold dark:text-white">&nbsp;Artificial Inteligence</span></Highlighter>.
                        I focus on building high-performance web applications and AI-enhanced solutions.
                    </p>

                    <p className="text-lg md:text-lg leading-relaxed text-foreground/80 mt-5">
                        I have hands-on experience with <span className="font-semibold dark:text-white">Computer Vision</span> techniques, 
                        <Highlighter action="highlight" color="#87CEFA" iterations={1}><span className="font-semibold dark:text-white">&nbsp;Machine Learning </span></Highlighter> models and <span className="font-semibold dark:text-white"> AI-driven </span>solutions. 
                        I aim to advance my knowledge through research in these areas. Curious, disciplined, and dedicated, I focus on 
                        combining theoretical understanding with practical experimentation to build impactful, intelligent applications.
                        
                    </p>
                </BlurFade>
            </div>
        </div>
    )
}
