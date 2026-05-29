export default function SurveyHeader() {
  return (
    <div className="text-center mb-[52px] animate-fade-up">
      <span className="block text-[11px] font-medium tracking-[0.25em] uppercase text-dusty-rose mb-4">
        ファッション＆スタイル調査
      </span>
      <h1 className="font-serif text-[clamp(34px,7vw,50px)] font-light leading-[1.15] text-charcoal mb-2">
        Style &amp; Clothing<br />
        <em className="italic text-dusty-rose">Preference Survey</em>
      </h1>
      <div className="w-12 h-px bg-accent mx-auto my-[22px]" />
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
