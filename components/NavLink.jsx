'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({links}) => {
    const pathname = usePathname();
    
  return (
    
    
 <Link  className={`rounded p-1 ${pathname === links.url && 'bg-blue-500'}`}
  href={links.url}>{links.name}</Link>  
 
    
  )
}

export default NavLink
