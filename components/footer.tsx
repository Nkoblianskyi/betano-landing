import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-10">
        {/* Regulatory info */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 text-xs md:text-sm text-gray-400">
          <div className="text-center">
            <div className="font-black text-white mb-0.5 text-sm md:text-base">Licensed by</div>
            <div className="text-xs md:text-sm">AGCO</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="font-black text-white mb-0.5 text-sm md:text-base">Regulated by</div>
            <div className="text-xs md:text-sm">iGaming Ontario</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <Badge className="bg-primary hover:bg-primary/90 text-white text-lg md:text-xl px-4 py-1 font-black">
              19+
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <a
              href="https://igamingontario.ca/en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
            >
              <img
                src="/igamingontario.svg"
                alt="iGaming Ontario"
                className="max-h-full max-w-full object-contain"
              />
            </a>
            <a
              href="https://kaizengaming.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
            >
              <img
                src="/ksizengaming.svg"
                alt="Kaizen Gaming"
                className="max-h-full max-w-full object-contain"
              />
            </a>
            <a
              href="https://gamblingtherapy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
            >
              <img
                src="/gordon.png"
                alt="Gambling Therapy"
                className="max-h-full max-w-full object-contain"
              />
            </a>
            <a
              href="https://ibia.bet/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center h-16 md:h-20 w-24 md:w-32"
            >
              <img src="/ibia.svg" alt="IBIA" className="max-h-full max-w-full object-contain" />
            </a>
          </div>
        </div>

        {/* Legal text */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-4 md:p-6 space-y-2.5 text-xs text-gray-400 leading-relaxed">
            <p>
              <strong className="text-white font-bold">Licensing:</strong> Betano is operated by Kaizen Gaming
              International Ltd. and is licensed by the Alcohol and Gaming Commission of Ontario (AGCO). All gaming
              operations are conducted in accordance with iGaming Ontario regulations and Ontario gaming laws.
            </p>
            <p>
              <strong className="text-white font-bold">Age Restriction:</strong> You must be 19 years of age or older to
              participate in sports betting in Ontario. Government-issued ID verification is required.
            </p>
            <p>
              <strong className="text-white font-bold">Responsible Gaming:</strong> Betano provides responsible gaming
              tools including deposit limits, time limits, self-exclusion, and reality checks. If you or someone you
              know has a gambling problem, please contact ConnexOntario at 1-866-531-2600 or Problem Gambling Institute
              of Ontario at 1-888-230-3505 for free, confidential support 24/7.
            </p>
            <p>
              <strong className="text-white font-bold">Terms & Conditions:</strong> All offers and promotions are
              subject to terms and conditions. Ontario residents aged 19+ only. Wagering requirements apply. Please
              gamble responsibly.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p className="font-medium text-center md:text-left">
              © 2025 Betano Ontario. Licensed by AGCO. All rights reserved.
            </p>
            <p className="font-medium text-center md:text-right">
              Gambling problem? Call ConnexOntario: 1-866-531-2600
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
