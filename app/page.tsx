import { playfair } from "./font"

export default function Home() {
  return (
    <main className="flex flex-grow flex-row items-center justify-around justify-items-center text-center bg-[#EAEAEA] p-10">
      <div className='h-64 w-2/5 border-2 border-[#28364C]'>

      </div>
            <div className="text-center">
                Hi, my name is
                <div className={`text-6xl font-black mb-5 mt-3 ${playfair.className}`}>
                    Maeve Tra
                </div>
                Student at Purdue University | B.S. in Computer Science | Graduating May 2024
            </div>
            
    </main>
  )
}
 