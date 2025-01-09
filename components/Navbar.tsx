import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const navItemsLeft = [
    { path: '/', title: 'Home', href: '/' },
    { path: '/shop', title: 'Shop', href: '/shop' },
];

const navItemsRight = [
    { path: '/about', title: 'About', href: '/about' },
    { path: '/contact', title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className='w-full overflow-x-hidden max-w-[2127px] mx-auto py-5 lg:py-10 px-[5%] md:px-[60px]  grid items-center'>
        <div className="mainContent flex justify-between gap-10 items-center">
            <Logo/>
            <div className="flex w-full justify-between items-center">
            <NavItem items={navItemsLeft}/>
            <NavItem items={navItemsRight}/>
            </div>
        </div>

    </nav>
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


const Logo = () => {
    return (
        <header aria-label='e-shop logo' className=' space-x-3 flex justify-start items-center'>
            {/* <Image src={'/'} alt='shop-logo' height={29} width={30} /> */}
            <ShoppingCart className=' size-7 4xl:size-10 font-bold stroke-red-600 ' />
            <p className='flex items-center text-2xl md:text-3xl 4xl:text-[38px] font-medium'>e- <span className='font-bold text-red-600'>shop</span> </p>
        </header>
    )
}

export default Navbar