import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
        <div className='flex gap-3 items-center '>
            <Image src={'/login.jpg'} alt='logo' width={30} height={30}/>
       <h2 className='font-bold text-xl'> Brightstar AI Vid</h2>
        </div>
        <div className='flex gap-3 items-center'>
            <Button className='bg-[#8338ec]'>Dashboard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header