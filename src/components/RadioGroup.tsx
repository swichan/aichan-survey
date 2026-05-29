'use client'

interface Option {
  value: string
  label: string
}

interface Props {
  name: string
  options: Option[]
  value: string | null
  onChange: (value: string) => void
  row?: boolean
}

export default function RadioGroup({ name, options, value, onChange, row }: Props) {
  return (
    <div className={row ? 'flex flex-wrap gap-2' : 'flex flex-col gap-[9px]'}>
      {options.map(opt => {
        const checked = value === opt.value
        return (
          <label
            key={opt.value}
            className={[
              'flex items-center gap-[14px] cursor-pointer px-4 py-[13px]',
              'border-[1.5px] rounded-[10px] transition-all duration-200 text-[14px] select-none',
              row ? 'flex-1 min-w-[120px] justify-center' : '',
              checked
                ? 'border-dusty-rose bg-[#fdf0ed] text-deep-rose font-medium'
                : 'border-border-col bg-warm-white text-charcoal hover:border-blush hover:bg-[#fdf0ed] hover:translate-x-[3px]',
            ].join(' ')}
          >
            <span
              className={[
                'w-[18px] h-[18px] rounded-full border-[1.5px] flex-shrink-0 relative transition-all duration-200',
                checked ? 'bg-dusty-rose border-dusty-rose' : 'bg-white border-blush',
              ].join(' ')}
            >
              {checked && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white rounded-full" />
              )}
            </span>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        )
      })}
    </div>
  )
}
