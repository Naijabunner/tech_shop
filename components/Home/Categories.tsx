import React from 'react'
import testImage from '@/public/appleWatch.png';
import Image from 'next/image';

const arr =[
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#454545]'
    },
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#FF833C]'
    },
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#FF833C]'
    },
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#FF833C]'
    },
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#FF833C]'
    },
    {
        text: 'Enjoy With Earphone',
        image: testImage,
        color: 'bg-[#FF833C]'
    },
]


const Categories = () => {
  return (
    <section className=' px-5 my-10 grid grid-cols-2 gap-7 xl:grid-cols-4 w-full max-w-[2131px] mx-auto'>
        {
            arr.map((item, index)=>{
                const splitText = item.text.split(' ')
                return(
                    <div key={index} className={`${(index === 3 || index === 2) && 'col-span-2'} rounded-2xl  text-white relative pt-[30%] pb-[30px] max-h-[414.43px] flex items-end justify-start px-7  ${item.color}`}>
                        <div className=" relative z-10 ">
                            <p className=' font-medium' style={{ fontSize: 'clamp(1rem, 150%, 1.916rem)' }}>{splitText[0]}</p>
                            <p  className=' font-medium' style={{ fontSize: 'clamp(1rem, 250%, 3.576rem)' }}>{splitText[1]}</p>
                            <p className=' leading-10  font-bold text-white opacity-[40%]' style={{ fontSize: 'clamp(1rem, 350%, 4.407rem)' }}>{splitText[2]}</p>
                            <button className=' bg-red-600 mt-10 rounded-full text-white px-8 py-3 font-medium text-base'>
                                Browse
                            </button>
                        </div>
                        <Image
                            src={testImage}
                            alt={splitText[2]}
                            className=' absolute top-10 right-5 '
                        />
                    </div>
                )
            })
        }
    </section>
  )
}

export default Categories