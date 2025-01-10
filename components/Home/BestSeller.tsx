import Image from 'next/image'
import React from 'react'

const storeData=[
    {
        id:1,
        title:'Sony Headset',
        price:'60,000',
        image:'/store/black_bluetooth.png',
    },
    {
        id:2,
        title:'Purity Headset',
        price:'90,000',
        image:'/store/yellowHeadset.png',
    },
    {
        id:3,
        title:'Oculus',
        price:'290,000',
        image:'/store/vrHeadset.png',
    },
    {
        id:4,
        title:'Silver Macbook',
        price:'60,000',
        image:'/store/macbook.png',
    },
    {
        id:5,
        title:'Monster Headset',
        price:'60,000',
        image:'/store/monsterHeadset.png',
    },
    {
        id:6,
        title:'Sony Headset',
        price:'90,000',
        image:'/store/ipodEarphone.png',
    },
    {
        id:7,
        title:'Beat Headset',
        price:'290,000',
        image:'/store/blueHeadset.png',
    },
    {
        id:8,
        title:'Apple watch',
        price:'60,000',
        image:'/store/appleWatch.png',
    },
]

const BestSeller = () => {
    return (
        <section className=' text-center py-5 lg:py-10 xl:pb-16 w-full max-w-[2131px] mx-auto px-5 '>
            <h6 className=' font-bold text-4xl xl:text-[75.59px] 4xl:text-[98.59px] xl:pb-5  '>
                Best Seller Products
            </h6>
            <span className='text-xl xl:text-[25.59px] 4xl:text-[33.27px]  font-medium text-[#343434]'>
                We have products that you will love

            </span>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32 my-10 font-medium text-[33px]">

                {storeData.map((item) => {
                    return (
                        <div className=" w-full text-start h-full flex flex-col " key={ item.id}>
                            <div className="max-w-[446.11px] p-5 flex h-full justify-center items-center mb-3 bg-[#F4F4F4] rounded-[24px]  w-full">   <Image
                                src={item.image}
                                alt=''
                                width={400}
                                height={400}
                                unoptimized={true}
                                className=' w-[400px]'
                            />  </div>

                            <p className='ml-1 max-md:text-lg max-4xl:text-2xl text-[#888888] leading-tight'>{item.title}</p>
                            <p className='font-bold max-md:text-lg max-4xl:text-2xl ml-1 leading-tight 323232'>${item.price}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default BestSeller