import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import img from 'images/lfl0amzf.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anti plastic ',
  description: 'Generated by rocky.naggi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <div className="navbar">
      
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
       <Link href="/"></Link>
  <Link href="/"></Link>
  <Link href="/"></Link>
    
      
  <br></br>
 
  <Image src={img}  className='img-logo'  placeholder='blur' alt='io'/>
  </div>

      </body>
    </html>
  )
}
