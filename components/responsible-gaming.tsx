import { Card } from "@/components/ui/card"
import { Shield, Phone, AlertCircle } from "lucide-react"

export function ResponsibleGaming() {
  return (
    <section className="py-10 md:py-14 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary rounded-full px-4 py-1.5 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary">PLAY RESPONSIBLY</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
              RESPONSIBLE <span className="text-primary">GAMING</span>
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto">
              Your safety and wellbeing are our top priorities. We provide tools and resources to help you stay in
              control.
            </p>
          </div>

          {/* Help cards */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6">
            <Card className="bg-white border-gray-200 p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-black text-foreground mb-1">ConnexOntario</h3>
                  <p className="text-muted-foreground text-xs mb-2">Free, confidential support available 24/7</p>
                  <a
                    href="tel:1-866-531-2600"
                    className="text-xl md:text-2xl font-black text-primary hover:text-primary/80 transition-colors"
                  >
                    1-866-531-2600
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-gray-200 p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-black text-foreground mb-1">Problem Gambling Institute</h3>
                  <p className="text-muted-foreground text-xs mb-2">Professional help and resources</p>
                  <a
                    href="tel:1-888-230-3505"
                    className="text-xl md:text-2xl font-black text-primary hover:text-primary/80 transition-colors"
                  >
                    1-888-230-3505
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Tools */}
          <Card className="bg-white border-gray-200 p-5 md:p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-foreground mb-1">Responsible Gaming Tools</h3>
                <p className="text-muted-foreground text-xs">
                  We provide comprehensive tools to help you manage your betting:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-muted-foreground text-xs">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Deposit limits (daily, weekly, monthly)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Time limits and session reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Self-exclusion options</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Reality checks and activity statements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Account cooling-off periods</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Access to support resources</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
