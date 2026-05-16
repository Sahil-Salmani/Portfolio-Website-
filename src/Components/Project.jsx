import React from 'react'
import {
  ShoppingCart,
  ListTodo,
  BadgeDollarSign,
  LogIn,
  BriefcaseBusiness,
  Mic
} from 'lucide-react'

const Projects = () => {

const projectData = [
  {
    icon: <ShoppingCart size={35} className='text-cyan-400' />,
    title: "E-Commerce Website",
    desc: "Responsive ecommerce website with product pages, cart functionality and clean UI.",
    link: "https://responsive-e-commerce-website-seven.vercel.app/"
  },

  {
    icon: <ListTodo size={35} className='text-cyan-400' />,
    title: "Task Manager",
    desc: "Task management app with add, delete and update functionality using React.",
    link: "https://task-manager-pi-sand-87.vercel.app/"
  },

  {
    icon: <BadgeDollarSign size={35} className='text-cyan-400' />,
    title: "Currency Converter",
    desc: "Modern currency converter with responsive layout and real-time conversion UI.",
    link: "https://currency-conveter-ten.vercel.app/"
  },

  {
    icon: <LogIn size={35} className='text-cyan-400' />,
    title: "Login & Signup Form",
    desc: "Responsive authentication UI with clean modern design and form validation.",
    link: "https://responsive-login-form-pearl.vercel.app/"
  },

  {
    icon: <BriefcaseBusiness size={35} className='text-cyan-400' />,
    title: "Portfolio Website",
    desc: "Personal responsive portfolio website showcasing projects and frontend skills.",
    link: "#"
  },

  {
    icon: <Mic size={35} className='text-cyan-400' />,
    title: "Text To Speech Converter",
    desc: "Interactive text-to-speech web app with smooth UI and responsive design.",
    link: "#"
  }
]

  return (

    <div className='bg-gradient-to-r from-[#09203f] to-[#2a4971] min-h-screen flex items-center justify-center px-6 py-20'>

      <section
        id="Project"
        className='w-full max-w-6xl bg-[#0b1628]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-white shadow-2xl'
      >

        {/* HEADING */}
        <div className='mb-14'>

          <p className='text-cyan-400 tracking-[4px] text-sm mb-3'>
            MY PROJECTS
          </p>

          <h1 className='text-4xl font-bold'>
            Featured Projects
          </h1>

        </div>

        {/* PROJECT GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

          {projectData.map((project, index) => (

            <div
              key={index}
              className='bg-white/5 border border-white/10 rounded-2xl p-7 hover:translate-y-[-8px] hover:border-cyan-400/40 duration-300'
            >

              <div className='mb-6'>
                {project.icon}
              </div>

              <h2 className='text-2xl font-semibold mb-4'>
                {project.title}
              </h2>

              <p className='text-gray-300 leading-7'>
                {project.desc}
              </p>

             <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className='mt-6 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-black duration-300'>
    View Project
  </button>
</a>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Projects