import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { Container } from "../layout/Container"
import { Logo } from "../Logo"
import { ChevronRightIcon } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className="border-b py-4">
      <Container>
        <div className="flex items-center gap-10">
          <Logo size="navbar" className="flex-1 items-start" />
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink render={<a href="#products">Productos</a>} />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<a href="#">Proceso</a>} />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<a href="#">Logistica</a>} />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<a href="#">Nosotros</a>} />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<a href="#contact">Contacto</a>} />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-1 justify-end gap-2">
            <Button size="lg">
              Solicitar presupuesto <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
