import React from 'react'
import { CirclePlus } from 'lucide-react'
const TeachersList = () => {
  return (
    <div> 
        <div className='flex justify-evenly'>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Maths</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg w-20 text-center hover:bg-gray-700 ease-in duration-200'>Physics</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Biology</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Chemistry</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Sociology</div>
            <CirclePlus className='bg-gray-500 text-white p-1 rounded-lg h-8 w-8 hover:bg-gray-700 ease-in duration-200'/>
        
    </div>
    </div>
  )
}

export default TeachersList