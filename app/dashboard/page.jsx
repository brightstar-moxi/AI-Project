"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'

const Dashboard = () => {
  const  [videoList,setVideList]=useState([])
  return (
    <div>
      <div className='flex justify-between items-baseline-last'>
        <h2 className='font-bold text-2xl text-[#8338ec]'>Dashboard</h2>
        <Button className='bg-[#8338ec]'>+ Create New</Button>
      </div>

      {/* Empty State */}
      {videoList?.length==0&&<div>
        <EmptyState/>
        </div>}
    </div>
  )
}

export default Dashboard