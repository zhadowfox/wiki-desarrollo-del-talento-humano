'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Menu  } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-5 flex justify-center w-full">
      <div className='flex'>
      <button 
        className="flex items-center p-2 text-left text-white bg-slate-900 rounded-md mr-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X  className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        
      </button>
      
      <motion.ul 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden text-sm  bg-gray-300 p-2 rounded-md fixed mt-10"
      >
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="/">Inicio</Link></li>
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="/plandecarrera">Plan de carrera</Link></li>
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="programasdesucesiondecargos">Programas de sucesión de cargos</Link></li>
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="programasdepromociondecargos">Programas de promoción de cargo</Link></li>
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="movilidadinternayexterna">Movilidad interna y externa</Link></li>
        <li><Link  onClick={() => setIsOpen(!isOpen)} className="block p-2 hover:bg-blue-300" href="aportesdelareadetalentohumano">Aportes del área de talento humano</Link></li>
      </motion.ul>
      </div>
      {/* Botón para expandir/colapsar */}
  
      <h1 className="capitalize text-3xl">Desarrollo del talento humano en organizaciones saludables</h1>
      {/* Contenido colapsable con animación */}
    
    </div>
  )
}

export default Navbar
