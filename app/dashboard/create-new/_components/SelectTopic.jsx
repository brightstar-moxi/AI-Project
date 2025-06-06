"use client"
import React, { useState } from 'react';
import {Textarea} from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const SelectTopic = ({onUserSelect}) => {
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivaional', 'Fun Facts']
  const [selectedOption, setSelectedOption] = useState()
  return (
    <div>
      <h2 className='font-bold text-2xl text-[#8338ec]'>Content</h2>
      <p className='text-gray-500'>What is the topic of your video?</p>
      <Select onValueChange={(value) => {
        setSelectedOption(value)
        value!='Custom Prompt'&&onUserSelect('topic',value)
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}

        </SelectContent>
      </Select>
      {selectedOption == 'Custom Prompt' &&
<Textarea className='mt-3' 
onChange={(e)=>onUserSelect('topic',e.target.value)}
placeholder='Write prompt on which  you want to generate video'/>
}
    </div>
  )
}
