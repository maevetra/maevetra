"use client"
import {playfair} from "./font"
import Image from 'next/image' 
import CoverImg from '../public/img/cover.svg'
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/activeSection"
import Experience from "./experience/page"

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: 500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};



export default function Home() {
    const { ref } = useSectionInView("home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <>
        <section ref={ref} id="home"> 
        <main
            className="min-h-screen flex flex-grow flex-row items-center justify-between justify-items-center text-center bg-[#EAEAEA] px-12">
                 <motion.header
                    className='h-full w-1/2 flex-shrink'
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={introPictureVariants}>
                        <Image src={CoverImg} alt="My picture"></Image>
                    </motion.header>
                    <motion.header
                    className="h-full w-1/2 text-xl sm:text-base text-center"
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={introHeaderVariants}>
                         Hi, my name is
                <div className="w-fit text-center m-auto mb-5 mt-3 text-9xl sm:text-7xl font-black text-dred place-self-center ">
                <h1 className={`${playfair.className} overflow-hidden whitespace-nowrap `}>
                    Maeve Tra
                </h1>
                </div>
                Student at Purdue University | B.S. in Computer Science | Graduating May 2024
                <ul className="m-auto mt-3 flex flex-row justify-items-center justify-evenly list-none">
                    <Link href='#about' className="cursor-pointer"
                    onClick={()=> {setActiveSection("about"); }}>  <svg fill="#580C0C" className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                About</Link>
                    <Link href='#projects' className="cursor-pointer"
                     onClick={()=> {setActiveSection("projects"); }}>  <svg fill="#580C0C" className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                Projects</Link>
                                <Link href='#experience' className="cursor-pointer"
                     onClick={()=> {setActiveSection("projects"); }}>  <svg fill="#580C0C" className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                Experience</Link>
                    <Link href='#contact' className="cursor-pointer"
                     onClick={()=> {setActiveSection("contact"); }}>  <svg fill="#580C0C" className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                Connect</Link>
                </ul>
                    </motion.header>
            

        </main>
        
        </section>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        
        </>
    )
}
