import { Button } from "@workspace/ui/components/button"
import { Container } from "../layout/Container"
import { ChevronRightIcon } from "lucide-react"

import hero_image from "../../assets/hero-image.png"

export const Hero = () => {
  return (
    <section
      className="relative flex h-screen items-center bg-cover bg-center bg-no-repeat py-10 text-white"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <div className="absolute bottom-0 z-1 h-100 w-full bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 z-1 h-full w-full bg-gradient-to-r from-black/85" />
      <Container className="z-10 -mt-[60px]">
        <div className="z-10 flex max-w-xl gap-10">
          <div className="flex flex-3 flex-col items-start justify-center gap-10">
            <h1 className="text-3xl font-bold md:text-5xl">
              IMPORTADORES DE <span className="text-primary">FRUTAS TROPICALES</span> PREMIUM
            </h1>
            <p>
              Conectamos sudamerica con España y Europa <br /> mediante una logistica eficiente y
              productos de la más alta calidad
            </p>
            <Button size="lg">
              Solicitar presupuesto <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
