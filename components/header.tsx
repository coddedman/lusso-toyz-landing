"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Menu, Phone, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
    <div className="container flex h-40 items-center justify-between px-4 md:px-6">

        <Link href="/" className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">Lusso Toyz</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#featured" className="text-sm font-medium hover:text-primary transition-colors">
            Featured Cars
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            +91 7303530800
          </Link>
          <Button asChild>
            <Link href="#contact">Book a Viewing</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold tracking-tight">Lusso Toyz</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 px-4 py-6">
              <Link
                href="#featured"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Featured Cars
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="tel:+919876543210"
                className="flex items-center gap-2 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                +91 7303530800
              </Link>
              <Button className="w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="#contact">Book a Viewing</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

