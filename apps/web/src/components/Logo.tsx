import { cn } from "@workspace/ui/lib/utils"

const sizeVariants = {
  navbar: {
    gap: "gap-0",
    title: "text-2xl",
    bar: "w-1.5",
    subtitle: "text-[10px]",
    tagline: false,
  },
  footer: {
    gap: "gap-1.5",
    title: "text-4xl",
    bar: "w-4",
    subtitle: "text-sm",
    tagline: true,
  },
} as const

type LogoSize = keyof typeof sizeVariants

type LogoProps = {
  className?: string
  size?: LogoSize
}

const barClass = "h-[1.5px] shrink-0 bg-primary"

export const Logo: React.FC<LogoProps> = ({ className, size = "navbar" }) => {
  const v = sizeVariants[size]

  return (
    <div className={cn("flex flex-col", v.gap, className)}>
      <h1 className={cn("mt-[-3px] text-center font-bold text-purple-950", v.title)}>A D A M I</h1>

      <div className="mt-[-5px] flex items-center justify-center gap-1 font-bold">
        <div className={cn(barClass, v.bar)} />
        <p className={cn("tracking-widest whitespace-nowrap text-primary uppercase", v.subtitle)}>
          LOGÍSTICA SL
        </p>
        <div className={cn(barClass, v.bar)} />
      </div>

      {v.tagline && (
        <p className="text-[9px] tracking-[0.25em] text-neutral-500 uppercase">
          Importadores de Frutas Tropicales Premium
        </p>
      )}
    </div>
  )
}
