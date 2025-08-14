"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  ShoppingCart, User, Heart, Menu, Phone, MapPin, Sun, Moon, Search, Bell
} from "lucide-react"
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
      <div className="bg-background border-b text-sm py-2 px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Emergency: </span>
            <a href="tel:+2348012345678" className="font-medium hover:underline text-green-600">
              +234-801-PLUMBER
            </a>
            <div className="hidden md:flex items-center gap-1 ml-4">
              <MapPin className="h-4 w-4" />
              <span>Lagos • Abuja • Port Harcourt • Anambra</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-transparent border-none text-sm focus:outline-none dark:bg-black dark:text-white">
              <option className="text-black dark:text-white" value="en">English</option>
              <option className="text-black dark:text-white" value="yo">Yoruba</option>
              <option className="text-black dark:text-white" value="ig">Igbo</option>
              <option className="text-black dark:text-white" value="ha">Hausa</option>
            </select>
            <div className="flex items-center gap-1">
              <span className="naira-symbol">₦</span>
              <span className="text-xs">NGN</span>
            </div>
          </div>
        </div>
      </div>


      {/* Main header */}
      <div className="px-4 md:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between lg:justify-between">
          {/* Mobile: Menu left */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[260px] sm:w-[300px] px-5">
                <SheetHeader className="pt-4">
                  <SheetTitle className="text-left text-xl font-bold text-green-600">Menu</SheetTitle>
                </SheetHeader>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-col gap-6">
                  <Link href="/" className="text-base font-medium text-foreground hover:text-green-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/products" className="text-base font-medium text-foreground hover:text-green-600 transition-colors">
                    Products
                  </Link>
                  <Link href="/services" className="text-base font-medium text-foreground hover:text-green-600 transition-colors">
                    Services
                  </Link>
                  <Link href="/emergency" className="text-base font-semibold text-red-600 hover:text-red-700 transition-colors">
                    Emergency
                  </Link>
                  <Link href="/blog" className="text-base font-medium text-foreground hover:text-green-600 transition-colors">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-base font-medium text-foreground hover:text-green-600 transition-colors">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">EP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">Eriwa Plumbery</h1>
                <p className="text-xs text-muted-foreground">Nigeria's Trusted Plumbers</p>
              </div>
            </Link>
          </div>


          {/* Desktop: Logo center */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">EP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Eriwa Plumbery</h1>
                <p className="text-sm text-muted-foreground">Nigeria's Trusted Plumbers</p>
              </div>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Theme */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Notification */}
            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">2</Badge>
              </Button>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">5</Badge>
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">3</Badge>
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem><Link href="/auth/login">Login</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/auth/register">Register</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href="/dashboard">My Dashboard</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/orders">My Orders</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/wishlist">Wishlist</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 md:mt-6">
          <div className="relative w-full max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products, services..."
              className="pl-10 pr-4"
              onFocus={() => setIsSearchOpen(true)}
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 mt-4">
          <Link href="/" className="hover:text-green-600 font-medium">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-green-600 font-medium">Products</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link href="/products/pipes">Pipes & Fittings</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/products/bathroom">Bathroom Fixtures</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/products/tools">Tools & Equipment</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/products/water-heaters">Water Heaters</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/services" className="hover:text-green-600 font-medium">Services</Link>
          <Link href="/emergency" className="text-red-600 font-semibold">Emergency</Link>
          <Link href="/blog" className="hover:text-green-600 font-medium">Blog</Link>
          <Link href="/contact" className="hover:text-green-600 font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
