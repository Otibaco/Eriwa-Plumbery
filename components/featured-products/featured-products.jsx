"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"


// ✅ Export array separately
export const featuredProducts = [
  {
    id: 1,
    name: "Ceramic Wash Basin",
    description: "Durable and stylish wash basin for modern bathrooms",
    price: "₦45,000",
    image: "/basin1.jpg",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Luxury Bathtub",
    description: "Elegant freestanding bathtub with premium finishing",
    price: "₦250,000",
    image: "/bathtub1.jpg",
    rating: 4.9,
    isHot: true,
  },
  {
    id: 3,
    name: "Rainfall Shower Set",
    description: "Complete shower kit with overhead and handheld shower",
    price: "₦85,000",
    image: "/shower1.jpg",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: "Modern Toilet Seat",
    description: "Water-efficient ceramic toilet seat with soft-close cover",
    price: "₦120,000",
    image: "/toilet1.jpg",
    rating: 4.6,
    isNew: true,
  },
  {
    id: 5,
    name: "PVC Water Pipes",
    description: "High-strength PVC pipes for plumbing installations",
    price: "₦18,500",
    image: "/pipes.jpg",
    rating: 4.5,
    isHot: true,
    
  },

];



// ✅ Component just displays them
export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated plumbing products trusted by professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">New</Badge>
                  )}
                  {product.isHot && (
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">Hot</Badge>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 group">
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Buy now 
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
