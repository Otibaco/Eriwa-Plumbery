"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Truck, MapPin, Clock, Shield, Gift } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

const cartItems = [
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
]

const deliveryOptions = [
  {
    id: "standard",
    name: "Standard Delivery",
    description: "3-5 business days",
    price: 2500,
    icon: Truck,
  },
  {
    id: "express",
    name: "Express Delivery",
    description: "1-2 business days",
    price: 5000,
    icon: Clock,
  },
  {
    id: "same-day",
    name: "Same Day Delivery",
    description: "Within Lagos, Abuja, PH only",
    price: 8000,
    icon: MapPin,
  },
]

const nigerianStates = [
  "Lagos",
  "Abuja (FCT)",
  "Kano",
  "Rivers",
  "Oyo",
  "Kaduna",
  "Ogun",
  "Imo",
  "Plateau",
  "Akwa Ibom",
]

export default function CheckoutPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    deliveryNotes: "",
  })

  const [deliveryOption, setDeliveryOption] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("paystack")
  const [saveInfo, setSaveInfo] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const selectedDelivery = deliveryOptions.find((option) => option.id === deliveryOption)
  const deliveryFee = selectedDelivery?.price || 0
  const total = subtotal + deliveryFee

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleInputChange = (field, value) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    if (!agreeToTerms) {
      toast({
        title: "Terms required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Generate order ID
    const orderId = `ORD-${Date.now()}`

    toast({
      title: "Payment successful!",
      description: "Your order has been placed successfully",
    })

    // Redirect to order confirmation
    router.push(`/order-confirmation?orderId=${orderId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 801 234 5678"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select value={shippingInfo.state} onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {nigerianStates.map((state) => (
                          <SelectItem key={state} value={state.toLowerCase()}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryNotes">Delivery Notes (Optional)</Label>
                  <Textarea
                    id="deliveryNotes"
                    placeholder="Any special delivery instructions..."
                    value={shippingInfo.deliveryNotes}
                    onChange={(e) => handleInputChange("deliveryNotes", e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={saveInfo}
                    onCheckedChange={(checked) => setSaveInfo(Boolean(checked))}
                  />
                  <Label htmlFor="saveInfo" className="text-sm">
                    Save this information for next time
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                  <div className="space-y-3">
                    {deliveryOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <div className="flex items-center gap-3 flex-1">
                          <option.icon className="h-5 w-5 text-muted-foreground" />
                          <div className="flex-1">
                            <Label htmlFor={option.id} className="font-medium cursor-pointer">
                              {option.name}
                            </Label>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">
                              {option.price === 0 ? "FREE" : formatPrice(option.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="paystack" id="paystack" />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="paystack" className="font-medium cursor-pointer">
                            Paystack
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Pay securely with card, bank transfer, or USSD
                          </p>
                        </div>
                        <Badge variant="secondary">Recommended</Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" disabled />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor="bank-transfer" className="font-medium cursor-pointer">
                            Bank Transfer
                          </Label>
                          <p className="text-sm text-muted-foreground">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RadioGroup>

                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(Boolean(checked))}
                  />
                  <div className="text-sm">
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to the{" "}
                      <a href="/terms" className="text-green-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-12 h-12 rounded overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Gift className="h-4 w-4" />
                  <span>You'll earn 700 loyalty points</span>
                </div>

                <Button className="w-full" size="lg" onClick={handlePayment} disabled={isProcessing || !agreeToTerms}>
                  {isProcessing ? (
                    "Processing Payment..."
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Pay Now - {formatPrice(total)}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By clicking "Pay Now", you agree to our terms and conditions
                </p>
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-medium mb-2">Secure Checkout</h3>
                <p className="text-sm text-muted-foreground">Your payment is protected by 256-bit SSL encryption</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
