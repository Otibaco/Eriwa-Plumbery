"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import {
  Users,
  Award,
  Clock,
  ShieldCheck,
  Wrench,
  Phone,
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Emergency Service", icon: ShieldCheck },
    { number: "100%", label: "Satisfaction Rate", icon: Award },
  ]

  const team = [
    {
      name: "Ifeoma Nwankwo",
      role: "Master Plumber & Owner",
      experience: "15+ years",
      image: "/sewa-owoeye.jpg",
      description: "Licensed master plumber with expertise in residential and commercial plumbing systems.",
    },
    {
      name: "micheal ogungbe",
      role: "Senior Plumber",
      experience: "10+ years",
      image: "/micheal-ogungbe.jpg",
      description: "Specialist in water heater installation and emergency repairs with excellent customer service.",
    },
    {
      name: "Folake Ogunleye",
      role: "Installation Specialist",
      experience: "8+ years",
      image: "/itoro-bernard.jpg",
      description: "Expert in bathroom and kitchen renovations with focus on modern plumbing solutions.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on quality. Every job is completed to the highest standards with premium materials and expert craftsmanship.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "Your satisfaction is our priority. We treat every customer like family and ensure complete satisfaction with our services.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay updated with the latest plumbing technologies and techniques to provide the most efficient solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description:
        "Count on us for dependable service. We arrive on time, work efficiently, and stand behind our work with comprehensive warranties.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fadeInLeft">
              <Badge
                variant="secondary"
                className="mb-4 bg-white/20 text-white border-white/30 text-sm sm:text-base"
              >
                About Eriwa Plumbery
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Trusted Plumbing Experts Since 2009
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8">
                We're a family-owned plumbing business dedicated to providing
                exceptional service, quality workmanship, and reliable solutions for
                all your plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (+234) 703 132 0510
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Image */}
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src="/Team story.jpg"
                  alt="Professional plumbing team"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-5 sm:-bottom-6 left-2 sm:left-4 bg-white text-primary px-5 py-3 sm:px-6 sm:py-4 rounded-lg shadow-xl">
                  <div className="text-2xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Years of Excellence
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <img
                src="/plumbing-team.jpg"
                alt="Company history"
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={0.2}>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Built on Trust, Driven by Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009 by master plumber John Smith, Eriwa Plumbery started as a small family business with a
                  simple mission: provide honest, reliable plumbing services to our community.
                </p>
                <p>
                  Over the years, we've grown from a one-person operation to a trusted team of certified professionals,
                  but our core values remain the same. We believe in treating every customer like family and every job
                  as an opportunity to exceed expectations.
                </p>
                <p>
                  Today, we're proud to be the most trusted plumbing service in the area, with hundreds of satisfied
                  customers and a reputation built on quality workmanship and exceptional service.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Licensed and fully insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Family-owned and operated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Committed to our community</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Drives Us Every Day</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our values guide everything we do, from how we treat our customers to the quality of work we deliver.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Management & Support Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our certified professionals bring years of experience and dedication to every job.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.2}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="relative mx-auto mb-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full">
                          <Wrench className="w-4 h-4" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-primary font-medium">{member.role}</p>
                      <Badge variant="secondary">{member.experience}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Certifications & Licenses
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Fully Licensed & Certified</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We maintain all necessary licenses and certifications to ensure the highest quality service.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Master Plumber License", code: "MP-2024-001" },
              { title: "Business License", code: "BL-2024-789" },
              { title: "Insurance Certified", code: "IC-2024-456" },
              { title: "Safety Certified", code: "SC-2024-123" },
            ].map((cert, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div
                  className="text-center p-6 bg-background rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.code}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Experience the Eriwa Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Join hundreds of satisfied customers who trust us with their plumbing needs. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (+234) 703 132 0510
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/products" className="flex items-center">
                    Shop now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
