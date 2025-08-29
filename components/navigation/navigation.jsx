"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Wrench } from "lucide-react"
import { ThemeToggle } from "../theme-toggle/theme-toggle"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                            <Wrench className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Eriwa Plumbery
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-blue-600 relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <ThemeToggle />
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative">
                            <Menu className={`h-5 w-5 transition-all ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
                            <X
                                className={`h-5 w-5 absolute transition-all ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                            />
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="px-4 pt-2">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Quote</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
