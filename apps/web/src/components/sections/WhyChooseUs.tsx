import { Card, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { FileCheckIcon, RadarIcon, SnowflakeIcon } from "lucide-react"

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
    <section className="mt-10" id="about-us">
      <div className="flex flex-col gap-5 p-10 text-center">
        <div className="pb-4">
          <h2 className="text-sm font-bold text-primary">¿POR QUÉ ELEGIRNOS?</h2>
          <h3 className="text-2xl font-bold">
            Comprometidos con la
            <span className="text-accent-2-text"> calidad</span> <br />y la
            <span className="text-accent-2-text"> confianza</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <Card key={i} size="sm" className="relative min-w-sm text-start">
              <Icon
                size={90}
                className="absolute top-1/2 right-1 -translate-y-1/2 text-accent-2-text/10"
              />
              <CardHeader className="pr-20">
                <CardTitle className="gap-2 font-bold">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
