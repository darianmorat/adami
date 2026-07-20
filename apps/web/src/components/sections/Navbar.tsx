import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { Container } from "../layout/Container"
import { Logo } from "../Logo"
import { MenuIcon, MessageCircleMoreIcon } from "lucide-react"

export const Navbar = () => {
  const links = [
    { href: "#products", label: "Products" },
    { href: "#", label: "Proceso" },
    { href: "#", label: "Logistica" },
    { href: "#", label: "Nosotros" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <nav className="z-10 bg-background py-4">
      <Container>
        <div className="flex justify-between gap-10">
          <Logo size="navbar" className="flex-none" />
          <NavigationMenu className="hidden flex-1 md:inline-flex">
            <NavigationMenuList className="flex gap-5">
              {links.map(({ href, label }, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink render={<a href={href}>{label}</a>} />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button size="lg" className="hidden md:inline-flex">
            Contactanos <MessageCircleMoreIcon />
          </Button>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger
              render={
                <Button size="icon-lg" variant="outline" className="md:hidden">
                  <MenuIcon />
                </Button>
              }
            />
            <SheetContent>
              <SheetHeader>
                <nav className="mt-12 flex flex-col gap-4">
                  {links.map(({ href, label }, i) => (
                    <SheetClose key={i} render={<a href={href} />}>
                      <Button variant="secondary" className="w-full">
                        {label}
                      </Button>
                    </SheetClose>
                  ))}

                  <Button size="lg">
                    Contactanos <MessageCircleMoreIcon />
                  </Button>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  )
}
