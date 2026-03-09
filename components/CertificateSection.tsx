'use client';

import { CertificateCard } from '../components/CertificateCard';
import { BookOpen, Brain, Eye, Zap } from 'lucide-react';
import { BlurFade } from './ui/blur-fade';
import LayeredText from './LayeredText';

const certificates = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        category: 'DATA SCIENCE',
        title: 'Data Fundamentals',
        organization: 'IBM-SkillsBuild',
        description:
            'Comprehensive introduction to data science concepts, including data analysis, visualization, and machine learning techniques.',
        date: 'NOV 2025',
        certificateLink: '/images/IBM_DF.pdf',
        iconBgColor: 'bg-teal-600',
    },
    {
        icon: <Brain className="w-5 h-5" />,
        category: 'ARTIFICIAL INTELLIGENCE',
        title: 'Artificial Intelligence Fundamentals',
        organization: 'IBM-SkillsBuild',
        description:
            'Comprehensive introduction to AI concepts, including machine learning, NLP, and ethical considerations in AI.',
        date: 'Nov 2025',
        certificateLink: '/images/IBM_AI.pdf',
        iconBgColor: 'bg-purple-600',
    },
];

export default function CertificateSection() {
    return (
        <div className="w-full md:w-[82%] lg:w-[82%] mx-auto mt-10">
            {/* title */}
            <BlurFade delay={0.15} inView >
                <LayeredText heading="Certifications" subheading="Online Courses —" />
            </BlurFade>

            {/* cards */}
            <BlurFade delay={0.2} inView >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={index}
                            icon={cert.icon}
                            category={cert.category}
                            title={cert.title}
                            organization={cert.organization}
                            description={cert.description}
                            date={cert.date}
                            certificateLink={cert.certificateLink}
                            iconBgColor={cert.iconBgColor}
                        />
                    ))}
                </div>
            </BlurFade>
        </div>
    );
}
