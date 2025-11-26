import Image from "next/image"
import ProfilePic from "@/public/images/profile.png"
import { AuroraText } from "@/components/ui/aurora-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { Lens } from "@/components/ui/lens"
import {
    GitHubButton,
    InstagramButton,
    LinkedInButton,
    WhatsAppButton,
} from "@/components/social-links"
// import Button from './Button/Button'

export default function HeroSection() {
    return (
        <div className="mt-10 hero-section w-full mx-auto flex flex-col items-center justify-center md:px-4">
            {/* Status Badge */}
            < div className="my-2 w-full max-w-[600px] mx-auto md:mx-0" >
                <BlurFade delay={0.25} inView>
                    <div className='flex items-center justify-center mb-4 '>
                        <div className="inline-flex items-center gap-2 px-4 py-2">
                            <div className="relative flex items-center justify-center">
                                <div className="w-7 h-7 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative"></div>
                            </div>
                            <span className="text-green-700 text-lg font-medium ms-2">Available for work</span>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.25} inView>
                    <div className="flex justify-center items-center gap-4">
                        <div className="w-24 h-[82] rounded-[100%] overflow-hidden border-2 border-gray-300 dark:border-gray-900 shadow-xl">
                            <Lens
                                zoomFactor={2}
                                lensSize={100}
                                isStatic={false}
                                ariaLabel="Zoom Area"
                            >
                                <Image src={ProfilePic} className="w-full object-cover" alt="Profile Picture" placeholder="blur" />
                            </Lens>
                        </div>
                        <p className="text-xl text-gray-800 dark:text-gray-300 md:text-left w-full">Hello there! 👋</p>
                    </div>
                </BlurFade>

            </div >

            {/* Name and Title */}
            <BlurFade delay={0.25} inView>
                <h1 className='text-6xl font-semibold text-center mb-3 md:text-8xl dark:text-gray-50'>I&apos;m <AuroraText>Ali Hamza</AuroraText></h1>
                <h2 className='text-theme text-3xl font-semibold text-center md:text-5xl mb-4 md:mb-10'>Software Engineer</h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
                <div className="max-w-3xl mx-auto">
                    <p className='text-theme text-xl text-center mb-6'>
                        Blending robust engineering with modern AI -turning complex ideas into polished, user-centric web applications powered by real-time and intelligent technologies.
                    </p>
                </div>
            </BlurFade>

            {/* social media links */}
            <BlurFade delay={0.25 * 2} inView direction="down">
                <div className="flex gap-5 my-3">
                    <LinkedInButton />
                    <GitHubButton />
                    <InstagramButton />
                    <WhatsAppButton />
                </div>
            </BlurFade>
        </div>
    )
}
