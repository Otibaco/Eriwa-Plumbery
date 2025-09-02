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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Search, Plus, MoreHorizontal, Edit, Trash2, Eye, Package, Download } from "lucide-react"

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
  const [productList, setProductList] = useState(products)
  const [deleteProductId, setDeleteProductId] = useState(null)

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fixtures", name: "Fixtures" },
    { id: "pipes", name: "Pipes & Fittings" },
    { id: "tools", name: "Tools" },
    { id: "water-heaters", name: "Water Heaters" },
  ]

  const filteredProducts = productList.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDeleteProduct = (productId) => {
    setProductList((prev) => prev.filter((product) => product.id !== productId))
    setDeleteProductId(null)
    console.log("[v0] Product deleted:", productId)
  }

  const handleExportProducts = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "ID,Name,Category,Price,Stock,Views,Rating\n" +
      productList
        .map(
          (p) =>
            `${p.id},"${p.name}",${p.category},${p.price},${p.inStock ? "In Stock" : "Out of Stock"},${p.views},${p.rating}`,
        )
        .join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "products.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Products Management</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your plumbing products, inventory, and pricing
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Button variant="outline" onClick={handleExportProducts} className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/admin/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
        <AnimatedSection>
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-foreground">{productList.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">In Stock</CardTitle>
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-foreground">
                {productList.filter((p) => p.inStock).length}
              </div>
              <p className="text-xs text-muted-foreground">Available now</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Out of Stock</CardTitle>
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-foreground">
                {productList.filter((p) => !p.inStock).length}
              </div>
              <p className="text-xs text-muted-foreground">Need restocking</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-foreground">
                {productList.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">All time views</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
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
                  className="text-xs sm:text-sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">Product</TableHead>
                  <TableHead className="min-w-[100px]">Category</TableHead>
                  <TableHead className="min-w-[80px]">Price</TableHead>
                  <TableHead className="min-w-[80px]">Stock</TableHead>
                  <TableHead className="min-w-[80px] hidden sm:table-cell">Views</TableHead>
                  <TableHead className="min-w-[80px] hidden md:table-cell">Rating</TableHead>
                  <TableHead className="text-right min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-foreground text-sm sm:text-base truncate">
                            {product.name}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="capitalize text-xs">
                        {product.category.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground text-sm">${product.price}</div>
                        {product.originalPrice > product.price && (
                          <div className="text-xs text-muted-foreground line-through">${product.originalPrice}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm">{product.views.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-sm">{product.rating}</span>
                        <span className="text-muted-foreground text-xs">({product.reviews})</span>
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
                              Edit Product
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => setDeleteProductId(product.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Product
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

      <AlertDialog open={deleteProductId !== null} onOpenChange={() => setDeleteProductId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this product? This action cannot be undone and will permanently remove the
              product from your catalog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteProductId && handleDeleteProduct(deleteProductId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Product
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
