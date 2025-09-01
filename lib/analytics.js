"use client"

class Analytics {
  constructor() {
    this.sessionId = this.generateSessionId()
    this.events = []
    this.loadStoredEvents()
  }

  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  loadStoredEvents() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("analytics_events")
      if (stored) {
        try {
          this.events = JSON.parse(stored)
        } catch (error) {
          console.error("Failed to load stored analytics events:", error)
        }
      }
    }
  }

  saveEvents() {
    if (typeof window !== "undefined") {
      localStorage.setItem("analytics_events", JSON.stringify(this.events))
    }
  }

  // Track page views
  trackPageView(page) {
    const event = {
      event: "page_view",
      page,
      timestamp: Date.now(),
    }

    this.events.push(event)
    this.saveEvents()

    console.log("[v0] Analytics: Page view tracked", { page, sessionId: this.sessionId })
  }

  // Track product views
  trackProductView(productId, productName, category) {
    const event = {
      event: "product_view",
      product: productName,
      category,
      timestamp: Date.now(),
    }

    this.events.push(event)
    this.saveEvents()

    // Update product view count in localStorage
    this.incrementProductViews(productId)

    console.log("[v0] Analytics: Product view tracked", { productId, productName, category })
  }

  // Track custom events
  trackEvent(eventName, properties) {
    const event = {
      event: eventName,
      timestamp: Date.now(),
      ...properties,
    }

    this.events.push(event)
    this.saveEvents()

    console.log("[v0] Analytics: Custom event tracked", { eventName, properties })
  }

  // Get product view count
  getProductViews(productId) {
    if (typeof window === "undefined") return 0

    const views = localStorage.getItem(`product_views_${productId}`)
    return views ? parseInt(views, 10) : 0
  }

  // Increment product view count
  incrementProductViews(productId) {
    if (typeof window === "undefined") return

    const currentViews = this.getProductViews(productId)
    localStorage.setItem(`product_views_${productId}`, (currentViews + 1).toString())
  }

  // Get analytics data for admin dashboard
  getAnalyticsData() {
    const now = Date.now()
    const last30Days = now - 30 * 24 * 60 * 60 * 1000
    const last7Days = now - 7 * 24 * 60 * 60 * 1000

    const recentEvents = this.events.filter((event) => event.timestamp >= last30Days)

    return {
      totalEvents: this.events.length,
      recentEvents: recentEvents.length,
      pageViews: {
        total: this.events.filter((e) => e.event === "page_view").length,
        last30Days: recentEvents.filter((e) => e.event === "page_view").length,
        last7Days: this.events.filter((e) => e.event === "page_view" && e.timestamp >= last7Days).length,
      },
      productViews: {
        total: this.events.filter((e) => e.event === "product_view").length,
        last30Days: recentEvents.filter((e) => e.event === "product_view").length,
        last7Days: this.events.filter((e) => e.event === "product_view" && e.timestamp >= last7Days).length,
      },
      topPages: this.getTopPages(recentEvents),
      topProducts: this.getTopProducts(recentEvents),
      dailyViews: this.getDailyViews(recentEvents),
    }
  }

  getTopPages(events) {
    const pageViews = events.filter((e) => e.event === "page_view" && e.page)
    const pageCounts = pageViews.reduce((acc, event) => {
      const page = event.page
      acc[page] = (acc[page] || 0) + 1
      return acc
    }, {})

    return Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([page, views]) => ({ page, views }))
  }

  getTopProducts(events) {
    const productViews = events.filter((e) => e.event === "product_view" && e.product)
    const productCounts = productViews.reduce((acc, event) => {
      const product = event.product
      acc[product] = (acc[product] || 0) + 1
      return acc
    }, {})

    return Object.entries(productCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([product, views]) => ({ product, views }))
  }

  getDailyViews(events) {
    const dailyData = events.reduce((acc, event) => {
      const date = new Date(event.timestamp).toISOString().split("T")[0]
      if (!acc[date]) {
        acc[date] = { date, pageViews: 0, productViews: 0 }
      }
      if (event.event === "page_view") acc[date].pageViews++
      if (event.event === "product_view") acc[date].productViews++
      return acc
    }, {})

    return Object.values(dailyData).sort((a, b) => a.date.localeCompare(b.date))
  }

  // Clear analytics data (for testing)
  clearData() {
    this.events = []
    if (typeof window !== "undefined") {
      localStorage.removeItem("analytics_events")
      // Clear product view counts
      Object.keys(localStorage)
        .filter((key) => key.startsWith("product_views_"))
        .forEach((key) => localStorage.removeItem(key))
    }
  }
}

// Create singleton instance
export const analytics = new Analytics()

// React hook for analytics
export function useAnalytics() {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackProductView: analytics.trackProductView.bind(analytics),
    trackEvent: analytics.trackEvent.bind(analytics),
    getProductViews: analytics.getProductViews.bind(analytics),
    getAnalyticsData: analytics.getAnalyticsData.bind(analytics),
  }
}
