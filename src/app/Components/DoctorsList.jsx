import { CirclePlus } from 'lucide-react'
import React from 'react'
 

const DoctorsList = () => {
  return (
    <div>
        <div className='flex justify-evenly'>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Cardiology</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg w-20 text-center hover:bg-gray-700 ease-in duration-200'>ENT</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Neurologist</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Gynocologist</div>
            <div className='bg-gray-500 text-white p-1 rounded-lg hover:bg-gray-700 ease-in duration-200'>Dermatologist</div>
            <CirclePlus className='bg-gray-500 text-white p-1 rounded-lg h-8 w-8 hover:bg-gray-700 ease-in duration-200'/>
        </div>
    </div>
  )
}

export default DoctorsList