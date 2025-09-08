"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCarousel } from "@/components/products/ProductCarousel"
import { RelatedProductsSlider } from "@/components/products/RelatedProductsSlider"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import {
    Star,
    Heart,
    Share2,
    MessageCircle,
    Mail,
    Truck,
    Shield,
    Award,
    ChevronRight,
    Home,
    Wrench,
    CheckCircle,
    Clock,
    Users,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// ✅ Utility to safely convert string price ("479,984") to number (479984)
const parsePrice = (value) => {
    if (!value) return 0
    return Number(String(value).replace(/,/g, ""))
}

// Mock product data - replace with API call later
const getProductById = (id) => {
    const products = [
        {
            id: 1,
            name: "Premium Kitchen Faucet with Pull-Down Sprayer",
            category: "fixtures",
            price: "479,984",
            originalPrice: "639,984",
            rating: 4.8,
            reviews: 124,
            images: [
                "/Premium Kitchen Faucet.jpg",
                "/Premium Kitchen Faucet.jpg",
                "/Premium Kitchen Faucet.jpg",
                "/Premium Kitchen Faucet.jpg",
            ],
            shortDescription:
                "High-quality stainless steel kitchen faucet with pull-down sprayer and ceramic disc valves for long-lasting performance.",
            longDescription:
                "Transform your kitchen with this premium stainless steel faucet featuring a convenient pull-down sprayer. The ceramic disc valve technology ensures drip-free operation for years to come. The high-arc spout provides ample clearance for large pots and pans, while the single-handle design offers easy temperature and flow control.",
            features: [
                "304 Stainless Steel Construction",
                "Pull-Down Sprayer with 2 Functions",
                "Ceramic Disc Valve Technology",
                "Easy Installation with Deck Plate",
                "10-Year Limited Warranty",
                "Lead-Free Certified",
                "Single Handle Operation",
                "High-Arc Spout Design",
            ],
            specifications: {
                Material: "304 Stainless Steel",
                Finish: "Brushed Stainless Steel",
                "Installation Type": "Single Hole",
                "Spout Height": "15.75 inches",
                "Spout Reach": "8.5 inches",
                "Flow Rate": "1.8 GPM",
                "Valve Type": "Ceramic Disc",
                Warranty: "10 Years",
            },
            inStock: true,
            stockCount: 15,
            relatedIds: [2, 3, 4, 5],
        },
        {
            id: 2,
            name: "Tankless Water Heater - Energy Efficient",
            category: "water-heaters",
            price: "2,079,984",
            originalPrice: "2,399,984",
            rating: 4.9,
            reviews: 89,
            images: [
                "/Tankless Water Heater.jpg",
                "/fix1.jpg",
                "/shower1.jpg",
                "/Tankless Water Heater.jpg",
            ],
            shortDescription:
                "Energy-efficient tankless water heater providing endless hot water on demand with digital temperature control.",
            longDescription:
                "Experience unlimited hot water with this high-efficiency tankless water heater. Features advanced condensing technology for maximum energy savings and precise digital temperature control. Compact wall-mounted design saves valuable space while delivering consistent hot water throughout your home.",
            features: [
                "Endless Hot Water Supply",
                "Energy Efficient Design",
                "Digital Temperature Display",
                "Compact Wall-Mount Installation",
                "Self-Diagnostic System",
                "Freeze Protection",
                "Remote Control Compatible",
                "15-Year Heat Exchanger Warranty",
            ],
            specifications: {
                Type: "Condensing Tankless",
                "Fuel Type": "Natural Gas",
                "Flow Rate": "11.1 GPM",
                "Energy Factor": "0.96",
                "Temperature Range": "98°F - 140°F",
                Dimensions: '26.6" H x 18.5" W x 10" D',
                Weight: "66.1 lbs",
                Warranty: "15 Years Heat Exchanger",
            },
            inStock: true,
            stockCount: 8,
            relatedIds: [1, 3, 4, 6],
        },
    ]

    return products.find((p) => p.id === Number.parseInt(id)) || products[0]
}

const getRelatedProducts = (relatedIds) => {
    const allProducts = [
        {
            id: 3,
            name: "Professional Pipe Wrench Set",
            price: "143,984",
            originalPrice: "191,984",
            rating: 4.7,
            reviews: 203,
            image: "/shower1.jpg",
            description: "Complete set of professional-grade pipe wrenches for all plumbing needs.",
            inStock: true,
        },
        {
            id: 4,
            name: "Copper Pipe Fittings Kit",
            price: "73,584",
            originalPrice: "95,984",
            rating: 4.6,
            reviews: 156,
            image: "/shower2.jpg",
            description: "Comprehensive kit of copper pipe fittings and connectors.",
            inStock: true,
        },
        {
            id: 5,
            name: "Modern Bathroom Sink",
            price: "319,984",
            originalPrice: "399,984",
            rating: 4.8,
            reviews: 92,
            image: "/shower3.jpg",
            description: "Elegant ceramic bathroom sink with contemporary design.",
            inStock: false,
        },
        {
            id: 6,
            name: "High-Pressure Shower Head",
            price: "127,984",
            originalPrice: "159,984",
            rating: 4.9,
            reviews: 267,
            image: "/High-Pressure Shower Head.jpg",
            description: "High-pressure shower head with multiple spray settings.",
            inStock: true,
        },
    ] 

    return allProducts.filter((p) => relatedIds?.includes(p.id)) || allProducts.slice(0, 4)
}

export default function ProductPage() {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [selectedTab, setSelectedTab] = useState("description")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call
        const fetchProduct = async () => {
            setLoading(true)
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 500))

            const productData = getProductById(params.id)
            const related = getRelatedProducts(productData.relatedIds)

            setProduct(productData)
            setRelatedProducts(related)
            setLoading(false)
        }

        fetchProduct()
    }, [params.id])

    const handleWhatsAppInquiry = () => {
        const message = `Hi! I'm interested in the ${product.name} (₦${product.price}). Can you provide more information?`
        const whatsappUrl = `https://wa.me/2349169307673?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    const handleEmailInquiry = () => {
        const subject = `Inquiry about ${product.name}`
        const body = `Hi,\n\nI'm interested in the ${product.name} priced at ₦${product.price}.\n\nCould you please provide more information about:\n- Availability\n- Installation services\n- Warranty details\n\nThank you!`
        const mailtoUrl = `mailto:sales@plumbingpro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoUrl
    }

    const discount =
        product?.originalPrice && parsePrice(product.originalPrice) > parsePrice(product.price)
            ? Math.round(((parsePrice(product.originalPrice) - parsePrice(product.price)) / parsePrice(product.originalPrice)) * 100)
            : 0

    if (loading) {
        return (
            <main className="min-h-screen">
                <Navigation />
                <div className="container mx-auto px-4 py-8">
                    <div className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-1/3 mb-8"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="aspect-square bg-muted rounded-lg"></div>
                            <div className="space-y-4">
                                <div className="h-8 bg-muted rounded w-3/4"></div>
                                <div className="h-6 bg-muted rounded w-1/2"></div>
                                <div className="h-4 bg-muted rounded w-full"></div>
                                <div className="h-4 bg-muted rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    if (!product) {
        return (
            <main className="min-h-screen">
                <Navigation />
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
                    <Link href="/products">
                        <Button>Back to Products</Button>
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen flex flex-col">
            {/* ✅ Navigation always sticky on top for mobile */}
            <Navigation />

            {/* Breadcrumb */}
            <div className="border-b bg-muted/30">
                <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-4">
                    <nav
                        className="flex flex-row items-center text-xs sm:text-sm text-muted-foreground 
                 overflow-x-auto scrollbar-hide whitespace-nowrap gap-1 sm:gap-2"
                    >
                        {/* Home Icon */}
                        <Link
                            href="/"
                            className="hover:text-foreground transition-colors flex items-center flex-shrink-0"
                        >
                            <Home className="w-4 h-4" />
                        </Link>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />

                        {/* Products Link */}
                        <Link
                            href="/products"
                            className="hover:text-foreground transition-colors flex items-center flex-shrink-0"
                        >
                            Products
                        </Link>

                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />

                        {/* Product Name */}
                        <span
                            className="text-foreground font-medium flex items-center truncate max-w-[160px] sm:max-w-xs"
                        >
                            {product.name}
                        </span>
                    </nav>
                </div>
            </div>




            {/* ✅ Product Details */}
            <section className="py-6 sm:py-8">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                        {/* Product Images */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <ProductCarousel images={product.images} productName={product.name} />
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-5 sm:space-y-6"
                        >
                            {/* Title & Like/Share */}
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                                        {product.name}
                                    </h1>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsLiked(!isLiked)}
                                            className="p-2 rounded-full hover:bg-muted transition-colors"
                                        >
                                            <Heart
                                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"
                                                    }`}
                                            />
                                        </button>
                                        <Button variant="outline" size="icon" className="p-2 sm:p-3">
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Rating & Stock */}
                                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(product.rating)
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium">{product.rating}</span>
                                        <span className="text-xs sm:text-sm text-muted-foreground">
                                            ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {product.inStock ? (
                                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs sm:text-sm">
                                            <CheckCircle className="w-3 h-3 mr-1" />
                                            In Stock ({product.stockCount})
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs sm:text-sm">
                                            <Clock className="w-3 h-3 mr-1" />
                                            Out of Stock
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Price & Short Desc */}
                            <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                                    <span className="text-2xl sm:text-3xl font-bold text-primary">
                                        ₦{product.price}
                                    </span>
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <>
                                            <span className="text-lg sm:text-xl text-muted-foreground line-through">
                                                ₦{product.originalPrice}
                                            </span>
                                            <Badge className="bg-destructive text-white text-xs sm:text-sm">
                                                Save {discount}%
                                            </Badge>
                                        </>
                                    )}
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    {product.shortDescription}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="font-semibold mb-2 sm:mb-3">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {product.features.slice(0, 6).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-3 sm:gap-4 py-3 sm:py-4 border-y">
                                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Truck className="w-4 h-4" /> <span>Free Shipping</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Shield className="w-4 h-4" /> <span>Warranty</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Award className="w-4 h-4" /> <span>Pro Grade</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Users className="w-4 h-4" /> <span>Support</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <Button
                                        size="lg"
                                        className="w-full bg-green-500 hover:bg-green-600"
                                        disabled={!product.inStock}
                                        onClick={handleWhatsAppInquiry}
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Inquiry
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="w-full"
                                        onClick={handleEmailInquiry}
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email Inquiry
                                    </Button>
                                </div>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full"
                                    disabled={!product.inStock}
                                >
                                    <Wrench className="w-5 h-5 mr-2" />
                                    Request Installation
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ✅ Tabs Section */}
            <section className="py-6 sm:py-8 bg-muted/30">
                <div className="container mx-auto px-3 sm:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm">
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
                            </TabsList>

                            {/* Description */}
                            <TabsContent value="description" className="mt-4 sm:mt-6">
                                <Card>
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="prose max-w-none">
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                                {product.longDescription}
                                            </p>
                                            <h4 className="font-semibold mb-3 sm:mb-4">Complete Feature List</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                                                {product.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Specifications */}
                            <TabsContent value="specifications" className="mt-4 sm:mt-6">
                                <Card>
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="flex justify-between py-2 border-b border-muted text-sm"
                                                >
                                                    <span className="font-medium">{key}</span>
                                                    <span className="text-muted-foreground">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Reviews */}
                            <TabsContent value="reviews" className="mt-4 sm:mt-6">
                                <Card>
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-muted-foreground mb-3" />
                                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                            Customer Reviews
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            Reviews feature coming soon. This product has {product.reviews} reviews with
                                            an average rating of {product.rating} stars.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </motion.div>
                </div>
            </section>

            {/* ✅ Related Products */}
            <section className="py-8 sm:py-12">
                <div className="container mx-auto px-3 sm:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <RelatedProductsSlider products={relatedProducts} />
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppWidget />
        </main>

    )
}
