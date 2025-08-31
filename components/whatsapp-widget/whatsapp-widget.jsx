"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Phone } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "+2349150462104" // Replace with actual WhatsApp business number
    const message = encodeURIComponent("Hi! I need help with plumbing services.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15551234567"
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble */}
      {isOpen && (
        <Card className="mb-4 w-80 shadow-xl animate-in slide-in-from-bottom-2">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Eriwa Plumbery</h4>
                  <p className="text-xs text-muted-foreground">Online now</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="p-1 h-auto" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">👋 Hi there! Need plumbing help? We're here to assist you 24/7.</p>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>

                <Button onClick={handleCallClick} variant="outline" className="w-full bg-transparent" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">Emergency service available 24/7</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* WhatsApp button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
