import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly bg-white text-black text-l py-1'>
        <div className='hover:text-blue-500 ease-in duration-200'>Doctors List</div>
        <div className='hover:text-blue-500 ease-in duration-200'>Shops</div>
        <div className='hover:text-blue-500 ease-in duration-200'>Chats</div>
        <div className='hover:text-blue-500 ease-in duration-200'>Profile</div>
    </div>
  )
}

export default Navbar