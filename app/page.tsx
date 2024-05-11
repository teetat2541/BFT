import Link from "next/link"

export default function Home() {
  return (
  <div>
    <div className="">
      <div><a href="/user" className="flex justify-center ">ผู้ใช้งาน</a></div>
      <div><a href="/" className="flex justify-center">อาคาร</a></div>
    </div>
  </div>
  )

}
