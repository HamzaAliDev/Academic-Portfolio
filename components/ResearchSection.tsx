"use client"
import LayeredText from "./LayeredText";
import { ResearchCard } from "./ResearchCard";
import { BlurFade } from "./ui/blur-fade";
import { ResearchContent } from "./ResearchCard";

interface ResearchWork {
    id: string;
    year: number;
    venue: string;
    title: string;
    description: string;
    authors: string;
    content: ResearchContent;
    links: {
        pdf: string;
        website?: string;
        code?: string;
    };
}
export default function ResearchSection() {
    const researchWorks: ResearchWork[] = [
        {
            id: 'cnn-image-classification',
            year: 2026,
            venue: 'CVPR',
            title: 'Comparative Study of CNN Architectures on Image Classification',
            description: 'A novel approach combining attention mechanisms with feature fusion for efficient real-time semantic segmentation.',
            authors: 'Supervised mini-research',
            content: {
                ABSTRACT: 'This paper presents a comprehensive framework for real-time semantic segmentation using attention-based feature fusion.',
                METHODOLOGY: 'Our approach combines multi-scale features with attention mechanisms to improve both accuracy and efficiency.',
                'KEY CONTRIBUTIONS': [
                    'Novel attention-based fusion architecture',
                    'Efficient real-time processing capability',
                    'Improved segmentation accuracy on multiple benchmarks'
                ]
            },
            links: {
                pdf: 'https://example.com/paper1.pdf',
                website: 'https://example.com/project1',
                code: 'https://github.com/example/project1'
            }
        },
        {
            id: 'object-detection-comparison',
            year: 2026,
            venue: 'Bachelor Thesis',
            title: 'A Comparative Study of Real-Time Object Detection Using YOLOv8 and SSD-MobileNet',
            description: 'A practical CPU-only comparison of YOLOv8 and SSD-MobileNet, focusing on latency, localization quality, and deployment complexity.',
            authors: 'Ali Hamza (Self-directed mini-research)',
            content: {
                INTRODUCTION: 'CPU-only comparison of YOLOv8 and SSD-MobileNet for real-time object detection.',
                METHODOLOGY: [
                    'Fine-tuned YOLOv8 on Pascal VOC subset (Person, Car, Bicycle).',
                    'Evaluated pretrained SSD-MobileNet without extra training.',
                    'Tested both models on identical validation images.'
                ],
                'EXPERIMENTAL SETUP': 'Intel Core i5, Python 3.11, CPU-only PyTorch and TensorFlow builds.',
                'RESULTS AND ANALYSIS': 'Similar latency (~70 ms/image), stronger localization quality with YOLOv8, and easier deployment with SSD-MobileNet.',
                CONCLUSION: 'Choose YOLOv8 for precision-focused use cases and SSD-MobileNet for rapid deployment.'
            },
            links: {
                pdf: 'https://example.com/paper2.pdf',
                code: 'https://github.com/example/project2'
            }
        },
    ]

    return (
        <div className='w-full md:w-[82%] lg:w-[82%] mx-auto'>
            {/* Education Section */}
            <BlurFade delay={0.1} direction="up" inView>
                <div className="mt-10">
                    <LayeredText heading="Research Assistant" subheading="Undergraduate research work —" />

                    <div className="space-y-3">
                        {researchWorks.map((research) => (
                            <ResearchCard key={research.id} research={research} />
                        ))}
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}
