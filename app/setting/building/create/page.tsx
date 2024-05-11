'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Create = () => {
  const [b_type, setb_type] = useState('')
  const [b_name, setb_name] = useState('')
  const [b_subdistrict, setb_subdistrict] = useState('')
  const [b_district, setb_district] = useState('')
  const [b_province, setb_province] = useState('')
  
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/user', { b_type,b_name,b_subdistrict, b_district, b_province})
      router.push('/user')
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
               ชื่อ
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e:any)=>{setb_type(e.target.value)}}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              นามสกุล
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e:any)=>{setb_name(e.target.value)}}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="telephonenumber" className="block text-sm font-semibold leading-6 text-gray-900">
              เบอร์โทร
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="telephonenumber"
                id="telephonenumber"
                onChange={(e:any)=>{setb_subdistrict(e.target.value)}}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
              ตำแหน่งงาน
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="position"
                id="position"
                onChange={(e:any)=>{setb_district(e.target.value)}}
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
            Let's talk
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default Create