import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Style & Clothing Preference Survey',
  description: 'Help us design clothes that fit your life.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="bg-warm-white text-charcoal min-h-screen relative overflow-x-hidden">
        {/* Soft ambient glows */}
        <div className="fixed top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle,rgba(232,196,184,0.2) 0%,transparent 70%)' }} />
        <div className="fixed bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle,rgba(201,137,122,0.15) 0%,transparent 70%)' }} />

        {/* Left Side Art — Botanical illustration */}
        <div className="hidden xl:flex fixed inset-y-0 left-0 w-[calc(50%-380px)] pointer-events-none z-0 items-center justify-center" style={{ animation: 'floatY 7s ease-in-out infinite' }}>
          <svg width="280" height="560" viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background blobs */}
            <ellipse cx="120" cy="250" rx="90" ry="130" fill="var(--color-blush)" fillOpacity="0.12" />
            <ellipse cx="190" cy="420" rx="55" ry="65" fill="var(--color-accent)" fillOpacity="0.08" />
            {/* Main stem */}
            <path d="M 140 530 C 138 460 133 390 136 325 C 140 270 142 205 140 148 C 138 118 138 95 140 68" stroke="var(--color-dusty-rose)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Left branch */}
            <path d="M 136 325 C 112 310 88 296 65 274 C 48 258 42 244 44 230" stroke="var(--color-dusty-rose)" strokeWidth="1.2" strokeLinecap="round" />
            {/* Right branch */}
            <path d="M 140 210 C 162 196 183 180 202 158 C 212 146 215 134 212 122" stroke="var(--color-dusty-rose)" strokeWidth="1.2" strokeLinecap="round" />
            {/* Leaf 1 */}
            <path d="M 136 285 C 106 273 93 250 110 242 C 127 234 136 264 136 285" fill="var(--color-accent)" fillOpacity="0.35" stroke="var(--color-dusty-rose)" strokeWidth="0.8" />
            {/* Leaf 2 */}
            <path d="M 138 365 C 166 350 178 328 165 320 C 152 312 138 344 138 365" fill="var(--color-accent)" fillOpacity="0.35" stroke="var(--color-dusty-rose)" strokeWidth="0.8" />
            {/* Leaf 3 - on left branch */}
            <path d="M 88 294 C 64 278 58 256 76 250 C 94 244 92 274 88 294" fill="var(--color-blush)" fillOpacity="0.5" stroke="var(--color-dusty-rose)" strokeWidth="0.8" />
            {/* Leaf 4 - on right branch */}
            <path d="M 183 174 C 198 160 204 142 192 140 C 180 138 176 162 183 174" fill="var(--color-blush)" fillOpacity="0.45" stroke="var(--color-dusty-rose)" strokeWidth="0.8" />
            {/* Small leaf, lower stem */}
            <path d="M 137 440 C 112 428 108 412 122 410 C 136 408 138 428 137 440" fill="var(--color-accent)" fillOpacity="0.28" stroke="var(--color-dusty-rose)" strokeWidth="0.7" />
            {/* Main flower at (140, 68) — 6 petals */}
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.85" />
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(60 140 68)" />
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(120 140 68)" />
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(180 140 68)" />
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(240 140 68)" />
            <ellipse cx="140" cy="47" rx="7" ry="15" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(300 140 68)" />
            <circle cx="140" cy="68" r="10" fill="var(--color-accent)" fillOpacity="0.75" />
            <circle cx="140" cy="68" r="4.5" fill="var(--color-dusty-rose)" fillOpacity="0.65" />
            <circle cx="140" cy="68" r="26" stroke="var(--color-dusty-rose)" strokeWidth="0.7" strokeDasharray="3 4" strokeOpacity="0.45" />
            {/* Left branch flower at (44, 230) — 5 petals */}
            <ellipse cx="44" cy="217" rx="5" ry="11" fill="var(--color-blush)" fillOpacity="0.8" />
            <ellipse cx="44" cy="217" rx="5" ry="11" fill="var(--color-blush)" fillOpacity="0.7" transform="rotate(72 44 230)" />
            <ellipse cx="44" cy="217" rx="5" ry="11" fill="var(--color-blush)" fillOpacity="0.7" transform="rotate(144 44 230)" />
            <ellipse cx="44" cy="217" rx="5" ry="11" fill="var(--color-blush)" fillOpacity="0.7" transform="rotate(216 44 230)" />
            <ellipse cx="44" cy="217" rx="5" ry="11" fill="var(--color-blush)" fillOpacity="0.7" transform="rotate(288 44 230)" />
            <circle cx="44" cy="230" r="6" fill="var(--color-accent)" fillOpacity="0.75" />
            <circle cx="44" cy="230" r="2.5" fill="var(--color-dusty-rose)" fillOpacity="0.6" />
            {/* Right branch flower at (212, 122) — 5 petals */}
            <ellipse cx="212" cy="109" rx="4" ry="10" fill="var(--color-blush)" fillOpacity="0.75" />
            <ellipse cx="212" cy="109" rx="4" ry="10" fill="var(--color-blush)" fillOpacity="0.65" transform="rotate(72 212 122)" />
            <ellipse cx="212" cy="109" rx="4" ry="10" fill="var(--color-blush)" fillOpacity="0.65" transform="rotate(144 212 122)" />
            <ellipse cx="212" cy="109" rx="4" ry="10" fill="var(--color-blush)" fillOpacity="0.65" transform="rotate(216 212 122)" />
            <ellipse cx="212" cy="109" rx="4" ry="10" fill="var(--color-blush)" fillOpacity="0.65" transform="rotate(288 212 122)" />
            <circle cx="212" cy="122" r="5" fill="var(--color-accent)" fillOpacity="0.7" />
            <circle cx="212" cy="122" r="2" fill="var(--color-dusty-rose)" fillOpacity="0.55" />
            {/* Accent dots */}
            <circle cx="80" cy="155" r="2.5" fill="var(--color-dusty-rose)" fillOpacity="0.35" />
            <circle cx="200" cy="180" r="1.8" fill="var(--color-dusty-rose)" fillOpacity="0.28" />
            <circle cx="55" cy="415" r="2.2" fill="var(--color-accent)" fillOpacity="0.32" />
            <circle cx="220" cy="330" r="1.8" fill="var(--color-blush)" fillOpacity="0.5" />
            <circle cx="165" cy="475" r="1.5" fill="var(--color-dusty-rose)" fillOpacity="0.25" />
            <circle cx="100" cy="490" r="2.8" fill="var(--color-blush)" fillOpacity="0.28" />
            <circle cx="235" cy="260" r="2" fill="var(--color-accent)" fillOpacity="0.3" />
            <circle cx="25" cy="355" r="1.5" fill="var(--color-blush)" fillOpacity="0.4" />
          </svg>
        </div>

        {/* Right Side Art — Fashion illustration */}
        <div className="hidden xl:flex fixed inset-y-0 right-0 w-[calc(50%-380px)] pointer-events-none z-0 items-center justify-center" style={{ animation: 'floatY 9s ease-in-out infinite 1s' }}>
          <svg width="260" height="560" viewBox="0 0 260 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background blobs */}
            <ellipse cx="130" cy="290" rx="85" ry="120" fill="var(--color-blush)" fillOpacity="0.12" />
            <ellipse cx="80" cy="455" rx="55" ry="55" fill="var(--color-accent)" fillOpacity="0.08" />
            {/* Hanger */}
            <path d="M 130 100 C 130 85 143 85 143 100 C 143 108 130 115 130 125" stroke="var(--color-dusty-rose)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 130 125 L 68 162 L 192 162 Z" stroke="var(--color-dusty-rose)" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            {/* Dress silhouette */}
            <path d="M 130 162 C 108 158 88 163 80 178 L 75 205 C 70 228 78 250 95 262 C 80 295 50 350 36 405 Q 130 440 224 405 C 210 350 180 295 165 262 C 182 250 190 228 185 205 L 180 178 C 172 163 152 158 130 162 Z" fill="var(--color-blush)" fillOpacity="0.22" stroke="var(--color-dusty-rose)" strokeWidth="1.2" />
            {/* Neckline detail */}
            <path d="M 113 162 C 120 172 126 175 130 174 C 134 175 140 172 147 162" stroke="var(--color-dusty-rose)" strokeWidth="0.8" fill="none" strokeOpacity="0.7" />
            {/* Waist seam */}
            <path d="M 95 262 C 112 258 130 256 148 258 C 158 260 165 262 165 262" stroke="var(--color-dusty-rose)" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.6" />
            {/* Sparkle stars */}
            <path d="M 48 141 L 50 145.9 L 55 148 L 50 150.1 L 48 155 L 46 150.1 L 41 148 L 46 145.9 Z" fill="var(--color-dusty-rose)" fillOpacity="0.5" />
            <path d="M 218 166 L 219.7 169.3 L 224 172 L 219.7 174.7 L 218 178 L 216.3 174.7 L 212 172 L 216.3 169.3 Z" fill="var(--color-accent)" fillOpacity="0.55" />
            <path d="M 42 327 L 43.4 330.6 L 47 332 L 43.4 333.4 L 42 337 L 40.6 333.4 L 37 332 L 40.6 330.6 Z" fill="var(--color-dusty-rose)" fillOpacity="0.4" />
            <path d="M 222 345 L 224.1 349.9 L 229 352 L 224.1 354.1 L 222 359 L 219.9 354.1 L 215 352 L 219.9 349.9 Z" fill="var(--color-blush)" fillOpacity="0.65" />
            <path d="M 155 455 L 156.4 458.6 L 160 460 L 156.4 461.4 L 155 465 L 153.6 461.4 L 150 460 L 153.6 458.6 Z" fill="var(--color-accent)" fillOpacity="0.45" />
            <path d="M 82 104 L 83.1 106.9 L 86 108 L 83.1 109.1 L 82 112 L 80.9 109.1 L 78 108 L 80.9 106.9 Z" fill="var(--color-dusty-rose)" fillOpacity="0.38" />
            {/* Small handbag */}
            <path d="M 108 475 C 105 467 108 457 130 457 C 152 457 155 467 152 475 L 152 500 Q 130 506 108 500 Z" fill="var(--color-blush)" fillOpacity="0.2" stroke="var(--color-dusty-rose)" strokeWidth="1" strokeLinejoin="round" />
            <path d="M 116 457 C 116 447 144 447 144 457" stroke="var(--color-dusty-rose)" strokeWidth="1" fill="none" strokeLinecap="round" />
            <circle cx="130" cy="479" r="3" stroke="var(--color-dusty-rose)" strokeWidth="0.8" fill="none" />
            {/* Accent dots */}
            <circle cx="72" cy="220" r="2" fill="var(--color-dusty-rose)" fillOpacity="0.3" />
            <circle cx="192" cy="130" r="1.8" fill="var(--color-dusty-rose)" fillOpacity="0.28" />
            <circle cx="35" cy="270" r="2.2" fill="var(--color-accent)" fillOpacity="0.32" />
            <circle cx="226" cy="420" r="1.8" fill="var(--color-blush)" fillOpacity="0.55" />
            <circle cx="90" cy="440" r="2.5" fill="var(--color-dusty-rose)" fillOpacity="0.25" />
            <circle cx="200" cy="240" r="2" fill="var(--color-accent)" fillOpacity="0.3" />
            <circle cx="50" cy="388" r="1.5" fill="var(--color-blush)" fillOpacity="0.45" />
          </svg>
        </div>

        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
