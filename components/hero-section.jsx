import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Professional Plumbing
                <span className="block text-yellow-400">Solutions & Tools</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                From emergency repairs to premium fixtures, we provide everything you need for your plumbing projects.
                Available 24/7 with expert installation services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Shop Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Book Service
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-sm text-blue-200">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/professional-plumber.png"
              alt="Professional plumbing tools and services"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">Free Consultation</div>
              <div className="text-2xl font-bold text-blue-600">$0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
