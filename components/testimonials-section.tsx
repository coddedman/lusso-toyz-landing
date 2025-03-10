"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    content:
      "Buying my Mercedes from Lusso Toyz was an exceptional experience. The team was professional, knowledgeable, and made the entire process smooth and enjoyable.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "IT Professional",
    content:
      "I was looking for a specific BMW model, and Lusso Toyz not only found it for me but ensured it was in pristine condition. Their attention to detail is remarkable.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Doctor",
    content:
      "The after-sales service at Lusso Toyz is as impressive as their collection of luxury cars. They truly care about customer satisfaction even after the purchase.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextTestimonial])

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-playful bg-clip-text text-transparent animate-pulse">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with Lusso Toyz
            </p>
          </div>
        </div>
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-background hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      <p className="mb-6 text-lg italic text-muted-foreground">{testimonial.content}</p>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary animate-pulse">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-playful text-white">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:-left-6 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:-right-6 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                index === activeIndex ? "bg-primary w-6" : "bg-primary/20",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

