import React ,{useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
  
    <>
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    <Footer />
    </>
  )
}

export default App
