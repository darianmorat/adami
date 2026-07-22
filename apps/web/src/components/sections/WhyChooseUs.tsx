import { Card, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { FileCheckIcon, RadarIcon, SnowflakeIcon } from "lucide-react"
import { TitleHeader } from "../TitleHeader"
import { Container } from "../layout/Container"

export const WhyChooseUs = () => {
  const points = [
    {
      icon: RadarIcon,
      title: "FIABILIDAD LOGÍSTICA",
      desc: "Monitoreamos cada contenedor desde el corte en plantación hasta su liberación en aduana",
    },
    {
      icon: SnowflakeIcon,
      title: "GARANTÍA DE CADENA DE FRÍO",
      desc: "Tecnología de vanguardia y almacenes refrigerados estratégicos para asegurar la estabilidad térmica del producto",
    },
    {
      icon: FileCheckIcon,
      title: "CUMPLIMIENTO NORMATIVO",
      desc: "Operamos bajo los marcos aduaneros y fiscales más estrictos de la UE, con procesos ágiles y libres de fricciones",
    },
  ]

  return (
    <section id="about-us" className="py-25">
      <Container>
        <TitleHeader title="¿POR QUÉ ELEGIRNOS?">
          Comprometidos con la
          <span className="text-accent-2-text"> calidad</span> <br />y la
          <span className="text-accent-2-text"> confianza</span>
        </TitleHeader>

        <div className="flex flex-wrap justify-center gap-4">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <Card key={i} size="sm" className="relative min-w-xs md:min-w-sm">
              <Icon
                size={90}
                className="absolute top-1/2 right-1 -translate-y-1/2 text-accent-2-text/10"
              />
              <CardHeader className="pr-20">
                <CardTitle className="font-semibold">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
