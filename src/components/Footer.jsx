/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <hr />
    <div className='bg-white shadow-sm p-14'>
        <div className='flex flex-col text-lg md:flex-row md:justify-around items-center space-y-4 md:space-y-0 md:space-x-4 font-semibold'>
          <div className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <p>098-765-4321</p>
          </div>
          
          <div className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <p>project@test.com</p>
          </div>
          
          <div className='flex space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard">
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            </svg>
            <div className='text-center'>
              <h1 className='text-lg'>เกี่ยวกับ SuperMarket</h1>
              <NavLink to='/about'>
                <p className='text-sm mt-2'>ข้อมูลเว็บไซต์</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    <p className='bg-purple-300 text-center font-medium text-purple-600 p-2'>©Copyright 2024:Khan</p>
    </>
  )
}

export default Footer