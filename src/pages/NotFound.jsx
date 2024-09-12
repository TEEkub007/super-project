import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout>
      <div className='flex justify-center'>
          <div className='text-center p-4 text-2xl'>
            <p>ไม่พบหน้าที่ต้องการ</p>
            <button className='bg-purple-500 rounded-full text-white font-semibold my-5 p-4'>
              <NavLink to='/'>กลับไปหน้าแรก</NavLink>
            </button>
          </div> 
      </div>
    </Layout>
  )
}

export default NotFound