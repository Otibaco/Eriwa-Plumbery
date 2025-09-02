"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { FileUpload } from "@/components/admin/file-upload"
import { ArrowLeft, Save, Trash2, Eye } from "lucide-react"
import Link from "next/link"

// Mock product data - in real app, this would come from API
const mockProduct = {
  id: 1,
  name: "Premium Kitchen Faucet",
  category: "fixtures",
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.8,
  reviews: 124,
  image: "/premium-kitchen-faucet-with-modern-design.png",
  description:
    "High-quality stainless steel kitchen faucet with pull-down sprayer and modern design perfect for any kitchen renovation.",
  features: ["Stainless Steel", "Pull-Down Sprayer", "Easy Installation", "10-Year Warranty"],
  inStock: true,
  views: 1234,
  dateAdded: "2024-01-15",
  specifications: {
    material: "Stainless Steel",
    finish: "Brushed Nickel",
    height: "15.5 inches",
    spoutReach: "8.5 inches",
    warranty: "10 years",
  },
}

export default function EditProductPage({ params }) {
  const router = useRouter()
  const [product, setProduct] = useState(mockProduct)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([product.image])

  const categories = [
    { id: "fixtures", name: "Fixtures" },
    { id: "pipes", name: "Pipes & Fittings" },
    { id: "tools", name: "Tools" },
    { id: "water-heaters", name: "Water Heaters" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Product updated:", product)
    setIsLoading(false)
    router.push("/admin/products")
  }

  const handleInputChange = (field, value) => {
    setProduct((prev) => ({ ...prev, [field]: value }))
  }

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...product.features]
    newFeatures[index] = value
    setProduct((prev) => ({ ...prev, features: newFeatures }))
  }

  const addFeature = () => {
    setProduct((prev) => ({ ...prev, features: [...prev.features, ""] }))
  }

  const removeFeature = (index) => {
    const newFeatures = product.features.filter((_, i) => i !== index)
    setProduct((prev) => ({ ...prev, features: newFeatures }))
  }

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild className="bg-transparent">
            <Link href="/admin/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Edit Product</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Update product information and settings</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
            <Link href="/products" target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading} className="w-full sm:w-auto">
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Product Information */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={product.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={product.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={product.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Enter product description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={product.price}
                        onChange={(e) => handleInputChange("price", Number.parseFloat(e.target.value))}
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="originalPrice">Original Price ($)</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        step="0.01"
                        value={product.originalPrice}
                        onChange={(e) => handleInputChange("originalPrice", Number.parseFloat(e.target.value))}
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        placeholder="Enter feature"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFeature(index)}
                        className="bg-transparent"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" onClick={addFeature} className="w-full bg-transparent">
                    Add Feature
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <FileUpload
                    onUpload={(files) => {
                      const newImages = files.map((file) => URL.createObjectURL(file))
                      setUploadedImages((prev) => [...prev, ...newImages])
                    }}
                    accept="image/*"
                    multiple
                  />
                  {uploadedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Product ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                            onClick={() => setUploadedImages((prev) => prev.filter((_, i) => i !== index))}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="inStock">In Stock</Label>
                    <Switch
                      id="inStock"
                      checked={product.inStock}
                      onCheckedChange={(checked) => handleInputChange("inStock", checked)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Current Status</Label>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "Available" : "Out of Stock"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle>Product Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Views</span>
                    <span className="font-medium">{product.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <span className="font-medium">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Date Added</span>
                    <span className="font-medium">{new Date(product.dateAdded).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </form>
    </div>
  )
}
