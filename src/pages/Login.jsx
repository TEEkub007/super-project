import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
        
        <div className='bg-purple-600 text-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden'>
          
          {/* Section ข้อความต้อนรับ */}
          <div className='flex-1 flex flex-col justify-center items-center p-6 lg:p-10'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4'>ยินดีต้อนรับ</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-center'>เข้าสู่เว็บซุปเปอร์มาร์เก็ต</p>
          </div>

          {/* Section ปุ่มเข้าสู่ระบบและลงทะเบียน */}
          <div className='bg-white flex-1 p-6 lg:p-16'>
            <div className='flex flex-col space-y-4 lg:space-y-6'>
              <NavLink to='/signin' className='block border border-purple-500 py-3 px-8 rounded-full text-purple-500 text-center hover:bg-purple-500 hover:text-white transition-all duration-300'>
                เข้าสู่ระบบ
              </NavLink>
              <NavLink to='/signup' className='block bg-purple-500 py-3 px-8 rounded-full text-white text-center hover:bg-purple-600 transition-all duration-300'>
                ลงทะเบียน
              </NavLink>
            </div>
          </div>
          
        </div>

      </div>
    </Layout>
  );
};

export default Login;
