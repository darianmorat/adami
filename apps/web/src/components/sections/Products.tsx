export const Products = () => {
  return (
    <div className="flex flex-col gap-5 p-10 text-center">
      <div>
        <h2 className="text-sm font-bold text-green-700">NUESTROS PRODUCTOS</h2>
        <h3 className="text-2xl font-bold">
          Frutas tropicales seleccionadas <br /> con los{" "}
          <span className="text-purple-700">más altos estándares</span> de calidad
        </h3>
      </div>
      <div className="flex justify-center gap-5">
        <div className="flex flex-col border">
          <div className="h-40 w-40 bg-black/30"></div>
          <h3>Product</h3>
          <p>Description</p>
        </div>
        <div className="flex flex-col border">
          <div className="h-40 w-40 bg-black/30"></div>
          <h3>Product</h3>
          <p>Description</p>
        </div>
        <div className="flex flex-col border">
          <div className="h-40 w-40 bg-black/30"></div>
          <h3>Product</h3>
          <p>Description</p>
        </div>
        <div className="flex flex-col border">
          <div className="h-40 w-40 bg-black/30"></div>
          <h3>Product</h3>
          <p>Description</p>
        </div>
        <div className="flex flex-col border">
          <div className="h-40 w-40 bg-black/30"></div>
          <h3>Product</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}
