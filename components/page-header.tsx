import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  backgroundImage?: string
}

export function PageHeader({
  title,
  description,
  className,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
}: PageHeaderProps) {
  return (
    <div className={cn("relative h-[40vh] w-full flex items-center justify-center", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl md:text-2xl max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}

