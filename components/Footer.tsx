import { Facebook, Instagram, Linkedin, ShoppingCart, Twitter } from 'lucide-react';
import React from 'react'

const ql=['Home', 'About', 'shop', 'Contact']
const ad=['+7065761877 2. Lekki ', 'Street, Lekki Phase 1', 'Eti-Osa, Lagos']


const Footer = () => {
    return (
        <footer className='max-w-[2127px] bg-green-300 overflow-hidden mx-auto px-[6%] my-24 md:px-[70px] flex gap-5 justify-between  flex-wrap'>
            <FooterItem header={<Logo/>} body={<DescSocials/>} />
            <FooterItem header="Contact Us" body={<FooterList items={ql}/>}/>
            <FooterItem header="Follow Us" body={<FooterList items={ad}/>} />
            <FooterItem header="About Us" body={<EmailForm/>} />
        </footer>
    )
}

interface FooterItemProps {
    header: React.JSX.Element | string;
    body: string | React.JSX.Element;
}

const FooterItem: React.FC<FooterItemProps> = ({ header, body }) => {
    return (
        <div className="footer-item space-y-5 ">
            <h4 className='text-[33.27px] font-bold'>{header}</h4>
            <div className='text-[24divx] font-medium'>{body}</div>
        </div> 
    )
}


const DescSocials = () => {
    return (
        <div className=" max-w-[452px] space-y-10">
            <p className=' text-[22px] text-[#888888] '>
                Our store has the best gadgets you can find anywhere on line. Our products come at very affordable rates.
            </p>
            <ul className=' flex gap-10 w-9 h-9  items-center fill-black'>
                <li className=' '><Facebook className='fill-black stroke-none'/></li>
                <li><Instagram className='fill-black'/></li>
                <li><Linkedin className='fill-black stroke-none'/></li>
                <li><Twitter className='fill-black stroke-none'/></li>
            </ul>
        </div>
    )
}

const FooterList = ({items}:{items: string[]}) => {
    return (
        <ul className=' text-[#545252]  space-y-5 text-[24px]  items-center fill-black'>
            {
                items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    )
}

const EmailForm =()=>{
    return(
        <div className=" space-y-5  w-[400px]">
            <header className=' font-semibold text-[#323232] text-3xl 4xl:text-[35px]'>For Latest News & Update </header>
            <form action="" className=' flex items-center gap-2 p-1 justify-between  w-full rounded-full bg-[#F5F5F5] '>
                <input type="text" placeholder='Enter Your Email' className='bg-transparent placeholder:text-[#AEAEAE] pl-4 w-[70%]' />
                <button className=' w-full max-w-[40%] h-[60px] rounded-full bg-[#FF3333] text-white'> Subscribe</button>
            </form>
        </div>
    )
}

const Logo = () => {
    return (
        <header aria-label='e-shop logo' className=' space-x-3 flex justify-start items-center'>
            {/* <Image src={'/'} alt='shop-logo' height={29} width={30} /> */}
            <ShoppingCart className=' size-10 font-bold stroke-red-600 ' />
            <p className='flex items-center text-[38px] font-medium'>e- <span className='font-bold text-red-600'>shop</span> </p>
        </header>
    )
}

export default Footer