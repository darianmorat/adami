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
    <section className="relative mt-15" id="import-process">
      <WaveDivider colorValue="#d9e8e0" />
      <div className="flex flex-col gap-5 bg-primary/10 p-10 pb-15 text-center" id="process">
        <div className="pb-4">
          <h2 className="text-sm font-bold text-primary">NUESTRO PROCESO DE IMPORTACIÓN</h2>
          <h3 className="text-2xl font-bold">
            Logística eficiente, <span className="text-accent-2-text">entrega segura</span>
          </h3>
        </div>
        <div className="flex flex-nowrap flex-wrap justify-center gap-x-2 gap-y-8">
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
      </div>
      <WaveDivider colorValue="#d9e8e0" flip />
    </section>
  )
}
