"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Package, Truck, MapPin, CheckCircle, Clock, Phone, RotateCcw, MessageCircle } from "lucide-react"
import Image from "next/image"

const orderStatuses = [
  { id: "confirmed", label: "Order Confirmed", icon: CheckCircle, completed: true },
  { id: "processing", label: "Processing", icon: Package, completed: true },
  { id: "shipped", label: "Shipped", icon: Truck, completed: true },
  { id: "delivered", label: "Delivered", icon: MapPin, completed: false },
]

export default function OrderTrackingPage() {
  const params = useParams()
  const orderId = params.id 

  const [orderDetails] = useState({
    id: orderId,
    date: "2025-01-10",
    status: "shipped",
    total: 95000,
    trackingNumber: "TRK123456789",
    estimatedDelivery: "2025-01-12",
    items: [
      {
        id: 1,
        name: "Professional Pipe Wrench Set - 3 Pieces",
        price: 25000,
        quantity: 2,
        image: "/product-pipe-wrench.png",
      },
      {
        id: 2,
        name: "Premium Bathroom Faucet - Chrome Finish",
        price: 45000,
        quantity: 1,
        image: "/product-faucet.png",
      },
    ],
    shipping: {
      name: "Adebayo Ogundimu",
      address: "123 Victoria Street, Victoria Island, Lagos",
      phone: "+234 801 234 5678",
    },
    timeline: [
      {
        status: "Order Confirmed",
        date: "2025-01-10 09:30 AM",
        description: "Your order has been confirmed and payment received",
        completed: true,
      },
      {
        status: "Processing",
        date: "2025-01-10 02:15 PM",
        description: "Your items are being prepared for shipment",
        completed: true,
      },
      {
        status: "Shipped",
        date: "2025-01-11 10:45 AM",
        description: "Your order has been shipped and is on the way",
        completed: true,
      },
      {
        status: "Out for Delivery",
        date: "Expected: 2025-01-12 09:00 AM",
        description: "Your order will be delivered today",
        completed: false,
      },
    ],
  })

  const currentStatusIndex = orderStatuses.findIndex((status) => status.id === orderDetails.status)
  const progress = ((currentStatusIndex + 1) / orderStatuses.length) * 100

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Order Tracking</h1>
          <p className="text-muted-foreground">Track your order #{orderId}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Order Status</span>
                  <Badge className="bg-blue-600">
                    {orderStatuses.find((s) => s.id === orderDetails.status)?.label}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress Bar */}
                <div>
                  <Progress value={progress} className="mb-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Order Confirmed</span>
                    <span>Delivered</span>
                  </div>
                </div>

                {/* Status Steps */}
                <div className="space-y-4">
                  {orderStatuses.map((status, index) => {
                    const Icon = status.icon
                    const isCompleted = index <= currentStatusIndex
                    const isCurrent = index === currentStatusIndex

                    return (
                      <div key={status.id} className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted
                              ? "bg-green-600 text-white"
                              : isCurrent
                                ? "bg-blue-600 text-white"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${isCurrent ? "text-blue-600" : ""}`}>{status.label}</p>
                          {isCurrent && (
                            <p className="text-sm text-muted-foreground">
                              Expected: {formatDate(orderDetails.estimatedDelivery)}
                            </p>
                          )}
                        </div>
                        {isCompleted && <CheckCircle className="h-5 w-5 text-green-600" />}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderDetails.timeline.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${event.completed ? "bg-green-600" : "bg-muted"}`} />
                        {index < orderDetails.timeline.length - 1 && <div className="w-px h-8 bg-muted mt-2" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">{event.status}</p>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          <RotateCcw className="h-4 w-4 mr-1" />
                          Reorder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(orderDetails.total)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Order Number</span>
                  <span className="text-sm font-medium">{orderDetails.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Order Date</span>
                  <span className="text-sm font-medium">{formatDate(orderDetails.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tracking Number</span>
                  <span className="text-sm font-medium">{orderDetails.trackingNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery</span>
                  <span className="text-sm font-medium">{formatDate(orderDetails.estimatedDelivery)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Address</p>
                  <p className="font-medium">{orderDetails.shipping.name}</p>
                  <p className="text-sm">{orderDetails.shipping.address}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact Number</p>
                  <p className="font-medium">{orderDetails.shipping.phone}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Clock className="mr-2 h-4 w-4" />
                  Reschedule Delivery
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Get Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Get real-time updates about your order via SMS and email.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Enable Notifications</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
