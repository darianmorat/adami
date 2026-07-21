import { CalendarCheck2Icon } from "lucide-react"

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
      <div>
        <h2 className="text-sm font-bold text-primary">NUESTROS PRODUCTOS</h2>
        <h3 className="text-2xl font-bold">
          Frutas tropicales seleccionadas <br /> con los{" "}
          <span className="text-accent-2-text">más altos estándares</span> de calidad
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map(({ img, name, desc, avail }, i) => (
          <div
            className="flex w-full max-w-70 flex-col gap-4 border bg-accent p-4 shadow-md"
            key={i}
          >
            <div
              className="relative flex h-60 items-center bg-cover bg-center bg-no-repeat py-10 text-white"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <h3 className="font-bold text-accent-2-text">{name}</h3>
            <p className="text-muted-foreground">{desc}</p>
            <p className="flex items-center justify-center gap-2 text-primary">
              {avail === "" ? (
                ""
              ) : (
                <>
                  <CalendarCheck2Icon size="18" /> {avail}
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
