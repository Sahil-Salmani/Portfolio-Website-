import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (

    <div className='bg-gradient-to-r from-[#09203f] to-[#2a4971] min-h-screen py-20 flex items-center justify-center px-6'>

      <section
        id="Skills"
        className='w-full max-w-6xl bg-[#0b1628]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 text-white shadow-2xl'
      >

        {/* HEADING */}
        <div className='mb-10'>

          <p className='text-cyan-400 tracking-[4px] text-sm mb-3'>
            MY SKILLS
          </p>

          <h1 className='text-4xl font-bold'>
            Technologies I Work With
          </h1>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          {/* LEFT SIDE SKILLS */}
          <div className='grid grid-cols-2 gap-5'>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <FaHtml5 className='text-orange-500 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>HTML</h2>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <FaCss3Alt className='text-blue-500 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>CSS</h2>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <FaJs className='text-yellow-400 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>JavaScript</h2>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <RiTailwindCssFill className='text-cyan-400 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>Tailwind CSS</h2>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <FaReact className='text-cyan-300 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>React JS</h2>
            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:translate-y-[-5px] duration-300'>
              <FaFigma className='text-pink-400 text-5xl mb-4' />
              <h2 className='text-lg font-semibold'>Figma</h2>
            </div>

          </div>

          {/* RIGHT SIDE DESCRIPTION */}
          <div className='space-y-5'>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6'>

              <h2 className='text-2xl font-semibold mb-3 text-cyan-400'>
                Frontend Development
              </h2>

              <p className='text-gray-300 leading-7'>
                Building responsive and interactive user interfaces
                using modern frontend technologies and frameworks.
              </p>

            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6'>

              <h2 className='text-2xl font-semibold mb-3 text-cyan-400'>
                UI & Responsive Design
              </h2>

              <p className='text-gray-300 leading-7'>
                Creating clean layouts and responsive designs that
                work smoothly across all screen sizes.
              </p>

            </div>

            <div className='bg-white/5 border border-white/10 rounded-2xl p-6'>

              <h2 className='text-2xl font-semibold mb-3 text-cyan-400'>
                Continuous Learning
              </h2>

              <p className='text-gray-300 leading-7'>
                Constantly improving development skills through
                projects, modern UI practices and new technologies.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Skills