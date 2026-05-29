export type AgeGroup =
  | 'under18' | '18-24' | '25-34' | '35-44' | '45+' | 'prefer-not'

export type TopSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL+'

export type BotSize = '60-' | '61-68' | '69-76' | '77-84' | '85+'

export type BustSize =
  | 'under80' | '80-85' | '86-90' | '91-96' | '97+' | 'prefer-not-bust'

export type HeightRange = 'under155' | '156-162' | '163-169' | '170+'

export type Lifestyle =
  | 'student' | 'office' | 'creative' | 'active' | 'homebody' | 'social' | 'mix'

export type Occasion =
  | 'everyday' | 'college' | 'work' | 'gym'
  | 'dates' | 'parties' | 'travel' | 'home'

export type StyleAesthetic =
  | 'cottagecore' | 'coquette' | 'quiet-luxury' | 'athleisure'
  | 'minimalist' | 'tomboyish' | 'techwear' | 'formal' | 'traditional'

export type FitPreference =
  | 'bodycon' | 'slim' | 'straight' | 'relaxed'
  | 'oversized' | 'flowy' | 'structured' | 'depends'

export type ColorPalette =
  | 'neutrals' | 'pastels' | 'earth' | 'bold'
  | 'dark' | 'prints' | 'depends-color'

export type PriorityKey =
  | 'comfort' | 'sizing' | 'price' | 'fabric' | 'trend' | 'sustainability'

export type DiscoverSource =
  | 'instagram' | 'pinterest' | 'tiktok' | 'friends' | 'store' | 'youtube'

export type BuyMethod = 'online-always' | 'store-always' | 'both'

export type SpendRange = 'under2k' | '2k-5k' | '5k-10k' | '10k-20k' | '20k+'

export type PainPoint =
  | 'sizing' | 'quality' | 'limited-styles' | 'petite-tall'
  | 'sustainability' | 'photos-differ' | 'price' | 'returns'

export interface FormData {
  age: AgeGroup | null
  topSize: TopSize | null
  topSizeText: string
  botSize: BotSize | null
  botSizeText: string
  bust: BustSize | null
  bustText: string
  height: HeightRange | null
  heightText: string
  lifestyle: Lifestyle | null
  occasions: Occasion[]
  styles: StyleAesthetic[]
  fits: FitPreference[]
  colors: ColorPalette[]
  priorities: Record<PriorityKey, 1 | 2 | 3 | 4 | 5>
  discover: DiscoverSource[]
  buyHow: BuyMethod | null
  spend: SpendRange | null
  pains: PainPoint[]
  openFeedback: string
}

export const defaultFormData: FormData = {
  age: null,
  topSize: null,
  topSizeText: '',
  botSize: null,
  botSizeText: '',
  bust: null,
  bustText: '',
  height: null,
  heightText: '',
  lifestyle: null,
  occasions: [],
  styles: [],
  fits: [],
  colors: [],
  priorities: {
    comfort: 3,
    sizing: 3,
    price: 3,
    fabric: 3,
    trend: 3,
    sustainability: 3,
  },
  discover: [],
  buyHow: null,
  spend: null,
  pains: [],
  openFeedback: '',
}
