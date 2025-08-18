'use client'

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  CheckCircle,
  Package as PackageIcon,
  Truck,
  MapPin,
  Phone,
  Mail,
  Download,
  Share
} from "lucide-react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || "ORD-1234567890"

  const [orderDetails] = useState({
    id: orderId,
    date: new Date().toISOString(),
    status: "confirmed",
    total: 95000,
    items: [
      {
        id: 1,
        name: "Professional Pipe Wrench Set - 3 Pieces",
        price: 25000,
        quantity: 2,
      },
      {
        id: 2,
        name: "Premium Bathroom Faucet - Chrome Finish",
        price: 45000,
        quantity: 1,
      },
    ],
    shipping: {
      name: "Adebayo Ogundimu",
      address: "123 Victoria Street, Victoria Island, Lagos",
      method: "Express Delivery",
      estimatedDelivery: "2025-01-12",
    },
    payment: {
      method: "Paystack",
      reference: "PSK_" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    },
  })

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
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-300" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PackageIcon className="h-5 w-5" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order Number</p>
                    <p className="font-medium">{orderDetails.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Order Date</p>
                    <p className="font-medium">{formatDate(orderDetails.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Reference</p>
                    <p className="font-medium">{orderDetails.payment.reference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className="bg-green-600">Confirmed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Items */}
            <Card>
              <CardHeader>
                <CardTitle>Items Ordered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
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

            {/* Shipping */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Address</p>
                  <p className="font-medium">{orderDetails.shipping.name}</p>
                  <p className="text-sm">{orderDetails.shipping.address}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Delivery Method</p>
                    <p className="font-medium">{orderDetails.shipping.method}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium">{formatDate(orderDetails.shipping.estimatedDelivery)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href={`/orders/${orderDetails.id}`}>
                    <PackageIcon className="mr-2 h-4 w-4" />
                    Track Your Order
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Share className="mr-2 h-4 w-4" />
                  Share Order
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NextStep icon={<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-300" />} title="Order Confirmed" desc="We've received your order" bg="bg-green-100 dark:bg-green-900" />
                <NextStep icon={<PackageIcon className="h-4 w-4 text-muted-foreground" />} title="Processing" desc="We're preparing your items" />
                <NextStep icon={<Truck className="h-4 w-4 text-muted-foreground" />} title="Shipped" desc="Your order is on the way" />
                <NextStep icon={<MapPin className="h-4 w-4 text-muted-foreground" />} title="Delivered" desc="Enjoy your purchase!" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+234-801-PLUMBER</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>support@eriwaplumbery.ng</span>
                </div>
                <Button variant="outline" className="w-full mt-3 bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Component: Clean helper for repeated blocks
function NextStep({ icon, title, desc, bg = "bg-muted" }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`${bg} p-2 rounded-full`}>{icon}</div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}
