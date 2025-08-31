import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"

const stats = [
  { icon: Users, label: "Happy Customers", value: "1000+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Clock, label: "Projects Completed", value: "5000+" },
  { icon: Shield, label: "Warranty Years", value: "5" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Eriwa Plumbery</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner in professional plumbing services since 2009
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, Eriwa Plumbery began as a small family business with a simple mission: to provide
                  reliable, professional plumbing services to our community. What started with just two plumbers and a
                  van has grown into one of the region's most trusted plumbing companies.
                </p>
                <p>
                  Over the years, we've built our reputation on quality workmanship, honest pricing, and exceptional
                  customer service. We believe that every customer deserves the best, whether it's a simple repair or a
                  complex installation project.
                </p>
                <p>
                  Today, our team of certified professionals continues to uphold the values that founded our company:
                  integrity, excellence, and a commitment to getting the job done right the first time.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Teams.jpeg"
                alt="Eriwa Plumbery team"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">Numbers that speak for our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional plumbing services and products that exceed our customers' expectations while
                building lasting relationships based on trust, quality, and reliability. We strive to be the first
                choice for all plumbing needs in our community.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Integrity in every interaction and transaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Excellence in workmanship and customer service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Respect for our customers, team, and community</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Reliability and punctuality in all our services</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
