import { Wrench, Droplets, ShowerHeadIcon as Shower, Hammer, Settings, Zap, Home, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Pipes & Fittings",
    icon: Settings,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    count: "500+ items",
    image: "/category-pipes.png",
  },
  {
    name: "Bathroom Fixtures",
    icon: Shower,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    count: "300+ items",
    image: "/category-bathroom.png",
  },
  {
    name: "Tools & Equipment",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
    count: "200+ items",
    image: "/category-tools.png",
  },
  {
    name: "Water Heaters",
    icon: Zap,
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
    count: "80+ items",
    image: "/category-heaters.png",
  },
  {
    name: "Drain Solutions",
    icon: Droplets,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    count: "150+ items",
    image: "/category-drains.png",
  },
  {
    name: "Home Services",
    icon: Home,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
    count: "All areas",
    image: "/category-services.png",
  },
  {
    name: "Emergency Repair",
    icon: Wrench,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
    count: "24/7 available",
    image: "/category-emergency.png",
  },
  {
    name: "Delivery Service",
    icon: Truck,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300",
    count: "Same day",
    image: "/category-delivery.png",
  },
]

export function CategoryGrid() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find everything you need for your plumbing projects. From basic repairs to complete installations, we have the
          right products and services for you.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              {/* Background image */}
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div
                    className={`w-12 h-12 rounded-full ${category.color} bg-white/90 flex items-center justify-center`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-yellow-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/80">{category.count}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
