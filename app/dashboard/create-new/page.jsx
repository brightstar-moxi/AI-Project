import React from 'react'
import { SelectTopic } from './_components/SelectTopic'

const CreateNew = () => {
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-center text-[#8338ec]'>Create New</h2>
    <div className='mt-10 shadow-md p-10'>
      {/* Select Topic  */}
<SelectTopic/>
      {/* Select Style */}

      {/* Duration */}

      {/* Create Button */}
    </div>
    </div>
  )
}

export default CreateNew