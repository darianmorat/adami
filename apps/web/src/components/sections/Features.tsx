import { GlobeIcon, LeafIcon, ShieldCheckIcon, SnowflakeIcon } from "lucide-react"
import { Container } from "../layout/Container"
import { WaveDivider } from "../WaveDivider"

export const Features = () => {
  const features = [
    { icon: LeafIcon, line1: "CALIDAD", line2: "PREMIUM" },
    { icon: SnowflakeIcon, line1: "CADENA", line2: "DE FRIO" },
    { icon: ShieldCheckIcon, line1: "TRAZABILIDAD", line2: "TOTAL" },
    { icon: GlobeIcon, line1: "ENVIOS", line2: "GLOBALES" },
  ]

  return (
    <section className="relative z-10 my-10 -mt-[15px] bg-accent-2 text-white">
      <WaveDivider colorVar="accent-2" />
      <Container className="my-[-15px]">
        <div className="flex flex-col justify-center gap-5 py-10 md:flex-row">
          {features.map(({ icon: Icon, line1, line2 }, i) => (
            <div
              className="just flex flex-1 items-center gap-2 border-white/30 pb-5 last:border-0 last:pb-0 max-md:border-b md:justify-center md:border-r md:pr-5 md:pb-0"
              key={i}
            >
              <div className="rounded-full border-2 p-2">
                <Icon />
              </div>
              <p className="hidden text-sm md:block">
                {line1} <br /> {line2}
              </p>
              <p className="text-sm md:hidden">
                {line1} {line2}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <WaveDivider colorVar="accent-2" flip />
    </section>
  )
}
