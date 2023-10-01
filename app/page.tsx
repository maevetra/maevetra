import {playfair} from "./font"

export default function Home() {
    return (
        <main
            className="flex flex-grow flex-row items-center justify-evenly justify-items-center text-center bg-[#EAEAEA] p-15">
            <div className='m-auto h-64 w-2/5'>
              <div className="m-auto h-full w-4/5 border-2 justify-center border-[#28364C]"></div>
            </div>
            <div className="w-3/5 text-lg text-center">
                Hi, my name is
                <div className={`text-8xl font-black mb-5 mt-3 ${playfair.className} sm:text-7xl`}>
                    Maeve Tra
                </div>
                Student at Purdue University | B.S. in Computer Science | Graduating May 2024
            </div>

        </main>
    )
}
