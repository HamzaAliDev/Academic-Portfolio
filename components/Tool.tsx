import Image from 'next/image'
import c from '../public/tools/c.png';
import javascript from '../public/tools/js.png';
import nextjs from '../public/tools/nextjs.webp';
import firebase from '../public/tools/firebase.png';
import mongodb from '../public/tools/mongodb.png'
import mysql from '../public/tools/mysql.png'
import nodejs from '../public/tools/nodejs.png'
import python from '../public/tools/python.png'
import ts from '../public/tools/ts.png'
import clerk from '../public/tools/clerk.png'
import websockets from '../public/tools/websockets.png'
import git from '../public/tools/git.png'
import github from '../public/tools/github.png'
import opencv from '../public/tools/opencv.png'
import tensorflow from '../public/tools/tensorflow.png'
import pytorch from '../public/tools/pytorch.png'
import numpy from '../public/tools/numpy.png'
import scikitImage from '../public/tools/scikit-image.png'
import fastapi from '../public/tools/fastapi.png'
import supabase from '../public/tools/supabase.png'
import { Marquee } from './ui/marquee';


export default function Tool() {
    const toolList = [
        { name: 'C++', image: c, alt: 'C Logo', width: 30, height: 30 },
        { name: 'JavaScript', image: javascript, alt: 'JavaScript Logo', width: 30, height: 33 },
        { name: 'Next.js', image: nextjs, alt: 'Next.js Logo', width: 30, height: 30 },
        { name: 'Firebase', image: firebase, alt: 'Firebase Logo', width: 30, height: 30 },
        { name: 'Node.js', image: nodejs, alt: 'Node.js Logo', width: 30, height: 30 },
        { name: "TypeScript", image: ts, alt: "TypeScript logo", width: 30, height: 27 },
        { name: "Clerk", image: clerk, alt: "Clerk logo", width: 40, height: 40 },
        { name: "WebSockets", image: websockets, alt: "WebSockets logo", width: 30, height: 30 },
        { name: 'MySQL', image: mysql, alt: 'MySQL Logo', width: 30, height: 30 },
        { name: 'MongoDB', image: mongodb, alt: 'MongoDB Logo', width: 30, height: 30 },
        { name: 'Supabase', image: supabase, alt: 'Supabase Logo', width: 100, height: 30 },
        { name: "Python", image: python, alt: "Python logo", width: 30, height: 30 },
        { name: "OpenCV", image: opencv, alt: "OpenCV logo", width: 30, height: 30 },
        { name: "TensorFlow", image: tensorflow, alt: "TensorFlow logo", width: 30, height: 30 },
        { name: "PyTorch", image: pytorch, alt: "PyTorch logo", width: 30, height: 30 },
        { name: "NumPy", image: numpy, alt: "NumPy logo", width: 30, height: 30 },
        { name: "Scikit-Image", image: scikitImage, alt: "Scikit-Image logo", width: 30, height: 30 },
        { name: "FastAPI", image: fastapi, alt: "FastAPI logo", width: 30, height: 30 },
        { name: 'Git', image: git, alt: 'Git Logo', width: 30, height: 30 },
        { name: 'GitHub', image: github, alt: 'GitHub Logo', width: 30, height: 30 },
    ]

    const firstRow = toolList.slice(0, toolList.length / 2);
    const secondRow = toolList.slice(toolList.length / 2);
    return (
        <section className="w-full px-2 relative overflow-x-hidden">
            <div className=" flex  flex-col items-center justify-center  overflow-hidden w-full overflow-x-hidden">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((tool, index) => (
                        <div
                            key={index}
                            className="py-1 px-3 sm:py-2 sm:px-5 bg-[#d4d4d434] dark:bg-[#27272B66] rounded-md flex items-center justify-center hover:bg-[#8f8f8f34] dark:hover:bg-[#0f0f0f66] transition-all duration-300 ease-in-out my-2"
                        >
                            <Image
                                src={tool.image}
                                alt={tool.alt}
                                height={tool.height}
                                className="h-5 w-auto sm:h-[tool.height] object-contain"
                            />
                            <p className="text-sm sm:text-lg ms-1 sm:ms-2">{tool.name}</p>
                        </div>

                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((tool, index) => (
                        <div
                            key={index}
                            className="py-1 px-3 sm:py-2 sm:px-5 bg-[#d4d4d434] dark:bg-[#27272B66] rounded-md flex items-center justify-center hover:bg-[#8f8f8f34] dark:hover:bg-[#0f0f0f66] transition-all duration-300 ease-in-out my-2"
                        >
                            <Image
                                src={tool.image}
                                alt={tool.alt}
                                height={tool.height}
                                className="h-5 w-auto sm:h-[tool.height] object-contain"
                            />
                            <p className="text-sm sm:text-lg ms-1 sm:ms-2">{tool.name}</p>
                        </div>

                    ))}
                </Marquee>
            </div>
        </section>
    )
}
