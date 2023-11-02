import React from 'react';
import { FaReact } from "react-icons/fa";

export const pages = [
    {
        name: 'home',
        title: 'Home',
        to: '/'
    },
    {
        name: 'about',
        title: 'About me',
        to: '#about'
    },
    {
        name: 'projects',
        title: 'Treasures',
        to: '#projects'
    },
    {
        name: 'experience',
        title: 'My Experience',
        to: '#experience'
    },
    {
        name: 'contact',
        title: "Don't be a stranger",
        to: '#contact'
    }, 
] as const; 

export const projects = [
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
] as const;

export const experiences = [
    {
        title: "AWS OpenSearch JavaScript Client Contributor",
        date: "Sep 2023 - Present",
        location: "Remote",
        description: "",
        icon: React.createElement(FaReact),
    },
    {
        title: "Software Engineer Intern @ KMS Technology",
        date: "Jun 2023 - Aug 2023",
        location: "Remote",
        description: "I developed the front-end modules for Kobiton Appium to perform testing on real mobile devices hosted in cloud using JavaScript ES6 and React, "
        + "achieving seamless automatic testing for mobile-web applications." + 
        " I also contributed as a Test Engineer on the LexisNexis Insurance project, resulting in a 13% increase in test coverage across all platform functionalities.",
        icon: React.createElement(FaReact),
    },
    {
        title: 'Purdue University',
        date: 'Aug 2020 - May 2024',
        location: 'West Lafayette, IN',
        description: "B.S. in Computer Science. Concentration in Software Engineering, Security, and Machine Learning.",
        icon: React.createElement(FaReact),
    },
    {
        title: 'Design Lead @ Hello World Hackathon',
        date: 'Nov 2022 - Sep 2023',
        location: 'West Lafayette, IN',
        description: "As a Design Lead, I monitored progress and quality of all graphics used in the Hello World 2023 hackathon. "+
        "Together, we sucessfully achieved of all goals 45 days ahead of the projected schedule.",
        icon: React.createElement(FaReact),
    },
    {
        title: 'Director @ Hello World Hackathon',
        date: 'Nov 2021 - Sep 2022',
        location: 'West Lafayette, IN',
        description: "I directed Hello World 2022, Purdue University's freshman-only hackathon." + " As a director, I coordinated and monitored progress of the overall execution of the hackathon"
        + ", along with prepatory workshops and events leading up to the hackathon.",
        icon: React.createElement(FaReact),
    }
] as const;
export const languages = [
    "Javascript",
    "HTML/CSS",
    "React",
    "Python",
    "SQL",
    "Node",
    "AWS",
    "Java",
    "C/C++",
    "Figma",
    "Adobe"
] as const;