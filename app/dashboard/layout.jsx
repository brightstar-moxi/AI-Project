import React from 'react'
import Header from './_components/Header'
import SlideNav from './_components/SlideNav'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <div className='hidden md:block h-screen bg-white fixed mt-[65px] w-64'>
            <SlideNav/>
        </div>
        <div>
            <Header/>
            <div className='md:ml-64 p-10'>
            {children}
            </div>
            </div>
            </div>
  )
}

export default DashboardLayout