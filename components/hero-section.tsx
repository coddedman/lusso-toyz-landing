"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const carSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Redefined",
    description: "Experience the thrill of driving premium cars without breaking the bank.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Your Dream Car Awaits",
    description: "From sleek sedans to powerful SUVs, find your perfect match at Lusso Toyz.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Drive in Style",
    description: "Turn heads wherever you go with our curated collection of luxury vehicles.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carSlides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carSlides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {carSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-playful opacity-50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-float font-playfair">
              {slide.title}
            </h1>
            <p className="mb-8 max-w-md text-xl md:text-2xl animate-slide-up">{slide.description}</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-slide-up">
              <Button
                size="lg"
                variant="default"
                className="bg-gradient-playful text-white border-none animate-pulse"
                onClick={() => handleNavClick("about")}
              >
                Explore Inventory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-effect text-white border-white hover:bg-white/20 transition-colors duration-200"
                onClick={() => handleNavClick("contact")}
              >
                Book a Test Drive
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {carSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              index === currentSlide ? "bg-white w-10" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}

