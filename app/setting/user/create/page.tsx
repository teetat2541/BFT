'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Create = () => {
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [tel, settel] = useState('')
  const [positionId, setpositionId] = useState('')
  const [datestartwork, setdatestartwork] = useState()
  const [allPositon, setAllpositions] = useState([])
  const [salary, setsalary] = React.useState<Number>(0)
  const router = useRouter()
  const fetchPosition = async() =>{
    try {
        const response = await axios.get(`/api/position`);
      setAllpositions(response.data)
    } catch (error) {
      console.log('error',error);
    }
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('/api/user', { fname, lname, tel, positionId, datestartwork, salary })
      router.push('/setting/user')
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPosition()
  }, [])
  

  
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
                onChange={(e:any)=>setfname(e.target.value)}
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
                onChange={(e:any)=>setlname(e.target.value)}
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
                onChange={(e:any)=>settel(e.target.value)}
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
              <select
                title='position'
                value={positionId}
                onChange={(e) => setpositionId(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select position</option>
                {allPositon.map((pos:any)=><option value={pos.id}>{pos.name}</option>)}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="datestartwork" className="block text-sm font-semibold leading-6 text-gray-900">
              วันที่เริ่มงาน
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="datestartwork"
                id="datestartwork"
                onChange={(e:any)=>setdatestartwork(e.target.valueAsDate)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="salary" className="block text-sm font-semibold leading-6 text-gray-900">
              เงินเดือน(ไม่จำเป็นต้องใส่)
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="salary"
                id="salary"
                onChange={(e)=>setsalary(e.target.valueAsNumber)}
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