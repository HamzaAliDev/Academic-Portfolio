import Image from 'next/image'
import { BlurFade } from './ui/blur-fade'
import GcufLogo from "../public/images/gcuf-logo.png"
import KipsLogo from "../public/images/kips-logo.jpeg"
import LayeredText from './LayeredText'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function EducationSection() {
    return (
        <div>
            {/* Education Section */}
            <BlurFade delay={0.1} direction="up" inView>
                <div className="mt-16 max-w-[900px]">
                    <LayeredText heading="Education" subheading="Academic Background —" />

                    <div className="space-y-9">
                        <div className="flex gap-4 ">
                            <div>
                                <Image
                                    src={GcufLogo}
                                    alt="GCUF Logo"
                                    width={50}
                                    height={33}
                                    className="object-cover rounded-lg max-w-[50px]"
                                />
                            </div>
                            <div className="mt-[-5px]">
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Bachelor of Computer Science <span><Link href="https://gcuf.edu.pk/" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 inline-block ms-1 -mt-1" /></Link></span>
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    GCUF Faisalabad, 2022 - Present
                                </p>
                                <p className="text-[16.5px]">
                                    Pursuing a Computer Science degree with a strong academic focus on software development,
                                    core computational theory, and practical applications of AI.
                                    I have maintained a CGPA of
                                    <span className="text-violet-400 font-bold">&nbsp;3.73 / 4.0</span> through my 7 semesters.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div>
                                <Image
                                    src={KipsLogo}
                                    alt="RCS Logo"
                                    width={50}
                                    height={40}
                                    className="object-cover rounded-lg max-w-[50px]"
                                />
                            </div>

                            <div className="mt-[-5px]">
                                <p className="text-lg font-semibold dark:text-gray-50">
                                    Faculty of Science FSC <span><Link href="https://kips.edu.pk/" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 inline-block ms-1 -mt-1" /></Link></span>
                                </p>
                                <p className="text-md dark:text-gray-200 mt-1 mb-3">
                                    KIPS College FSD, 2019 - 2021
                                </p>
                                <p className="text-[16.5px]">
                                    Completed intermediate studies with a focus on science
                                    subjects, achieving an outstanding score of
                                    <span className="text-violet-400">&nbsp;96%</span>. This
                                    period helped me build a strong foundation in analytical
                                    thinking and problem-solving skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}
