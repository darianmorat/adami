import { Container } from "../layout/Container"

export const Features = () => {
  return (
    <div className="bg-purple-950 text-white">
      <Container>
        <div className="flex justify-evenly py-10">
          <div>CALIDAD PREMIUM</div>
          <div>CADENA DE FRIO</div>
          <div>TRAZABILIDAD TOTAL</div>
          <div>ENVIOS A ESPAÑA Y EUROPA</div>
        </div>
      </Container>
    </div>
  )
}
