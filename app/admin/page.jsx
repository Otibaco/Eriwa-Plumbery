"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Eye, ShoppingCart, AlertCircle, Plus } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"

const stats = [
  {
    title: "Total Products",
    value: "24",
    change: "+2 this month",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Total Views",
    value: "1,234",
    change: "+12% from last month",
    icon: Eye,
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: "89",
    change: "+5 this week",
    icon: ShoppingCart,
    color: "text-purple-600",
  },
  {
    title: "Revenue",
    value: "$12,345",
    change: "+8% from last month",
    icon: DollarSign,
    color: "text-emerald-600",
  },
]

const recentProducts = [
  { id: 1, name: "Premium Kitchen Faucet", category: "Fixtures", status: "Active", views: 45 },
  { id: 2, name: "Tankless Water Heater", category: "Water Heaters", status: "Active", views: 32 },
  { id: 3, name: "Copper Pipe Fittings", category: "Pipes", status: "Low Stock", views: 28 },
  { id: 4, name: "Professional Wrench Set", category: "Tools", status: "Active", views: 19 },
]

const alerts = [
  { id: 1, message: "3 products are running low on stock", type: "warning" },
  { id: 2, message: "New order received for Premium Faucet", type: "info" },
  { id: 3, message: "Monthly analytics report is ready", type: "success" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your plumbing business.</p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.title} delay={index * 0.1}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Products */}
        <AnimatedSection delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Products
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/products">View All</Link>
                </Button>
              </CardTitle>
              <CardDescription>Your latest product additions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={product.status === "Low Stock" ? "destructive" : "secondary"}>
                        {product.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{product.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Alerts */}
        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Alerts & Notifications</CardTitle>
              <CardDescription>Important updates and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3">
                    <AlertCircle
                      className={`h-5 w-5 mt-0.5 ${
                        alert.type === "warning"
                          ? "text-yellow-500"
                          : alert.type === "success"
                            ? "text-green-500"
                            : "text-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{alert.message}</p>
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
