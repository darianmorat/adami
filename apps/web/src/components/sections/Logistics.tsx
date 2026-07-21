import { WaveDivider } from "../WaveDivider"
import { Stats } from "./Stats"

export const Logistics = () => {
  return (
    <section className="mt-15" id="logistics">
      <WaveDivider colorValue="#95f4b9" />
      <div className="flex flex-col gap-5 bg-green-300/80 p-10 text-center">
        <div>
          <h2 className="text-sm font-bold text-green-700">NUESTRA LOGÍSTICA</h2>
          <h3 className="text-2xl font-bold">
            Infraestructura que garantiza <br />
            <span className="text-purple-700"> frescura</span> y
            <span className="text-purple-700"> puntualidad</span>
          </h3>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col border">
            <div className="h-20 w-30 bg-black/30"></div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="flex flex-col border">
            <div className="h-20 w-30 bg-black/30"></div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="flex flex-col border">
            <div className="h-20 w-30 bg-black/30"></div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="flex flex-col border">
            <div className="h-20 w-30 bg-black/30"></div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="flex flex-col border">
            <div className="h-20 w-30 bg-black/30"></div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
        {/* <Stats /> */}
      </div>
    </section>
  )
}
