import { CalendarCheck2Icon } from "lucide-react"

export const Products = () => {
  const products = [
    {
      name: "PRODUCT 0",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
    {
      name: "PRODUCT 1",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
    {
      name: "PRODUCT 2",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
    {
      name: "PRODUCT 3",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
    {
      name: "PRODUCT 3",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
    {
      name: "PRODUCT 3",
      desc: "Short description of this product here for you to change",
      avail: "Available all year",
    },
  ]

  return (
    <div className="flex flex-col gap-5 p-10 text-center">
      <div>
        <h2 className="text-sm font-bold text-primary">NUESTROS PRODUCTOS</h2>
        <h3 className="text-2xl font-bold">
          Frutas tropicales seleccionadas <br /> con los{" "}
          <span className="text-accent-2-text">más altos estándares</span> de calidad
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map(({ name, desc, avail }, i) => (
          <div
            className="flex w-full max-w-70 flex-col gap-4 border bg-accent p-4 shadow-md"
            key={i}
          >
            <div className="flex h-50 items-center justify-center bg-black/15 text-sm text-muted-foreground">
              - Image -
            </div>
            <h3 className="font-bold text-accent-2-text">{name}</h3>
            <p className="text-muted-foreground">{desc}</p>
            <p className="flex items-center justify-center gap-2 text-primary">
              <CalendarCheck2Icon size="18" /> {avail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
