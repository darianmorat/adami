import { Copyright, LinkIcon, Mail, MapPin } from "lucide-react"
import { Logo } from "../Logo"
import { links } from "@/shared/NavbarLinks"
import { Container } from "../layout/Container"

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-accent-2 text-white">
      <Container>
        <div className="flex flex-wrap justify-center gap-8 py-15">
          <div className="flex max-w-max items-center border-r border-white/15 px-8 pr-20">
            <Logo className="brightness-0 invert" size="footer" />
          </div>

          <div className="max-w-max flex-1 px-8">
            <h2 className="mb-3 font-semibold">Enlaces</h2>
            <div className="flex flex-col gap-2 text-white/70">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-max px-8">
            <h2 className="mb-3 font-semibold">Contacto</h2>
            <div className="flex flex-col gap-2 text-white/70">
              <p>ADAMI LOGISTICA SL</p>
              <p>NIF: B26593400</p>
              <p>EORI: ESB26593400</p>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-[3px] shrink-0" />
                <p>Plaza Venezuela, CP 48001, Bilbao</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <a href="mailto:adamilogisticaes@yahoo.com" className="hover:text-white">
                  adamilogisticaes@yahoo.com
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-max px-8">
            <h2 className="mb-3 font-semibold">Siguenos</h2>
            <div className="flex flex-col gap-2 text-white/70">
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center gap-2 text-white/70 hover:text-white"
              >
                <LinkIcon size={15} /> Instagram
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex items-center gap-2 text-white/70 hover:text-white"
              >
                <LinkIcon size={15} /> TikTok
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-white/70 hover:text-white"
              >
                <LinkIcon size={15} /> LinkedIn
              </a>
            </div>

            {/* <div className="mb-4 flex items-center gap-2 text-sm text-white/70"> */}
            {/*   <span className="text-lg leading-none">🇨🇴</span> */}
            {/*   <span className="text-lg leading-none">🇪🇺</span> */}
            {/* </div> */}
          </div>
        </div>

        <div className="flex justify-between border-t border-white/15 py-4 text-xs text-white/70">
          <div className="flex items-center gap-1">
            <Copyright size={10} className="mb-[2px]" />
            <p>2025 ADAMI LOGISTICA SL. Todos los derechos reservados</p>
          </div>
          <div className="flex gap-4 underline">
            <p>Terminos y condiciones</p>
            <p>Política de privacidad</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
