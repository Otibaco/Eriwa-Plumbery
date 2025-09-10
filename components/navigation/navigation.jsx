"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Wrench, ChevronDown } from "lucide-react"
import { ThemeToggle } from "../ui/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Residential Plumbing" }, // ✅ Updated label
    { href: "/products", label: "Buy now" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/apply", label: "Apply" },
  ]

  const residentialServices = [
    { name: "Water Heater", href: "/water-heater" },
    { name: "Faucets & Sinks", href: "/faucets-and-sinks" },
    { name: "Drain Cleaning", href: "/drain-cleaning" },
    { name: "Toilet Repairs & Installations", href: "/toilet-repairs-and-installations" },
    { name: "Leak Detection & Pipe Repairs", href: "/leak-detection-and-pipe-repairs" },
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
            {navItems.map((item) =>
              item.label === "Residential Plumbing" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-xl border py-2 z-50"
                      >
                        {residentialServices.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block px-4 py-2 hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ThemeToggle />
            <Button size="sm" className="text-xs xl:text-sm">
              <Link href="/products" className="flex items-center">
                Shop now
              </Link>
            </Button>
          </div>

          {/* Tablet CTA (removed Call Now, only ThemeToggle remains) */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden relative z-50">
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>

            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    className="fixed inset-0 bg-black/40 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Dropdown Drawer */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-12 right-0 w-[92vw] max-w-sm bg-background border rounded-2xl shadow-xl z-50 overflow-y-auto max-h-[80vh]"
                  >
                    <div className="flex flex-col gap-6 p-6">
                      {/* Logo + ThemeToggle */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-xl">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                            <Wrench className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-primary">Eriwa Plumbery</span>
                        </div>
                        <ThemeToggle />
                      </div>

                      {/* Nav Links */}
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item) =>
                          item.label === "Residential Plumbing" ? (
                            <div key={item.href} className="flex flex-col gap-2">
                              <span className="text-lg font-medium text-foreground">{item.label}</span>
                              <div className="pl-4 flex flex-col gap-2">
                                {residentialServices.map((service, index) => (
                                  <Link
                                    key={index}
                                    href={service.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="text-lg font-medium hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </nav>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3">
                        <a
                          href="tel:+234-800-PLUMBER"
                          className="flex items-center gap-2 text-primary font-semibold"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                        <Button className="w-full h-12 text-base">
                          <Link href="/products" className="flex items-center">
                            Shop now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}
