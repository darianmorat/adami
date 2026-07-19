import { GlobeIcon, LeafIcon, ShieldCheckIcon, SnowflakeIcon } from "lucide-react"
import { Container } from "../layout/Container"

export const Features = () => {
  const features = [
    { icon: LeafIcon, line1: "CALIDAD", line2: "PREMIUM" },
    { icon: SnowflakeIcon, line1: "CADENA", line2: "DE FRIO" },
    { icon: ShieldCheckIcon, line1: "TRAZABILIDAD", line2: "TOTAL" },
    { icon: GlobeIcon, line1: "ENVIOS", line2: "GLOBALES" },
  ]

  return (
    <section className="relative z-10 my-10 -mt-[15px] bg-purple-950 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute h-15 w-full -translate-y-[calc(100%-1px)]"
      >
        <path
          d="M 0 80 L 0 52 L 30 55.37286366254304 L 60 58.62624194832421 L 90 61.64488230962194 L 120 64.3218479067164 L 150 66.56230589874906 L 180 68.28688694438836 L 210 69.43449690031537 L 240 69.96448111170889 L 270 69.8580646236606 L 300 69.11901729331277 L 330 67.77352024078954 L 360 65.86923836996421 L 390 63.47363181547641 L 420 60.67156613383087 L 450 57.56230589874905 L 480 54.25599820415747 L 510 50.86977064847236 L 540 47.52358203103261 L 570 44.33597275182869 L 600 41.41986545873548 L 630 38.87856470641459 L 660 36.802097340963726 L 690 35.26402325401148 L 720 34.3188294868836 L 750 34 L 780 34.3188294868836 L 810 35.26402325401148 L 840 36.802097340963726 L 870 38.87856470641459 L 900 41.41986545873548 L 930 44.3359727518287 L 960 47.52358203103262 L 990 50.86977064847236 L 1020 54.25599820415748 L 1050 57.562305898749045 L 1080 60.67156613383088 L 1110 63.473631815476416 L 1140 65.86923836996421 L 1170 67.77352024078954 L 1200 69.11901729331277 L 1200 80 Z"
          fill="#3c0366"
        />
      </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-15 w-full translate-y-[calc(100%-1px)] -scale-y-100"
      >
        <path
          d="M 0 80 L 0 52 L 30 55.37286366254304 L 60 58.62624194832421 L 90 61.64488230962194 L 120 64.3218479067164 L 150 66.56230589874906 L 180 68.28688694438836 L 210 69.43449690031537 L 240 69.96448111170889 L 270 69.8580646236606 L 300 69.11901729331277 L 330 67.77352024078954 L 360 65.86923836996421 L 390 63.47363181547641 L 420 60.67156613383087 L 450 57.56230589874905 L 480 54.25599820415747 L 510 50.86977064847236 L 540 47.52358203103261 L 570 44.33597275182869 L 600 41.41986545873548 L 630 38.87856470641459 L 660 36.802097340963726 L 690 35.26402325401148 L 720 34.3188294868836 L 750 34 L 780 34.3188294868836 L 810 35.26402325401148 L 840 36.802097340963726 L 870 38.87856470641459 L 900 41.41986545873548 L 930 44.3359727518287 L 960 47.52358203103262 L 990 50.86977064847236 L 1020 54.25599820415748 L 1050 57.562305898749045 L 1080 60.67156613383088 L 1110 63.473631815476416 L 1140 65.86923836996421 L 1170 67.77352024078954 L 1200 69.11901729331277 L 1200 80 Z"
          fill="#3c0366"
        />
      </svg>
    </section>
  )
}
