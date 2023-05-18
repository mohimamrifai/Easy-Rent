import About from "./components/About"
import Client from "./components/Client"
import Collection from "./components/Collection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"


function App() {

  return (
    <>
      <Navbar />
      <div className="px-[7%] overflow-hidden">
        <Hero />
        <Client />
        <About />
        <Service />
        <Collection />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
