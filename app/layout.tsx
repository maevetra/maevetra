import './globals.css'
import type { Metadata } from 'next'
import SideBar from './components/sidebar'
import  { lato } from './font'
import NavBar from './components/navbar'

export const metadata: Metadata = {
  title: "Maeve Tra's Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      
      <body className={`flex flex-col min-h-screen ${lato.className} `}>
        <SideBar/>
        <NavBar/>
        {children}
      </body>
     
    </html>
  )
}
