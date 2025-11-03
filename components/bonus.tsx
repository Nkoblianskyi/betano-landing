import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, TrendingUp, Shield } from "lucide-react"

export function Bonus() {
  return (
    <section className="py-10 md:py-14 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
              EXCLUSIVE <span className="text-primary">BONUSES</span>
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
              Maximize your winnings with our industry-leading promotions and rewards
            </p>
          </div>

          {/* Main welcome bonus */}
          <Card className="bg-white border border-primary/20 p-4 md:p-6 mb-4 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-2.5 py-0.5">
                  <span className="text-[10px] md:text-xs font-black text-primary">NEW PLAYER OFFER</span>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-xl md:text-2xl font-black text-foreground mb-1">DEPOSIT MATCH</div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Up to <span className="text-foreground font-black">$500</span> in Bonus Bets
                  </div>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-sm">Minimum deposit of just $10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-sm">5x wagering on odds 1.65 or higher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-sm">30 days to use your bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-sm">Valid on all sports markets</span>
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-4 rounded-full"
                  asChild
                >
                  <a href="https://www.betano.ca/" target="_blank" rel="noopener noreferrer">
                    GET STARTED NOW
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-black text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs md:text-sm mb-0.5">Create Your Account</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Sign up in under 2 minutes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-black text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs md:text-sm mb-0.5">Make Your First Deposit</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Deposit $10 or more</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-black text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xs md:text-sm mb-0.5">Start Betting</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Bonus credited instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional promotions */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-2.5 mb-2">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-black text-foreground mb-1">Parlay Booster</h3>
                  <p className="text-muted-foreground text-xs mb-2">
                    Boost your parlay winnings by up to 50%! More selections = bigger boost.
                  </p>
                  <ul className="space-y-1 text-[10px] md:text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-accent" />
                      <span>4 picks = 10% boost</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-accent" />
                      <span>10+ picks = 50% boost</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-gray-200 p-4 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-2.5 mb-2">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-black text-foreground mb-1">Parlay Insurance</h3>
                  <p className="text-muted-foreground text-xs mb-2">
                    Miss by one leg? Get up to $50 back as a refund on qualifying bets.
                  </p>
                  <ul className="space-y-1 text-[10px] md:text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-accent" />
                      <span>5+ selections required</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-accent" />
                      <span>Up to $50 refund</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Terms */}
          <div className="mt-4 text-center">
            <p className="text-[10px] md:text-xs text-muted-foreground">
              19+ only. Ontario residents only. Terms and conditions apply. Please gamble responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
