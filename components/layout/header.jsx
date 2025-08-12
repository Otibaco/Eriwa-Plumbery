"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ShoppingCart, User, Heart, Menu, Phone, MapPin, Sun, Moon, Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Emergency: </span>
              <a href="tel:+2348012345678" className="font-medium hover:underline text-green-600">
                +234-801-PLUMBER
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Lagos • Abuja • Port Harcourt</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-transparent border-none text-foreground text-sm focus:outline-none">
              <option value="en">English</option>
              <option value="yo">Yoruba</option>
              <option value="ig">Igbo</option>
              <option value="ha">Hausa</option>
            </select>
            <div className="flex items-center gap-1">
              <span className="naira-symbol">₦</span>
              <span className="text-xs">NGN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">EP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Eriwa Plumbery</h1>
              <p className="text-sm text-muted-foreground">Nigeria's Trusted Plumbers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-green-600 font-medium transition-colors">
                Products
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products/pipes">Pipes & Fittings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/bathroom">Bathroom Fixtures</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/tools">Tools & Equipment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/water-heaters">Water Heaters</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/services" className="text-foreground hover:text-green-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/emergency" className="text-red-600 hover:text-red-700 font-semibold transition-colors">
              Emergency
            </Link>
            <Link href="/blog" className="text-foreground hover:text-green-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products, services..."
                className="pl-10 pr-4"
                onFocus={() => setIsSearchOpen(true)}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                2
              </Badge>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                5
              </Badge>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/auth/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard">My Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/products" className="text-lg font-medium">
                    Products
                  </Link>
                  <Link href="/services" className="text-lg font-medium">
                    Services
                  </Link>
                  <Link href="/emergency" className="text-lg font-medium text-red-600">
                    Emergency
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input type="text" placeholder="Search products, services..." className="pl-10 pr-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
