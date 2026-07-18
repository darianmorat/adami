import { Button } from "@workspace/ui/components/button"
import { Container } from "../layout/Container"

export const Hero = () => {
  return (
    <Container>
      <div className="flex gap-10 py-10">
        <div className="flex flex-3 flex-col items-start justify-center gap-5">
          <h1 className="text-5xl font-bold">
            IMPORTADORES DE <span className="text-green-700">FRUTAS TROPICALES</span> PREMIUM
          </h1>
          <p>
            Conectamos sudamerica con España y Europa <br /> mediante una logistica eficiente y
            productos de la más alta calidad
          </p>
          <Button>Solicitar presupuesto</Button>
        </div>
        <div className="h-120 w-150 flex-4 bg-black/30"></div>
      </div>
    </Container>
  )
}
