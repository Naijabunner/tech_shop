import React from 'react'
import apple from '@/public/brands/apple.png'
import beatsbydre from '@/public/brands/beatsbydre.png'
import jbl from '@/public/brands/jbl.png'
import samsung from '@/public/brands/samsung.png'
import sony from '@/public/brands/sony.png'
import Image from 'next/image'

const arr = [
    apple,
    beatsbydre,
    jbl,
    samsung,
    sony
]
const Brands = () => {
    return (
        <section className=' bg-[#F4F4F4] flex py-[150px] items-center overflow-hidden gap-[60px]'>
            <div className='  marquee '>
                {
                    arr.map((image, index) => {
                        return (
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
            <div className='  marquee'>
                {
                    arr.map((image, index) => {
                        return (
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