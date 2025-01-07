import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const navItemsLeft = [
    { path: '/', title: 'Home', href: '/' },
    { path: '/shop', title: 'Shop', href: '/shop' },
    { path: '/about', title: 'About', href: '/about' },
    { path: '/contact', title: 'Contact', href: '/contact' },
];

const navItemsRight = [
    { path: '/', title: 'Home', href: '/' },
    { path: '/shop', title: 'Shop', href: '/shop' },
    { path: '/about', title: 'About', href: '/about' },
    { path: '/contact', title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className='w-full max-w-[2127px] mx-auto py-10 px-[5%] md:px-[60px]  grid items-center'>
        <div className="mainContent flex justify-between">
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
        <ul className="flex space-x-4">
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
        <header aria-label='e-shop logo' className=' flex justify-start'>
            {/* <Image src={'/'} alt='shop-logo' height={29} width={30} /> */}
            <ShoppingCart className=' size-5 ' color='red'/>
            <p className='flex items-center'>e- <span>shop</span> </p>
        </header>
    )
}

export default Navbar