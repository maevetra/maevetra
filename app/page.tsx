import {playfair} from "./font"
import Image from 'next/image' 
import CoverImg from '../public/img/cover.svg'

export default function Home() {
    return (
        <main
            className="flex flex-grow flex-row items-center justify-evenly justify-items-center text-center bg-[#EAEAEA] px-15">
            <div className='h-full w-1/2 flex-shrink'>
                <Image src={CoverImg} alt="My picture"></Image>
            </div>
            <div className="h-full w-1/2 text-xl sm:text-base text-center">
                Hi, my name is
                <div className={`text-9xl font-black text-dred mb-5 mt-3 ${playfair.className} sm:text-7xl`}>
                    Maeve Tra
                </div>
                Student at Purdue University | B.S. in Computer Science | Graduating May 2024
            </div>

        </main>
    )
}
