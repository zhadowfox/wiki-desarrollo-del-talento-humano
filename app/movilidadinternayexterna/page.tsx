import React from 'react'
import banner_4 from "../../public/banner_articulos/banner_4.png"
import Image from 'next/image'
const page = () => {
  return (
    <div className="w-full justify-center ">


    <Image src={banner_4} alt={""} className="m-auto w-full max-w-[1086px] md:w-auto" />

</div>
  )
}

export default page
