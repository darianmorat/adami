import { Features } from "./components/sections/Features"
import { Hero } from "./components/sections/Hero"
import { ImportProcess } from "./components/sections/ImportProcess"
import { Navbar } from "./components/sections/Navbar"
import { Products } from "./components/sections/Products"

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <ImportProcess />
      {/* <WhyChooseUs /> */}
      {/* <Logistics /> */}
      {/* <Footer /> */}
    </div>
  )
}
