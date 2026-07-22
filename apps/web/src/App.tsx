import { Features } from "./components/sections/Features"
import { Footer } from "./components/sections/Footer"
import { Hero } from "./components/sections/Hero"
import { ImportProcess } from "./components/sections/ImportProcess"
import { Logistics } from "./components/sections/Logistics"
import { Navbar } from "./components/sections/Navbar"
import { Products } from "./components/sections/Products"
import { WhyChooseUs } from "./components/sections/WhyChooseUs"

export function App() {
  return (
    <div className="flex flex-col bg-accent">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <ImportProcess />
      <WhyChooseUs />
      <Logistics />
      <Footer />
    </div>
  )
}
