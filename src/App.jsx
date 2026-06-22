import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Collection from './components/Collection'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-[100dvh] bg-ink-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Collection />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
