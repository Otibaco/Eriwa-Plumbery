import { Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Professional Pipe Wrench Set",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 124,
    image: "/pipe-wrench-set.png",
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Bathroom Faucet",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 89,
    image: "/modern-bathroom-faucet.png",
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "Copper Pipe Bundle (10ft)",
    price: 45.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder-tyupc.png",
    badge: null,
    inStock: true,
  },
  {
    id: 4,
    name: "Emergency Drain Snake",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 156,
    image: "/drain-snake-tool.png",
    badge: "Sale",
    inStock: false,
  },
]

export function FeaturedProducts() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Button variant="outline">View All Products</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border hover:shadow-lg transition-all duration-300"
          >
            <div className="relative p-4">
              {product.badge && <Badge className="absolute top-2 left-2 z-10">{product.badge}</Badge>}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="p-4 pt-0">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {product.inStock && <p className="text-sm text-green-600 mt-2">✓ In Stock - Ships Today</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
