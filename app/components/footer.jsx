import Link from "next/link";
import { useActiveSectionContext } from "@/context/activeSection"
import { playfair } from "../font";

export default function Footer() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <div className="bg-[#273036] -mt-2 grid grid-cols-2 pb-10 justify-evenly justify-items-center  text-white">
            <div className="px-36 flex flex-col gap-6">
                <h1 className="text-2xl md:text-3xl font-semibold">Let&apos;s make something amazing together.</h1>
                <h3 className="text-2xl md:text-3xl font-semibold ">Start by saying hi!</h3>
                
            </div>
            <div className="flex flex-col content-center gap-1">
                <h1 className={`${playfair.className} text-2xl font-bold `}>Playlist</h1>
                <Link href='#about' className="cursor-pointer"
                    onClick={()=> {setActiveSection("about"); }}> 
                                About Me</Link>
                    <Link href='#projects' className="cursor-pointer"
                     onClick={()=> {setActiveSection("projects"); }}>  
                                Projects</Link>
                                <Link href='#experience' className="cursor-pointer"
                     onClick={()=> {setActiveSection("projects"); }}> 
                                Experience</Link>
                    <Link href='#contact' className="cursor-pointer"
                     onClick={()=> {setActiveSection("contact"); }}>
                                Contact me</Link>
            </div>
        </div>
    )
}