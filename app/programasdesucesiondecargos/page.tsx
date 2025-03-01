import React from 'react'
import banner_2 from "../../public/banner_articulos/banner_2.png"
import Image from 'next/image'
const page = () => {
  return (
    <div className="w-full justify-center ">


    <Image src={banner_2} alt={""} className="m-auto w-full max-w-[1086px] md:w-auto" />

</div>
  )
}

export default page
