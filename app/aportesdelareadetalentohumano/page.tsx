import React from 'react'
import banner_5 from "../../public/banner_articulos/banner_5.png"
import Image from 'next/image'
const page = () => {
  return (
    <div className="w-full justify-center ">


    <Image src={banner_5} alt={""} className="m-auto w-full max-w-[1086px] md:w-auto" />

</div>
  )
}

export default page
