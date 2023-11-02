"use client"
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Card from '../components/card';
import Heading from '../components/heading'
import { useRef } from 'react';
import { projects } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const { ref } = useSectionInView("projects", 0.5);

    return (
        <section id="projects" ref={ref} className="min-w-screen min-h-[150vh] items-center justify-between p-12 px-36" >
            <Heading
                title="My projects"
                number="02"
                description="Some projects I have done to showcase my skills."
                width="2/5"/>
            <div>
                {
                    projects.map(project => (
                        <Card
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            languages={project.language}
                            link={project.link}/>
                    ))
                }

            </div>
        </section>
    )
}