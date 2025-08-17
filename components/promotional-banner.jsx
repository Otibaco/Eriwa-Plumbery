import { Clock, Truck, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Percent className="h-6 w-6" />
            <span className="text-2xl font-bold">Winter Sale</span>
          </div>
          <p className="text-lg">Up to 40% off heating solutions</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Truck className="h-6 w-6" />
            <span className="text-xl font-semibold">Free Delivery</span>
          </div>
          <p>On orders over $150</p>
        </div>

        <div className="text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
            <Clock className="h-6 w-6" />
            <span className="text-xl font-semibold">Limited Time</span>
          </div>
          <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}
