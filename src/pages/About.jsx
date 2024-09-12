/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <>
      <h1 className='text-center text-4xl font-bold p-4'>ข้อมูลเว็บไซต์</h1>
      <div className='bg-white max-w-full flex justify-center p-4'>
          <hr />
          <div className='bg-purple-200 rounded-lg p-4 font-medium w-2/4'> 
              <p>
                เว็บไซต์นี้สร้างขึ้นเพื่อศึกษาและพัฒนาด้วย React Js
              </p>
              <p>เป็นเว็บเกี่ยวกับการซื้อขายในระบบซุปเปอร์มาร์เก็ตแบบออนไลน์ จัดทำขึ้นเพื่อไม่ให้เสียเวลาในการไปหน้าร้านโดยการเช็คของก่อนได้ สามารถเช็คสินค้าได้ว่ามีในสต็อกหรือไม่ ก่อนออกไปซื้อหน้าร้าน</p>
              <p>จัดทำโดย</p>
              <div>
                <p></p>
              </div>
          </div>
      </div>
      </>
    </Layout>
  )
}

export default About