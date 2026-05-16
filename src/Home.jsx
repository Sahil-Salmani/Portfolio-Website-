import React from 'react'
import profile from "./assets/profile.png";


const Home = () => {

 

  return (
    <div className='bg-linear-to-r from-[#09203f] to-[#2a4971] min-h-screen'>

      <section
        id="home"
        className='max-w-7xl mx-auto min-h-screen px-8 flex flex-col md:flex-row items-center justify-between text-white'
      >

        {/* LEFT SIDE */}
        <div className='flex-1 space-y-6 md:relative md:bottom-20'>

          <p className='text-blue-300 text-lg tracking-widest'>
            FRONTEND DEVELOPER
          </p>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Hi, I'm <br />
            <span className='text-cyan-400'>
              Md Asif
            </span>
          </h1>

          <p className='text-gray-300 text-lg max-w-lg leading-8'>
            I build clean, responsive and modern web interfaces
            with smooth user experiences using React.js and
            Tailwind CSS.
          </p>

          <div className='flex gap-5 pt-4'>

           
             <a href="#Contact">
              <button  className='bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300'>
               Hire Me
              </button>
             </a>
           

           <a href="#Project">
             <button className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black duration-300'>
              View Projects
            </button>
           </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className='flex-1 flex justify-center mt-16 md:mt-0'>

          <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl'>

            <img
              src={profile}
              alt="profile"
              className='w-full h-full object-cover'
            />

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home           