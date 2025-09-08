"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard"
import { motion } from "framer-motion"

export function RelatedProductsSlider({ products, title = "You May Also Like" }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 320 // Width of one product card + gap
    const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  if (!products || products.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-8 w-8"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-8 w-8"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="flex-shrink-0 w-72"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} viewMode="grid" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
