"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom">
      <Card className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-lg border-yellow-500/30 shadow-2xl">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">Cookie Notice</h3>
              <p className="text-sm sm:text-base text-slate-300">
                We use cookies to improve your experience, analyze site usage, and personalize content. By clicking
                "Accept All", you agree to our use of cookies. Read our{" "}
                <Link href="/cookie-policy" className="text-yellow-400 hover:underline">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-yellow-400 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold"
                >
                  Accept All
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800 bg-transparent"
                >
                  Decline
                </Button>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
