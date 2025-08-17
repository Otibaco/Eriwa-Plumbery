import { Search, Mic } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for pipes, fittings, tools, or services..."
          className="pl-12 pr-16 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-full"
        />
        <Button size="icon" variant="ghost" className="absolute right-12 top-1/2 transform -translate-y-1/2">
          <Mic className="h-5 w-5 text-gray-400" />
        </Button>
        <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full">Search</Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <span className="text-sm text-gray-600">Popular searches:</span>
        {["Copper Pipes", "Bathroom Faucets", "Emergency Repair", "PVC Fittings", "Drain Cleaning"].map((term) => (
          <button key={term} className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700">
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}
