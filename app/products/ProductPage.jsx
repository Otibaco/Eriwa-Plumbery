"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { ProductCard } from "@/components/products/ProductCard"
import { Search, Filter, ChevronDown, Grid3X3, List, Home, Wrench, Droplets, Zap } from "lucide-react"
import { useAnalytics } from "@/lib/analytics"
import { Card, CardContent } from "@/components/ui/card"

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
    // ...Array.from({ length: 97 }, (_, i) => {
    //   const price = (Math.floor(Math.random() * 500) + 50) * 1600
    //   const originalPrice = (Math.floor(Math.random() * 200) + 300) * 1600
    //   return {
    //     id: i + 7,
    //     name: `Plumbing Product ${i + 7}`,
    //     category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
    //     price: price.toLocaleString(),
    //     originalPrice: originalPrice.toLocaleString(),
    //     rating: Math.floor(Math.random() * 2) + 4,
    //     reviews: Math.floor(Math.random() * 300) + 10,
    //     image: "/toilet1.jpg",
    //     description: `Professional plumbing product for various installation and repair needs. Product ${i + 7}.`,
    //     features: ["Professional Grade", "Durable Material", "Easy Installation", "Warranty Included"],
    //     inStock: Math.random() > 0.1,
    //   }
    // }),
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
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <Badge variant="outline" className="mb-4 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
              {products.length}+ Quality Products
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-orange-500">Jimmy Joe&apos;s Plumbing</span>{" "}
              -{" "}
              <span className="text-blue-600 dark:text-blue-400">Marketplace</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse thousands of professional-grade plumbing products, fixtures, and tools for all your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 border-blue-200 focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-400"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                    }
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sorting + View */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
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
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {selectedCategory === "all"
                  ? "All Products"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
              </p>
            </div>
          </AnimatedSection>

          {/* Product Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {displayedProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 0.05}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full hover:shadow-xl transition-shadow group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-orange-500">
                          {product.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="absolute top-4 right-4 text-xs"
                        >
                          ₦{product.price.toLocaleString()}
                        </Badge>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span className="font-bold text-blue-600 dark:text-blue-400">
                            ₦{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="line-through opacity-70">
                              ₦{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                          onClick={() => handleProductView(product)}
                        >
                          View Product
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>




          {/* Empty State */}
          {filteredAndSortedProducts.length === 0 && (
            <AnimatedSection animation="fadeInUp" className="text-center py-12">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </AnimatedSection>
          )}

          {/* Load More */}
          {hasMore && (
            <AnimatedSection animation="fadeInUp" className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                onClick={loadMore}
                className="px-8 py-3 text-lg rounded-full"
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


      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
