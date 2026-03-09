import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type ResearchContentValue = string | string[]
export type ResearchContent = Record<string, ResearchContentValue>

export interface ResearchWork {
    id: string
    year: number
    venue: string
    title: string
    description: string
    authors: string
    content: ResearchContent
}

interface ResearchCardProps {
    research: ResearchWork
}

export function ResearchCard({ research }: ResearchCardProps) {
    return (
        <Link href={`/research/${research.id}`}>
            <div className="group mb-2 relative py-3 overflow-hidden rounded-xl  bg-[#d4d4d434] dark:bg-[#27272B66] cursor-pointer">
                <div className="flex h-full items-center justify-between px-8 py-6">
                    {/* Left Content */}
                    <div className="flex-1 flex items-start gap-8">
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-200 mt-1">
                            {research.year}
                        </span>

                        {/* Title and Authors */}
                        <div className="flex flex-col justify-center flex-1">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 leading-tight mb-1.5">
                                {research.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {research.authors}
                            </p>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 ml-6">
                        {/* Arrow Indicator */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-all duration-200 ml-1">
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
