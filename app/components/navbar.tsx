'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Menu  } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-10">
      
    
      {/* Botón para expandir/colapsar */}
      <button 
        className="flex items-center p-2 text-left text-white bg-slate-900 rounded-md "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X  className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        
      </button>

      {/* Contenido colapsable con animación */}
      <motion.ul 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden text-sm mt-2 bg-gray-300 p-2 rounded-md fixed"
      >
        <li><Link className="block p-2 hover:bg-blue-300" href="#">Plan de carrera</Link></li>
        <li><Link className="block p-2 hover:bg-blue-300" href="#">Programas de sucesión de cargos</Link></li>
        <li><Link className="block p-2 hover:bg-blue-300" href="#">Programas de promoción de cargo</Link></li>
        <li><Link className="block p-2 hover:bg-blue-300" href="#">Movilidad interna y externa</Link></li>
        <li><Link className="block p-2 hover:bg-blue-300" href="#">Aportes del área de talento humano</Link></li>
      </motion.ul>
    </div>
  )
}

export default Navbar
