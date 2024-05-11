'use client'
import React, { useState } from 'react'

export default function Home() {
  
    return (
      <main className=" flex flex-col text-center space-y-4 p-5  p-4">
        <h2 className='m-4'>โปรดเลือกรายการที่ทำ</h2>
        <a className='p-3 bg-blue-100 border-solid border-4 border-black' href='/setting/user'>เพิ่มชื่อผู้ใช้</a>
        <a className='p-3 bg-blue-100 border-solid border-4 border-black' href='/setting/building'>เพิ่มอาคาร</a>
        <a className='p-3 bg-blue-100 border-solid border-4 border-black' href='/setting/'>เพิ่ม</a>
        <a className='p-3 bg-blue-100 border-solid border-4 border-black' href='/setting/'>เพิ่ม</a>
      </main>
  
    )
  }