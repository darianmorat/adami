import { CalendarCheck2Icon } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import platano from "../../assets/platano.jpg"

export const Products = () => {
  const products = [
    {
      name: "PLATANO MACHO PREMIUM",
      desc: "Fruta seleccionada bajo los más estrictos estándares de calibre, rigidez y color óptimo para el mercado europeo, en alianza con EMPREFRUITS.",
      avail: "Disponible todo el año",
      img: platano,
    },
    {
      name: "PLATANO MACHO PREMIUM",
      desc: "Fruta seleccionada bajo los más estrictos estándares de calibre, rigidez y color óptimo para el mercado europeo, en alianza con EMPREFRUITS.",
      avail: "Disponible todo el año",
      img: platano,
    },
    {
      name: "PLATANO MACHO PREMIUM",
      desc: "Fruta seleccionada bajo los más estrictos estándares de calibre, rigidez y color óptimo para el mercado europeo, en alianza con EMPREFRUITS.",
      avail: "Disponible todo el año",
      img: platano,
    },
    // {
    //   name: "PROXIMAMENTE",
    //   desc: "...",
    //   avail: "",
    //   img: "",
    // },
  ]

  return (
    <section className="flex flex-col gap-5 p-10 text-center" id="products">
      <div className="pb-4">
        <h2 className="text-sm font-bold text-primary">NUESTROS PRODUCTOS</h2>
        <h3 className="text-2xl font-bold">
          Frutas tropicales seleccionadas <br /> con los{" "}
          <span className="text-accent-2-text">más altos estándares</span> de calidad
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {products.map(({ img, name, desc, avail }, i) => (
          <Card key={i} size="sm" className="max-w-xs">
            <img
              src={img}
              alt={name}
              className="relative aspect-5/4 w-full object-cover brightness-70 dark:brightness-40"
            />
            <CardHeader>
              <CardTitle className="font-bold text-accent-2-text">{name}</CardTitle>
              <CardDescription className="text-justify">{desc}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center gap-2 border-t text-primary">
              <CalendarCheck2Icon size="18" /> {avail}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
