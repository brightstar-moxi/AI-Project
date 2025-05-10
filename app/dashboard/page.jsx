"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import Link from 'next/link'

const Dashboard = () => {
  const  [videoList,setVideList]=useState([])
  return (
    <div>
      <div className='flex justify-between items-baseline-last'>
        <h2 className='font-bold text-2xl text-[#8338ec]'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
                <Button className="bg-[#8338ec]">+ Create Video</Button>
            </Link>
      </div>

      {/* Empty State */}
      {videoList?.length==0&&<div>
        <EmptyState/>
        </div>}
    </div>
  )
}

export default Dashboard