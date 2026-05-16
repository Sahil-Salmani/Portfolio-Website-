import About from "./Components/About"
import Contact from "./Components/Contact"
import Project from "./Components/Project"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Home from "./Home"


function App() {
  

  return (
  <>
  <Navbar />
  <div className=" pt-20 scroll-smooth">
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
  </div>
  </>
  )
}

export default App
