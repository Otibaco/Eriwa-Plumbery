"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, Heart, Clock, Star, Gift, ShoppingCart, Truck, AlertCircle } from "lucide-react"

const recentOrders = [
  {
    id: "ORD-2025-001",
    date: "2025-01-10",
    status: "delivered",
    total: 45000,
    items: 2,
  },
  {
    id: "ORD-2025-002",
    date: "2025-01-08",
    status: "shipped",
    total: 25000,
    items: 1,
  },
]

const loyaltyTiers = [
  { name: "Bronze", min: 0, max: 999, color: "bg-orange-500" },
  { name: "Silver", min: 1000, max: 4999, color: "bg-gray-400" },
  { name: "Gold", min: 5000, max: 9999, color: "bg-yellow-500" },
  { name: "Platinum", min: 10000, max: Number.POSITIVE_INFINITY, color: "bg-purple-500" },
]

export default function DashboardPage() {
  const [user] = useState({
    name: "Adebayo Ogundimu",
    email: "adebayo@example.com",
    phone: "+234 801 234 5678",
    loyaltyPoints: 1250,
    totalOrders: 8,
    totalSpent: 180000,
    memberSince: "2024-03-15",
  })

  const currentTier =
    loyaltyTiers.find((tier) => user.loyaltyPoints >= tier.min && user.loyaltyPoints <= tier.max) || loyaltyTiers[0]

  const nextTier = loyaltyTiers.find((tier) => tier.min > user.loyaltyPoints)
  const progressToNext = nextTier
    ? ((user.loyaltyPoints - currentTier.min) / (nextTier.min - currentTier.min)) * 100
    : 100

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Manage your orders, profile, and loyalty rewards</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <Package className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{user.totalOrders}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold">₦{user.totalSpent.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loyalty Points</p>
                  <p className="text-2xl font-bold">{user.loyaltyPoints}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`${currentTier.color} p-3 rounded-full`}>
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tier Status</p>
                  <p className="text-2xl font-bold">{currentTier.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="loyalty">Loyalty</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="bg-muted p-2 rounded">
                              <Package className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.date).toLocaleDateString()} • {order.items} items
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₦{order.total.toLocaleString()}</p>
                            <Badge
                              variant={order.status === "delivered" ? "default" : "secondary"}
                              className={order.status === "delivered" ? "bg-green-600" : ""}
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      View All Orders
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Your wishlist is empty</p>
                      <Button className="mt-4">Browse Products</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <p className="text-muted-foreground">{user.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <p className="text-muted-foreground">{user.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Member Since</label>
                        <p className="text-muted-foreground">{new Date(user.memberSince).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button>Edit Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="loyalty">
                <Card>
                  <CardHeader>
                    <CardTitle>Loyalty Program</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Current Tier: {currentTier.name}</span>
                        <span className="text-sm text-muted-foreground">{user.loyaltyPoints} points</span>
                      </div>
                      {nextTier && (
                        <>
                          <Progress value={progressToNext} className="mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {nextTier.min - user.loyaltyPoints} points to {nextTier.name}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {loyaltyTiers.map((tier) => (
                        <div
                          key={tier.name}
                          className={`p-4 border rounded-lg ${
                            tier.name === currentTier.name ? "border-green-500 bg-green-50 dark:bg-green-950" : ""
                          }`}
                        >
                          <div className={`w-8 h-8 ${tier.color} rounded-full mb-2`}></div>
                          <h4 className="font-medium">{tier.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tier.min === 0 ? "0" : tier.min.toLocaleString()}
                            {tier.max === Number.POSITIVE_INFINITY ? "+" : ` - ${tier.max.toLocaleString()}`} points
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Truck className="mr-2 h-4 w-4" />
                  Book Service
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Loyalty Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Loyalty Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${currentTier.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{currentTier.name} Member</h3>
                  <p className="text-sm text-muted-foreground mb-4">{user.loyaltyPoints} points available</p>
                  <Button size="sm">Redeem Points</Button>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  <Clock className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Emergency Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
