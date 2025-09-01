"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Eye, TrendingUp, Users, MousePointer, RefreshCw } from "lucide-react"
import { analytics } from "@/lib/analytics"

export default function AdminAnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadAnalyticsData = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      const data = analytics.getAnalyticsData()
      setAnalyticsData(data)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadAnalyticsData()
  }, [])

  if (isLoading || !analyticsData) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Loading analytics data...</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-muted rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Page Views",
      value: analyticsData.pageViews.total.toLocaleString(),
      change: `+${analyticsData.pageViews.last7Days} this week`,
      icon: Eye,
      color: "text-blue-600",
    },
    {
      title: "Product Views",
      value: analyticsData.productViews.total.toLocaleString(),
      change: `+${analyticsData.productViews.last7Days} this week`,
      icon: MousePointer,
      color: "text-green-600",
    },
    {
      title: "Total Events",
      value: analyticsData.totalEvents.toLocaleString(),
      change: `+${analyticsData.recentEvents} last 30 days`,
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Active Sessions",
      value: "1",
      change: "Current session",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your website performance and user engagement</p>
        </div>
        <Button onClick={loadAnalyticsData} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.title} delay={index * 0.1}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Daily Views Chart */}
        <AnimatedSection delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Daily Views (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData.dailyViews}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pageViews" stroke="#3b82f6" name="Page Views" />
                    <Line type="monotone" dataKey="productViews" stroke="#10b981" name="Product Views" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Top Pages */}
        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.length > 0 ? (
                  analyticsData.topPages.map((page,index) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{page.page || "Homepage"}</p>
                        <p className="text-xs text-muted-foreground">Page</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{page.views} views</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No page views recorded yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Top Products */}
        <AnimatedSection delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topProducts.length > 0 ? (
                  analyticsData.topProducts.map((product,index) => (
                    <div key={product.product} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{product.product}</p>
                        <p className="text-xs text-muted-foreground">Product</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{product.views} views</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No product views recorded yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Recent Activity */}
        <AnimatedSection delay={0.5}>
          <Card>
            <CardHeader>
              <CardTitle>Analytics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Page Views (30 days)</span>
                  <span className="font-medium">{analyticsData.pageViews.last30Days}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Product Views (30 days)</span>
                  <span className="font-medium">{analyticsData.productViews.last30Days}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Page Views (7 days)</span>
                  <span className="font-medium">{analyticsData.pageViews.last7Days}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Product Views (7 days)</span>
                  <span className="font-medium">{analyticsData.productViews.last7Days}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
