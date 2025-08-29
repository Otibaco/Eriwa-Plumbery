"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgroundplumbery.jpg"
                    alt="Professional plumbing workspace"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                        <Shield className="w-4 h-4" />
                        Trusted by 1000+ Customers
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
                        Professional{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Plumbing</span>{" "}
                        Solutions
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                        Expert services and premium products for all your plumbing needs. Quality workmanship with a satisfaction
                        guarantee.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                        >
                            Explore Products
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group bg-transparent"
                        >
                            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-fade-in animation-delay-600">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-gray-300">Emergency Service</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                                <Users className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold">1000+</div>
                            <div className="text-gray-300">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full mx-auto mb-4">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold">5 Year</div>
                            <div className="text-gray-300">Warranty</div>
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
