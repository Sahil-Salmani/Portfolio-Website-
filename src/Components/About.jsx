import React from 'react'
import {
  Code2,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket
} from 'lucide-react'

const About = () => {
  return (
    <div className='bg-gradient-to-r from-[#09203f] to-[#2a4971] h-[calc(100vh-80px)] flex items-center justify-center px-6'>

      {/* MAIN CONTAINER */}
      <section
        id="About"
        className='w-full max-w-5xl bg-[#0b1628]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 text-white shadow-2xl'
      >

        {/* HEADING */}
        <div className='mb-14'>

          <p className='text-cyan-400 tracking-[4px] text-sm mb-3'>
            ABOUT ME
          </p>

          <h1 className='text-4xl font-bold'>
            What I Do
          </h1>

        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

          {/* CARD 1 */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-7 hover:translate-y-[-5px] duration-300'>

            <Code2 className='text-cyan-400 mb-5' size={35} />

            <h2 className='text-2xl font-semibold mb-3'>
              Frontend Development
            </h2>

            <p className='text-gray-300 leading-7'>
              Building modern and interactive web applications
              using React.js and JavaScript.
            </p>

          </div>

          {/* CARD 2 */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-7 hover:translate-y-[-5px] duration-300'>

            <LayoutDashboard className='text-cyan-400 mb-5' size={35} />

            <h2 className='text-2xl font-semibold mb-3'>
              Clean UI Design
            </h2>

            <p className='text-gray-300 leading-7'>
              Creating minimal and visually appealing interfaces
              with modern design principles.
            </p>

          </div>

          {/* CARD 3 */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-7 hover:translate-y-[-5px] duration-300'>

            <MonitorSmartphone className='text-cyan-400 mb-5' size={35} />

            <h2 className='text-2xl font-semibold mb-3'>
              Responsive Layouts
            </h2>

            <p className='text-gray-300 leading-7'>
              Developing websites that adapt perfectly across
              desktop, tablet and mobile devices.
            </p>

          </div>

          {/* CARD 4 */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-7 hover:translate-y-[-5px] duration-300'>

            <Rocket className='text-cyan-400 mb-5' size={35} />

            <h2 className='text-2xl font-semibold mb-3'>
              Continuous Learning
            </h2>

            <p className='text-gray-300 leading-7'>
              Constantly exploring new technologies and improving
              frontend development skills through projects.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default About