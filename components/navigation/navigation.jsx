"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Phone, Wrench } from "lucide-react"
import { ThemeToggle } from "../ui/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-primary hidden xs:block">Eriwa Plumbery</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="text-xs xl:text-sm bg-transparent">
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">(+234) 703 132 0510</span>
              <span className="xl:hidden">Call</span>
            </Button>
            <Button size="sm" className="text-xs xl:text-sm">
              Get Quote
            </Button>
          </div>

          {/* Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Phone className="w-3 h-3 mr-1" />
              Call
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                {/* Accessibility header */}
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-8 mt-8">
                  {/* Logo + ThemeToggle inside drawer */}
                  <div className="flex items-center justify-between pl-4 pr-2">
                    <div className="flex items-center gap-2 font-bold text-xl">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                        <Wrench className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-primary">Eriwa Plumbery</span>
                    </div>
                    <ThemeToggle />
                  </div>

                  {/* Links with margin-left */}
                  <nav className="flex flex-col gap-6 ml-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* CTA buttons spaced */}
                  <div className="flex flex-col gap-4 mt-4 px-4">
                    <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      (+234) 703 132 0510
                    </Button>
                    <Button className="w-full h-12 text-base">Get Free Quote</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
