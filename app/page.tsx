
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main className="h-[100vh] w-full">
    <Navbar />
              

      <div className="w-full  grid grid-cols-12 grid-rows-1 h-[100%]">
      <div className="col-span-10 p-5">
       <h1>Desarrollo del talento humano en organizaciones saludables</h1>
       <h2>Los planes de carrera como oportunidad de desarrollo organizacional</h2>
      </div>
      </div>


      
    </main>
  );
}
