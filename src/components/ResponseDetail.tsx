import type { submissions } from '@/db/schema'
import type { InferSelectModel } from 'drizzle-orm'

type Submission = InferSelectModel<typeof submissions>

const LABELS: Record<string, string> = {
  // age
  under18: 'Under 18',
  '18-24': '18-24',
  '25-34': '25-34',
  '35-44': '35-44',
  '45+': '45+',
  'prefer-not': 'Prefer not to say',
  // top size
  XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', 'XXL+': 'XXL+',
  // bot size
  '60-': '60 or below',
  '61-68': '61-68',
  '69-76': '69-76',
  '77-84': '77-84',
  '85+': '85+',
  // bust
  under80: 'Under 80',
  '80-85': '80-85',
  '86-90': '86-90',
  '91-96': '91-96',
  '97+': '97+',
  'prefer-not-bust': 'Prefer not to say',
  // height
  under155: 'Under 155cm',
  '156-162': '156-162cm',
  '163-169': '163-169cm',
  '170+': '170cm+',
  // lifestyle
  student: 'Student',
  office: 'Office / Corporate',
  creative: 'Creative / Freelance',
  active: 'Active / Outdoorsy',
  homebody: 'Work-from-home / Homebody',
  social: 'Social / Goes out often',
  mix: 'Mix of everything',
  // occasions
  everyday: 'Everyday errands',
  college: 'College / Campus',
  work: 'Work / Office',
  gym: 'Gym / Workout',
  dates: 'Dates / Outings',
  parties: 'Parties / Events',
  travel: 'Travel',
  home: 'Lounging at home',
  // styles
  cottagecore: 'Cottagecore',
  coquette: 'Coquette',
  'quiet-luxury': 'Quiet Luxury',
  athleisure: 'Athleisure',
  minimalist: 'Minimalist',
  tomboyish: 'Tomboyish',
  techwear: 'Techwear',
  formal: 'Formal',
  traditional: 'Traditional',
  // fits
  bodycon: 'Bodycon',
  slim: 'Slim',
  straight: 'Straight',
  relaxed: 'Relaxed',
  oversized: 'Oversized',
  flowy: 'Flowy',
  structured: 'Structured',
  depends: 'Depends on outfit',
  // colors
  neutrals: 'Neutrals',
  pastels: 'Pastels & Soft Tones',
  earth: 'Earth Tones',
  bold: 'Bold & Bright',
  dark: 'Dark & Moody',
  prints: 'Prints & Patterns',
  'depends-color': 'No fixed palette',
  // discover
  instagram: 'Instagram',
  pinterest: 'Pinterest',
  tiktok: 'TikTok',
  friends: 'Friends / Real life',
  store: 'In-store browsing',
  youtube: 'YouTube / Lookbooks',
  // buy how
  'online-always': 'Mostly online',
  'store-always': 'Mostly in-store',
  both: 'Both equally',
  // spend
  under2k: 'Under ¥2,000 / ~$15',
  '2k-5k': '¥2,000-5,000 / $15-35',
  '5k-10k': '¥5,000-10,000 / $35-70',
  '10k-20k': '¥10,000-20,000 / $70-140',
  '20k+': '¥20,000+ / $140+',
  // pains
  sizing: 'Inconsistent sizing',
  quality: 'Poor fabric quality',
  'limited-styles': 'Limited style options',
  'petite-tall': "Doesn't fit height/proportions",
  sustainability: 'Not sustainable',
  'photos-differ': 'Looks different from photos',
  price: 'Good styles too expensive',
  returns: 'Difficult returns/exchanges',
}

const PRIORITY_LABELS: Record<string, string> = {
  comfort: 'Comfort',
  sizing: 'Sizing accuracy',
  price: 'Price',
  fabric: 'Fabric quality',
  trend: 'Trendiness',
  sustainability: 'Sustainability',
}

function label(key: string | null | undefined): string {
  if (!key) return '—'
  return LABELS[key] ?? key
}

function tags(arr: string[] | null | undefined): string {
  if (!arr || arr.length === 0) return '—'
  return arr.map(k => LABELS[k] ?? k).join(' · ')
}

function Dots({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-[3px] items-center">
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`w-[8px] h-[8px] rounded-full ${i <= value ? 'bg-blush' : 'bg-border-col'}`}
        />
      ))}
    </span>
  )
}

function Section({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-medium tracking-widest uppercase text-light bg-warm-white border border-border-col px-2 py-[3px] rounded-full">
        {number}
      </span>
      <span className="text-[11px] font-medium tracking-wide uppercase text-light">{title}</span>
    </div>
  )
}

function Row({ label: l, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-[7px] border-b border-border-col last:border-b-0">
      <span className="text-[12px] text-light w-[140px] shrink-0">{l}</span>
      <span className="text-[13px] text-charcoal">{value}</span>
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border-col rounded-2xl p-5 mb-4">
      {children}
    </div>
  )
}

export default function ResponseDetail({ row }: { row: Submission }) {
  return (
    <div className="max-w-[720px] mx-auto">

      <Card>
        <Section number="01" title="Demographics · 基本情報" />
        <Row label="Age group" value={label(row.age)} />
      </Card>

      <Card>
        <Section number="02" title="Body Profile · 体型情報" />
        <Row label="Top size" value={
          <span>{label(row.topSize)}{row.topSizeText ? <span className="text-light ml-2 text-[12px]">({row.topSizeText})</span> : null}</span>
        } />
        <Row label="Bottom size (waist)" value={
          <span>{label(row.botSize)}{row.botSizeText ? <span className="text-light ml-2 text-[12px]">({row.botSizeText})</span> : null}</span>
        } />
        <Row label="Bust" value={
          <span>{label(row.bust)}{row.bustText ? <span className="text-light ml-2 text-[12px]">({row.bustText})</span> : null}</span>
        } />
        <Row label="Height" value={
          <span>{label(row.height)}{row.heightText ? <span className="text-light ml-2 text-[12px]">({row.heightText})</span> : null}</span>
        } />
      </Card>

      <Card>
        <Section number="03" title="Lifestyle · ライフスタイル" />
        <Row label="Lifestyle" value={label(row.lifestyle)} />
      </Card>

      <Card>
        <Section number="04" title="Occasions · シーン" />
        <Row label="Occasions" value={tags(row.occasions)} />
      </Card>

      <Card>
        <Section number="05" title="Style Identity · スタイル" />
        <Row label="Styles" value={tags(row.styles)} />
        <Row label="Fit preference" value={tags(row.fits)} />
      </Card>

      <Card>
        <Section number="06" title="Colour Palette · カラー" />
        <Row label="Colours" value={tags(row.colors)} />
      </Card>

      <Card>
        <Section number="07" title="Priorities · 重視するポイント" />
        {row.priorities
          ? Object.entries(row.priorities).map(([key, val]) => (
              <Row
                key={key}
                label={PRIORITY_LABELS[key] ?? key}
                value={<span className="flex items-center gap-2"><Dots value={val} /><span className="text-[12px] text-light">{val}/5</span></span>}
              />
            ))
          : <p className="text-[13px] text-light">—</p>
        }
      </Card>

      <Card>
        <Section number="08" title="Shopping Habits · 購買行動" />
        <Row label="Discover via" value={tags(row.discover)} />
        <Row label="Buys" value={label(row.buyHow)} />
        <Row label="Monthly spend" value={label(row.spend)} />
      </Card>

      <Card>
        <Section number="09" title="Pain Points · 困っていること" />
        <Row label="Frustrations" value={tags(row.pains)} />
      </Card>

      <Card>
        <Section number="10" title="Open Feedback · ご意見" />
        <div className="text-[13px] text-charcoal leading-relaxed whitespace-pre-wrap">
          {row.openFeedback || <span className="text-light">—</span>}
        </div>
      </Card>

    </div>
  )
}
