export default function SurveyHeader() {
  return (
    <div className="text-center mb-[52px] animate-fade-up">
      {/* Small flower emblem */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto mb-4">
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.85" />
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(60 18 18)" />
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(120 18 18)" />
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(180 18 18)" />
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(240 18 18)" />
        <ellipse cx="18" cy="8" rx="4" ry="8" fill="var(--color-blush)" fillOpacity="0.75" transform="rotate(300 18 18)" />
        <circle cx="18" cy="18" r="6" fill="var(--color-accent)" fillOpacity="0.8" />
        <circle cx="18" cy="18" r="2.5" fill="var(--color-dusty-rose)" fillOpacity="0.7" />
      </svg>
      <span className="block text-[11px] font-medium tracking-[0.25em] uppercase text-dusty-rose mb-4">
        ファッション＆スタイル調査
      </span>
      <h1 className="font-serif text-[clamp(34px,7vw,50px)] font-light leading-[1.15] text-charcoal mb-2">
        Style &amp; Clothing<br />
        <em className="italic text-dusty-rose">Preference Survey</em>
      </h1>
      <div className="flex items-center justify-center gap-2 my-5.5">
        <svg width="48" height="10" viewBox="0 0 48 10" fill="none">
          <path d="M 0 5 Q 12 1 24 5 Q 36 9 48 5" stroke="var(--color-accent)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>
        <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-70" />
        <svg width="48" height="10" viewBox="0 0 48 10" fill="none" style={{ transform: 'scaleX(-1)' }}>
          <path d="M 0 5 Q 12 1 24 5 Q 36 9 48 5" stroke="var(--color-accent)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <p className="text-[14.5px] font-light text-mid leading-[1.75] max-w-[440px] mx-auto">
        Help us understand what you actually wear and love — so we can design clothes that truly fit your life.<br />
        <span className="text-[12.5px] text-light">より良い服作りのため、あなたのスタイルを教えてください。</span>
      </p>
      <div className="flex gap-2 justify-center mt-[18px] flex-wrap">
        {['🔒 Anonymous · 匿名', '⏱ ~5 min', '👗 Fashion'].map(t => (
          <span
            key={t}
            className="text-[11.5px] text-dusty-rose bg-[#f5e8e4] border border-blush rounded-full px-[14px] py-[5px]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
