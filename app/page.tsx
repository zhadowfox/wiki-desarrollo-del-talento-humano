
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";
import btn1 from "../public/btn/btn_plan_carrera.png";
import btn2 from "../public/btn/btn_programas_sucesion.png";
import btn3 from "../public/btn/btn_programas_promocion.png";
import btn4 from "../public/btn/btn_movilidad.png";
import btn5 from "../public/btn/btn_aportes_area_talento_humano.png";
import banner from "../public/banner.png";


export default function Home() {
  return (
    <main className="w-full justify-center flex-col flex">
      <Navbar />


      <div className="w-full justify-center ">


        <Image src={banner} alt={"da"} className="m-auto w-full max-w-[1086px] md:w-auto" />

      </div>
      <div className="flex justify-center">
        <div className="w-[1086px] grid grid-cols-2 grid-rows-3  gap-0">

          <div className="col-span-1 row-span-1">
            <Link href={""}>
              <Image src={btn1} alt={"Planes de Carrera"} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-1 col-start-2">
            <Link href={""}>
              <Image src={btn2} alt={"Programas de sucesión de cargos"} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-1 col-start-1 row-start-2">

            <Link href={""}>
              <Image src={btn3} alt={"Programas de promoción de cargos"} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>

          <div className="col-span-1 row-span-1 col-start-1 row-start-3">
            <Link href={""}>
              <Image src={btn4} alt={"Movilidad interna y externa"} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-2 col-start-2 row-start-2">
            <Link href={""}>
              <Image src={btn5} alt={"Aportes que hace el área de talento humano a la construcción de planes de carrera"} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>


        </div>
      </div>




    </main>
  );
}
