import { IndianRupee, Contact } from 'lucide-react'
import React from 'react'

const DoctorBoxes = () => {
  return (
    <div className='w-60 rounded-lg bg-gray-600'>
        <div className='text-xl font-semibold text-center'>Hello World</div>
        <div className='text-lg'>ENT</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi facilis cum veritatis ducimus, modi quo!</div>
        <div className='flex'>Price: <div className='font-bold flex gap-2 text-base'><IndianRupee className='h-5'/> 2500</div></div>
        <div className='bg-blue-300 flex gap-4 justify-center text-black hover:bg-blue-600 ease-in-out duration-300 py-2 rounded-lg'><Contact /> Contact Me</div>
    </div>
  )
}

export default DoctorBoxes