"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Cookie as Google, Facebook } from "lucide-react"

export function ReviewsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const platforms = [
    { id: "all", name: "All Reviews", rating: 4.6, icon: null },
    { id: "google", name: "Google", rating: 4.8, icon: Google },
    { id: "facebook", name: "Facebook", rating: 5.0, icon: Facebook },
    { id: "yelp", name: "Yelp", rating: 4.3, icon: null },
  ]

  const reviews = [
    {
      name: "Carl Braun",
      time: "2 years ago",
      rating: 5,
      text: "Friendly technician. Very thorough and he took the time to explain my options...",
      platform: "google",
      avatar: "CB",
    },
    {
      name: "Conrad Lewandowski",
      time: "2 years ago",
      rating: 5,
      text: "Excellent fast service at great price!",
      platform: "google",
      avatar: "C",
    },
    {
      name: "Steve O'Brien",
      time: "2 years ago",
      rating: 5,
      text: "Exceptional service!",
      platform: "google",
      avatar: "S",
    },
    {
      name: "Dylan Ramsey",
      time: "2 years ago",
      rating: 5,
      text: "My uncle invited these people out to BBQ and they came out and they...",
      platform: "google",
      avatar: "D",
    },
    {
      name: "Clark Wallace",
      time: "2 years ago",
      rating: 5,
      text: "Professional service and great communication throughout the process.",
      platform: "google",
      avatar: "C",
    },
    {
      name: "Judy S.",
      time: "January 20, 2023",
      rating: 5,
      text: "Quick response time and fixed the issue perfectly. Highly recommend!",
      platform: "google",
      avatar: "J",
    },
    {
      name: "John F.",
      time: "January 11, 2023",
      rating: 5,
      text: "Excellent workmanship and fair pricing. Will definitely use again.",
      platform: "google",
      avatar: "J",
    },
    {
      name: "Jim Littlejohn",
      time: "2 years ago",
      rating: 5,
      text: "Outstanding service from start to finish. Very professional team.",
      platform: "google",
      avatar: "J",
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8">Our Reviews</h2>

          {/* Platform Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === platform.id
                    ? "bg-white border-b-2 border-blue-600 shadow-sm"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {platform.icon && <platform.icon className="h-4 w-4" />}
                <span className="font-medium">{platform.name}</span>
                <span className="text-sm text-gray-600">{platform.rating}</span>
              </button>
            ))}
          </div>

          {/* Overall Rating */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Overall Rating</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold">4.6</span>
                    <div className="flex">{renderStars(5)}</div>
                    <span className="text-gray-600">(205)</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Write a review</Button>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.time}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">{renderStars(review.rating)}</div>

                    <p className="text-sm text-gray-700 mb-3">{review.text}</p>

                    {review.text.length > 50 && (
                      <button className="text-blue-600 text-sm hover:underline">Read more</button>
                    )}

                    <div className="flex items-center space-x-2 mt-3 pt-3 border-t">
                      <span className="text-xs text-gray-500">Posted on</span>
                      <Google className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600">Google</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
