import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' fixed top-0 left-0 z-50 border-b border-white/30 flex items-center justify-between bg-linear-to-r from-[#09203f] to-[#2a4971] w-full text-white font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-3 h-20'>
        <h1 className='whitespace-nowrap'>
        <a href="#home">Portfolio</a>
        </h1>
        <ul className='flex flex-wrap gap-3 sm:gap-5 md:gap-10 mr-4'>
           <li className='hover:font-bold'><a href="#About">About</a></li>
           <li className='hover:font-bold'><a href="#Skills">Skill</a></li>
           <li className='hover:font-bold'><a href="#Project">Project</a></li>
           <li className='hover:font-bold'><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar  