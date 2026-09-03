import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SelectedWork from "../components/SelectedWork"
import BrandStatement from "../components/BrandStatement"
import MoreThanAphoto from "../components/MoreThanAphoto"
import BehindTheImage from "../components/BehindTheImage"
import Services from "../components/Services"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectedWork />
      <BrandStatement />
      <MoreThanAphoto />
      <BehindTheImage />
      <Services />
      <Process />
      <Testimonials />
      
    </>
  )
}

export default Home