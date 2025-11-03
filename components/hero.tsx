import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-black/45 pt-14 md:pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/nhl-hockey-action-game-intense-players-skating.jpg"
          alt="NHL betting action"
          fill
          className="object-cover opacity-85"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-5">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-foreground leading-tight">
            BET ON YOUR
            <br />
            <span className="text-primary">FAVORITE SPORTS</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join Ontario's premier sports betting platform. Get competitive odds, live betting, and exclusive bonuses.
          </p>

          {/* Welcome bonus highlight */}
          <div className="bg-gradient-to-r from-primary/25 via-primary/30 to-primary/15 border border-primary rounded-lg p-4 md:p-5 max-w-md mx-auto">
            <div className="text-white text-[14px] md:text-xs font-bold mb-0.5">WELCOME BONUS</div>
            <div className="text-2xl md:text-4xl font-black text-foreground mb-0.5">100% MATCH</div>
            <div className="text-lg md:text-2xl font-bold text-primary mb-1.5">UP TO $500</div>
            <div className="text-[10px] md:text-xs text-muted-foreground">
              New players only • Min. deposit $10 • T&Cs apply
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-1">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg shadow-primary/20 group"
              asChild
            >
              <a href="https://www.betano.ca/" target="_blank" rel="noopener noreferrer">
                CLAIM YOUR BONUS NOW
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-3 text-[10px] md:text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">AGCO Licensed</span>
            </div>
            <div className="w-px h-2.5 bg-border" />
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">iGaming Ontario</span>
            </div>
            <div className="w-px h-2.5 bg-border" />
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Secure & Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
