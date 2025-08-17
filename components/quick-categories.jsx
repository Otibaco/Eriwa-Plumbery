import { Wrench, Droplets, ShowerHeadIcon as Shower, Hammer, Settings, Zap } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Pipes & Fittings", icon: Settings, color: "bg-blue-100 text-blue-600" },
  { name: "Bathroom Fixtures", icon: Shower, color: "bg-green-100 text-green-600" },
  { name: "Tools & Equipment", icon: Hammer, color: "bg-orange-100 text-orange-600" },
  { name: "Water Heaters", icon: Zap, color: "bg-red-100 text-red-600" },
  { name: "Drain Solutions", icon: Droplets, color: "bg-purple-100 text-purple-600" },
  { name: "Emergency Service", icon: Wrench, color: "bg-yellow-100 text-yellow-600" },
]

export function QuickCategories() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group"
          >
            <div className="text-center p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
