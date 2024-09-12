import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center min-h-screen bg-gray-100 '>
        <div className='max-w-md bg-white rounded-lg shadow-lg p-6 sm:w-2/4'>
          <h1 className='text-purple-600 text-3xl text-center font-bold mb-6'>เข้าสู่ระบบ</h1>
          <form className='space-y-4'>
            <div>
              <label htmlFor="email" className='block text-lg text-gray-700 mb-2'>Your email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-600 focus:border-purple-600' 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className='block text-lg text-gray-700 mb-2'>Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-600 focus:border-purple-600' 
                placeholder="••••••••" 
                required 
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <input 
                  id="remember" 
                  type="checkbox" 
                  className='w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500' 
                />
                <label htmlFor="remember" className='ml-2 text-sm text-gray-600'>จดจำรหัสผ่าน</label>
              </div>
              <a href="#" className='text-sm text-purple-600 hover:underline'>ลืมรหัสผ่าน ?</a>
            </div>
            <button 
              type="submit" 
              className='w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition'>
              เข้าสู่ระบบ
            </button>
            <p className='text-sm text-center text-gray-600'>
              ยังไม่มีบัญชี? 
              <NavLink to="/signup" className='text-purple-600 hover:underline ml-1'>ลงทะเบียน</NavLink>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
