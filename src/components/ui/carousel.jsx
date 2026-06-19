import { forwardRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { cn } from '../../lib/utils'

const Carousel = forwardRef(({ opts, plugins, orientation = "horizontal", className, children, ...props }, ref) => {
  const [emblaRef] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    [AutoScroll({ playOnInit: true }), ...(plugins || [])]
  )

  return (
    <div ref={emblaRef} className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props}>
    {children}
  </div>
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-auto", className)} {...props}>
    {children}
  </div>
))
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselContent, CarouselItem }
