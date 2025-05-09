
import { PanelsTopLeft } from 'lucide-react'
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
            icon:PanelsTopLeft
        },
        {
            id:1,
            name:"Upgrade",
            path:'/upgrade',
            icon:PanelsTopLeft
        },
        {
            id:1,
            name:"Account",
            path:'/account',
            icon:PanelsTopLeft
        },
        // {
        //     id:1,
        //     name:"Dashboard",
        //     path:'/dashboard',
        //     icon:PanelsTopLeft
        // },
    ]
  return (
    <div className='w-64 h-screen shodow-md p-5'>SlideNav</div>
  )
}

export default SlideNav