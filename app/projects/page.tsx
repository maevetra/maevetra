"use client"
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Card from '../components/card';
import Heading from '../components/heading'
import { useRef } from 'react';

const projects = [
    {
        name: "BoilerBuddies",
        description: [
            "BoilerBuddies is a social media webapp aims to provide a secure platform exclusively for Purdue students to effortlessly connect with individuals who have comparable interests, through both one-on-one and group discussions.",
            "I implemented the majority of the front end using React amnd assisted in testing and" +
                    " debugging the backend server.",
            "I also helped setting up and maintain authentication protocol through Firebase Authentication"
        ],
        language: [
            "React", "GoLang", "Firebase", "PostgreSQL"
        ],
        link: "https://github.com/meghnakr/BoilerBuddies"
    }, {
        name: "Indiana Rental",
        description: [
            "A car rental service website using MVC framework that allows users" +
                    " to search and reserve cars from the database and manage reservations.",
            "Built, managed and implemeneted queries for a MySQL database of 6 tables and o" +
                    "ver 200 data records."
        ],
        language: [
            "Node.js", "MySQL"
        ],
        link: "https://github.com/maevetra/CS348-CarRental"
    }, {
        name: "Valentine",
        description: ["A digital love letter powered by Javascript and CSS animations to render and animate components such as progress bar, typewriter effect and run-away button.",
    "The final page features a digital letter that can be opened by press and hold on the envelope."],
        language: [
            "React", "HTML/CSS"
        ],
        link: "https://github.com/maevetra/valentine"
    }, {
        name: "Virtual Closet",
        description: ["A virtual closet application that allows the user to enter new clothing, keep " +
                "track of existing clothing and laundry, and create clothing combina" +
                "tions.","The application features an AI image detector using Google Cloud AutoML Vision to recognize details of " +
                "the clothing item in a photo uploaded by the user." , "The application also makes " +
                "suggestions on what clothing items the user should wear depending on the weath" +
                "er and/or the user's personal events on their calendar."],
        language: ["Flutter"],
        link: "https://github.com/maevetra/virtual_closet"
    }, {
        name: "Quizlet Flashcard",
        description: [
            "Simple Chrome extension that takes Quizlet URL, parses the flashcards into a J" +
                    "SON file, and send to the front end. Front end will store decks of flashcards " +
                    "in Chrome's local storage and pull a card randomly in a selected deck for user" +
                    "s to review.",
            "The goal is to make reviewing easier without allocating a separate session. Us" +
                    "ers will be asked to provide answers to flashcards in the deck that they choos" +
                    "e periodically when they're using Chrome."
        ],
        language: [
            "Python", "Django", "JavaScript"
        ],
        link: "https://github.com/maevetra/Chrome-extension"
    }
]



export default function Projects() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const reverseParallax = useTransform(parallax, (v) => -v);
    useMotionValueEvent(parallax, 'change', (v) => console.log(v));

    return (
        <main className="min-w-screen items-center justify-between p-12 px-36" ref={target}>
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
        </main>
    )
}