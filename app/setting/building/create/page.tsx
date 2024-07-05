'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Create = () => {
  const [b_type, setb_type] = useState('')
  const [b_name, setb_name] = useState('')


  // ฟังก์ชันสำหรับดึงข้อมูลที่อยู่จาก Prisma SQL

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/building', { b_type,b_name})
      router.push('/setting/building')
    } catch (error) {
      console.error(error)
    }
  }

  
  return (
    
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Create a New User</h1>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
               ประเภทอาคาร
            </label>
            <div className="mt-2.5">
              <select
                name="ประเภทอาคาร"
                title='ประเภทอาคาร'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e:any)=>{setb_type(e.target.value)}}
                required
              >
                  <option value='อพาร์ทเม้นท์'>อพาร์ทเม้นท์</option>
                  <option value='โรงงาน'>โรงงาน</option>
                  <option value='บ้าน'>บ้านพักอาศัย</option>
                  <option value='อื่นๆ'>อื่นๆ</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
              ชื่ออาคาร
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="b_name"
                title='b_name'
                onChange={(e:any)=>{setb_name(e.target.value)}}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            บันทึก
          </button>
        </div>
      </form>
      
    </div>
    
  )
}

export default Create