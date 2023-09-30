import React from 'react';
import Tag from '../components/tags';
import Heading from '../components/heading';

const languages = [
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
]

export default function About() {

    return (
        <main className="items-center justify-between p-24 px-36">
            <Heading
                title="About me"
                description="Here you will find more information about
                    me, what I do, and my current skills mostly in terms of programming and
                    technology."
                number="01" width="1"/>

            <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-2 flex-shrink pr-5'>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight sm:text-xl">Who am I?</h3>
                        <p className='mb-2'>I'm a senior at Purdue University studying Computer Science
                            with concentration in Software Engineer, Security and Machine Learning. I also
                            have a minor in Art and Design Studio. My goal after graduation is to work as a
                            <strong>
                                Front-end Developer
                            </strong>, where my passion for Computer Science and Art can intertwine. I
                            strive to create products that are not only functional but also aesthestically
                            pleasing.
                        </p>
                        <p className='mb-2'>Besides front-end development, I'm also looking to diversify
                            my technical knowledge and portfolio. I'm willing to learn and adapt to
                            different tools and languages . I am especially curious about
                             <strong>
                                machine intelligence
                            </strong>
                            and the integration of machine learning into technical products. Because of
                            this, I'm open to opportunities where I can learn more about and contribute to
                            the field.
                        </p>
                        <p>
                            I am currently eligible for full-time positions in the U.S. under
                            <a
                                className='underline font-bold'
                                href='https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students'
                                target='_blank'>
                                Optional Practical Training (OPT)
                            </a>.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen place-self-start lg:mx-0 mt-5">
                        <h3 className="text-xl font-bold mb-2 sm:text-xl">My skills</h3>
                        {languages.map(language => (<Tag language={language}/>))}

                    </div>
                </div>
                <div className='ml-6 h-full'>
                    <div className="w-full h-full border-2"></div>
                </div>
            </div>

        </main>
    )
}