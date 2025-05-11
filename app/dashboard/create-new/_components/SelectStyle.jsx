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
    <div>
        <h2 className='font-bold text-2xl text-[#8338ec]'>Style</h2>
        <p className='text-gray-500'>Select your video style</p>
        <div>
            {styleOptions.map((item, index)=>(
                <div>
                    <Image src={item.image} alt='A.I image' width={100} height={100}/> 
                </div>
            ))}
        </div>
    </div>
  )
}
