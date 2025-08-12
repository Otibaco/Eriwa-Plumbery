"use client"

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const quickLinks = [
  { name: "All Products", href: "/products" },
  { name: "Emergency Service", href: "/emergency" },
  { name: "Service Booking", href: "/services" },
  { name: "Track Order", href: "/track-order" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const customerService = [
  { name: "Help Center", href: "/help" },
  { name: "Returns & Exchanges", href: "/returns" },
  { name: "Shipping Info", href: "/shipping" },
  { name: "Warranty", href: "/warranty" },
  { name: "Installation Guide", href: "/installation" },
  { name: "FAQ", href: "/faq" },
]

const productCategories = [
  { name: "Pipes & Fittings", href: "/category/pipes" },
  { name: "Bathroom Fixtures", href: "/category/bathroom" },
  { name: "Water Heaters", href: "/category/heaters" },
  { name: "Tools & Equipment", href: "/category/tools" },
  { name: "Drain Solutions", href: "/category/drains" },
  { name: "Emergency Kits", href: "/category/emergency" },
]

const serviceAreas = [
  "Lagos (Victoria Island, Ikoyi, Lekki, Ikeja)",
  "Abuja (Wuse, Garki, Asokoro, Maitama)",
  "Port Harcourt (GRA, Old GRA, D-Line)",
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 text-white p-3 rounded-lg">
                <span className="font-bold text-2xl">EP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Eriwa Plumbery</h3>
                <p className="text-sm text-gray-400">Nigeria's Trusted Plumbers</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all plumbing needs across Nigeria. We provide quality products, expert services,
              and 24/7 emergency support to keep your water flowing smoothly.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                <Truck className="h-4 w-4 text-green-400" />
                <span className="text-sm">Free Delivery</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-green-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-green-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-green-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-green-600">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="text-gray-400 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Contact & Service Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">Emergency Hotline</div>
                  <a href="tel:+2348012345678" className="hover:text-green-400 transition-colors">
                    +234-801-PLUMBER
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">Email Support</div>
                  <a href="mailto:info@eriwaplumbery.ng" className="hover:text-green-400 transition-colors">
                    info@eriwaplumbery.ng
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <div className="font-medium text-white">Head Office</div>
                  <div>123 Plumbing Street, Victoria Island</div>
                  <div>Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <div className="space-y-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-gray-400">
                  <div className="font-medium text-white">{area.split(" (")[0]}</div>
                  <div className="text-sm">{area.split(" (")[1]?.replace(")", "")}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Don't see your area?</p>
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
              >
                Request Service Area
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Newsletter Signup */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Get plumbing tips, exclusive deals, and maintenance reminders delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Eriwa Plumbery. All rights reserved. | Licensed Plumbing Contractor
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
