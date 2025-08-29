"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import { productCategories } from "@/lib/product"


export function ProductFilters({
    searchQuery,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    sortBy,
    onSortChange,
}) {
    return (
        <div className="bg-muted/30 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search products..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        {/* Category Filter */}
                        <Select value={selectedCategory} onValueChange={onCategoryChange}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {productCategories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Sort */}
                        <Select value={sortBy} onValueChange={onSortChange}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name A-Z</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                                <SelectItem value="rating">Highest Rated</SelectItem>
                                <SelectItem value="newest">Newest First</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                            <SlidersHorizontal className="w-4 h-4" />
                            More Filters
                        </Button>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {productCategories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => onCategoryChange(category)}
                            className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent"}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
