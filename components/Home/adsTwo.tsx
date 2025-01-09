import Image from 'next/image'
import React from 'react'

const AdsTwo = () => {
    return (
        <div className=' relative xl:mt-52  max-md:overflow-x-hidden  max-w-[1966.84px] flex justify-between items-center gap-10 max-xl:flex-col py-100 px-10 mx-auto my-20 rounded-3xl bg-[#B0C302]'>
        <div className=" h-fit pt-16">
            <p className='text-[80px] sm:text-[100px] 4xl:text-[169.99px] font-black text-white relative'>FINE
                <span className=' absolute   top-[10%] left-0 text-sm'>20% OFF</span>
            </p>
            <p className=' text-[80px] sm:text-[100px] 4xl:text-[169.99px] font-black bottom-10 sm:bottom-16 relative 4xl:bottom-28 h-fit overflow-hidden text-white '>SOUND
                <span className=' absolute   bottom-0 left-10 text-sm  '>20 Mar TO 7 Jun</span>
            </p>
        </div>
        <Image
            src={'/apple-ads.png'}
            alt='allImage'
            width={700}
            height={700}
            className=' xl:absolute -top-44 right-[28%] aspect-square max-4xl:w-[600px]'
            unoptimized={true}
        />
        <div className=" text-white leading-snug xl:max-w-[300px]">
            <p>Beats solo Air</p>
            <p className='text-[57.23px] font-semibold'>Summer Sale</p>
            <p className='text-[20.95px]'>Enjoy quality sound that will make you enjoy music at its best</p>
            <button>
                Shop
            </button>
        </div>
    </div>
    )
}

export default AdsTwo