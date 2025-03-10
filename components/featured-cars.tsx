"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Fuel, Gauge, Info } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Luxury", "SUV", "Sedan", "Sports"]

const featuredCars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    price: "₹65,00,000",
    image:
      "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2021,
    mileage: "15,000 km",
    fuel: "Petrol",
    category: "Luxury",
  },
  {
    id: 2,
    name: "BMW X5",
    price: "₹75,00,000",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2022,
    mileage: "10,000 km",
    fuel: "Diesel",
    category: "SUV",
  },
  {
    id: 3,
    name: "Audi A6",
    price: "₹55,00,000",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2021,
    mileage: "20,000 km",
    fuel: "Petrol",
    category: "Sedan",
  },
  {
    id: 4,
    name: "Porsche 911",
    price: "₹1,25,00,000",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2020,
    mileage: "8,000 km",
    fuel: "Petrol",
    category: "Sports",
  },
  {
    id: 5,
    name: "Range Rover Sport",
    price: "₹85,00,000",
    image:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2021,
    mileage: "12,000 km",
    fuel: "Diesel",
    category: "SUV",
  },
  {
    id: 6,
    name: "Jaguar XF",
    price: "₹60,00,000",
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: 2022,
    mileage: "5,000 km",
    fuel: "Petrol",
    category: "Sedan",
  },
]

export default function FeaturedCars() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCars =
    activeCategory === "All" ? featuredCars : featuredCars.filter((car) => car.category === activeCategory)

  return (
    <section className="py-16 wavy-pattern" id="featured-cars">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Vehicles</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our collection of premium pre-owned cars
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-secondary/20">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCars.map((car) => (
                  <Card key={car.id} className="overflow-hidden transition-all hover:shadow-lg bg-white">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      <Badge className="absolute right-2 top-2 bg-secondary text-secondary-foreground">
                        {car.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{car.name}</h3>
                        <p className="text-2xl font-semibold text-primary">{car.price}</p>
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span>{car.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Gauge className="h-4 w-4 text-accent" />
                            <span>{car.mileage}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Fuel className="h-4 w-4 text-accent" />
                            <span>{car.fuel}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex w-full gap-2">
                        <Button className="w-full" variant="outline">
                          Details
                        </Button>
                        <Button className="w-full">Inquire</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="secondary" className="gap-1">
            <Info className="h-4 w-4" />
            View All Inventory
          </Button>
        </div>
      </div>
    </section>
  )
}

