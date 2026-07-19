import { Button } from "@workspace/ui/components/button"
import { Container } from "../layout/Container"
import { ChevronRightIcon } from "lucide-react"

import hero_image from "../../assets/hero-image.png"

export const Hero = () => {
  return (
    <section className="bg-color-[#1056ff] py-10">
      <Container>
        <div className="flex gap-10">
          <div className="flex flex-3 flex-col items-start justify-center gap-10">
            <h1 className="text-5xl font-bold">
              IMPORTADORES DE <span className="text-green-700">FRUTAS TROPICALES</span> PREMIUM
            </h1>
            <p>
              Conectamos sudamerica con España y Europa <br /> mediante una logistica eficiente y
              productos de la más alta calidad
            </p>
            <Button size="lg">
              Solicitar presupuesto <ChevronRightIcon />
            </Button>
          </div>
          <div className="relative h-120 w-150 flex-4 overflow-hidden rounded-sm shadow-xl">
            <img src={hero_image} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  )
}
