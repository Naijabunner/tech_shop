'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import React, { useState } from 'react'

const examples=[
    "HEADPHONES",
    "Can I pause my membership without losing my data?",
    "How does seat based pricing work?",
    "What's the meaning of life?",
  ]

const Hero = () => {

  return (
    <div className='relative flex max-lg:flex-col justify-start items-center w-full max-w-[2131px] rounded-3xl  py-[100px] xl:p-[100px]  2xl:mx-auto bg-gradient-to-r from-[#EBEBEB] via-[#d1d0d0] to-[#EBEBEB]  '>
      <div className="text self-start space-y-2 w-full leading-tight pl-5 ">
        <h1 className='relative font-bold  mediumText   p-0 m-0'>
          <p className='absolute -top-5 md:-top-8 font-medium max-sm:text-base max-md:text-lg smallText  '>
            JBL Sound
          </p>
          Wireless
        </h1>
        {/* <h1 className='text-white font-black LargeText relative -top-4 md:-top-8  '>
          HEADPHONES
        </h1> */}
        <TypeWriter/>
        <motion.button
        initial={{
          y:100,
          opacity:0,
          filter: 'blur(10px)',
        }}
        animate={{
          y:0,
          opacity:1,
          filter: 'blur(0px)',

        }}
        className=' bg-secondary rounded-full text-white h-full px-10 py-4 b'>
          Shop Now
        </motion.button>
      </div>
      <Image
      src={'/hero_headphone.png'}
      alt='headphone'
      width={600}
      height={600}
      className=' lg:absolute right-52 max-lg:max-w-[300px] max-2xl:max-w-[500px]'
      />
    </div>
  )
}
const LETTER_DELAY = 0.05;


const TypeWriter=()=>{
  const [textIndex, setTextIndex] = useState(0)


  return(
    <h1 className='text-white font-black LargeText relative -top-4 md:-top-8  '>
      {examples[textIndex].split("").map((L,index)=>{
        return(
          <motion.span
          key={index}
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            delay: index * LETTER_DELAY,
            duration: 0,
          }}
          >
            {L}
          </motion.span>
        )
      })}
    {/* HEADPHONES */}
  </h1>
  )
}

export default Hero