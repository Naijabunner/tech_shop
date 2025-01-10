import React from 'react'
import appleWatch from '@/public/appleWatch.png';
import mac from '@/public/mac.png';
import ps5 from '@/public/ps5.png';
import jbl from '@/public/jbl.png';
import Vr from '@/public/Vr.png';
import wireEarphone from '@/public/wireEarphone.png';

import Image from 'next/image';

const arr =[
    {
        text: 'Enjoy With Earphone',
        image: wireEarphone,
        color: 'bg-[#454545]',
        textColor: 'text-[#454545]',
        btnStyle: 'normal'
    },
    {
        text: 'New wears Watch',
        image: appleWatch,
        color: 'bg-[#FF833C]',
        textColor: 'text-[#FF833C]',
        btnStyle: 'light'
    },
    {
        text: 'Trends Devices Laptop',
        image: mac,
        color: 'bg-[#FF3333]',
        textColor: 'text-[#FF3333]',
        btnStyle: 'light'
    },
    {
        text: 'Trends Devices Console',
        image: ps5,
        color: 'bg-[#F4F4F4]',
        textColor: 'text-[#F4F4F4]',
        btnStyle: 'normal'
    },
    {
        text: 'Play Game Oculus',
        image: Vr,
        color: 'bg-[#75CA57]',
        textColor: 'text-[#75CA57]',
        btnStyle: 'light'
    },
    {
        text: 'New Amazon Speaker',
        image: jbl,
        color: 'bg-[#4C87FC]',
        textColor: 'text-[#4C87FC]',
        btnStyle: 'light'
    },
]


const Categories = () => {
  return (
    <section className=' px-2 md:px-5 my-10 grid sm:grid-cols-2 gap-5 md:gap-7 xl:grid-cols-4 w-full max-w-[2131px] mx-auto'>
        {
            arr.map((item, index)=>{
                const splitText = item.text.split(' ')
                return(
                    <div key={index} className={`${(index === 3 || index === 2) && 'sm:col-span-2'} rounded-2xl  text-white relative pt-[30%] overflow-hidden pb-[30px] max-h-[414.43px] flex items-end justify-start px-7 max-w-full  ${item.color}`}>
                        <div className=" relative z-10 ">
                            <p className=' font-medium' style={{ fontSize: 'clamp(1rem, 150%, 1.916rem)' }}>{splitText[0]}</p>
                            <p  className=' font-medium' style={{ fontSize: 'clamp(1rem, 250%, 3.576rem)' }}>{splitText[1]}</p>
                            <p className=' leading-10  font-bold text-white opacity-[40%] max-sm:!text-4xl' style={{ fontSize: 'clamp(0.875rem , 350%, 4.407rem)' }}>{splitText[2]}</p>
                            <button className={`${ item.btnStyle === 'light' ?'bg-white'+" "+ item.textColor:'bg-red-600 text-white'} mt-10 rounded-full px-8 py-3 font-medium text-base`}>
                                Browse
                            </button>
                        </div>
                        <Image
                            src={item.image}
                            alt={splitText[2]}
                            className= {`absolute top-10 right-5 ${(index !== 3 && index !== 2) && ''} max-w-[400px]`}
                        />
                    </div>
                )
            })
        }
    </section>
  )
}

export default Categories