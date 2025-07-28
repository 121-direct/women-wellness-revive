import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Treatments", href: "#treatments" },
    { name: "Treatment Steps", href: "#treatment-steps" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-wellness-pink">Women's</span>
              <span className="text-medical-blue"> Health</span>
              <span className="text-foreground"> Clinic</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-wellness-pink transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <a href="tel:08004880909">
                <Phone className="h-4 w-4 mr-2" />
                0800 488 0909
              </a>
            </Button>
            <Button variant="wellness" size="sm" asChild>
              <a href="#contact">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-large">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-wellness-pink hover:bg-accent transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="tel:08004880909">
                    <Phone className="h-4 w-4 mr-2" />
                    0800 488 0909
                  </a>
                </Button>
                <Button variant="wellness" size="sm" className="w-full" asChild>
                  <a href="#contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}