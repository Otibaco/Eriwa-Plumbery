"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Shield, Copy, Check } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple dummy password - admin123
    if (password === "admin123") {
      localStorage.setItem("adminAuth", "true")
      router.push("/admin")
    } else {
      setError("Invalid password")
    }

    setIsLoading(false)
  }

  const copyPassword = async () => {
    await navigator.clipboard.writeText("admin123")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <AnimatedSection className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">Admin Access</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter password to access admin dashboard
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Demo Password:</p>
                  <p className="text-lg font-mono font-bold text-primary">admin123</p>
                </div>
                <Button variant="outline" size="sm" onClick={copyPassword} className="h-8 w-8 p-0 bg-transparent">
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Admin Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                {isLoading ? "Accessing..." : "Access Admin"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                This is a demo admin panel. Use password: <span className="font-mono font-semibold">admin123</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
