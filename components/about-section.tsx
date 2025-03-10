import { CheckCircle, Award, Shield, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-playful bg-clip-text text-transparent animate-pulse">
                About Lusso Toyz
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Lusso Toyz is Noida's premier destination for premium pre-owned luxury vehicles. With years of
                experience in the automotive industry, we've built a reputation for offering exceptional vehicles at
                competitive prices.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 animate-float" />
                <div>
                  <h3 className="font-bold">Curated Selection</h3>
                  <p className="text-muted-foreground">
                    Every vehicle in our inventory is hand-selected for its quality, performance, and value.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <Award className="h-6 w-6 text-primary flex-shrink-0 animate-float" />
                <div>
                  <h3 className="font-bold">Certified Pre-Owned</h3>
                  <p className="text-muted-foreground">
                    All our vehicles undergo a comprehensive inspection process to ensure they meet our high standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 animate-float" />
                <div>
                  <h3 className="font-bold">Extended Warranty</h3>
                  <p className="text-muted-foreground">
                    We offer extended warranty options for additional peace of mind with your purchase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <ThumbsUp className="h-6 w-6 text-primary flex-shrink-0 animate-float" />
                <div>
                  <h3 className="font-bold">Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    Our team is dedicated to providing exceptional service and ensuring your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square group">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Lusso Toyz Showroom"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-playful opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

