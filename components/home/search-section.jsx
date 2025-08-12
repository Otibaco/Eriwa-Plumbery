"use client"

import { useState } from "react"
import { Search, Mic, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const popularSearches = [
  "PVC Pipes",
  "Bathroom Faucets",
  "Water Heaters",
  "Drain Cleaning",
  "Emergency Repair",
  "Toilet Installation",
  "Pipe Fittings",
  "Shower Heads",
]

const quickFilters = [
  { name: "In Stock", count: 1250 },
  { name: "Free Delivery", count: 890 },
  { name: "On Sale", count: 340 },
  { name: "New Arrivals", count: 120 },
]

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVoiceActive, setIsVoiceActive] = useState(false)

  return (
    <section className="max-w-4xl mx-auto">
      {/* Main search bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for pipes, fittings, tools, or services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-32 py-4 text-lg border-2 focus:border-green-500 rounded-full"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className={`rounded-full ${isVoiceActive ? "bg-red-100 text-red-600" : ""}`}
              onClick={() => setIsVoiceActive(!isVoiceActive)}
            >
              <Mic className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full">
              <Filter className="h-5 w-5" />
            </Button>
            <Button className="rounded-full px-6">Search</Button>
          </div>
        </div>

        {/* Voice search indicator */}
        {isVoiceActive && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm animate-pulse">
            🎤 Listening... Speak now
          </div>
        )}
      </div>

      {/* Quick filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="text-sm font-medium text-muted-foreground">Quick filters:</span>
        {quickFilters.map((filter) => (
          <Badge
            key={filter.name}
            variant="secondary"
            className="cursor-pointer hover:bg-green-100 hover:text-green-700 transition-colors"
          >
            {filter.name} ({filter.count})
          </Badge>
        ))}
      </div>

      {/* Popular searches */}
      <div className="text-center">
        <span className="text-sm text-muted-foreground mr-3">Popular searches:</span>
        <div className="inline-flex flex-wrap gap-2 mt-2">
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="text-sm bg-muted hover:bg-green-100 hover:text-green-700 px-3 py-1 rounded-full transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
