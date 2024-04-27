'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
const links=[{url:'/',name:'Home'},{url:'/about',name:'About'},{url:'/contact',name:'Contact'}]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  
  

  return (
    <div className='flex justify-between px-4 md:px-8 lg:px-24'>
      {/* links  for lg screens */}
    <div className='hidden md:flex gap-8'>
    {links.map((links) =>(
 <NavLink links={links} key={links.name}/>
           ))}    
      </div> 
      
      <div className=' w-1\3 '>logo</div>
     {/* social links */}
     <div className='hidden md:flex gap-4'>
      <Link href="/">
        <Image src="/github.png" alt="logo" width={30} height={30} />
      </Link>
      <Link href="/">
        <Image src="/facebook.png" alt="logo" width={30} height={30} />
      </Link>
      <Link href="/">
        <Image src="/linkedin.png" alt="logo" width={30} height={30} />
      </Link>
     </div>
    
     {/* button */}
      <div>
        <button className='flex flex-col justify-between h-8 w-10  relative z-50 sm:hidden' onClick={() => setOpen(!open)}>
          <div className='bg-white w-8 h-1'></div>
          <div className='bg-white w-8 h-1'></div>
          <div className='bg-white w-8 h-1'></div>
        </button>
        {/* menu */}
        {open && (
           <div className='md:hidden  flex flex-col  items-center h-screen w-screen gap-8 text-4xl justify-center bg-black absolute top-0 left-0 text-white'>
           {links.map((links) =>(
 <NavLink links={links} key={links.name}/>
           ))}
           
          </div>
          
        )}
          
      
          
          
        
          
          
        
       
      </div>
    </div>
  )
}

export default Navbar


