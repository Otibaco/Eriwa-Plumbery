"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Search, Filter, ShoppingCart, Star, Wrench, Droplets, Zap, Home } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

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

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Quality Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Plumbing Products & Supplies</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Professional-grade plumbing products, fixtures, and tools for all your installation and repair needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-transparent"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCategory === "all" ? "All Products" : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
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
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                        <div className="text-right flex-shrink-0 ml-2">
                          <div className="text-xl font-bold text-primary">${product.price}</div>
                          {product.originalPrice > product.price && (
                            <div className="text-sm text-muted-foreground line-through">${product.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
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
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1" disabled={!product.inStock}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? "Buy now" : "Out of Stock"}
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <AnimatedSection animation="fadeInUp" className="text-center py-12">
              <div className="text-muted-foreground">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
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
