"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react"

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0)
    const heroRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden flex items-center justify-center"
            style={{ minHeight: "100vh" }}
        >
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                    backgroundImage: `url('/pipes.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    willChange: "transform",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
                        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                    >
                        <Shield className="w-4 h-4" />
                        Trusted by 1000+ Customers
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                    >
                        Professional{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Plumbing
                        </span>{" "}
                        Solutions
                    </h1>

                    {/* Subheading */}
                    <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                    >
                        Expert services and premium products for all your plumbing needs.
                        Quality workmanship with a satisfaction guarantee.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                    >
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
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12 sm:pt-16"
                        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                    >
                        {[
                            { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "24/7", desc: "Emergency Service" },
                            { icon: <Users className="w-6 h-6 text-blue-400" />, title: "1000+", desc: "Happy Customers" },
                            { icon: <Shield className="w-6 h-6 text-blue-400" />, title: "5 Year", desc: "Warranty" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold">{stat.title}</div>
                                <div className="text-gray-300 text-sm sm:text-base">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 border-2 border-white/30 rounded-full flex justify-center items-start">
                    <div className="w-1 h-2 sm:h-3 md:h-4 bg-white rounded-full mt-2 animate-pulse" />
                </div>
            </div> */}
        </section>
    )
}