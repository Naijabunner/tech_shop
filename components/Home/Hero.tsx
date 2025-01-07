import React from 'react'

const Hero = () => {
  return (
    <div className=' flex  justify-start items-center w-full max-w-[2131px] rounded-3xl  py-[100px] xl:p-[100px]  2xl:mx-auto bg-gradient-to-r from-[#EBEBEB] via-white to-[#EBEBEB]  '>
      <div className="text self-start space-y-2 ">
        <p className=' font-medium  smallText leading-3 '>
          JBL Sound
        </p>
        <h1 className=' font-bold  mediumText leading-tight  p-0 m-0'>
          Wireless
        </h1>
        <h1 className=' font-black LargeText leading-tight'>
          HEADNE
        </h1>
        <button className=' bg-secondary rounded h-full px-10 py-5'>
            Shop Now
        </button>
      </div>

    </div>
  )
}



export default Hero