"use client"

import { featuredProducts } from "@/components/featured-products/featured-products"
import { FeaturedProducts } from "@/components/featured-products/featured-products"
import { Footer } from "@/components/footer/footer"
import { Navigation } from "@/components/navigation/navigation"
import { ProductFilters } from "@/components/product-filters/product-filters"
import { ProductGrid } from "@/components/product-grid/product-grid"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { useState, useMemo } from "react"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = featuredProducts

    // ✅ Apply search filter safely
    if (searchQuery.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // ✅ Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // ✅ Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
        case "price-high":
          return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
        case "rating":
          return b.rating - a.rating
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

    return sorted
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality plumbing products and tools
          </p>
          <div className="mt-8 text-lg">
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              {filteredAndSortedProducts.length} Products Available
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <ProductFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}