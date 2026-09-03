import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SelectedWork from "../components/SelectedWork"
import BrandStatement from "../components/BrandStatement"
import MoreThanAphoto from "../components/MoreThanAphoto"
import BehindTheImage from "../components/BehindTheImage"
import Services from "../components/Services"


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
      
    </>
  )
}

export default Home