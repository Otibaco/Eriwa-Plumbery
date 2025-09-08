"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { ProductCard } from "@/components/products/ProductCard"
import { Search, Filter, ChevronDown, Grid3X3, List, Home, Wrench, Droplets, Zap } from "lucide-react"
import { useAnalytics } from "@/lib/analytics"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsToShow, setItemsToShow] = useState(12)
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")
  const { trackProductView, getProductViews } = useAnalytics()

  const categories = [
    { id: "all", name: "All Products", icon: Wrench },
    { id: "fixtures", name: "Fixtures", icon: Home },
    { id: "pipes", name: "Pipes & Fittings", icon: Droplets },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "water-heaters", name: "Water Heaters", icon: Zap },
  ]

  const products = [
    {
      id: 1,
      name: "Premium Kitchen Faucet",
      category: "fixtures",
      price: "479,984",
      originalPrice: "639,984",
      rating: 4.8,
      reviews: 124,
      image: "/Premium Kitchen Faucet.jpg",
      description: "High-quality stainless steel kitchen faucet with pull-down sprayer",
      features: ["Stainless Steel", "Pull-Down Sprayer", "Easy Installation", "10-Year Warranty"],
      inStock: true,
    },
    {
      id: 2,
      name: "Tankless Water Heater",
      category: "water-heaters",
      price: "2,079,984",
      originalPrice: "2,399,984",
      rating: 4.9,
      reviews: 89,
      image: "/Tankless Water Heater.jpg",
      description: "Energy-efficient tankless water heater for endless hot water",
      features: ["Energy Efficient", "Endless Hot Water", "Compact Design", "Digital Display"],
      inStock: true,
    },
    {
      id: 3,
      name: "Professional Pipe Wrench Set",
      category: "tools",
      price: "143,984",
      originalPrice: "191,984",
      rating: 4.7,
      reviews: 203,
      image: "/Copper Pipe Fittings Kit.jpg",
      description: "Complete set of professional-grade pipe wrenches",
      features: ["Durable Steel", "Multiple Sizes", "Ergonomic Grip", "Professional Grade"],
      inStock: true,
    },
    {
      id: 4,
      name: "Copper Pipe Fittings Kit",
      category: "pipes",
      price: "73,584",
      originalPrice: "95,984",
      rating: 4.6,
      reviews: 156,
      image: "/Copper Pipe Fittings Kit.jpg",
      description: "Complete kit of copper pipe fittings and connectors",
      features: ["Pure Copper", "Various Sizes", "Leak-Proof", "Easy Installation"],
      inStock: true,
    },
    {
      id: 5,
      name: "Modern Bathroom Sink",
      category: "fixtures",
      price: "319,984",
      originalPrice: "399,984",
      rating: 4.8,
      reviews: 92,
      image: "/Modern Bathroom Sink.jpg",
      description: "Elegant ceramic bathroom sink with modern design",
      features: ["Ceramic Material", "Modern Design", "Easy Clean", "Standard Size"],
      inStock: false,
    },
    {
      id: 6,
      name: "High-Pressure Shower Head",
      category: "fixtures",
      price: "127,984",
      originalPrice: "159,984",
      rating: 4.9,
      reviews: 267,
      image: "/High-Pressure Shower Head.jpg",
      description: "High-pressure shower head with multiple spray settings",
      features: ["High Pressure", "Multiple Settings", "Chrome Finish", "Water Saving"],
      inStock: true,
    },
    ...Array.from({ length: 97 }, (_, i) => {
      const price = (Math.floor(Math.random() * 500) + 50) * 1600
      const originalPrice = (Math.floor(Math.random() * 200) + 300) * 1600
      return {
        id: i + 7,
        name: `Plumbing Product ${i + 7}`,
        category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
        price: price.toLocaleString(),
        originalPrice: originalPrice.toLocaleString(),
        rating: Math.floor(Math.random() * 2) + 4,
        reviews: Math.floor(Math.random() * 300) + 10,
        image: "/toilet1.jpg",
        description: `Professional plumbing product for various installation and repair needs. Product ${i + 7}.`,
        features: ["Professional Grade", "Durable Material", "Easy Installation", "Warranty Included"],
        inStock: Math.random() > 0.1,
      }
    }),
  ]

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return Number.parseInt(a.price.replace(/,/g, "")) - Number.parseInt(b.price.replace(/,/g, ""))
        case "price-high":
          return Number.parseInt(b.price.replace(/,/g, "")) - Number.parseInt(a.price.replace(/,/g, ""))
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [selectedCategory, searchTerm, sortBy])

  const displayedProducts = filteredAndSortedProducts.slice(0, itemsToShow)
  const hasMore = itemsToShow < filteredAndSortedProducts.length

  const handleProductView = (product) => {
    trackProductView(product.id, product.name, product.category)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setItemsToShow(12)
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setItemsToShow(12)
  }

  const loadMore = () => {
    setItemsToShow((prev) => prev + 12)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {products.length}+ Quality Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Plumbing Marketplace</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Browse thousands of professional-grade plumbing products, fixtures, and tools for all your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search, Filter, and Controls */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            {/* Search + Categories */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>

              <div className="flex gap-2 flex-wrap justify-center lg:justify-end w-full lg:w-auto">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    size="sm"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center ${
                      selectedCategory === category.id
                        ? "bg-background text-foreground shadow-sm border"
                        : "bg-transparent"
                    }`}
                    variant="outline"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{category.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Sorting + View Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === "all"
                    ? "All Products"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Products Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {displayedProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 0.05}>
                <ProductCard product={product} viewMode={viewMode} onView={handleProductView} />
              </AnimatedSection>
            ))}
          </div>

          {/* No Products */}
          {filteredAndSortedProducts.length === 0 && (
            <AnimatedSection animation="fadeInUp" className="text-center py-12">
              <div className="text-muted-foreground">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            </AnimatedSection>
          )}

          {/* View More Button */}
          {hasMore && (
            <AnimatedSection animation="fadeInUp" className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                onClick={loadMore}
                className="px-8 py-3 text-lg rounded-full bg-transparent"
              >
                View More Products
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                {filteredAndSortedProducts.length - itemsToShow} more products available
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Need Professional Installation?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Purchase your products and let our expert team handle the installation for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
                Schedule Installation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Shop Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
