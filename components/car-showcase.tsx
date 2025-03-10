"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const showcaseCars = [
  {
    id: 1,
    name: "Mercedes-Benz AMG GT",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Experience the thrill of German engineering with this stunning AMG GT.",
  },
  {
    id: 2,
    name: "Bentley Continental GT",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Luxury redefined with the iconic Bentley Continental GT.",
  },
  {
    id: 3,
    name: "Aston Martin DB11",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Elegance meets performance in this breathtaking Aston Martin DB11.",
  },
  {
    id: 4,
    name: "Lamborghini Huracán",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Turn heads with the aggressive styling of the Lamborghini Huracán.",
  },
  {
    id: 5,
    name: "Ferrari Roma",
    image: "/placeholder.svg?height=800&width=1200",
    description: "Italian craftsmanship at its finest with the Ferrari Roma.",
  },
]

export function CarShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setTimeout(checkScrollButtons, 500)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Premium Collection</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our exclusive selection of high-end luxury vehicles, each representing the pinnacle of automotive
            excellence.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            onScroll={checkScrollButtons}
          >
            {showcaseCars.map((car) => (
              <div
                key={car.id}
                className="min-w-[85%] md:min-w-[60%] lg:min-w-[40%] snap-center flex-shrink-0 relative"
              >
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                    <p className="text-white/80 mb-4">{car.description}</p>
                    <Button
                      variant="outline"
                      className="w-fit bg-transparent text-white border-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Scroll left</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

