import { Shield, Truck, Award, Headphones, CreditCard, Clock } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Secure Payment",
    description: "SSL encrypted checkout",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day shipping available",
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "Industry standard quality",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert help anytime",
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Clock,
    title: "Emergency Service",
    description: "Available 24/7",
  },
]

export function TrustBadges() {
  return (
    <section className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Why Choose Eriwa Plumbery?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <badge.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
            <p className="text-sm text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
