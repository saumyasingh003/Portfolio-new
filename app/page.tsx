import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import About from './About/page'
import Education from './Education/page'
import Hero from './Hero/page'
import Projects from './Projects/page'
import Experience from './Experience/page'
import Contact from './Contact/page'
import Footer from '@/components/Footer'



const Page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
        <Projects/>
      <Experience/>
      <Education/>
    
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page