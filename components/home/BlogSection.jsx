"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "10 Signs You Need Emergency Plumbing Service",
      excerpt:
        "Learn to identify critical plumbing issues that require immediate professional attention to prevent costly damage.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 15, 2024",
      category: "Emergency Tips",
      slug: "emergency-plumbing-signs",
    },
    {
      title: "How to Choose the Right Water Heater for Your Home",
      excerpt:
        "Complete guide to selecting the perfect water heater based on your family size, budget, and energy preferences.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 12, 2024",
      category: "Installation Guide",
      slug: "choosing-water-heater",
    },
    {
      title: "Preventive Maintenance Tips for Your Plumbing System",
      excerpt: "Simple maintenance tasks you can do yourself to keep your plumbing system running smoothly year-round.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 10, 2024",
      category: "Maintenance",
      slug: "plumbing-maintenance-tips",
    },
    {
      title: "Understanding Different Types of Pipe Materials",
      excerpt:
        "Explore the pros and cons of various pipe materials to make informed decisions for your plumbing projects.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 8, 2024",
      category: "Education",
      slug: "pipe-materials-guide",
    },
    {
      title: "Common Toilet Problems and DIY Solutions",
      excerpt: "Learn how to troubleshoot and fix common toilet issues before calling a professional plumber.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 5, 2024",
      category: "DIY Tips",
      slug: "toilet-problems-solutions",
    },
    {
      title: "Energy-Efficient Plumbing Upgrades for 2024",
      excerpt:
        "Discover the latest eco-friendly plumbing technologies that can reduce your water bills and environmental impact.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Eriwa Team",
      date: "Dec 3, 2024",
      category: "Green Plumbing",
      slug: "energy-efficient-upgrades",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="fadeInLeft" className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Latest Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Plumbing Tips & Expert Advice</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Stay informed with our latest plumbing tips, maintenance guides, and industry insights to help you make
              better decisions for your home or business.
            </p>
            <Button asChild size="lg">
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Blog Section"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 6).map((post, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full hover:shadow-xl transition-shadow group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4">{post.category}</Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
