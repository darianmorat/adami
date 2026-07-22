import {
  AnchorIcon,
  ClipboardCheckIcon,
  LineDotRightHorizontalIcon,
  MinusIcon,
  ShipIcon,
  SproutIcon,
  TruckIcon,
  WarehouseIcon,
} from "lucide-react"
import { WaveDivider } from "../WaveDivider"
import { Fragment } from "react/jsx-runtime"
import { TitleHeader } from "../TitleHeader"
import { Container } from "../layout/Container"

export const ImportProcess = () => {
  const steps = [
    { icon: SproutIcon, line1: "Selección", line2: "en plantación" },
    { icon: ClipboardCheckIcon, line1: "Empaque y", line2: "control de calidad" },
    { icon: TruckIcon, line1: "Transporte al", line2: "puerto Posorja" },
    { icon: ShipIcon, line1: "Transporte", line2: "marítimo reefer" },
    { icon: AnchorIcon, line1: "Puerto Valencia", line2: "y gestión Aduanera" },
    { icon: WarehouseIcon, line1: "Distribución", line2: "a Mercavalencia" },
  ]

  return (
    <section id="import-process" className="relative bg-primary/10">
      <WaveDivider colorValue="#d9e8e0" />
      <Container className="py-15">
        <TitleHeader title="NUESTRO PROCESO DE IMPORTACIÓN">
          Logística eficiente, <span className="text-accent-2-text">entrega segura</span>
        </TitleHeader>

        <div className="flex flex-nowrap flex-wrap justify-center gap-x-2 gap-y-8 text-center">
          {steps.map(({ icon: Icon, line1, line2 }, i) => (
            <Fragment key={i}>
              <div className="flex w-[45%] min-w-30 flex-col items-center sm:w-auto">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white">
                  <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary pt-[3px] text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <Icon />
                </div>
                <p className="text-sm">
                  {line1} <br /> {line2}
                </p>
              </div>
              <div className="hidden pt-5 last:hidden md:flex">
                <MinusIcon size={15} />
                <MinusIcon size={15} />
                <MinusIcon size={15} />
                <LineDotRightHorizontalIcon size={15} />
              </div>
            </Fragment>
          ))}
        </div>
      </Container>
      <WaveDivider colorValue="#d9e8e0" flip />
    </section>
  )
}
