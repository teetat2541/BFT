'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import { URLSearchParams } from 'url'

export default function Home() {
  const [user,setuser] = useState([])
  const [search, setsearch] = useState('')
  const [position, setposition] = useState('')
  const [allPositon, setAllposition] = useState([])
  const [sort, setsort] = useState('desc')  


  const fetchUser = async() =>{
  try {
    
      const response = await axios.get(`/api/user?search=${search}&position=${position}&sort=${sort}`);
      /* ใช้กับ url ภาษาไทยไม่ได้
      const query = new URLSearchParams({search,position,sort})
      const response = await axios.get(`/api/user?${query}`)*/
    setuser(response.data)
  } catch (error) {
    console.log('error',error);
  }
  }
  const deleteUser = async (id:number) => {
    try {
      await axios.delete(`/api/user/${id}`)
      fetchUser()
    } catch (error) {
      console.error('Failed to delete the post', error)
    }
  }
  const fetchPosition = async() =>{
    try {
      
        const response = await axios.get(`/api/position`);
      setAllposition(response.data)
    } catch (error) {
      console.log('error',error);
    }
    }

  useEffect(() => {
    fetchUser();
    fetchPosition();
  }, [])
  const handleSearch=()=>{
    fetchUser()
    
  }

  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Blog Posts</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            title='position'
            value={position}
            onChange={(e) => setposition(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select position</option>
            {allPositon.map((pos:any)=><option value={pos.name}>{pos.name}</option>)}

          </select>
          <select
          title='sort'
            value={sort}
            onChange={(e) => setsort(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
          </select>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="shadow overflow-hi dden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Firstname
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                tel
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                salary
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {user.map((user: any) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.fname}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.tel}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.position.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.salary}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    href={`/setting/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button 
                  onClick={deleteUser}
                  className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="/setting/user/create"
      >
        Create a New Post
      </Link>
    </div>
  )

}
