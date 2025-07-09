import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import FeatureCarousel from "../components/FeatureCarousel"
import PortfolioGrid from "../components/PortfolioGrid"
import Timeline from "../components/Timeline"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee text="JK-MOBILE • WEB DEVELOPMENT • MOBILE APPS • UI/UX DESIGN • INNOVATION • CREATIVE SOLUTIONS • " />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
