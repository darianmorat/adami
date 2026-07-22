type TitleHeaderProps = {
  title: string
  children: React.ReactNode
}

export const TitleHeader = ({ title, children }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 pb-8 text-center">
      <h2 className="text-sm font-semibold text-primary">{title}</h2>
      <h3 className="text-xl font-bold sm:text-2xl">{children}</h3>
    </div>
  )
}
