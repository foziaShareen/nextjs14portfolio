'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
const links=[{url:'/',name:'Home'},{url:'/about',name:'About'},{url:'/contact',name:'Contact'}]

const Navbar = () => {
  const [open,setOpen]=useState(false)

  return (
    <div className='flex justify-between px-4'>
      <div className='hidden md:block gap-10 w-1\3'>
        {links.map((link)=>(
          <Link key={link.name} href={link.url}>{link.name}</Link>
        ))}
      </div>
      <div className='md:hidden w-1\3 '>logo</div>
      <div className='hidden md:flex gap-4 w-1\3'>
        <Link href="/">
        <Image src="/linkedin.png" width={30} height={30} alt="github"/>
        </Link>
        <Link href="/">
        <Image src="/facebook.png" width={30} height={30} alt="github"/>
        </Link>
        <Link href="/">
        <Image src="/github.png" width={30} height={30} alt="github"/>
        </Link>
      </div>
      <div>
        <button className='flex flex-col justify-between h-8 w-10  relative z-50 sm:hidden' onClick={()=>setOpen(!open)}>
          <div className='bg-white w-8 h-1'></div>
          <div className='bg-white w-8 h-1'></div>
          <div className='bg-white w-8 h-1'></div>
        </button>
        {/* menu */}
        {open&&(
           <div className='flex flex-col  items-center h-screen w-screen gap-8 text-4xl justify-center bg-black absolute top-0 left-0 text-white'>
           {links.map((link)=>(
             <Link key={link.name}href={link.url}>{link.name}</Link>
           ))}
         </div>
          
        )}
       
      </div>
    </div>
  )
}

export default Navbar


