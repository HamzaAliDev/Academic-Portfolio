import LayeredText from "./LayeredText";
import Tool from "./Tool";
import { BlurFade } from "./ui/blur-fade";

export default function SkillSection() {
    return (
        <div className="w-full mt-15">
            {/* title */}
            <BlurFade delay={0.25} inView >
                <LayeredText heading="Tech Stack" subheading="Skills & Tools —" />
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView >
                <Tool />
            </BlurFade>
        </div>
    )
}
