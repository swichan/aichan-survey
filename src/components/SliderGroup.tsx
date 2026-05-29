'use client'

import type { PriorityKey } from '@/types/survey'

interface SliderConfig {
  key: PriorityKey
  label: string
}

const SLIDERS: SliderConfig[] = [
  { key: 'comfort',        label: 'Comfort & wearability · 着心地' },
  { key: 'sizing',         label: 'Accurate sizing / true to size · サイズの正確さ' },
  { key: 'price',          label: 'Price / Value for money · 価格・コスパ' },
  { key: 'fabric',         label: 'Fabric quality & durability · 素材・耐久性' },
  { key: 'trend',          label: 'Trendiness / Staying in style · トレンド性' },
  { key: 'sustainability', label: 'Sustainability / Ethical production · 環境・倫理性' },
]

const LABELS = ['Not important', 'Low priority', 'Neutral', 'Important', 'Very important'] as const

interface Props {
  values: Record<PriorityKey, 1 | 2 | 3 | 4 | 5>
  onChange: (key: PriorityKey, value: number) => void
}

export default function SliderGroup({ values, onChange }: Props) {
  return (
    <div>
      {SLIDERS.map((s, i) => (
        <div
          key={s.key}
          className={`py-3 ${i < SLIDERS.length - 1 ? 'border-b border-border-col' : ''}`}
        >
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-[13.5px] text-charcoal">{s.label}</span>
            <span className="text-[12px] font-medium text-dusty-rose min-w-[110px] text-right">
              {LABELS[values[s.key] - 1]}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            value={values[s.key]}
            onChange={e => onChange(s.key, Number(e.target.value))}
            className="
              w-full h-1 rounded appearance-none bg-border-col outline-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-[18px]
              [&::-webkit-slider-thumb]:h-[18px]
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-dusty-rose
              [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(200,137,122,0.4)]
              [&::-webkit-slider-thumb]:cursor-pointer
            "
          />
          <div className="flex justify-between text-[10.5px] text-light mt-1">
            <span>Not important</span>
            <span>Very important</span>
          </div>
        </div>
      ))}
    </div>
  )
}
