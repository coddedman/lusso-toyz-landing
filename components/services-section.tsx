import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const services = [
  "Vehicle Inspection & Certification",
  "Financing & Insurance",
  "Extended Warranty Options",
  "Vehicle Registration & Documentation",
  "Trade-in & Upgrade Programs",
  "Premium Maintenance Packages",
  "Vehicle Customization",
  "Doorstep Delivery",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Comprehensive Services</h2>
            <p className="text-muted-foreground mb-8">
              At Lusso Toyz, we offer a complete range of services designed to make your luxury car buying experience
              seamless and enjoyable. From financing to after-sales support, we've got you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Luxury car service"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-xl font-bold mb-2">Premium Service</p>
              <p className="text-sm">
                Our certified technicians ensure your vehicle receives the highest standard of care and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

