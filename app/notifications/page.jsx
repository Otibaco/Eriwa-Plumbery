"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Bell,
  Package,
  ShoppingCart,
  Truck,
  Gift,
  AlertTriangle,
  CheckCircle,
  Clock,
  Trash2,
  Settings,
} from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "order",
    title: "Order Shipped",
    message: "Your order #ORD-2025-001 has been shipped and is on the way",
    time: "2 hours ago",
    read: false,
    icon: Truck,
    color: "text-blue-600",
  },
  {
    id: 2,
    type: "promotion",
    title: "Special Offer",
    message: "Get 20% off on all bathroom fixtures this weekend only!",
    time: "1 day ago",
    read: false,
    icon: Gift,
    color: "text-green-600",
  },
  {
    id: 3,
    type: "order",
    title: "Order Delivered",
    message: "Your order #ORD-2025-002 has been successfully delivered",
    time: "2 days ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    id: 4,
    type: "system",
    title: "Account Security",
    message: "Your password was changed successfully",
    time: "3 days ago",
    read: true,
    icon: AlertTriangle,
    color: "text-orange-600",
  },
  {
    id: 5,
    type: "order",
    title: "Payment Confirmed",
    message: "Payment for order #ORD-2025-003 has been confirmed",
    time: "1 week ago",
    read: true,
    icon: ShoppingCart,
    color: "text-blue-600",
  },
]

const notificationSettings = [
  {
    id: "order_updates",
    title: "Order Updates",
    description: "Get notified about order status changes",
    enabled: true,
  },
  {
    id: "promotions",
    title: "Promotions & Offers",
    description: "Receive notifications about special deals and discounts",
    enabled: true,
  },
  {
    id: "new_products",
    title: "New Products",
    description: "Be the first to know about new product arrivals",
    enabled: false,
  },
  {
    id: "price_drops",
    title: "Price Drops",
    description: "Get alerted when items in your wishlist go on sale",
    enabled: true,
  },
  {
    id: "stock_alerts",
    title: "Stock Alerts",
    description: "Notify when out-of-stock items are back in stock",
    enabled: true,
  },
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Weekly plumbing tips and company updates",
    enabled: true,
  },
]

export default function NotificationsPage() {
  const [notificationList, setNotificationList] = useState(notifications)
  const [settings, setSettings] = useState(notificationSettings)

  const unreadCount = notificationList.filter((n) => !n.read).length

  const markAsRead = (id) => {
    setNotificationList((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotificationList((prev) => prev.filter((notification) => notification.id !== id))
  }

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((setting) => (setting.id === id ? { ...setting, enabled: !setting.enabled } : setting)),
    )
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "order":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "promotion":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "system":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow container px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Notifications</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Stay updated with your orders, promotions, and account activities
          </p>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid grid-cols-2 gap-2 w-full">
            <TabsTrigger value="notifications" className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <Bell className="h-4 w-4" />
              Notifications
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-1 sm:ml-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Bell className="h-5 w-5" />
                    All Notifications
                    {unreadCount > 0 && <Badge variant="destructive">{unreadCount} unread</Badge>}
                  </CardTitle>
                  {unreadCount > 0 && (
                    <Button variant="outline" size="sm" onClick={markAllAsRead}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark all as read
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {notificationList.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {notificationList.map((notification) => {
                      const Icon = notification.icon
                      return (
                        <div
                          key={notification.id}
                          className={`flex flex-col sm:flex-row gap-4 p-4 rounded-lg border transition-colors ${
                            !notification.read
                              ? "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="p-2 rounded-full bg-muted self-start">
                            <Icon className={`h-5 w-5 ${notification.color}`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row justify-between gap-2">
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                    {notification.title}
                                  </h3>
                                  <Badge variant="secondary" className={getTypeColor(notification.type)}>
                                    {notification.type}
                                  </Badge>
                                  {!notification.read && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {notification.time}
                                </div>
                              </div>

                              <div className="flex gap-1 mt-2 sm:mt-0">
                                {!notification.read && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                )}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-600 hover:text-red-700"
                                  onClick={() => deleteNotification(notification.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {settings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-2"
                  >
                    <div className="flex-1">
                      <Label htmlFor={setting.id} className="font-medium cursor-pointer">
                        {setting.title}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">{setting.description}</p>
                    </div>
                    <Switch
                      id={setting.id}
                      checked={setting.enabled}
                      onCheckedChange={() => toggleSetting(setting.id)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Bell,
                    color: "text-blue-600",
                    title: "Push Notifications",
                    description: "Receive notifications in your browser",
                  },
                  {
                    icon: Package,
                    color: "text-green-600",
                    title: "Email Notifications",
                    description: "Get updates via email",
                  },
                  {
                    icon: ShoppingCart,
                    color: "text-purple-600",
                    title: "SMS Notifications",
                    description: "Receive important updates via SMS",
                  },
                ].map(({ icon: Icon, ...item }, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                      <div>
                        <Label className="font-medium">{item.title}</Label>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Switch defaultChecked={index !== 2} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
