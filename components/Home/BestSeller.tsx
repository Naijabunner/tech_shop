import Image from 'next/image'
import React from 'react'

const BestSeller = () => {
    return (
        <section className=' text-center py-5 lg:py-10 xl:pb-16 w-full max-w-[2131px] mx-auto px-5 '>
            <h6 className=' font-bold text-4xl xl:text-[75.59px] 4xl:text-[98.59px] xl:pb-5  '>
                Best Seller Products
            </h6>
            <span className='text-xl xl:text-[25.59px] 4xl:text-[33.27px]  font-medium text-[#343434]'>
                We have products that you will love

            </span>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10 font-medium text-[33px]">

                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                    return (
                        <div className=" w-full text-start ">
                            <div className="max-w-[446.11px] flex justify-center items-center mb-3 bg-[#F4F4F4] rounded-[24px]  w-full">   <Image
                                src={'/black_bluetooth.png'}
                                alt=''
                                width={400}
                                height={400}
                                className=' aspect-square'
                            />  </div>

                            <p className='ml-1 max-md:text-lg max-4xl:text-2xl text-[#888888] leading-tight'>Black eapod</p>
                            <p className='font-bold max-md:text-lg max-4xl:text-2xl ml-1 leading-tight 323232'>$500</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default BestSeller