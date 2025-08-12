"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Adebayo Ogundimu",
    location: "Victoria Island, Lagos",
    rating: 5,
    text: "Eriwa Plumbery saved my day! My bathroom was flooded at 2 AM and they came within 30 minutes. Professional service and fair pricing. Highly recommended!",
    service: "Emergency Repair",
    avatar: "/avatar-adebayo.png",
    verified: true,
  },
  {
    id: 2,
    name: "Fatima Abdullahi",
    location: "Wuse 2, Abuja",
    rating: 5,
    text: "I ordered a complete bathroom set and the quality exceeded my expectations. Free delivery to Abuja and professional installation. Will definitely shop again!",
    service: "Product Purchase",
    avatar: "/avatar-fatima.png",
    verified: true,
  },
  {
    id: 3,
    name: "Chinedu Okwu",
    location: "GRA, Port Harcourt",
    rating: 5,
    text: "Their water heater installation service was top-notch. The technician was knowledgeable and completed the job in 2 hours. Great customer service!",
    service: "Installation Service",
    avatar: "/avatar-chinedu.png",
    verified: true,
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    location: "Ikeja, Lagos",
    rating: 5,
    text: "Best plumbing supplies in Nigeria! I'm a contractor and I always order from Eriwa. Quality products, competitive prices, and reliable delivery.",
    service: "Bulk Purchase",
    // avatar: "/avatar-aisha.png",
    verified: true,
  },
  {
    id: 5,
    name: "Emeka Nwankwo",
    location: "Garki, Abuja",
    rating: 5,
    text: "Fixed my kitchen sink drain in 1 hour. The plumber was professional and explained everything clearly. Fair pricing and excellent work quality.",
    service: "Repair Service",
    // avatar: "/avatar-emeka.png",
    verified: true,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = () => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="bg-muted/50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied customers across Nigeria who trust Eriwa Plumbery for their plumbing needs.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-lg font-semibold">4.9/5</span>
          <span className="text-muted-foreground">from 2,500+ reviews</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-transparent"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-transparent"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Testimonial cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="mx-auto max-w-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed italic">"{testimonial.text}"</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                ✓ Verified
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          <p className="text-xs text-green-600 font-medium">{testimonial.service}</p>
                        </div>
                      </div>

                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-green-600" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">15,000+</div>
          <div className="text-sm text-muted-foreground">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">24/7</div>
          <div className="text-sm text-muted-foreground">Emergency Service</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-muted-foreground">Major Cities</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">4.9★</div>
          <div className="text-sm text-muted-foreground">Average Rating</div>
        </div>
      </div>
    </section>
  )
}
