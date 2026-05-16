import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (

    <div className='bg-gradient-to-r from-[#09203f] to-[#2a4971] min-h-screen flex items-center justify-center px-6 py-20'>

      <section
        id="Contact"
        className='w-full max-w-6xl bg-[#0b1628]/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-white shadow-2xl'
      >

        {/* HEADING */}
        <div className='mb-14'>

          <p className='text-cyan-400 tracking-[4px] text-sm mb-3'>
            CONTACT ME
          </p>

          <h1 className='text-4xl font-bold'>
            Let's Work Together
          </h1>

        </div>

        {/* FLEX CONTAINER */}
        <div className='flex flex-col md:flex-row items-center gap-14'>

          {/* LEFT SIDE */}
          <div className='flex-1 w-full'>

            <form className='space-y-6'>

              {/* NAME */}
              <div>

                <label className='block mb-3 text-gray-300'>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder='Enter your name'
                  className='w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400 text-white'
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className='block mb-3 text-gray-300'>
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400 text-white'
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className='block mb-3 text-gray-300'>
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder='Write your message...'
                  className='w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400 text-white resize-none'
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                className='bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300'
              >
                Send Message
              </button>

            </form>

            {/* SOCIAL ICONS */}
            <div className='flex gap-5 mt-10'>

              <a
                href="mailto:your@email.com"
                className='bg-white/5 border border-white/10 p-4 rounded-full hover:bg-cyan-400 hover:text-black duration-300'
              >
                <FaEnvelope size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className='bg-white/5 border border-white/10 p-4 rounded-full hover:bg-cyan-400 hover:text-black duration-300'
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className='bg-white/5 border border-white/10 p-4 rounded-full hover:bg-cyan-400 hover:text-black duration-300'
              >
                <FaGithub size={22} />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className='flex-1 flex justify-center w-full'>

            <div className='max-w-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl'>

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="contact"
                className='w-full h-full object-cover'
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact