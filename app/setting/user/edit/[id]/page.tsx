'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const Edit = ({ params }: { params: { id: any } }) => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [tel, settel] = useState('')
    const [position, setposition] = useState('')
    const [datestartwork, setdatestartwork] = useState()
    const [salary, setsalary] = useState()
    const router = useRouter()
    const { id } = params
    //const [data, setdata] = useState<any>([]);
    const multipleData = [
      { text: 'Camera & Photo', group: 'Electronics', value: 1 },
      { text: 'Cell Phones & Accessories', group: 'Electronics', value: 2 },
      { text: 'GPS & Navigation', group: 'Electronics', value: 3 },
      { text: 'Plugs and Outlets', group: 'Smart Home', value: 4 },
      { text: 'Heating and Cooling', group: 'Smart Home', value: 5 },
      { text: 'Detectors and Sensors', group: 'Smart Home', value: 6 },
    ];
  
  const fetchPost = async (id: Number) => {
    try {
      const res = await axios.get(`/api/user/${id}`)
      //setdata(res.data);
      
        setfname(res.data.fname),
        setlname(res.data.lname),
        settel(res.data.tel),
        setposition(res.data.position),
        setdatestartwork(res.data.datestartwork)
        setsalary(res.data.salary)
      
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchPost(parseInt(id))
    }
  }, [id])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`/api/user/${id}`, {
        fname,
        lname,
        tel,
        position,
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
              <input 
              className='border-solid border-2 border-black ml-3 space-x-5' 
              title='position'
              value={position}
              onChange={(e:any)=>setposition(e.target.value)}
              />
            </div>
            <div className='space-x-5'>
              <label>วันที่เริ่มงาน เดิม{datestartwork}</label> 
              <input 
              type='date'
              className='border-solid border-2 border-black ml-3 space-x-5' 
              title='datestartwork'
              onChange={(e:any)=>setdatestartwork(e.target.valueAsDate)}
              />
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