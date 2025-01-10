import React from 'react'
import beats from '@/public/brands/beats.png'
import Image from 'next/image'

const arr =[beats,beats,beats,beats]
const Brands = () => {
  return (
    <section className=' bg-[#F4F4F4] flex py-[150px] items-center overflow-hidden gap-[60px]'>
        <div className='  marquee  flex justify-between gap-[60px]  min-w-[100%]  items-center '>
        {
            arr.map((image, index)=>{
                return(
                    <Image
                    src={image}
                    alt='image'
                    width={150}
                    height={150}
                    />
                )
            })
        }
      
    </div>    
        <div className='  marquee  flex justify-between gap-[60px]  min-w-[100%]  items-center '>
        {
            arr.map((image, index)=>{
                return(
                    <Image
                    src={image}
                    alt='image'
                    width={150}
                    height={150}
                    />
                )
            })
        }
      
    </div>    
    </section>
 
  )
}

export default Brands