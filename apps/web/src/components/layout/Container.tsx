import { cn } from "@workspace/ui/lib/utils"
import type { PropsWithChildren } from "react"

type containerSize = "large" | "medium"
type ContainerProps = PropsWithChildren<{
  className?: string
  size?: containerSize
}>

const sizeVariants = {
  large: "max-w-7xl",
  medium: "max-w-5xl",
}

export const Container: React.FC<ContainerProps> = ({ children, className, size = "large" }) => (
  <div className={cn(sizeVariants[size], "mx-auto w-full px-4", className)}>{children}</div>
  // <div className={cn(sizeVariants[size], "mx-auto w-full px-4 sm:px-6 lg:px-10", className)}>{children}</div>
)
