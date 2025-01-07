import Image from 'next/image'
import React from 'react'

const AdsOne = () => {
  return (
      <div className=' relative mt-52 max-w-[1966.84px] flex justify-between items-center gap-10 max-md:flex-col py-100 px-10 mx-auto my-20 rounded-3xl bg-[#FF3333]'>
          <div className=" h-fit pt-16">

              <p className=' text-[169.99px] font-black text-white relative'>FINE
                  <span className=' absolute   top-10 left-0 text-sm'>20% OFF</span>
              </p>
              <p className=' text-[169.99px] font-black relative bottom-28 overflow-hidden text-white '>SOUND
              <span className=' absolute   bottom-0 left-10 text-sm  '>20 Mar TO 7 Jun</span>
              </p>
          </div>
               <Image
          src={'/headset-ads.png'}
          alt='allImage'
          width={700}
          height={700}
className=' absolute -top-44 right-[28%]'
unoptimized = {true}
/>
          
          <div className=" text-white leading-snug">
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

export default AdsOne