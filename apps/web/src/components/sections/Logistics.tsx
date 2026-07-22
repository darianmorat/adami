import { WaveDivider } from "../WaveDivider"
import { Card, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { ShipIcon, StoreIcon, ThermometerIcon } from "lucide-react"
// import { Stats } from "./Stats"

export const Logistics = () => {
  const points = [
    {
      icon: ShipIcon,
      title: "Importación Marítima Especializada",
      desc: "Gestionamos cadenas de transporte internacional desde Posorja y Guayaquil hasta el Puerto de Valencia",
    },
    {
      icon: ThermometerIcon,
      title: "Logística Reefer",
      desc: "Control minucioso de temperatura, humedad y renovación de aire para preservar la fruta",
    },
    {
      icon: StoreIcon,
      title: "Distribución en Grandes Mercados",
      desc: "Conexión directa con Mercovasa y Mercavalencia para retail, mayoristas y canales especializados",
    },
  ]

  return (
    <section className="mt-15" id="logistics">
      <WaveDivider colorValue="#d9e8e0" />
      <div className="flex flex-col gap-5 bg-primary/10 p-10 text-center">
        <div className="pb-4">
          <h2 className="text-sm font-bold text-primary">NUESTRA LOGÍSTICA</h2>
          <h3 className="text-2xl font-bold">
            Infraestructura que garantiza <br />
            <span className="text-accent-2-text"> frescura</span> y
            <span className="text-accent-2-text"> puntualidad</span>
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

        {/* <Stats /> */}
      </div>
    </section>
  )
}
