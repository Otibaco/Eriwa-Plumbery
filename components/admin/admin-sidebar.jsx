"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Package,
  BarChart3,
  Settings,
  Menu,
  X,
  Wrench,
  LogOut,
  Users,
  ShoppingCart,
  MessageSquare,
  Bell,
  ChevronDown,
  Home,
} from "lucide-react"
import { adminLogout } from "@/lib/auth"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard, badge: null },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
    badge: "24",
    subItems: [
      { name: "All Products", href: "/admin/products" },
      { name: "Add Product", href: "/admin/products/new" },
      { name: "Categories", href: "/admin/products/categories" },
    ],
  },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart, badge: "3" },
  { name: "Customers", href: "/admin/customers", icon: Users, badge: null },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3, badge: null },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare, badge: "2" },
  { name: "Settings", href: "/admin/settings", icon: Settings, badge: null },
]

export function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])
  const pathname = usePathname()

  const handleLogout = () => {
    adminLogout()
  }

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  const isItemActive = (href, subItems) => {
    if (pathname === href) return true
    if (subItems) {
      return subItems.some((subItem) => pathname === subItem.href)
    }
    return false
  }

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background/95 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 sm:w-72 bg-sidebar border-r border-sidebar-border transform transition-all duration-300 ease-in-out lg:translate-x-0 shadow-xl lg:shadow-none",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 sm:h-20 items-center px-4 sm:px-6 border-b border-sidebar-border bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-3 w-full">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-lg font-bold text-white truncate">Eriwa Admin</h1>
                <p className="text-xs text-blue-100 hidden sm:block">Plumbing Management</p>
              </div>
              <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/20 p-2 hidden sm:flex">
                <Link href="/" target="_blank">
                  <Home className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = isItemActive(item.href, item.subItems)
              const isExpanded = expandedItems.includes(item.name)
              const hasSubItems = item.subItems && item.subItems.length > 0

              return (
                <div key={item.name}>
                  <div
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer group",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground hover:shadow-sm",
                    )}
                    onClick={() => {
                      if (hasSubItems) {
                        toggleExpanded(item.name)
                      } else {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center flex-1 min-w-0"
                      onClick={(e) => {
                        if (hasSubItems) {
                          e.preventDefault()
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                    >
                      <item.icon className="mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 min-w-0">
                          {item.badge}
                        </Badge>
                      )}
                      {hasSubItems && (
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform duration-200", isExpanded ? "rotate-180" : "")}
                        />
                      )}
                    </div>
                  </div>

                  {hasSubItems && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="ml-6 mt-1 space-y-1">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block px-3 py-2 text-xs sm:text-sm rounded-md transition-colors",
                              pathname === subItem.href
                                ? "bg-sidebar-accent/70 text-sidebar-accent-foreground font-medium"
                                : "text-sidebar-foreground/80 hover:bg-sidebar-accent/30 hover:text-sidebar-accent-foreground",
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="p-3 sm:p-4 border-t border-sidebar-border bg-sidebar/50">
            <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg bg-sidebar-accent/20">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Admin User</p>
                <p className="text-xs text-sidebar-foreground/60">admin@eriwa.com</p>
              </div>
              <Button variant="ghost" size="sm" className="p-1.5 hover:bg-sidebar-accent/50">
                <Bell className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-200"
            >
              <LogOut className="mr-3 h-4 w-4" />
              <span className="text-sm">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
