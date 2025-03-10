import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Shield, ThumbsUp } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Quality Assurance",
    description:
      "Every vehicle undergoes a rigorous 150-point inspection process to ensure premium quality and reliability.",
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: "Certified Pre-owned",
    description: "Our vehicles come with certification and extended warranty options for your peace of mind.",
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-primary" />,
    title: "Transparent Dealings",
    description: "We provide complete vehicle history reports and maintain transparent pricing with no hidden fees.",
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: "After-Sales Support",
    description: "Enjoy premium after-sales service, maintenance packages, and 24/7 roadside assistance.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Lusso Toyz</h2>
          <p className="text-muted-foreground max-w-2xl">
            At Lusso Toyz, we're committed to providing an exceptional car buying experience with unmatched quality and
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

