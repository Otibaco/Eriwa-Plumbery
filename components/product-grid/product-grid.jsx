"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import { ProductModal } from "../product-modal/product-modal"


/**
 * @param {{ products: import("@/lib/products").Product[] }} props
 */

export function ProductGrid({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
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
                {product.isNew && <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">New</Badge>}
                {product.isHot && <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">Hot</Badge>}
                <Badge variant="secondary" className="absolute top-4 right-4">
                  {product.category}
                </Badge>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge className="bg-gray-500" variant="secondary">
                      Out of Stock
                    </Badge>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleProductClick(product)}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 group/btn" disabled={!product.inStock}>
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>

                {product.inStock && (
                  <div className="mt-2 text-xs text-muted-foreground">{product.stockCount} in stock</div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
