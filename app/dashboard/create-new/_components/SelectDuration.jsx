import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SelectDuration = () => {
  return (
    <div><h2 className='font-bold text-2xl text-[#8338ec]'>Content</h2>
    <p className='text-gray-500'>What is the topic of your video?</p>
    <Select onValueChange={(value) => {
      setSelectedOption(value)
      value!='Custom Prompt'&&onUserSelect('topic',value)
      }}>
      <SelectTrigger className="w-full mt-2 p-6 text-lg">
        <SelectValue placeholder="Content Type" />
      </SelectTrigger>
      <SelectContent>
       
          <SelectItem value='30 Seconds'>30 Seconds</SelectItem>
          <SelectItem value='60 Seconds'>60 Seconds</SelectItem>


      </SelectContent>
    </Select>
    </div>
  )
}

export default SelectDuration