import { Features } from "./components/sections/Features"
import { Hero } from "./components/sections/Hero"
import { Navbar } from "./components/sections/Navbar"

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />

      {/* Start with the first ones then the rest follows the same reference for better progress */}
      {/* Pending to update the responsiveness and content, after that we go with: translations and dark mode */}

      {/* <Products /> */}
      {/* <ImportProcess /> */}
      {/* <WhyChooseUs /> */}
      {/* <Logistics /> */}
      {/* <Footer /> */}
    </div>
  )
}
