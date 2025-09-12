"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Calendar, User, Search, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentDateTime, setCurrentDateTime] = useState("")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const updateTime = () => {
            // Format consistently (yyyy-mm-dd hh:mm) to avoid hydration mismatch
            const now = new Date()
            const formatted = `${now.getFullYear()}-${String(
                now.getMonth() + 1
            ).padStart(2, "0")}-${String(now.getDate()).padStart(
                2,
                "0"
            )} ${String(now.getHours()).padStart(2, "0")}:${String(
                now.getMinutes()
            ).padStart(2, "0")}`
            setCurrentDateTime(formatted)
        }

        updateTime()
        const timer = setInterval(updateTime, 60000)
        return () => clearInterval(timer)
    }, [])

    const categories = [
        "All",
        "Emergency Tips",
        "Installation Guide",
        "Maintenance",
        "Education",
        "DIY Tips",
        "Green Plumbing",
        "Water Heater",
        "Drain Cleaning",
        "Leak Detection",
    ]

    const blogPosts = [
        {
            title: "Stylish Faucet and Sink Upgrades for Contemporary Kitchens",
            excerpt:
                "When it comes to updating faucets and sinks, the opportunity to add flair without a full renovation is as refreshing as a blast of cold water on a summer afternoon.",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Faucet%20section1.JPG-eMyoiOFB52nAfcQ3ddGoLt6Slk2Sto.jpeg",
            author: "Jimmy Joe's Team",
            date: "Sep 1, 2025",
            publishedAt: new Date("2025-09-01T10:30:00"),
            category: "Installation Guide",
            slug: "stylish-faucet-sink-upgrades",
            readTime: "6 min read",
            views: 1247,
            featured: true,
        },
        {
            title: "Effective Solutions for Clogged Drains in Residential Spaces",
            excerpt:
                "Whether it's a slow-draining sink or a full-blown backup, resolving drainage issues requires more than plungers and crossed fingers.",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog%20section.JPG-doQ4IXv7hAz4jQcggvUwOuOpkEAMK8.jpeg",
            author: "Jimmy Joe's Team",
            date: "Aug 15, 2025",
            publishedAt: new Date("2025-08-15T14:20:00"),
            category: "Maintenance",
            slug: "effective-clogged-drain-solutions",
            readTime: "8 min read",
            views: 892,
            featured: true,
        },
        {
            title: "Don't Panic: Steps to Take During a Gas Leak at Home",
            excerpt:
                "Staying calm, acting efficiently, and relying on professional gas leak repair services turn a hazardous moment into a manageable one.",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog%20section.JPG-doQ4IXv7hAz4jQcggvUwOuOpkEAMK8.jpeg",
            author: "Safety Expert",
            date: "Aug 1, 2025",
            publishedAt: new Date("2025-08-01T09:15:00"),
            category: "Emergency Tips",
            slug: "gas-leak-emergency-steps",
            readTime: "5 min read",
            views: 2156,
            featured: false,
        },
        {
            title: "How to Detect Slab Leaks Before They Wreak Havoc",
            excerpt:
                "Slab leaks develop quietly beneath the surface, causing damage before most homeowners even realize there's a problem.",
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog%20section.JPG-doQ4IXv7hAz4jQcggvUwOuOpkEAMK8.jpeg",
            author: "Leak Detection Specialist",
            date: "Jul 1, 2025",
            publishedAt: new Date("2025-07-01T16:45:00"),
            category: "Leak Detection",
            slug: "detect-slab-leaks-early",
            readTime: "7 min read",
            views: 1534,
            featured: false,
        },
        {
            title: "10 Signs You Need Emergency Plumbing Service",
            excerpt:
                "Learn to identify critical plumbing issues that require immediate professional attention to prevent costly damage to your property.",
            image: "/emergency-plumbing-tools.jpg",
            author: "Emergency Response Team",
            date: "Dec 15, 2024",
            publishedAt: new Date("2024-12-15T11:30:00"),
            category: "Emergency Tips",
            slug: "emergency-plumbing-signs",
            readTime: "5 min read",
            views: 3421,
            featured: false,
        },
        {
            title: "How to Choose the Right Water Heater for Your Home",
            excerpt:
                "Complete comprehensive guide to selecting the perfect water heater based on your family size, budget, and energy preferences.",
            image: "/water-heater-installation.png",
            author: "Installation Expert",
            date: "Dec 12, 2024",
            publishedAt: new Date("2024-12-12T13:20:00"),
            category: "Water Heater",
            slug: "choosing-water-heater",
            readTime: "8 min read",
            views: 2876,
            featured: false,
        },
        {
            title: "Preventive Maintenance Tips for Your Plumbing System",
            excerpt:
                "Simple maintenance tasks you can do yourself to keep your plumbing system running smoothly throughout the year.",
            image: "/plumbing-maintenance-tools.jpg",
            author: "Maintenance Specialist",
            date: "Dec 10, 2024",
            publishedAt: new Date("2024-12-10T08:45:00"),
            category: "Maintenance",
            slug: "plumbing-maintenance-tips",
            readTime: "6 min read",
            views: 1987,
            featured: false,
        },
        {
            title: "Understanding Your Home's Water Pressure Issues",
            excerpt:
                "Low water pressure can be frustrating. Learn about common causes and solutions to restore optimal water flow throughout your home.",
            image: "/water-pressure-gauge.jpg",
            author: "Diagnostic Expert",
            date: "Dec 8, 2024",
            publishedAt: new Date("2024-12-08T15:10:00"),
            category: "DIY Tips",
            slug: "water-pressure-issues",
            readTime: "4 min read",
            views: 1654,
            featured: false,
        },
    ]

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory =
            selectedCategory === "All" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getRelativeTime = (date) => {
        const now = new Date()
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

        if (diffInHours < 1) return "Just now"
        if (diffInHours < 24) return `${diffInHours}h ago`

        const diffInDays = Math.floor(diffInHours / 24)
        if (diffInDays < 7) return `${diffInDays}d ago`

        const diffInWeeks = Math.floor(diffInDays / 7)
        if (diffInWeeks < 4) return `${diffInWeeks}w ago`

        // consistent server/client format
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
            2,
            "0"
        )}-${String(date.getDate()).padStart(2, "0")}`
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <Badge
                            variant="outline"
                            className="mb-4 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                        >
                            Jimmy Joe&apos;s Plumbing - Mesa, AZ Blog
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-orange-500">Jimmy Joe&apos;s Plumbing</span>{" "}
                            -{" "}
                            <span className="text-blue-600 dark:text-blue-400">
                                Mesa, AZ Blog
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                            We keep a blog updated with helpful info for our Mesa, AZ home
                            owners.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            {mounted && currentDateTime && (
                                <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>Last updated: {currentDateTime}</span>
                                </div>
                            )}
                            <div className="flex items-center space-x-1">
                                <span>•</span>
                                <span>{filteredPosts.length} articles</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Search + Filter */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                        <div className="relative flex-1 max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 border-blue-200 focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-400"
                            />
                        </div>

                        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={
                                        selectedCategory === category ? "default" : "outline"
                                    }
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={
                                        selectedCategory === category
                                            ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                            : "border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                                    }
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                                    <Card className="h-full hover:shadow-xl transition-shadow group">
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <Image
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    width={500}
                                                    height={300}
                                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <Badge className="absolute top-4 left-4 bg-orange-500">
                                                    {post.category}
                                                </Badge>
                                                <Badge
                                                    variant="secondary"
                                                    className="absolute top-4 right-4 text-xs"
                                                >
                                                    {getRelativeTime(post.publishedAt)}
                                                </Badge>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground mb-4 gap-2">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <User className="w-4 h-4" />
                                                            <span>{post.author}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{post.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs">{post.readTime}</span>
                                                        <span className="text-xs">• {post.views} views</span>
                                                    </div>
                                                </div>

                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                                                >
                                                    <Link href={`/blog/${post.slug}`}>
                                                        Read Full Article
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

            <Footer />
            <WhatsAppWidget />
        </div>
    )
}
