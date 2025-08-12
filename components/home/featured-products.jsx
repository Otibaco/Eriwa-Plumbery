"use client"

import { useState } from "react"
import { Star, ShoppingCart, Heart, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const productTabs = [
  { id: "bestsellers", label: "Bestsellers", icon: Star },
  { id: "new", label: "New Arrivals", icon: Zap },
  { id: "sale", label: "On Sale", icon: ShoppingCart },
]

const products = {
  bestsellers: [
    {
      id: 1,
      name: "Professional Pipe Wrench Set - 3 Pieces",
      price: 25000,
      originalPrice: 35000,
      rating: 4.8,
      reviews: 124,
      image: "/product-pipe-wrench.png",
      badge: "Bestseller",
      inStock: true,
      discount: 29,
      loyaltyPoints: 250,
    },
    {
      id: 2,
      name: "Premium Bathroom Faucet - Chrome Finish",
      price: 45000,
      originalPrice: 60000,
      rating: 4.9,
      reviews: 89,
      image: "/product-faucet.png",
      badge: "Premium",
      inStock: true,
      discount: 25,
      loyaltyPoints: 450,
    },
    {
      id: 3,
      name: "PVC Pipe Bundle - 4 inch x 10ft",
      price: 12000,
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image: "/product-pvc-pipe.png",
      badge: null,
      inStock: true,
      discount: 0,
      loyaltyPoints: 120,
    },
    {
      id: 4,
      name: "Emergency Drain Snake - 25ft Professional",
      price: 18000,
      originalPrice: 25000,
      rating: 4.6,
      reviews: 156,
      image: "/product-drain-snake.png",
      badge: "Sale",
      inStock: false,
      discount: 28,
      loyaltyPoints: 180,
    },
  ],
  new: [
    {
      id: 5,
      name: "Smart Water Leak Detector with App",
      price: 35000,
      originalPrice: null,
      rating: 4.9,
      reviews: 45,
      image: "/product-leak-detector.png",
      badge: "New",
      inStock: true,
      discount: 0,
      loyaltyPoints: 350,
    },
    {
      id: 6,
      name: "Tankless Water Heater - 12L Capacity",
      price: 180000,
      originalPrice: null,
      rating: 4.8,
      reviews: 23,
      image: "/product-water-heater.png",
      badge: "New",
      inStock: true,
      discount: 0,
      loyaltyPoints: 1800,
    },
  ],
  sale: [
    {
      id: 7,
      name: "Copper Pipe Set - Various Sizes",
      price: 28000,
      originalPrice: 40000,
      rating: 4.7,
      reviews: 78,
      image: "/product-copper-pipes.png",
      badge: "30% Off",
      inStock: true,
      discount: 30,
      loyaltyPoints: 280,
    },
  ],
}

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("bestsellers")
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our most popular plumbing products, trusted by professionals and homeowners across Nigeria.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {productTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(products).map(([tabId, tabProducts]) => (
          <TabsContent key={tabId} value={tabId}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tabProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Product image */}
                      <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.badge && (
                            <Badge
                              className={`
                                ${product.badge === "Bestseller" ? "bg-yellow-500" : ""}
                                ${product.badge === "New" ? "bg-green-500" : ""}
                                ${product.badge === "Sale" || product.badge.includes("Off") ? "bg-red-500" : ""}
                                ${product.badge === "Premium" ? "bg-purple-500" : ""}
                              `}
                            >
                              {product.badge}
                            </Badge>
                          )}
                          {product.discount > 0 && <Badge variant="destructive">-{product.discount}%</Badge>}
                        </div>

                        {/* Action buttons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 rounded-full"
                            onClick={() => toggleWishlist(product.id)}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""
                              }`}
                            />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Stock status */}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="secondary" className="bg-white text-black">
                              Out of Stock
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Product info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-bold text-green-600 naira-symbol">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>

                        {/* Loyalty points */}
                        <div className="text-xs text-muted-foreground mb-4">
                          Earn {product.loyaltyPoints} loyalty points
                        </div>

                        {/* Add to cart button */}
                        <Button className="w-full" disabled={!product.inStock} size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>

                        {/* Stock indicator */}
                        {product.inStock && (
                          <p className="text-xs text-green-600 mt-2 text-center">✓ In Stock - Ships within 24hrs</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Products
          <ShoppingCart className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
