"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-primary">Eriwa Plumbery</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Professional plumbing services for residential and commercial properties. Licensed, insured, and available
              24/7 for emergencies.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/emergency"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Emergency Service
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services#repairs"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                href="/services#installations"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Installations
              </Link>
              <Link
                href="/services#maintenance"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                                Emergency Repairs

              </Link>
              <Link
                href="/services#drain-cleaning"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Drain Cleaning
              </Link>
              <Link
                href="/services#water-heaters"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Water Heaters
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(+234) 703 132 0510</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@eriwaplumbery.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>123 Plumber Street</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>24/7 Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eriwa Plumbery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
