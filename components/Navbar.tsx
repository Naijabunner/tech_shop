'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import Hambuger from './Hamburger';


const navItemsLeft = [
    { path: '/', title: 'Home', href: '/' },
    { path: '/shop', title: 'Shop', href: '/shop' },
];

const navItemsRight = [
    { path: '/about', title: 'About', href: '/about' },
    { path: '/contact', title: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const pathName=usePathname()
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLLabelElement>(null); 
    // const [hash, setHash] = useState<string | null>(null);
  
    // Toggle the body scroll based on navbar visibility
    useEffect(() => {
      if (isNavbarOpen) {
        document.body.style.overflowY = "hidden"; // Lock scroll
      } else {
        document.body.style.overflowY = "auto"; // Unlock scroll
      }
      return () => {
        document.body.style.overflowY = "auto";
      };
    }, [isNavbarOpen]);
  
    // Close navbar if clicked outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          navbarRef.current &&
          !navbarRef.current.contains(event.target as Node) && 
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target as Node)
        ) {
          setIsNavbarOpen(false);
        }
      };
  
      if (isNavbarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isNavbarOpen]);



  return (
    <header>
    <nav className='w-full flex justify-between overflow-x-hidden max-w-[2127px] relative z-50 mx-auto py-5 lg:py-10 px-[5%] md:px-[60px]  md:grid items-center'>
        <div className="mainContent flex justify-between gap-10 items-center">
            <Logo/>
            <div className="md:flex w-full hidden justify-between items-center">
            <NavItem items={navItemsLeft}/>
            <NavItem items={navItemsRight}/>
            </div>
        </div>
        <div className='md:hidden mr-3'>
          <Hambuger setState={setIsNavbarOpen} state={isNavbarOpen} hamburgerRef={hamburgerRef} />
        </div>

        {/* <aside>

        </aside> */}
    </nav>
    {/* <aside className=' bottom-0 z-20 fixed bg-green w-screen h-full pt-[70px]'>
          <ul ref={navbarRef} className="flex flex-col justify-center items-center bg-white w-full min-h-16">
          {  [...navItemsLeft,...navItemsRight].map((item)=>(
            <li
            onClick={()=>setIsNavbarOpen(false)}
            className=' cursor-pointer w-full py-5 border-b-2 text-center text-lg border-b-red-200'>
            {item.title}
            </li>
          ))}
          </ul>
    </aside> */}
    </header>
  )
}

const NavItem = ({ items }:{ items : navItems[]}) => {
    return (
        <ul className="flex space-x-4 text-[#A1A1A1] text-base lg:text-[18px] font-medium">
            {items.map((item) => (
                <li key={item.path}>
                    <a href={item.href} className="hover:underline">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};


export const Logo = () => {
    return (
        <header aria-label='e-shop logo' className=' space-x-3 flex justify-start items-center'>
            {/* <Image src={'/'} alt='shop-logo' height={29} width={30} /> */}
            <ShoppingCart className=' size-7 4xl:size-10 font-bold stroke-red-600 ' />
            <p className='flex items-center text-2xl md:text-3xl 4xl:text-[38px] font-medium'>e- <span className='font-bold text-red-600'>shop</span> </p>
        </header>
    )
}

export default Navbar