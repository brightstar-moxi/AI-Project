import Image from 'next/image'
import React from 'react'

export const SelectStyle = () => {
    const styleOptions=[
        {
            name:'Realstic',
            image:'/real.jpg'
        },
        {
            name:'Cartoon',
            image:'/cartoon.jpeg'
        },
        {
            name:'Comic',
            image:'/comic.png'
        },
        {
            name:'WaterColor',
            image:'/watermark.jpg'
        },
        {
            name:'GTA',
            image:'/gta.jpeg'
        },
    ]
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-2xl text-[#8338ec]'>Style</h2>
        <p className='text-gray-500'>Select your video style</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
            {styleOptions.map((item, index)=>(
                <div>
                    <Image src={item.image} alt='A.I image' width={100} height={100}
                    className='h-48 object-cover rounded-lg w-full'
                    /> 
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}
