"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react"
import Image from "next/image"

// Use 100vh with min-h-screen fallback for full viewport height
export function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    // Parallax background movement
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <section
            ref={ref}
            className="relative flex items-center justify-center overflow-hidden"
            style={{
                minHeight: "132vh",
                height: "132vh",
                maxHeight: "132svh", // For mobile browsers supporting small viewport units
            }}
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <Image
                    src="/pipes.jpg"
                    alt="Professional plumbing workspace"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-center h-full">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-xs sm:text-sm font-medium animate-fade-in">
                        <Shield className="w-4 h-4" />
                        Trusted by 1000+ Customers
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
                        Professional{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Plumbing
                        </span>{" "}
                        Solutions
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                        Expert services and premium products for all your plumbing needs. Quality workmanship with a satisfaction
                        guarantee.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                        >
                            Explore Products
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group bg-transparent"
                        >
                            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="w-full flex flex-col items-center pt-12 sm:pt-16 animate-fade-in animation-delay-600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
                            <div className="flex flex-col items-center bg-blue-600/10 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-center w-14 h-14 bg-blue-600/20 backdrop-blur-sm rounded-full mb-4">
                                    <Zap className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold mb-1">24/7</div>
                                <div className="text-gray-400 text-sm sm:text-base text-center">Emergency Service</div>
                            </div>
                            <div className="flex flex-col items-center bg-blue-600/10 rounded-xl p-6 shadow-sm mt-4 sm:mt-0">
                                <div className="flex items-center justify-center w-14 h-14 bg-blue-600/20 backdrop-blur-sm rounded-full mb-4">
                                    <Users className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold mb-1">1000+</div>
                                <div className="text-gray-400 text-sm sm:text-base text-center">Happy Customers</div>
                            </div>
                            <div className="flex flex-col items-center bg-blue-600/10 rounded-xl p-6 shadow-sm mt-4 md:mt-0">
                                <div className="flex items-center justify-center w-14 h-14 bg-blue-600/20 backdrop-blur-sm rounded-full mb-4">
                                    <Shield className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold mb-1">5 Year</div>
                                <div className="text-gray-400 text-sm sm:text-base text-center">Warranty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    )
}