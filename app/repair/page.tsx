'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {
    const [allimage,setallimage] = useState([]);

    const FetchImage = async () =>{
    const respones = await axios.get('/api/repair');
    const data = await respones.data;
    console.log({data})
    setallimage(data?.file)
    }

useEffect(() => {
    FetchImage()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
        {
          allimage && allimage.length>0 &&  allimage.map((cur:any,i:any)=>{
              return (
              <div key={i} className='w-1/4 mx-auto p-2 border border-purple-500'>
                <Image 
                src={`/repair/${cur}`} 
                width={500} 
                height={400} 
                alt={`image${i}`} />
              </div>
              )
            })
          }
    </main>
  )
}