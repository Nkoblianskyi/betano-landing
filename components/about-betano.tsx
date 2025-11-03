import { Card } from "@/components/ui/card"
import { Trophy, Globe, Smartphone, Headphones, Zap, Shield } from "lucide-react"

export function AboutBetano() {
  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
              WHY <span className="text-primary">BETANO</span>?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
              Trusted by millions worldwide, Betano brings world-class sports betting to Ontario
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">1000+ Markets</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Bet on NHL, NBA, NFL, MLB, soccer, and 50+ sports daily
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">Live Betting</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Real-time odds and instant bet placement for in-game action
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">AGCO Licensed</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Fully licensed and regulated by iGaming Ontario
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">Global Leader</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Serving 10M+ customers worldwide with major sports partnerships
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">Mobile Betting</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Bet anywhere with mobile-optimized platform and apps
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all group">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-1.5">24/7 Support</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Round-the-clock support via live chat, email, and phone
              </p>
            </Card>
          </div>

          {/* About text */}
          <Card className="bg-gray-50 border-gray-200 p-5 md:p-6">
            <div className="space-y-3 text-muted-foreground leading-relaxed text-xs md:text-sm">
              <p>
                <span className="text-foreground font-black text-base md:text-lg">Betano</span> launched in Ontario in
                October 2022 as part of the province's regulated sports betting market. We're operated by Kaizen Gaming
                International Ltd., one of the fastest-growing gaming technology companies globally.
              </p>
              <p>
                Since 2017, Betano has established itself as a trusted name in sports betting across Europe, Latin
                America, and now North America. We sponsor major sports teams including EPL club Aston Villa and
                international tournaments like CONMEBOL Copa América.
              </p>
              <p>
                In Ontario, we're committed to providing a safe, secure, and entertaining betting experience with
                competitive odds and comprehensive responsible gaming tools.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
