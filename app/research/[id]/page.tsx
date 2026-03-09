import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ResearchWork, ResearchContentValue } from '../../../components/ResearchCard'

// Same research data - in a real app, you might fetch this from a database
const researchWorks: Record<string, ResearchWork> = {
    'cnn-image-classification': {
        id: 'cnn-image-classification',
        year: 2026,
        venue: '',
        title: 'Comparative Study of CNN Architectures on Image Classification',
        description: 'A novel approach combining attention mechanisms with feature fusion for efficient real-time semantic segmentation.',
        authors: 'Ali Hamza, supervised by Dr. Sami Ullah , GCUF',
        content: {
            ABSTRACT: 'This paper presents a comprehensive framework for real-time semantic segmentation using attention-based feature fusion. We address the challenge of processing high-resolution images in real-time while maintaining accuracy.',
            INTRODUCTION: 'Semantic segmentation is a fundamental task in computer vision with applications in autonomous driving, medical imaging, and robotics. However, achieving both high accuracy and real-time performance remains challenging.'
        },
        // links: {
        //   pdf: 'https://example.com/paper1.pdf',
        //   website: 'https://example.com/project1',
        //   code: 'https://github.com/example/project1'
        // }
    },
    'object-detection-comparison': {
        id: 'object-detection-comparison',
        year: 2026,
        venue: 'Bachelor of Computer Science',
        title: 'A Comparative Study of Real-Time Object Detection Using YOLOv8 and SSD-MobileNet',
        description: 'A practical CPU-only comparison of YOLOv8 and SSD-MobileNet with balanced analysis of speed, quality, and deployment effort.',
        authors: 'Ali Hamza (Self-directed mini-research)',
        content: {
            INTRODUCTION: 'Real-time object detection is essential for surveillance, traffic monitoring, and smart automation systems. This study compares YOLOv8 and SSD-MobileNet under CPU-only constraints, where deployment cost and hardware limits are major factors.',
            'RESEARCH STATEMENT': 'Selecting a detector for limited hardware is challenging because developers must balance three factors: inference speed, localization quality, and ease of deployment.',
            OBJECTIVE: 'The objective is to evaluate both models on the same test conditions and determine which model is better for (1) accuracy-focused projects and (2) rapid deployment projects.',
            METHODOLOGY: [
                'We used a Pascal VOC subset with three classes: Person, Car, and Bicycle.',
                'YOLOv8 was fine-tuned using transfer learning.',
                'SSD-MobileNet was used with pretrained weights (no additional training).',
                'Both models were evaluated on the same validation images.',
                'Inference latency and qualitative bounding-box performance were compared.'
            ],
            'EXPERIMENTAL SETUP': 'Evaluation was conducted on an Intel Core i5 machine using Python 3.11 with CPU-only builds of PyTorch and TensorFlow. Image size was standardized, and each sample was run multiple times to compute stable average latency.',
            'RESULTS AND ANALYSIS': 'Average inference time was nearly identical: YOLOv8 ~70 ms/image and SSD-MobileNet ~69.37 ms/image (around 14 FPS on CPU). YOLOv8 delivered tighter and more consistent bounding boxes, especially in overlapping or small-object cases. SSD-MobileNet showed slightly looser localization but required minimal setup and no training pipeline.',
            CONCLUSION: 'Both models are suitable for CPU deployment. YOLOv8 is preferable when detection precision is critical and training effort is acceptable, while SSD-MobileNet is better when immediate deployment and low implementation overhead are the priority.'
        },
        // links: {
        //   pdf: 'https://example.com/paper2.pdf',
        //   code: 'https://github.com/example/project2'
        // }
    },
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params
    const id = resolvedParams.id || 'cnn-image-classification'

    const research = researchWorks[id]

    if (!research) {
        return (
            <div className="min-h-[calc(100vh-120px)] w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-28 pb-14 md:pt-32 px-4 dark:text-[#A1A1AA]">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
                        <ArrowLeft size={20} />
                        Back
                    </Link>
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Research work not found</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-[93%] sm:[80%] md:w-[85%] lg:w-[70%] max-w-[1300px] mx-auto pt-28 pb-14 md:pt-32 px-4 dark:text-[#A1A1AA]">
            <div className=" mx-auto px-4">
                {/* Back Button */}
                <Link href="/#research" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 font-medium">
                    <ArrowLeft size={20} />
                    Back to Research
                </Link>

                {/* Header */}
                <div className=" rounded-lg shadow-sm p-8 mb-8 bg-[#d4d4d434] dark:bg-[#27272B66] ">
                    <div className="flex items-start justify-between mb-6 gap-4">
                        <div className="flex-1">
                            <span className="text-sm font-semibold tracking-widest text-teal-600 uppercase">
                                {research.venue} • {research.year}
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight dark:text-gray-50">
                                {research.title}
                            </h1>
                            <p className="text-gray-600 mt-4 dark:text-gray-400">{research.authors}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                        {research.links.pdf && (
                            <a
                                href={research.links.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
                            >
                                <FileText size={18} />
                                Download PDF
                            </a>
                        )}
                        {research.links.website && (
                            <a
                                href={research.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors duration-200 font-medium"
                            >
                                <ExternalLink size={18} />
                                View Project
                            </a>
                        )}
                        {research.links.code && (
                            <a
                                href={research.links.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                            >
                                <Code2 size={18} />
                                View Code
                            </a>
                        )}
                    </div> */}
                </div>

                {/* Content */}
                <div className=" rounded-lg shadow-sm p-8 bg-[#d4d4d434] dark:bg-[#27272B66]">
                    <div className="prose prose-sm max-w-none">
                        {Object.entries(research.content).map(([heading, value]) => (
                            <div key={heading} className="mb-6">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2 tracking-wide">
                                    {heading}
                                </h3>
                                {renderContentValue(value)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function renderContentValue(value: ResearchContentValue) {
    if (Array.isArray(value)) {
        return (
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-400 leading-relaxed">
                {value.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }

    return <p className="text-gray-700 leading-relaxed whitespace-pre-wrap dark:text-gray-400">{value}</p>
}
