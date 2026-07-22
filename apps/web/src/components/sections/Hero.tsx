import { Button } from "@workspace/ui/components/button"
import { Container } from "../layout/Container"
import { ChevronRightIcon } from "lucide-react"

import hero_image from "../../assets/product-export.png"

export const Hero = () => {
  return (
    <section
      className="relative -mt-[10px] flex h-screen items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <div className="absolute bottom-0 h-100 w-full bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/85" />
      <Container className="z-1 mb-[70px]">
        <div className="mx-auto flex max-w-lg sm:mx-0">
          <div className="flex flex-3 flex-col items-center justify-center gap-4 text-center sm:items-start sm:text-left">
            <h1 className="text-3xl font-bold text-shadow-lg md:text-5xl">
              IMPORTADORES DE <span className="text-primary">FRUTAS TROPICALES</span> PREMIUM
            </h1>
            <p className="text-md max-w-md text-shadow-lg md:text-lg">
              Conectamos sudamerica con España y Europa
              <br /> mediante una logistica eficiente, segura y productos de la más alta calidad en
              todo momento
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
