import { CalendarCheck2Icon, StarIcon } from "lucide-react"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Container } from "../layout/Container"
import { TitleHeader } from "../TitleHeader"

import platano from "../../assets/platano.png"
import banana from "../../assets/banana.png"

export const Products = () => {
  const products = [
    {
      name: "PLATANO MACHO",
      desc: "Cosechado en su punto óptimo, con firmeza, calibre uniforme y color intenso que cumplen los exigentes estándares del mercado",
      avail: "Disponible todo el año",
      img: platano,
    },
    {
      name: "BANANA CAVENDISH",
      desc: "Dulzor equilibrado y textura consistente, con calibre y color seleccionados bajo estrictos criterios de calidad para el mercado",
      avail: "Disponible todo el año",
      img: banana,
    },
  ]

  return (
    <section id="products">
      <Container className="py-25">
        <TitleHeader title="NUESTROS PRODUCTOS">
          Frutas tropicales seleccionadas <br /> con los{" "}
          <span className="text-accent-2-text">más altos estándares</span> de calidad
        </TitleHeader>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map(({ img, name, desc, avail }, i) => (
            <Card key={i} size="sm" className="max-w-xs">
              <img
                src={img}
                alt={name}
                className="relative aspect-5/4 w-full object-cover brightness-95 dark:brightness-70"
              />
              <CardHeader>
                <CardAction className="relative">
                  <Badge className="absolute top-0 right-0 bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                    <StarIcon className="pb-[1.8px]" /> Premium
                  </Badge>
                </CardAction>
                <CardTitle className="mb-2 font-semibold text-accent-2-text">{name}</CardTitle>
                <CardDescription className="">{desc}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center gap-2 border-t text-primary">
                <CalendarCheck2Icon size="18" /> {avail}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
