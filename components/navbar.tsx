"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-background/80 text-foreground sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/lusso.svg"
                alt="Lusso Toyz Logo"
                width={200} // Adjust as needed
                height={150}
                className="cursor-pointer animate-float"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("testimonials")}
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <Button
                variant="outline"
                className="ml-4 bg-gradient-playful text-white border-none animate-pulse"
                onClick={() => handleNavClick("contact")}
              >
                Book a Test Drive
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="bg-secondary text-secondary-foreground"
              >
                {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mr-2 bg-secondary text-secondary-foreground"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick("about")}
              className="hover:bg-primary hover:text-primary-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="hover:bg-primary hover:text-primary-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:bg-primary hover:text-primary-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
            >
              Contact
            </button>
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full bg-gradient-playful text-white border-none animate-pulse"
                onClick={() => handleNavClick("contact")}
              >
                Book a Test Drive
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
