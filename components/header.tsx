import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ff3c00] backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        {/* Empty spacer for balance */}
        <div className="w-24 md:w-32"></div>

        {/* Centered logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center hover:opacity-80 transition-opacity"
        >
          <Image src="/betano.svg" alt="Betano" width={120} height={40} className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Right-aligned button */}
        <Link
          href="https://www.betano.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#ff3c00] px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          CLAIM BONUS
        </Link>
      </div>
    </header>
  )
}
