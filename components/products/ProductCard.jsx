"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ProductCard({ product, viewMode = "grid", onView }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleView = () => {
    if (onView) onView(product)
  }

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0

  if (viewMode === "list") {
    return (
      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg?height=120&width=120&query=plumbing+product"}
                  alt={product.name}
                  className="w-full sm:w-24 sm:h-24 h-40 object-cover rounded"
                />
                {discount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-destructive text-white text-xs">-{discount}%</Badge>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <Link href={`/products/${product.id}`} onClick={handleView}>
                    <h3 className="font-semibold text-base sm:text-lg line-clamp-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <button onClick={handleLike} className="p-1 rounded-full hover:bg-muted transition-colors">
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-bold text-primary">₦{product.price}</div>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <div className="text-xs sm:text-sm text-muted-foreground line-through">
                          ₦{product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                  {!product.inStock && (
                    <Badge variant="secondary" className="text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex gap-2 flex-wrap">
                    {product.features?.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" disabled={!product.inStock}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Buy Now" : "Out of Stock"}
                    </Button>
                    <Link href={`/products/${product.id}`}>
                      <Button variant="outline" size="sm" onClick={handleView}>
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=200&width=300&query=plumbing+product"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-destructive text-white text-xs sm:text-sm">-{discount}%</Badge>
          )}

          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2 text-xs sm:text-sm">
              Out of Stock
            </Badge>
          )}

          <button
            onClick={handleLike}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"}`}
            />
          </button>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/products/${product.id}`} onClick={handleView}>
              <CardTitle className="text-sm sm:text-base line-clamp-2 leading-tight hover:text-primary transition-colors">
                {product.name}
              </CardTitle>
            </Link>
            <div className="text-right flex-shrink-0">
              <div className="text-base sm:text-lg font-bold text-primary">₦{product.price}</div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="text-xs sm:text-sm text-muted-foreground line-through">₦{product.originalPrice}</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

          <div className="flex gap-2 flex-col sm:flex-row">
            <Button size="sm" className="flex-1 text-xs sm:text-sm" disabled={!product.inStock}>
              <ShoppingCart className="w-3 h-3 mr-1" />
              {product.inStock ? "Buy Now" : "Out of Stock"}
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto text-xs sm:text-sm bg-transparent"
                onClick={handleView}
              >
                <Eye className="w-3 h-3 mr-1" />
                View
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
