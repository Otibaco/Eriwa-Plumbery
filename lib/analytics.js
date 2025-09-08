"use client"

import { useState, useEffect } from "react"

// Mock analytics hook - replace with real analytics later
export function useAnalytics() {
  const [productViews, setProductViews] = useState({})

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("productViews")
    if (saved) {
      setProductViews(JSON.parse(saved))
    }
  }, [])

  const trackProductView = (productId, productName, category) => {
    setProductViews((prev) => {
      const updated = {
        ...prev,
        [productId]: (prev[productId] || 0) + 1,
      }
      localStorage.setItem("productViews", JSON.stringify(updated))
      return updated
    })
  }

  const getProductViews = (productId) => {
    return productViews[productId] || 0
  }

  return { trackProductView, getProductViews }
}
