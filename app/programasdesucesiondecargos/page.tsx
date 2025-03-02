import React from 'react'
import banner_2 from "../../public/banner_articulos/banner_2.png"
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <div className="w-full justify-center ">


        <Image src={banner_2} alt={""} className="m-auto w-full max-w-[1086px] md:w-auto" />
      </div>
      <div className="flex justify-center">
        <div className="lg:w-[1086px] flex flex-col w-[80%] leading-relaxed">
          <h1 className='font-bold text-xl mb-2'>Programas de sucesión</h1>
          <p>
            Los programas de sucesión son una herramienta organizacional y de desarrollo de colaboradores en cargos clave, que permiten generar y transmitir las capacidades y conocimientos de un individuo a otro; para asegurar su continuidad en el tiempo, la transferencia de cultura organizacional, la especificidad técnica y la manera de hacer las cosas. Según <Link href={"https://journalprosciences.com/index.php/ps/article/view/209"} target="_blank" className="text-blue-500 underline">Montiel-Díaz, Colina, Solorzano, & Herrera (2019).</Link>  Los cargos clave son aquellas personas consideradas piezas importantes para la organización.
          </p>
          <br />
          <h1 className='mb-2 mt-4 font-bold text-xl'>
            ¿Por que es importante un programa de sucesión?
          </h1>
          <p>
            El propósito principal de la sucesión es transmitir a la siguiente generación tanto la propiedad como la gestión de la empresa, Trevinyo-Rodríguez (2010).  Los motivos por los cuales se apertura los programas de sucesión se presentan cuando una persona en un cargo clave abandonará la empresa por diversos motivos que pueden ser: jubilación, migración externa a otra empresa o herencia en empresas familiares; de esta manera se establece un colaborador con altas capacidades que esté en línea de plan de carrera, con una adecuada gestión del desempeño o en línea de sucesión hereditaria, para ocupar el puesto que queda vacante.
          </p>

          <Image
            src="/articulo2/1.png"
            alt=""
            width={800} // Ancho original o aproximado de la imagen
            height={300} // Alto original o aproximado de la imagen
            className="w-auto h-auto max-w-full m-auto mt-5"
          />
          <span className='font-sm italic text-center'>Nota: imagen de autoría propia</span>
          <h1 className="font-bold text-xl mt-4 mb-2">
            ¿Qué debe contener un plan de sucesión?
          </h1>
          <Image
            src="/articulo2/2.png"
            alt=""
            width={800} // Ancho original o aproximado de la imagen
            height={300} // Alto original o aproximado de la imagen
            className="w-auto h-auto max-w-full m-auto mt-5"
          />
          <span className='font-sm italic text-center'>Nota: imagen de autoría propia</span>
          <p className='my-2'>
            EL plan de sucesión debe tener en cuenta los aspectos de planeación con la determinación de aquellos cargos clave que en caso de movilidad pueden afectar la continuidad del negocio, dicha planeación incluye identificar que aspectos debe poseer el cargo clave como: educación, competencias blandas, capacidades, rasgos de liderazgo, experticia y comportamiento organizacional.
          </p>
          <p className="my-2">
            Luego de la etapa de identificación de cargos claves, comienza la identificación de cargos sucesores; estos cargos deberán poseer planes de desarrollo y planes carrera encaminados a los aspectos relevantes de los cargos claves; a su vez la elección de un cargo sucesor debe conllevar para este beneficios personales y laborales como: aumento salarial, cambio en equilibrio vida trabajo y desarrollo de plan de carrera.
          </p>
          <p className="my-2">
            Por ultimo con la elección del sucesor comienza la etapa de transferencia del conocimiento, en esta etapa se desarrolla un plan de gestión del conocimiento, transmitiendo todo lo que el cargo clave posea bajo el Know how de la compañía. En esta estapa pueden exitir beneficios y aspectos de mejora que impactan al plan de sucesión.
          </p>
          <h1 className="mt-4 mb-2 font-bold text-xl">
            ¿Qué aspectos benefician y cuales se deben tener en cuenta para incorporar el cuales son sus beneficios y aspectos a tener en cuenta?
          </h1>
          <p className='mb-2'>
            Según <Link href="https://repositorio.comillas.edu/xmlui/handle/11531/56624" target='_blank' className='text-blue-500 underline'> Fernández-Bujarrabal Herrero, (2022)</Link>

          </p>
          <p>Beneficios:</p>
          <ul className='lg:ps-10 list-disc mb-4'>
            <li>Contratación de nuevos talentos o promociones internas (planes carrera)</li>
            <li>Continuidad de la cultura y valores corporativos</li>
            <li>Comprensión de la estrategia y delimitación de objetivos</li>
            <li>Compromiso</li>
            <li>Compromiso </li>

          </ul>
          <p>Aspectos a tener en cuenta:</p>
          <ul className='lg:ps-10 list-disc mb-4'>
            <li>Cambios en el gobierno corporativo u organigrama</li>
            <li>Contexto de clientes, proveedores y mercado del cargo clave</li>
            <li>Los candidatos externos pueden no desarrollar compromiso y gestión de igual manera que el cargo clave por sucesión, impacto en el equipo de trabajo ya establecidoContexto de clientes, proveedores y mercado del cargo clave</li>
            <li>Retención del poder y de conocimiento por parte de cargo clave.</li>


          </ul>
          <p className="mb-4">
            Para ampliar la información sobre planes de sucesión puedes observar el siguiente video:
          </p>
          <p className="flex justify-center mb-4">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xwXYUl8irng?si=41aG8Ias6zmxuKeF" allowFullScreen></iframe>
          </p>

          <h1 className='font-bold text-xl mb-2'>Referencias:</h1>

          <p className="my-2">
            Fernández-Bujarrabal Herrero, P. E. (2022). Planes de sucesión y protocolos en empresas familiares. 
            <Link className="text-blue-500 underline" href={"https://repositorio.comillas.edu/xmlui/handle/11531/56624"} target='_blank'> https://repositorio.comillas.edu/xmlui/handle/11531/56624</Link></p>

          <p className="my-2">Montiel-Díaz, P. A., Colina, N. E. S., Solorzano, L. D. R. M., & Herrera, A. D. P. T. (2019). La sucesión: permanencia de las empresas en el tiempo. <Link className="text-blue-500 underline" href={"https://journalprosciences.com/index.php/ps/article/view/209"} target='_blank'>https://journalprosciences.com/index.php/ps/article/view/209</Link></p>


          <p className="my-2">BAC Credomatic (2020,01,07). Planes de sucesión aprendiendo [Video]. Youtube: <Link className="text-blue-500 underline" href={"https://www.youtube.com/watch?v=xwXYUl8irng"} target='_blank'>https://www.youtube.com/watch?v=xwXYUl8irng</Link></p>

          <p className="my-2">Trevinyo-Rodríguez, R. N. (2010). Empresas Familiares. Visión Latinoamericana. Estructura, gestión, crecimiento y continuidad. México: Pearson Educación.</p>
<br />
    <div className="flex flex-col justify-center align-middle">
<Image
  src="/articulo2/perfil.png"
  alt="Lina Marcela Vasquez Quintero"
  width={500} // Ancho original o aproximado de la imagen
  height={300} // Alto original o aproximado de la imagen
  className="w-[200px] h-[200px] object-contain m-auto"
/>
<h1 className='my-2 font-bold italic text-center'>Autora: Lina Marcela Vasquez Quintero</h1>
</div>

        </div>
      </div>
    </>
  )
}

export default page
