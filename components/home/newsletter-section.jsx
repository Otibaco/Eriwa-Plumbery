"use client"

import React, { useState } from "react"
import { Mail, Send, Gift, Bell, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Deals",
    description: "Get first access to sales and special promotions",
  },
  {
    icon: Bell,
    title: "Maintenance Reminders",
    description: "Never miss important plumbing maintenance schedules",
  },
  {
    icon: Zap,
    title: "Expert Tips",
    description: "Weekly DIY tips and professional advice",
  },
]

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email.")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Welcome to Eriwa Plumbery newsletter. Check your email for confirmation.")
    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-3xl p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with Nigeria's
            <span className="block text-yellow-300">Leading Plumbing Experts</span>
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Join over 25,000 homeowners and professionals who trust our weekly insights, exclusive deals, and expert
            plumbing advice.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-400 text-green-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-green-100">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-200 h-5 w-5" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:bg-white/20"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3"
            >
              {isLoading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe Now
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-green-200">
              🎁 <strong>Welcome Bonus:</strong> Get 10% off your first order + 100 loyalty points
            </p>
            <p className="text-xs text-green-300 mt-2">No spam, unsubscribe anytime. We respect your privacy.</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold">25K+</div>
              <div className="text-green-200">Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-green-200">Newsletter Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-green-200">Expert Tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
