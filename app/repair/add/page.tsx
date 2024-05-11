'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [image,setImage] = useState<File | null>(null);
  const [allimage,setallimage] = useState([]);

  const FetchImage = async () =>{
  const respones = await axios.get('/api/repair');
  const data = await respones.data;
  console.log({data})
  setallimage(data?.file)
}
  const Submithandle = async(e:any)=>{
    e.preventDefault()

    if (!image){
      alert('plese upload image')
    }
    const formData:any = new FormData();
    formData.append("image",image);
    const response:any = await axios.post("/api/repair",formData);
    const data:any = await response.data;
    //console.log({data})
    //console.log({image})
    //alert('upload complete')
  }
  useEffect(() => {
    FetchImage()
  }, [])
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">

      <form onSubmit={Submithandle} className="w-1/2 mx-auto flex flex-col gap-5">
        <input title='image' onChange={(e)=>setImage(e.target.files[0])} type="file"/>
        <div className="flex justify-center items-center">
          <button type='submit' className="px-12 py-3  rounded text-white bg-red-500">Upload</button>
        </div>
        
      </form>
      <div className='w-full flex flex-wrap space-x-4'>
        {
          allimage && allimage.length>0 &&  allimage.map((cur:any,i:any)=>{
              return (
              <div key={i} className='w-1/4 mx-auto p-2 border border-purple-500'>
                <img src={`./${cur}`} alt={`image${i}`} />
              </div>
              )
            })
          }
      </div>
    </main>

  )
}