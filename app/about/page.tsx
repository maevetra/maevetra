"use client"
import React from 'react';
import Tag from '../components/tags';
import Heading from '../components/heading';
import { languages } from '@/lib/data';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("about");
    return (
        <motion.section ref={ref} id="about" className='w-full h-fit -mt-12 pt-24 bg-lgrey items-center justify-between px-8 md:px-36'>
            <Heading
                title="About me"
                description="Here you will find more information about
                    me, what I do, and my current skills mostly in terms of programming and
                    technology."
                number="01" grow='w-1/4'/>

            <div className=''>
                <div className='col-span-2 flex-shrink pr-5'>
                    <div className='leading-relaxed'>
                        <h3 className="text-xl font-bold tracking-tight sm:text-xl">Who am I?</h3>
                        I&apos;m a full-stack developer specializing in building and designing exceptional end-to-end products for exceptional digital experience. Right now, I am still looking for an opportunity to make an impact!
                        {/* <br/>
                        I am currently eligible for full-time positions in the U.S. under&nbsp;
                            <a
                                className='underline font-semibold'
                                href='https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students'
                                target='_blank'>
                                Optional Practical Training (OPT)
                            </a>.
                        <br/> */}
                        <br/> Feel free to look around and if you have any question, hit me up at <a className='underline' href="mailto:maeve.ntra@gmail.com">maeve.ntra@gmail.com.</a>
                        
                    </div>
                    <div className="mx-auto max-w-screen place-self-start lg:mx-0 mt-5">
                        <h3 className="text-xl font-bold mb-2 sm:text-xl">My skills</h3>
                        {languages.map(language => (<Tag key={language} language={language}/>))}

                    </div>
                </div>
                {/*
                <div className='ml-6 h-full'>
                    <div className="w-full h-full border-2"></div>
    </div>*/}
            </div>
            
            

        </motion.section>
    )
}
