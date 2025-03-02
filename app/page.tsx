'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full justify-center">
        <Image src="/banner.png" alt="Banner" width={1086} height={300} className="m-auto w-full max-w-[1086px] md:w-auto" />
      </div>
      <div className="flex justify-center">
        <div className="w-[1086px] grid grid-cols-2 grid-rows-3 gap-0">
          <div className="col-span-1 row-span-1">
            <Link href="/plandecarrera">
              <Image src="/btn/btn_plan_carrera.png" alt="Planes de Carrera" width={471} height={200} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-1 col-start-2">
            <Link href="/programasdesucesiondecargos">
              <Image src="/btn/btn_programas_sucesion.png" alt="Programas de sucesión de cargos" width={471} height={200} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-1 col-start-1 row-start-2">
            <Link href="/programasdepromociondecargos">
              <Image src="/btn/btn_programas_promocion.png" alt="Programas de promoción de cargos" width={471} height={200} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-1 col-start-1 row-start-3">
            <Link href="/movilidadinternayexterna">
              <Image src="/btn/btn_movilidad.png" alt="Movilidad interna y externa" width={471} height={200} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
          <div className="col-span-1 row-span-2 col-start-2 row-start-2">
            <Link href="/aportesdeladetalentohumano">
              <Image src="/btn/btn_aportes_area_talento_humano.png" alt="Aportes del área de talento humano" width={471} height={400} className="m-auto w-full max-w-[471px] md:w-auto hover:scale-105 transition-all duration-200 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
