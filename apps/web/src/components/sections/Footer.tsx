import { Copyright } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-evenly bg-purple-950 p-10 pb-5 text-white">
      <div className="flex gap-5 border">
        <div className="flex-1">Logo Adami</div>
        <div className="flex-1">
          <h2>Contacto</h2>
        </div>
        <div className="flex-1">
          <h2>Siguenos</h2>
        </div>
      </div>
      <p className="mt-10 flex justify-center">
        <Copyright className="mr-1 w-3" /> 2025 ADAMI LOGISTICA SL. Todos los derechos reservados
      </p>
    </footer>
  )
}
