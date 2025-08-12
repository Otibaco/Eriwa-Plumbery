"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const whatsappNumber = "+2348012345678"

  const quickMessages = [
    "I need emergency plumbing service",
    "What are your service charges?",
    "Do you deliver to my area?",
    "I want to book an installation",
  ]

  const sendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 z-50 shadow-2xl">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-sm">Eriwa Plumbery</CardTitle>
                  <p className="text-xs text-green-100">Usually replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-green-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg text-sm">
                <p className="font-medium">Hello! 👋</p>
                <p>How can we help you today? We're available 24/7 for emergency services!</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Quick messages:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => sendWhatsAppMessage(msg)}
                    className="block w-full text-left p-2 text-sm bg-muted hover:bg-green-100 rounded transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <Button
                onClick={() => {
                  if (message.trim()) {
                    sendWhatsAppMessage(message)
                    setMessage("")
                  }
                }}
                className="w-full whatsapp-green hover:bg-green-700"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* WhatsApp Float Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full whatsapp-green hover:bg-green-700 shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  )
}
