'use client'

import { forwardRef, type ReactNode } from 'react'

interface Props {
  number: string
  label: string
  sub?: string
  hint?: string
  required?: boolean
  highlighted?: boolean
  children: ReactNode
}

const QuestionCard = forwardRef<HTMLDivElement, Props>(
  ({ number, label, sub, hint, required, highlighted, children }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'bg-card border rounded-2xl p-[40px_44px] mb-[26px] animate-fade-up',
          'transition-[box-shadow,border-color] duration-[250ms] relative overflow-hidden group',
          highlighted
            ? 'border-amber-400 ring-2 ring-amber-400'
            : 'border-border-col focus-within:border-blush focus-within:shadow-[0_8px_32px_rgba(200,137,122,0.1)]',
        ].join(' ')}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-l-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

        <span className="block text-[10.5px] font-medium tracking-[0.2em] uppercase text-light mb-[6px]">
          {number}
        </span>
        <div className="font-serif text-[21px] font-normal text-charcoal leading-[1.4] mb-1 flex items-center gap-[6px]">
          {label}
          {required && (
            <span className="inline-block w-[5px] h-[5px] bg-dusty-rose rounded-full relative top-[-2px] flex-shrink-0" />
          )}
        </div>
        {sub && (
          <p className="text-[12.5px] text-light mb-5 leading-[1.55] italic">{sub}</p>
        )}
        {hint && (
          <div className="text-[11.5px] text-blush bg-[#fdf5f3] border border-blush rounded-[6px] px-3 py-[7px] mb-[18px]">
            {hint}
          </div>
        )}
        {children}
      </div>
    )
  }
)

QuestionCard.displayName = 'QuestionCard'
export default QuestionCard
