import React from 'react'
import beats from '@/public/brands/beats.png'
import Image from 'next/image'

const arr =[beats,beats,beats,beats]
const Brands = () => {
  return (
    <section className=' bg-zinc-500'>
        <div className=' max-w-[2127px] mx-auto px-5 py-24 md:px-[200px] flex gap-10 justify-between'>
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