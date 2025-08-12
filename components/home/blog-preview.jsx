"use client"

import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

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
  },
  {
    id: 3,
    title: "Preventing Pipe Bursts During Harmattan Season",
    excerpt:
      "Essential tips to protect your plumbing system during Nigeria's dry season and avoid costly emergency repairs.",
    image: "/blog-harmattan-tips.png",
    category: "Seasonal Tips",
    author: "Chinedu Okwu",
    date: "2025-01-05",
    readTime: "4 min read",
    views: 650,
    featured: false,
  },
]

const categories = [
  { name: "DIY Tips", count: 15, color: "bg-blue-100 text-blue-700" },
  { name: "Buying Guide", count: 8, color: "bg-green-100 text-green-700" },
  { name: "Seasonal Tips", count: 6, color: "bg-orange-100 text-orange-700" },
  { name: "Emergency", count: 12, color: "bg-red-100 text-red-700" },
]

export function BlogPreview() {
  const formatDate = () => {
    return new Date().toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Plumbing Tips & Guides</h2>
          <p className="text-muted-foreground max-w-2xl">
            Expert advice, DIY tips, and industry insights to help you maintain your plumbing system and make informed
            decisions.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/blog">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        <span className="text-sm font-medium text-muted-foreground">Browse by category:</span>
        {categories.map((category) => (
          <Badge
            key={category.name}
            variant="secondary"
            className={`${category.color} cursor-pointer hover:opacity-80`}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">Featured</Badge>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {blogPosts[0].category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(blogPosts[0].date)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 hover:text-green-600 transition-colors">
                  <Link href={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</Link>
                </h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {blogPosts[0].views.toLocaleString()}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge
                  variant="secondary"
                  className={`absolute top-4 left-4 ${
                    post.category === "Buying Guide" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {post.category}
                </Badge>
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

      {/* Newsletter CTA */}
      <div className="bg-green-600 text-white rounded-2xl p-8 mt-12 text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Updated with Plumbing Tips</h3>
        <p className="mb-6 opacity-90">
          Get weekly plumbing tips, maintenance guides, and exclusive offers delivered to your inbox.
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
          Subscribe to Newsletter
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
