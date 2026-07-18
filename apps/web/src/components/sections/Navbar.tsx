import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { ThemeToggle } from "../theme-toggle"
import { Container } from "../layout/Container"

export const Navbar = () => {
  return (
    <nav className="border-b">
      <Container>
        <div className="flex items-center py-4">
          <div className="flex-1">Logo Adami</div>
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink>Productos</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Proceso</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Logistica</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Nosotros</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Contacto</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-1 justify-end gap-2">
            <ThemeToggle />
            <Button>Solicitar presupuesto</Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
