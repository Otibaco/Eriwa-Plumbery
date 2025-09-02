"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Eye, ShoppingCart, AlertCircle, Plus, TrendingUp, Users, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"

const stats = [
  {
    title: "Total Products",
    value: "24",
    change: "+2 this month",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    title: "Total Views",
    value: "1,234",
    change: "+12% from last month",
    icon: Eye,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
  },
  {
    title: "Orders",
    value: "89",
    change: "+5 this week",
    icon: ShoppingCart,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
  {
    title: "Revenue",
    value: "$12,345",
    change: "+8% from last month",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
  },
]

const recentProducts = [
  { id: 1, name: "Premium Kitchen Faucet", category: "Fixtures", status: "Active", views: 45, price: "$299" },
  { id: 2, name: "Tankless Water Heater", category: "Water Heaters", status: "Active", views: 32, price: "$1,299" },
  { id: 3, name: "Copper Pipe Fittings", category: "Pipes", status: "Low Stock", views: 28, price: "$89" },
  { id: 4, name: "Professional Wrench Set", category: "Tools", status: "Active", views: 19, price: "$159" },
]

const alerts = [
  { id: 1, message: "3 products are running low on stock", type: "warning", time: "2 hours ago" },
  { id: 2, message: "New order received for Premium Faucet", type: "info", time: "1 hour ago" },
  { id: 3, message: "Monthly analytics report is ready", type: "success", time: "30 minutes ago" },
]

const quickActions = [
  { title: "Add Product", href: "/admin/products/new", icon: Plus, color: "bg-blue-600 hover:bg-blue-700" },
  { title: "View Analytics", href: "/admin/analytics", icon: TrendingUp, color: "bg-green-600 hover:bg-green-700" },
  { title: "Manage Orders", href: "/admin/orders", icon: ShoppingCart, color: "bg-purple-600 hover:bg-purple-700" },
  { title: "Customer Support", href: "/admin/support", icon: Users, color: "bg-orange-600 hover:bg-orange-700" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Welcome back! Here's what's happening with your plumbing business.
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
            <Clock className="mr-2 h-4 w-4" />
            Last updated: 5 min ago
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/admin/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.title} delay={index * 0.1}>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used admin functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {quickActions.map((action) => (
                <Button
                  key={action.title}
                  asChild
                  className={`h-auto flex-col space-y-2 p-4 ${action.color} text-white`}
                >
                  <Link href={action.href}>
                    <action.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-xs sm:text-sm font-medium">{action.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <AnimatedSection delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <span>Recent Products</span>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/admin/products">View All Products</Link>
                </Button>
              </CardTitle>
              <CardDescription>Your latest product additions and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium text-foreground">{product.name}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{product.category}</span>
                        <span>•</span>
                        <span>{product.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-3">
                      <Badge variant={product.status === "Low Stock" ? "destructive" : "secondary"} className="text-xs">
                        {product.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{product.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Alerts & Notifications</CardTitle>
              <CardDescription>Important updates and system alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <AlertCircle
                      className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        alert.type === "warning"
                          ? "text-yellow-500"
                          : alert.type === "success"
                            ? "text-green-500"
                            : "text-blue-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
