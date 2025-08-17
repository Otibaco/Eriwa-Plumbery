"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart, Eye, ArrowUpDown } from "lucide-react"
import Image from "next/image"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"

const products = [
  {
    id: 1,
    name: "Professional Pipe Wrench Set - 3 Pieces",
    price: 25000,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 124,
    image: "/product-pipe-wrench.png",
    category: "tools",
    brand: "Stanley",
    inStock: true,
    discount: 29,
    loyaltyPoints: 250,
    featured: true,
  },
  {
    id: 2,
    name: "Premium Bathroom Faucet - Chrome Finish",
    price: 45000,
    originalPrice: 60000,
    rating: 4.9,
    reviews: 89,
    image: "/product-faucet.png",
    category: "bathroom",
    brand: "Kohler",
    inStock: true,
    discount: 25,
    loyaltyPoints: 450,
    featured: true,
  },
  // Add more products...
]

const categories = [
  { id: "all", name: "All Products", count: 1250 },
  { id: "pipes", name: "Pipes & Fittings", count: 450 },
  { id: "bathroom", name: "Bathroom Fixtures", count: 320 },
  { id: "tools", name: "Tools & Equipment", count: 280 },
  { id: "heaters", name: "Water Heaters", count: 120 },
  { id: "drains", name: "Drain Solutions", count: 80 },
]

const brands = ["Stanley", "Kohler", "American Standard", "Grohe", "Delta", "Moen"]
const priceRanges = [
  { label: "Under ₦10,000", min: 0, max: 10000 },
  { label: "₦10,000 - ₦25,000", min: 10000, max: 25000 },
  { label: "₦25,000 - ₦50,000", min: 25000, max: 50000 },
  { label: "₦50,000 - ₦100,000", min: 50000, max: 100000 },
  { label: "Over ₦100,000", min: 100000, max: Number.POSITIVE_INFINITY },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState({ min: null, max: null })
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover Nigeria's largest collection of quality plumbing supplies. From basic repairs to complete
            installations.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-64 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            {/* Categories */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-muted ${
                        selectedCategory === category.id ? "bg-green-100 dark:bg-green-900" : ""
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs text-muted-foreground">({category.count})</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${index}`}
                        checked={priceRange?.min === range.min && priceRange?.max === range.max}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setPriceRange({ min: range.min, max: range.max })
                          } else {
                            setPriceRange(null)
                          }
                        }}
                      />
                      <label htmlFor={`price-${index}`} className="text-sm cursor-pointer">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Brands */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedBrands([...selectedBrands, brand])
                          } else {
                            setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                          }
                        }}
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {products.length} of 1,250 products</p>
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Product Image */}
                      <div
                        className={`relative overflow-hidden rounded-t-lg ${
                          viewMode === "grid" ? "aspect-square" : "aspect-video md:aspect-square md:w-48"
                        }`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.featured && <Badge className="bg-yellow-500 text-black">Featured</Badge>}
                          {product.discount > 0 && <Badge variant="destructive">-{product.discount}%</Badge>}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>

                        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-bold text-green-600 naira-symbol">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-muted-foreground mb-4">
                          Earn {product.loyaltyPoints} loyalty points
                        </div>

                        <Button className="w-full" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>

                        {product.inStock && (
                          <p className="text-xs text-green-600 mt-2 text-center">✓ In Stock - Ships within 24hrs</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
