import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' fixed top-0 left-0 z-50 border-b border-white/30 flex items-center justify-between bg-linear-to-r from-[#09203f] to-[#2a4971] w-full text-white font-semibold text-xl p-4 py-3 h-20'>
        <h1>
        <a href="#home">Portfolio</a>
        </h1>
        <ul className='flex gap-14 mr-4 '>
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
