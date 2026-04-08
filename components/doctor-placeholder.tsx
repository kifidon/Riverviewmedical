import { cn } from "@/lib/utils"
import { doctorInitials } from "@/lib/doctors-data"
import { Stethoscope } from "lucide-react"

type DoctorPlaceholderProps = {
  name: string
  className?: string
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
}

const sizeClasses = {
  sm: "text-xs min-w-10 min-h-10",
  md: "text-lg min-h-32",
  lg: "text-4xl min-h-[280px] sm:min-h-[320px]",
}

export function DoctorPlaceholder({
  name,
  className,
  size = "md",
  showIcon = false,
}: DoctorPlaceholderProps) {
  const initials = doctorInitials(name)

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-accent/30 text-primary",
        sizeClasses[size],
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, oklch(0.72 0.1 180 / 0.35), transparent 50%),
            radial-gradient(circle at 80% 80%, oklch(0.62 0.14 240 / 0.25), transparent 45%)`,
        }}
      />
      {showIcon && size !== "sm" && (
        <Stethoscope className="absolute right-4 top-4 h-8 w-8 text-primary/30" />
      )}
      <span
        className={cn(
          "relative font-semibold tracking-tight text-primary",
          size === "sm" && "text-[11px] leading-none",
          size === "lg" && "text-5xl sm:text-6xl",
        )}
      >
        {initials}
      </span>
    </div>
  )
}
