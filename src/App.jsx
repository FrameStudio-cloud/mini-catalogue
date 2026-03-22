import About from './components/About'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductGallery from './components/ProductGallery'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ProductGallery />
      <About />
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  )
}

export default App