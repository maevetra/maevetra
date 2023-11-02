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
import Footer from "./components/footer"

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
        <div className="pt-16">
        <section ref={ref} id="home" className="min-h-[calc(100vh-5rem)] flex flex-grow flex-row items-center justify-between justify-items-center text-center px-12">
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
                <div className="w-fit text-center m-auto mb-5  text-9xl sm:text-7xl font-black text-dred place-self-center ">
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
        
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EAEAEA" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,149.3C840,139,960,149,1080,176C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <About/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EAEAEA" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,128C480,128,600,128,720,138.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <Projects/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f7fb" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <Experience/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f7fb" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <Contact/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <Footer/>
        </div>
    )
}
