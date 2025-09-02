"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Eye, TrendingUp, Users, MousePointer, RefreshCw, Calendar, Download, Filter } from "lucide-react"
import { analytics } from "@/lib/analytics"

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

export default function AdminAnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("30")
  const [chartType, setChartType] = useState("line")

  const loadAnalyticsData = () => {
    setIsLoading(true)
    setTimeout(() => {
      const data = analytics.getAnalyticsData()
      setAnalyticsData(data)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadAnalyticsData()
  }, [timeRange])

  const exportData = () => {
    if (!analyticsData) return

    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Date,Page Views,Product Views\n" +
      analyticsData.dailyViews.map((row) => `${row.date},${row.pageViews},${row.productViews}`).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "analytics-data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading || !analyticsData) {
    return (
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Loading analytics data...</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4 sm:p-6">
                <div className="animate-pulse">
                  <div className="h-3 sm:h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-6 sm:h-8 bg-muted rounded w-1/2"></div>
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
      bgColor: "bg-blue-50 dark:bg-blue-950",
      trend: "+12%",
    },
    {
      title: "Product Views",
      value: analyticsData.productViews.total.toLocaleString(),
      change: `+${analyticsData.productViews.last7Days} this week`,
      icon: MousePointer,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
      trend: "+8%",
    },
    {
      title: "Total Events",
      value: analyticsData.totalEvents.toLocaleString(),
      change: `+${analyticsData.recentEvents} last 30 days`,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      trend: "+15%",
    },
    {
      title: "Active Sessions",
      value: "1",
      change: "Current session",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      trend: "Live",
    },
  ]

  const enhancedDailyViews = analyticsData.dailyViews.map((item, index) => ({
    ...item,
    totalViews: item.pageViews + item.productViews,
    conversionRate: ((item.productViews / item.pageViews) * 100).toFixed(1),
  }))

  const categoryData = [
    { name: "Fixtures", value: 35, views: 1250 },
    { name: "Tools", value: 25, views: 890 },
    { name: "Pipes", value: 20, views: 720 },
    { name: "Water Heaters", value: 20, views: 680 },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Track your website performance and user engagement
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full sm:w-32 bg-transparent">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={exportData} className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={loadAnalyticsData} variant="outline" className="w-full sm:w-auto bg-transparent">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.title} delay={index * 0.1}>
            <Card className="hover:shadow-md transition-all duration-200 border-l-4 border-l-transparent hover:border-l-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground truncate">{stat.change}</p>
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    {stat.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold text-foreground">Performance Overview</h2>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Select value={chartType} onValueChange={setChartType}>
            <SelectTrigger className="w-full sm:w-32 bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="bar">Bar Chart</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        <AnimatedSection delay={0.2} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Daily Views (Last {timeRange} Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === "line" ? (
                    <LineChart data={enhancedDailyViews}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="date" fontSize={12} tick={{ fontSize: 10 }} interval="preserveStartEnd" />
                      <YAxis fontSize={12} tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#3b82f6"
                        name="Page Views"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="productViews"
                        stroke="#10b981"
                        name="Product Views"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                    </LineChart>
                  ) : (
                    <BarChart data={enhancedDailyViews}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="date" fontSize={12} tick={{ fontSize: 10 }} interval="preserveStartEnd" />
                      <YAxis fontSize={12} tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="pageViews" fill="#3b82f6" name="Page Views" />
                      <Bar dataKey="productViews" fill="#10b981" name="Product Views" />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {categoryData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.views}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        <AnimatedSection delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {analyticsData.topPages.length > 0 ? (
                  analyticsData.topPages.map((page, index) => (
                    <div
                      key={page.page}
                      className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50"
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{page.page || "Homepage"}</p>
                        <p className="text-xs text-muted-foreground">Page #{index + 1}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {page.views} views
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">No page views recorded yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {analyticsData.topProducts.length > 0 ? (
                  analyticsData.topProducts.map((product, index) => (
                    <div
                      key={product.product}
                      className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50"
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{product.product}</p>
                        <p className="text-xs text-muted-foreground">Product #{index + 1}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {product.views} views
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">No product views recorded yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Analytics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                  <span className="text-sm text-muted-foreground">Page Views (30 days)</span>
                  <span className="font-medium text-sm sm:text-base">{analyticsData.pageViews.last30Days}</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                  <span className="text-sm text-muted-foreground">Product Views (30 days)</span>
                  <span className="font-medium text-sm sm:text-base">{analyticsData.productViews.last30Days}</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                  <span className="text-sm text-muted-foreground">Page Views (7 days)</span>
                  <span className="font-medium text-sm sm:text-base">{analyticsData.pageViews.last7Days}</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                  <span className="text-sm text-muted-foreground">Product Views (7 days)</span>
                  <span className="font-medium text-sm sm:text-base">{analyticsData.productViews.last7Days}</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                  <span className="text-sm text-green-700 dark:text-green-300">Avg. Conversion Rate</span>
                  <span className="font-bold text-green-700 dark:text-green-300">
                    {((analyticsData.productViews.total / analyticsData.pageViews.total) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
