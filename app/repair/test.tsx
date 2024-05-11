'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from 'inspector';


export default function Home() {

const [repairplace,setrepairplace] = useState('');
const [repairdetail,setrepairdetail] = useState('');
const [damageimage,setdamageimage] = useState([]);

const handleCheck = (index:number,e:any,selected:any)=>{
    console.log(index,e.target.value,selected)
    let temp = repairplace,repairdetail,damageimage
    temp[(index as number)][(selected as "repairplace" | "repairdetail"|"image")] = e.target.value;
    setrepair(temp);
}
const handleNewRow =()=>{
    setrepair(repairplace:'')
}
const handleSubmit =(e:any)=>{
    e.preventDefault()
    console.log(repair)
    setrepair([{
        repairplace:'',
        repairdetail:'',
        image:'',
    }])
}

return(
<div>
 <section>

    <form onSubmit={handleSubmit} className="w-1/2 mx-auto flex flex-col gap-5">
        {
            repair.map((details,index)=>(
                <>
                    <section key={index}>
                        <h2>555</h2>
                        <label htmlFor='repairdetail'>จุดที่เสีย</label>
                        <input onChange={(e)=>handleCheck(index,e,'repairplace')} value={details?.repairplace} type="text" placeholder='จุดที่เสีย' />
                        <label htmlFor='repairdetail'>รายละเอียดสิ่งที่เสีย</label>
                        <input onChange={(e)=>handleCheck(index,e,'repairdetail')} value={details?.repairdetail} type="text" placeholder='รายละเอียดสิ่งที่เสีย'/>
                        <input title='image' onChange={(e)=>handleCheck(index,e,'image')} value={details?.image} type="file"/>
                    </section>
                    {
                        index !==repair.length-1 ? <div className='horizontal'></div>:''
                    }
                </>
            ))
        }
        <span onClick={handleNewRow}>Add new repair</span>
        <button type='submit' className="px-12 py-3  rounded text-white bg-red-500">Upload</button>
    </form>
</section>
</div>
)


}
