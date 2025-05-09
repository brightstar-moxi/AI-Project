
import { CircleUserIcon, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import React from 'react'

const SlideNav = () => {

    const MenOption=[
        {
            id:1,
            name:"Dashboard",
            path:'/dashboard',
            icon:PanelsTopLeft
        },
        {
            id:1,
            name:"Create New",
            path:'/create-new',
            icon:FileVideo
        },
        {
            id:1,
            name:"Upgrade",
            path:'/upgrade',
            icon:ShieldPlus
        },
        {
            id:1,
            name:"Account",
            path:'/account',
            icon:CircleUserIcon
        },
        // {
        //     id:1,
        //     name:"Dashboard",
        //     path:'/dashboard',
        //     icon:PanelsTopLeft
        // },
    ]
  return (
    <div className='w-64 h-screen shodow-md p-5'>
        <div>
            {MenOption.map((item,index)=>(
                <div className='flex items-center gap-3 p-3'>
                <item.icon/>
                <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SlideNav