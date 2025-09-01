"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import {
  Search,
  Filter,
  ShoppingCart,
  Star,
  Wrench,
  Droplets,
  Zap,
  Home,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
} from "lucide-react"
import { motion } from "framer-motion"
import { useAnalytics } from "@/lib/analytics"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
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
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 124,
      image: "/premium-kitchen-faucet-with-modern-design.png",
      description: "High-quality stainless steel kitchen faucet with pull-down sprayer",
      features: ["Stainless Steel", "Pull-Down Sprayer", "Easy Installation", "10-Year Warranty"],
      inStock: true,
    },
    {
      id: 2,
      name: "Tankless Water Heater",
      category: "water-heaters",
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.9,
      reviews: 89,
      image: "/modern-tankless-water-heater-unit.png",
      description: "Energy-efficient tankless water heater for endless hot water",
      features: ["Energy Efficient", "Endless Hot Water", "Compact Design", "Digital Display"],
      inStock: true,
    },
    {
      id: 3,
      name: "Professional Pipe Wrench Set",
      category: "tools",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 203,
      image: "/professional-pipe-wrench-set-tools.png",
      description: "Complete set of professional-grade pipe wrenches",
      features: ["Durable Steel", "Multiple Sizes", "Ergonomic Grip", "Professional Grade"],
      inStock: true,
    },
    ...Array.from({ length: 97 }, (_, i) => ({
      id: i + 7,
      name: `Plumbing Product ${i + 7}`,
      category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
      price: Math.floor(Math.random() * 500) + 50,
      originalPrice: Math.floor(Math.random() * 200) + 300,
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 300) + 10,
      image: "/plumbing-product.png",
      description: `Professional plumbing product for various installation and repair needs. Product ${i + 7}.`,
      features: ["Professional Grade", "Durable Material", "Easy Installation", "Warranty Included"],
      inStock: Math.random() > 0.1,
    })),
    {
      id: 4,
      name: "Copper Pipe Fittings Kit",
      category: "pipes",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 156,
      image: "/copper-pipe-fittings-and-connectors-kit.png",
      description: "Complete kit of copper pipe fittings and connectors",
      features: ["Pure Copper", "Various Sizes", "Leak-Proof", "Easy Installation"],
      inStock: true,
    },
    {
      id: 5,
      name: "Modern Bathroom Sink",
      category: "fixtures",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 92,
      image: "/modern-bathroom-sink-with-elegant-design.png",
      description: "Elegant ceramic bathroom sink with modern design",
      features: ["Ceramic Material", "Modern Design", "Easy Clean", "Standard Size"],
      inStock: false,
    },
    {
      id: 6,
      name: "High-Pressure Shower Head",
      category: "fixtures",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 267,
      image: "/high-pressure-shower-head-chrome-finish.png",
      description: "High-pressure shower head with multiple spray settings",
      features: ["High Pressure", "Multiple Settings", "Chrome Finish", "Water Saving"],
      inStock: true,
    },
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
          return a.price - b.price
        case "price-high":
          return b.price - a.price
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

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleProductView = (product) => {
    trackProductView(product.id, product.name, product.category)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
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
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category.id)}
                    className="bg-transparent"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
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

                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => {
                    setItemsPerPage(Number(value))
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 per page</SelectItem>
                    <SelectItem value="24">24 per page</SelectItem>
                    <SelectItem value="48">48 per page</SelectItem>
                    <SelectItem value="96">96 per page</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
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
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === "all"
                    ? "All Products"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAndSortedProducts.length)} of{" "}
                  {filteredAndSortedProducts.length} products
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            {paginatedProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 0.05}>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  {viewMode === "grid" ? (
                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg?height=200&width=300&query=plumbing+product"}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {product.originalPrice > product.price && (
                          <Badge className="absolute top-2 left-2 bg-destructive">
                            Save ${(product.originalPrice - product.price).toFixed(0)}
                          </Badge>
                        )}
                        {!product.inStock && (
                          <Badge variant="secondary" className="absolute top-2 right-2">
                            Out of Stock
                          </Badge>
                        )}
                        <Badge variant="outline" className="absolute bottom-2 right-2 bg-background/80">
                          {getProductViews(product.id)} views
                        </Badge>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base line-clamp-2 leading-tight">{product.name}</CardTitle>
                          <div className="text-right flex-shrink-0 ml-2">
                            <div className="text-lg font-bold text-primary">${product.price}</div>
                            {product.originalPrice > product.price && (
                              <div className="text-xs text-muted-foreground line-through">${product.originalPrice}</div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 text-xs" disabled={!product.inStock}>
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent text-xs"
                            onClick={() => handleProductView(product)}
                          >
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={product.image || "/placeholder.svg?height=120&width=120&query=plumbing+product"}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                              <div className="text-right flex-shrink-0 ml-4">
                                <div className="text-xl font-bold text-primary">${product.price}</div>
                                {product.originalPrice > product.price && (
                                  <div className="text-sm text-muted-foreground line-through">
                                    ${product.originalPrice}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                              <Badge variant="outline" className="ml-auto">
                                {getProductViews(product.id)} views
                              </Badge>
                            </div>

                            <p className="text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                {product.features.slice(0, 2).map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" disabled={!product.inStock}>
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => handleProductView(product)}>
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <AnimatedSection animation="fadeInUp" className="text-center py-12">
              <div className="text-muted-foreground">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            </AnimatedSection>
          )}

          {totalPages > 1 && (
            <AnimatedSection animation="fadeInUp" className="mt-12">
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex gap-1">
                  {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 7) {
                      pageNum = i + 1
                    } else if (currentPage <= 4) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 3) {
                      pageNum = totalPages - 6 + i
                    } else {
                      pageNum = currentPage - 3 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-10"
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-center mt-4 text-sm text-muted-foreground">
                Page {currentPage} of {totalPages} ({filteredAndSortedProducts.length} total products)
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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
                Get Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
