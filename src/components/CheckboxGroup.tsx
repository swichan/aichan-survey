'use client'

interface Option {
  value: string
  label: string
}

interface Props {
  name: string
  options: Option[]
  value: string[]
  onChange: (value: string) => void
  grid?: boolean
  max?: number
}

export default function CheckboxGroup({ name, options, value, onChange, grid, max }: Props) {
  return (
    <div className={grid ? 'grid grid-cols-2 gap-[9px] max-[500px]:grid-cols-1' : 'flex flex-col gap-[9px]'}>
      {options.map(opt => {
        const checked = value.includes(opt.value)
        const atMax = max !== undefined && value.length >= max && !checked
        return (
          <label
            key={opt.value}
            className={[
              'flex items-center gap-[14px] cursor-pointer px-4 py-[13px]',
              'border-[1.5px] rounded-[10px] transition-all duration-200 text-[14px] select-none',
              atMax ? 'opacity-50 cursor-not-allowed' : '',
              checked
                ? 'border-dusty-rose bg-[#fdf0ed] text-deep-rose font-medium'
                : 'border-border-col bg-warm-white text-charcoal hover:border-blush hover:bg-[#fdf0ed] hover:translate-x-[3px]',
            ].join(' ')}
          >
            <span
              className={[
                'w-[18px] h-[18px] rounded-[5px] border-[1.5px] flex-shrink-0 relative transition-all duration-200',
                checked ? 'bg-dusty-rose border-dusty-rose' : 'bg-white border-blush',
              ].join(' ')}
            >
              {checked && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-white font-bold leading-none">
                  ✓
                </span>
              )}
            </span>
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => { if (!atMax) onChange(opt.value) }}
              className="sr-only"
            />
            {opt.label}
          </label>
        )
      })}
    </div>
  )
}
