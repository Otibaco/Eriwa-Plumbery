"use client"

// Simple admin authentication utilities for demo purposes
export const adminLogout = () => {
  localStorage.removeItem("adminAuth")
  window.location.href = "/admin/login"
}

export const isAdminAuthenticated = () => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("adminAuth") === "true"
}

export const adminLogin = (password) => {
  if (password === "admin123") {
    localStorage.setItem("adminAuth", "true")
    return true
  }
  return false
}
