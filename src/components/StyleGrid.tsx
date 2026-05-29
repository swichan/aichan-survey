'use client'

import Image from 'next/image'
import type { StyleAesthetic } from '@/types/survey'

interface StyleOption {
  value: StyleAesthetic
  name: string
  sub: string
  image?: string
  emoji?: string
  bg?: string
}

const STYLES: StyleOption[] = [
  { value: 'cottagecore',   name: 'Cottagecore',         sub: 'Flowy, earthy, romantic',              image: '/styles/cottagecore.png' },
  { value: 'coquette',      name: 'Coquette / Feminine', sub: 'Bows, lace, soft pink',                image: '/styles/coquette.png' },
  { value: 'quiet-luxury',  name: 'Quiet Luxury',        sub: 'Understated, premium basics',          image: '/styles/quiet-luxury.png' },
  { value: 'athleisure',    name: 'Athleisure',          sub: 'Gym, performance, activewear',         image: '/styles/athleisure.png' },
  { value: 'minimalist',    name: 'Minimalist',          sub: 'Uniqlo/Muji — clean basics, neutral palette', image: '/styles/minimalist.png' },
  { value: 'tomboyish',     name: 'Tomboyish',           sub: 'Cargo, loose fits, streetwear edge',   image: '/styles/tomboyish.png' },
  { value: 'techwear',      name: 'Techwear / Dark',     sub: 'All-black, utility pockets, tactical', image: '/styles/techwear.png' },
  { value: 'formal',        name: 'Formal / Office',     sub: 'Structured, polished, tailored',       image: '/styles/formal.png' },
  { value: 'traditional',   name: 'Traditional / Ethnic',sub: 'Kimono, yukata, cultural wear',        image: '/styles/traditional.png' },
]

const MAX = 3

interface Props {
  value: StyleAesthetic[]
  onChange: (val: StyleAesthetic) => void
}

export default function StyleGrid({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-[10px] max-[480px]:grid-cols-2">
      {STYLES.map(s => {
        const checked = value.includes(s.value)
        const atMax = value.length >= MAX && !checked
        const useEmoji = !s.image && s.emoji

        return (
          <label
            key={s.value}
            className={[
              'relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-[220ms] bg-warm-white block group',
              atMax ? 'opacity-50 cursor-not-allowed' : '',
              checked
                ? 'border-dusty-rose shadow-[0_0_0_1px_#c9897a,0_6px_20px_rgba(200,137,122,0.2)]'
                : 'border-border-col hover:border-blush hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(200,137,122,0.15)]',
            ].join(' ')}
          >
            <input
              type="checkbox"
              value={s.value}
              checked={checked}
              onChange={() => { if (!atMax) onChange(s.value) }}
              className="sr-only"
            />
            {checked && (
              <span className="absolute top-2 right-2 w-[22px] h-[22px] bg-dusty-rose rounded-full flex items-center justify-center text-white text-[11px] font-bold z-10">
                ✓
              </span>
            )}

            {useEmoji ? (
              <div
                className="w-full pt-[22px] pb-[14px] flex flex-col items-center gap-[6px]"
                style={{ background: s.bg }}
              >
                <span className="text-[34px] leading-none">{s.emoji}</span>
              </div>
            ) : (
              <div className="w-full aspect-square overflow-hidden relative bg-gray-100">
                <Image
                  src={s.image!}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 480px) 50vw, 33vw"
                />
              </div>
            )}

            <div className={`text-[12px] font-medium text-center px-2 pt-1 pb-1 leading-[1.4] ${checked ? 'text-deep-rose' : 'text-charcoal'}`}>
              {s.name}
            </div>
            <div className="text-[10.5px] text-light text-center px-2 pb-3 italic leading-[1.3]">
              {s.sub}
            </div>
          </label>
        )
      })}
    </div>
  )
}
