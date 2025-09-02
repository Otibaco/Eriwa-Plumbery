"use client"

import { Bell, Search, User, Settings, HelpCircle, LogOut, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { adminLogout } from "@/lib/auth"

export function AdminHeader() {
  const handleLogout = () => {
    adminLogout()
  }

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products, orders, customers..."
              className="pl-10 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-colors text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick Actions */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Zap className="h-4 w-4" />
            <span className="text-sm">Quick Add</span>
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-muted/50 transition-colors p-2">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-500">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>
                <Badge variant="secondary" className="text-xs">
                  3 new
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-64 overflow-y-auto">
                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-sm">New Order Received</span>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Order #1234 for Premium Kitchen Faucet</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-sm">Low Stock Alert</span>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Copper Pipe Fittings running low</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-sm">Customer Review</span>
                    <span className="text-xs text-muted-foreground">3h ago</span>
                  </div>
                  <span className="text-xs text-muted-foreground">5-star review for Tankless Water Heater</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-blue-600 hover:text-blue-700">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-muted/50 transition-colors p-2 sm:p-2.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-white">A</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">A</span>
                  </div>
                  <div>
                    <p className="font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@eriwa.com</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Admin Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive focus:text-destructive cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
