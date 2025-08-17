"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User, Clock, Eye, Search, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"

const blogPosts = [
  {
    id: 1,
    title: "5 Common Plumbing Problems in Nigerian Homes and How to Fix Them",
    excerpt:
      "Learn about the most frequent plumbing issues faced by homeowners in Nigeria and practical solutions you can try before calling a professional.",
    image: "/blog-common-problems.png",
    category: "DIY Tips",
    author: "Engr. Adebayo Ogundimu",
    date: "2025-01-10",
    readTime: "5 min read",
    views: 1250,
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "Choosing the Right Water Heater for Lagos Climate",
    excerpt:
      "A comprehensive guide to selecting the perfect water heater for your home considering Lagos' tropical climate and power supply challenges.",
    image: "/blog-water-heater-guide.png",
    category: "Buying Guide",
    author: "Fatima Abdullahi",
    date: "2025-01-08",
    readTime: "7 min read",
    views: 890,
    featured: false,
    trending: false,
  },
  // Add more blog posts...
]

const categories = [
  { id: "all", name: "All Posts", count: 45 },
  { id: "diy-tips", name: "DIY Tips", count: 15 },
  { id: "buying-guide", name: "Buying Guide", count: 8 },
  { id: "seasonal-tips", name: "Seasonal Tips", count: 6 },
  { id: "emergency", name: "Emergency", count: 12 },
  { id: "maintenance", name: "Maintenance", count: 4 },
]

const trendingTopics = [
  "Water heater installation",
  "Pipe burst prevention",
  "Bathroom renovation",
  "Drain cleaning tips",
  "Emergency plumbing",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plumbing Blog & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert advice, DIY tips, and industry insights to help you maintain your plumbing system and make informed
            decisions for your home.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-8">
                {/* Featured Post */}
                {filteredPosts.some((post) => post.featured) && (
                  <div className="mb-12">
                    {filteredPosts
                      .filter((post) => post.featured)
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                          <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-video md:aspect-auto">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute top-4 left-4 flex gap-2">
                                <Badge className="bg-yellow-500 text-black">Featured</Badge>
                                {post.trending && (
                                  <Badge className="bg-red-500">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="p-8 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-4 mb-4">
                                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                                    {post.category}
                                  </Badge>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(post.date)}
                                  </div>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 hover:text-green-600 transition-colors">
                                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {post.author}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    {post.views.toLocaleString()}
                                  </div>
                                </div>
                                <Button asChild>
                                  <Link href={`/blog/${post.id}`}>
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                )}

                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts
                    .filter((post) => !post.featured)
                    .map((post) => (
                      <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="p-0">
                          <div className="relative aspect-video overflow-hidden rounded-t-lg">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                {post.category}
                              </Badge>
                              {post.trending && (
                                <Badge className="bg-red-500">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Eye className="h-4 w-4" />
                              {post.views.toLocaleString()}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly plumbing tips and exclusive offers delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Trending Topics</h3>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded hover:bg-muted cursor-pointer transition-colors"
                    >
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories
                    .filter((cat) => cat.id !== "all")
                    .map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer transition-colors"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Professional Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our certified plumbers are ready to help with any plumbing issue.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Contact Us Today</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
