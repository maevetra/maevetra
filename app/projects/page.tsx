import Card from '../components/card';
import Heading from '../components/heading'

const projects = [
    {
        name: "BoilerBuddies",
        description: [
            "Social media webapp with GoLang backend, React frontend, Firebase for authenti" +
                    "cation and PostgreSQL as database.",
            "Implemented the majority of the front end using React. Assisted in testing and" +
                    " debugging the backend server.",
            "Set up and maintain authentication protocol through Firebase Authentication"
        ],
        language: ["React", "GoLang", "Firebase", "PostgreSQL"],
        link: "https://github.com/meghnakr/BoilerBuddies"
    }, {
        name: "Car Rental",
        description: ["Implemented a car rental service website using MVC framework that allows users to search and reserve cars from the database and manage reservations.",
        "Built, managed and implemeneted queries for a MySQL database of 6 tables and over 200 data records."],
        language: [
            "Node", "SQL"
        ],
        link: "https://github.com/maevetra/CS348-CarRental"
    }, {
        name: "Valentine",
        description: ["Description"],
        language: [
            "React", "HTML/CSS"
        ],
        link: "https://github.com/maevetra/valentine"
    }, {
        name: "Virtual Closet",
        description: ["Implemented a virtual closet that allows users to upload images of clothing items and have details of that items filled out by an AI Image Recognizer.",
        "Trained and tested image recognizing machine learning model for clothing items using Google Cloud AutoML Vision with 82% accuracy.",
        "Utilized Firestore as the main database and Firebase Authentication."],
        language: ["Flutter"],
        link: "https://github.com/maevetra/virtual_closet"
    }, {
        name: "Quizlet Flashcard",
        description: ["Simple Chrome extension that takes Quizlet URL, parses the flashcards into a JSON file, and send to the front end. Front end will store decks of flashcards in Chrome's local storage and pull a card randomly in a selected deck for users to review.",
        "The goal is to make reviewing easier without allocating a separate session. Users will be asked to provide answers to flashcards in the deck that they choose periodically when they're using Chrome."],
        language: [
            "Python", "Django", "JavaScript"
        ],
        link: "https://github.com/maevetra/Chrome-extension"
    }
]

export default function Projects() {
    return (
        <main
            className="min-w-screen items-center justify-between p-24 px-36">
            <Heading title="My projects" number="02" description="Some projects I have done to showcase my skills." width="2"/>
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