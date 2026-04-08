import { cn } from "@/lib/utils"

type CarouselEdgeFadesProps = {
  className?: string
}

/**
 * Edge vignettes that sit **outside** the Embla scroll viewport (sibling to
 * `overflow-hidden`, not on it). Fades from page background so slides stay
 * fully opaque underneath; only this overlay softens the edges.
 */
export function CarouselEdgeFades({ className }: CarouselEdgeFadesProps) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-[8] w-[min(28%,14rem)] sm:w-[min(26%,16rem)]",
          "bg-gradient-to-r from-background from-0% via-background/70 via-35% to-transparent to-100%",
          className,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-[8] w-[min(28%,14rem)] sm:w-[min(26%,16rem)]",
          "bg-gradient-to-l from-background from-0% via-background/70 via-35% to-transparent to-100%",
          className,
        )}
        aria-hidden
      />
    </>
  )
}
