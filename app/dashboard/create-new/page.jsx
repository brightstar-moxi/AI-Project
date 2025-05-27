'use client'
import React, { useState } from 'react'
import { SelectTopic } from './_components/SelectTopic'
import { SelectStyle } from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'

const CreateNew = () => {

  const [formData,setFormData]=useState([])
  const onHandleInputChage=(fieldName, fieldValue)=>{
console.log(fieldName,fieldValue);

setFormData(prev=>({
  ...prev,
  [fieldName]:fieldValue
}))

  }


  const onCreateClickHandler=()=>{
    GetVideoScript();
  }

  // Get Video Script
  const GetVideoScript=async()=>{
    const prompt = 'Write a script to generate '+formData.duration+' video on topic: '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and ContentText as field'
    console.log(prompt);
    
    const result =await axios.post('/api/get-video-script',{
      prompt:prompt
    }).then(resp=>{
      console.log(resp.data);
      
    })
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-center text-[#8338ec]'>Create New</h2>
    <div className='mt-10 shadow-md p-10'>
      {/* Select Topic  */}
<SelectTopic onUserSelect={onHandleInputChage}/>
      {/* Select Style */}
<SelectStyle onUserSelect={onHandleInputChage}/>
      {/* Duration */}
<SelectDuration onUserSelect={onHandleInputChage}/>
      {/* Create Button */}
      <Button className='bg-[#8338ec] mt-10 w-full' onClick={onCreateClickHandler}>Create Short Video</Button>
    </div>
    </div>
  )
}

export default CreateNew