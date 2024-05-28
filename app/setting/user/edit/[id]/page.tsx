'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { parseDate } from '@mobiscroll/react'


const Edit = ({ params }: { params: { id: any } }) => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [tel, settel] = useState('')
    const [positionId, setpositionId] = useState('')
    const [allPosition, setAllposition] = useState([])
    const [datestartwork, setdatestartwork] = useState()
    const [salary, setsalary] = useState()
    const router = useRouter()
    const { id } = params
    //const [data, setdata] = useState<any>([]);
  
  const fetchPost = async (id: Number) => {
    try {
      const res = await axios.get(`/api/user/${id}`)
      //setdata(res.data);
      
        setfname(res.data.fname),
        setlname(res.data.lname),
        settel(res.data.tel),
        setpositionId(res.data.positionId||''),
        setdatestartwork(res.data.datestartwork),
        setsalary(res.data.salary)
      
      
    } catch (error) {
      console.log(error)
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
    if (id) {
      fetchPost(parseInt(id))
      fetchPosition()
    }
  }, [id])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const numPositinId = parseInt(positionId)
      
      await axios.put(`/api/user/${id}`, {
        fname,
        lname,
        tel,
        positionId:numPositinId,
        datestartwork,
        salary
      })
      router.push('/setting/user')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      
      <h1 className="text-2xl font-semibold mb-6">Edit Post {id}</h1>
      <form onSubmit={handleUpdate} className="space-y-0">
            <div className='space-x-5'>
              ชื่อ
              <input 
              autoComplete='name'
              className='border-solid border-2 border-black ml-3 space-x-5' 
              title='fname'
              value={fname}
              onChange={(e:any)=>setfname(e.target.value)}
              />
            </div>
            <div className='space-x-5'>
              นามสกุล
              <input 
              autoComplete='name'
              className='border-solid border-2 border-black ml-3 space-x-5'  
              title='lname'
              value={lname}
              onChange={(e:any)=>setlname(e.target.value)}
              />
            </div>
            <div className='space-x-5'>
              เบอร์โทร
              <input 
              autoComplete=''
              className='border-solid border-2 border-black ml-3 mr-25%' 
              title='tel'
              value={tel}
              onChange={(e:any)=>settel(e.target.value)}
              />
            </div>
            <div className='space-x-5'>
              ตำแหน่ง
            <select
            title='position'
            key={positionId}
            value={positionId}
            onChange={(e) => setpositionId(e.target.value)}
            className="space-x-5 px-4 py-2 border rounded-md focus:outline-none border-2 border-black focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select position</option>
            {allPosition.map((pos:any)=><option value={pos.id}>{pos.name}</option>)}

          </select>
            </div>
            <div className='space-x-5'>
              <label>วันที่เริ่มงาน</label> 
              <input 
              
              value={datestartwork}
              className='border-solid border-2 border-black ml-3 space-x-5' 
              title='datestartwork'
              onChange={(e:any)=>setdatestartwork(e.target.value)}
              />
                 ปี-เดือน-วัน xxxx-xx-xxT00:00:00.000Z'
            </div>
            <div className='space-x-5'>
              เงินเดือน
              <input 
              type='number'
              className='border-solid border-2 border-black ml-3 space-x-5' 
              title='salary'
              value={salary}
              onChange={(e:any)=>setsalary(e.target.valueAsNumber)}
              />
            </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
      </div>
  )
}

export default Edit