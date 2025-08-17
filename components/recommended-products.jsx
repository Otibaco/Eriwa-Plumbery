import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const recommendations = [
  {
    id: 1,
    name: "Smart Water Leak Detector",
    price: 79.99,
    rating: 4.9,
    image: "/placeholder-chmzs.png",
    category: "Smart Home",
  },
  {
    id: 2,
    name: "Professional Plunger Set",
    price: 24.99,
    rating: 4.7,
    image: "/professional-plunger-set.png",
    category: "Tools",
  },
  {
    id: 3,
    name: "Tankless Water Heater",
    price: 899.99,
    rating: 4.8,
    image: "/placeholder-ialvt.png",
    category: "Water Heaters",
  },
  {
    id: 4,
    name: "Pipe Insulation Kit",
    price: 19.99,
    rating: 4.6,
    image: "/pipe-insulation-foam.png",
    category: "Insulation",
  },
]

export function RecommendedProducts() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">AI Recommended for You</h2>
          <p className="text-gray-600 mt-2">Based on your browsing history and preferences</p>
        </div>
        <Button variant="outline">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">AI Pick</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
                <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
