"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { FileUpload } from "@/components/admin/file-upload"
import { ArrowLeft, X, Plus } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function NewProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [features, setFeatures] = useState([])
  const [newFeature, setNewFeature] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    originalPrice: "",
    description: "",
    inStock: true,
  })

  const categories = [
    { value: "fixtures", label: "Fixtures" },
    { value: "pipes", label: "Pipes & Fittings" },
    { value: "tools", label: "Tools" },
    { value: "water-heaters", label: "Water Heaters" },
  ]

  const handleAddFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()])
      setNewFeature("")
    }
  }

  const handleRemoveFeature = (featureToRemove) => {
    setFeatures(features.filter((feature) => feature !== featureToRemove))
  }

  const handleFileUpload = (files) => {
    console.log("[v0] Files uploaded:", files)
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    console.log("[v0] Creating product:", {
      ...formData,
      features,
      files: uploadedFiles.map((f) => ({ name: f.name, size: f.size, type: f.type })),
    })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast("Product created successfully!")
    router.push("/admin/products")
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Add New Product</h1>
          <p className="text-muted-foreground">Create a new product for your plumbing catalog</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="inStock"
                  checked={formData.inStock}
                  onCheckedChange={(checked) => setFormData({ ...formData, inStock: checked })}
                />
                <Label htmlFor="inStock">In Stock</Label>
              </div>
            </CardContent>
          </Card>

          {/* Media & Features */}
          <Card>
            <CardHeader>
              <CardTitle>Media & Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Product Images & Videos</Label>
                <FileUpload
                  onFileUpload={handleFileUpload}
                  maxFiles={5}
                  maxSize={10}
                  acceptedTypes={["image/*", "video/*"]}
                />
              </div>

              {/* Features */}
              <div className="space-y-2">
                <Label>Product Features</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a feature"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddFeature())}
                  />
                  <Button type="button" onClick={handleAddFeature} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {feature}
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(feature)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/products">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Product"}
          </Button>
        </div>
      </form>
    </div>
  )
}
