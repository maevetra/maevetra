import './globals.css'
import type { Metadata } from 'next'
import SideBar from './components/sidebar'
import Footer from './components/footer'
import  { poppins } from './font'
import NavBar from './components/navbar'
import ActiveSectionContextProvider from '@/context/activeSection'

export const metadata: Metadata = {
  title: "Maeve Tra's Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">

      <body className={`flex flex-col min-h-screen ${poppins.className} `}>
        <ActiveSectionContextProvider>
        <NavBar/>
        <SideBar/>
        {children}
        </ActiveSectionContextProvider>
        
      </body>
     
    </html>
  )
}
