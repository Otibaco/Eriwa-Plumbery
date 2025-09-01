"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Edit, Trash2, Eye, Package } from "lucide-react"

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
    views: 1234,
    dateAdded: "2024-01-15",
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
    views: 987,
    dateAdded: "2024-01-10",
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
    views: 756,
    dateAdded: "2024-01-08",
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
    views: 543,
    dateAdded: "2024-01-05",
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
    views: 432,
    dateAdded: "2024-01-03",
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
    views: 1876,
    dateAdded: "2024-01-01",
  },
]

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fixtures", name: "Fixtures" },
    { id: "pipes", name: "Pipes & Fittings" },
    { id: "tools", name: "Tools" },
    { id: "water-heaters", name: "Water Heaters" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDeleteProduct = (productId) => {
    console.log("[v0] Delete product:", productId)
    alert("Product deletion would be implemented here")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your plumbing products and inventory</p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <AnimatedSection>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              <Package className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{products.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Stock</CardTitle>
              <Package className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{products.filter((p) => p.inStock).length}</div>
              <p className="text-xs text-muted-foreground">Available products</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Out of Stock</CardTitle>
              <Package className="h-5 w-5 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{products.filter((p) => !p.inStock).length}</div>
              <p className="text-xs text-muted-foreground">Need restocking</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              <Eye className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {products.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">All time views</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
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
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-foreground">{product.name}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">{product.description}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="capitalize">
                        {product.category.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">${product.price}</div>
                        {product.originalPrice > product.price && (
                          <div className="text-sm text-muted-foreground line-through">${product.originalPrice}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.inStock ? "default" : "destructive"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>{product.views.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href={`/products`} target="_blank">
                              <Eye className="mr-2 h-4 w-4" />
                              View Product
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/products/${product.id}/edit`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
