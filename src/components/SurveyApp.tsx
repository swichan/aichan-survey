'use client'

import CheckboxGroup from '@/components/CheckboxGroup'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'
import RadioGroup from '@/components/RadioGroup'
import SliderGroup from '@/components/SliderGroup'
import StyleGrid from '@/components/StyleGrid'
import SurveyHeader from '@/components/SurveyHeader'
import ThankYouScreen from '@/components/ThankYouScreen'
import { useSurveyForm } from '@/hooks/useSurveyForm'
import type {
  ColorPalette,
  DiscoverSource,
  Occasion,
  PainPoint,
  StyleAesthetic,
} from '@/types/survey'

const INPUT_CLS = [
  'w-full border-[1.5px] border-border-col rounded-[10px] px-[18px] py-[14px]',
  'font-sans text-[14px] text-charcoal bg-warm-white transition-all duration-200 outline-none',
  'focus:border-blush focus:shadow-[0_0_0_3px_rgba(200,137,122,0.12)] focus:bg-white placeholder:text-light',
].join(' ')

export default function SurveyApp() {
  const {
    formData,
    setField,
    toggleCheckbox,
    setSlider,
    isSubmitted,
    isSubmitting,
    progress,
    highlightedCard,
    submitForm,
    registerCard,
  } = useSurveyForm()

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-warm-white relative overflow-hidden flex flex-col items-center">
        <div className="w-full absolute top-0 left-0 z-50">
          <ProgressBar progress={100} />
        </div>
        <div className="max-w-230 w-full mx-auto px-4 py-15 mt-10 mb-10 font-sans bg-cream min-h-[80vh] shadow-xl shadow-charcoal/5 border border-black/3 rounded-2xl relative z-10">
          <ThankYouScreen visible />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-white relative overflow-hidden flex flex-col">
      <div className="w-full fixed top-0 left-0 z-50">
        <ProgressBar progress={progress} />
      </div>

      <div className="max-w-230 w-full mx-auto px-4 pt-15 pb-20 mt-10 mb-10 relative z-10 font-sans bg-cream min-h-[90vh] shadow-xl shadow-charcoal/5 border border-black/3 rounded-2xl">
        <SurveyHeader />

        {/* Q1: Age */}
        <QuestionCard
          ref={registerCard('age')}
          number="01 · Demographics · 基本情報"
          label="What is your age group?"
          sub="年齢層はどれですか？"
          required
          highlighted={highlightedCard === 'age'}
        >
          <RadioGroup
            name="age"
            value={formData.age}
            onChange={(v) => setField('age', v as typeof formData.age)}
            options={[
              { value: 'under18',    label: 'Under 18 · 18歳未満' },
              { value: '18-24',      label: '18-24' },
              { value: '25-34',      label: '25-34' },
              { value: '35-44',      label: '35-44' },
              { value: '45+',        label: '45 and above · 45歳以上' },
              { value: 'prefer-not', label: 'Prefer not to say · 回答しない' },
            ]}
          />
        </QuestionCard>

        {/* Q2: Body Profile */}
        <QuestionCard
          ref={registerCard('body')}
          number="02 · Body Profile · 体型情報"
          label="What are your usual clothing sizes?"
          sub="普段よく着るサイズを教えてください。完全に匿名です。"
          hint="💡 This helps us with size range planning. Completely anonymous — no personal data is stored."
          highlighted={highlightedCard === 'body'}
        >
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-[12px] text-mid mb-[6px] font-medium">Top size · トップスのサイズ</div>
              <RadioGroup
                name="top-size"
                value={formData.topSize}
                onChange={(v) => setField('topSize', v as typeof formData.topSize)}
                row
                options={['XS', 'S', 'M', 'L', 'XL', 'XXL+'].map(v => ({ value: v, label: v }))}
              />
              <div className="mt-[10px]">
                <div className="text-[11.5px] text-light mb-[6px] italic">
                  Not sure about sizing? Type it in any format · サイズ表記が分からない場合はこちらへ
                </div>
                <input type="text" placeholder="e.g. 38, size 8, US 6 …" value={formData.topSizeText}
                  onChange={(e) => setField('topSizeText', e.target.value)} className={INPUT_CLS} />
              </div>
            </div>

            <div>
              <div className="text-[12px] text-mid mb-[6px] font-medium">Bottom size · ボトムスのサイズ（waist, cm）</div>
              <RadioGroup
                name="bot-size"
                value={formData.botSize}
                onChange={(v) => setField('botSize', v as typeof formData.botSize)}
                row
                options={[
                  { value: '60-',   label: '60 or below' },
                  { value: '61-68', label: '61-68' },
                  { value: '69-76', label: '69-76' },
                  { value: '77-84', label: '77-84' },
                  { value: '85+',   label: '85+' },
                ]}
              />
              <div className="mt-[10px]">
                <div className="text-[11.5px] text-light mb-[6px] italic">
                  Not sure about cm? Type your waist size in any format · ウエストサイズが分からない場合はこちらへ
                </div>
                <input type="text" placeholder="e.g. 28 inches, W26, size 10 …" value={formData.botSizeText}
                  onChange={(e) => setField('botSizeText', e.target.value)} className={INPUT_CLS} />
              </div>
            </div>

            <div>
              <div className="text-[12px] text-mid mb-[6px] font-medium">Bust · バストサイズ (cm)</div>
              <RadioGroup
                name="bust"
                value={formData.bust}
                onChange={(v) => setField('bust', v as typeof formData.bust)}
                row
                options={[
                  { value: 'under80', label: 'Under 80' },
                  { value: '80-85',   label: '80-85' },
                  { value: '86-90',   label: '86-90' },
                  { value: '91-96',   label: '91-96' },
                  { value: '97+',     label: '97+' },
                ]}
              />
              <div className="mt-[10px]">
                <div className="text-[11.5px] text-light mb-[6px] italic">
                  Not sure about cm? Type your size in any format · サイズ表記が分からない場合はこちらへ
                </div>
                <input type="text" placeholder="e.g. 34B, 36C, size S, medium …" value={formData.bustText}
                  onChange={(e) => setField('bustText', e.target.value)} className={INPUT_CLS} />
              </div>
            </div>

            <div>
              <div className="text-[12px] text-mid mb-[6px] font-medium">Height range · 身長</div>
              <RadioGroup
                name="height"
                value={formData.height}
                onChange={(v) => setField('height', v as typeof formData.height)}
                row
                options={[
                  { value: 'under155', label: 'Under 155cm' },
                  { value: '156-162',  label: '156-162cm' },
                  { value: '163-169',  label: '163-169cm' },
                  { value: '170+',     label: '170cm+' },
                ]}
              />
              <div className="mt-[10px]">
                <div className="text-[11.5px] text-light mb-[6px] italic">
                  Not sure about cm? Type your height in any format · 身長の表記が分からない場合はこちらへ
                </div>
                <input type="text" placeholder={`e.g. 5'4", 163 cm, 5 feet 6 …`} value={formData.heightText}
                  onChange={(e) => setField('heightText', e.target.value)} className={INPUT_CLS} />
              </div>
            </div>
          </div>
        </QuestionCard>

        {/* Q3: Lifestyle */}
        <QuestionCard
          ref={registerCard('lifestyle')}
          number="03 · Lifestyle · ライフスタイル"
          label="Which best describes your day-to-day lifestyle?"
          sub="日常のライフスタイルに近いものを選んでください。"
          required
          highlighted={highlightedCard === 'lifestyle'}
        >
          <RadioGroup
            name="lifestyle"
            value={formData.lifestyle}
            onChange={(v) => setField('lifestyle', v as typeof formData.lifestyle)}
            options={[
              { value: 'student',  label: '🎓 Student · 学生' },
              { value: 'office',   label: '💼 Office / Corporate job · 会社員・オフィスワーク' },
              { value: 'creative', label: '🎨 Creative / Freelance · クリエイター・フリーランス' },
              { value: 'active',   label: '🏃 Active / Outdoorsy · アクティブ・アウトドア派' },
              { value: 'homebody', label: '🏠 Work-from-home / Homebody · 在宅ワーク・インドア派' },
              { value: 'social',   label: '✨ Social / Goes out often · よく外出する・社交的' },
              { value: 'mix',      label: '🔀 Mix of everything · いろいろ' },
            ]}
          />
        </QuestionCard>

        {/* Q4: Occasions */}
        <QuestionCard
          ref={registerCard('occasions')}
          number="04 · Occasions · シーン"
          label="What occasions do you most often dress for?"
          sub="よく着用するシーンを選んでください（複数選択可）。"
          hint="Select all that apply · あてはまるものをすべて選択"
          required
          highlighted={highlightedCard === 'occasions'}
        >
          <CheckboxGroup
            name="occasions"
            value={formData.occasions}
            onChange={(v) => toggleCheckbox('occasions', v as Occasion)}
            grid
            options={[
              { value: 'everyday', label: 'Everyday errands · 日常' },
              { value: 'college',  label: 'College / Campus · 大学' },
              { value: 'work',     label: 'Work / Office · 職場' },
              { value: 'gym',      label: 'Gym / Workout · ジム・運動' },
              { value: 'dates',    label: 'Dates / Outings · デート・お出かけ' },
              { value: 'parties',  label: 'Parties / Events · パーティ・イベント' },
              { value: 'travel',   label: 'Travel · 旅行' },
              { value: 'home',     label: 'Lounging at home · 家でくつろぐ' },
            ]}
          />
        </QuestionCard>

        {/* Q5: Style Identity */}
        <QuestionCard
          ref={registerCard('styles')}
          number="05 · Style Identity · スタイル"
          label="Which styles resonate with you?"
          sub="好きなスタイルを選んでください（複数選択可、最大3つ）。"
          hint="Pick up to 3 · 最大3つまで"
          required
          highlighted={highlightedCard === 'styles'}
        >
          <StyleGrid
            value={formData.styles}
            onChange={(v) => toggleCheckbox('styles', v as StyleAesthetic, 3)}
          />
        </QuestionCard>

        {/* Q6: Colour Palette */}
        <QuestionCard
          ref={registerCard('colors')}
          number="06 · Colour Palette · カラー"
          label="Which colour palettes do you usually reach for?"
          sub="よく選ぶカラーパレットを教えてください（最大3つ）。"
          hint="Pick up to 3 · 最大3つまで"
          required
          highlighted={highlightedCard === 'colors'}
        >
          <CheckboxGroup
            name="colors"
            value={formData.colors}
            onChange={(v) => toggleCheckbox('colors', v as ColorPalette, 3)}
            grid
            max={3}
            options={[
              { value: 'neutrals',     label: '🩶 Neutrals (white, black, beige, grey)' },
              { value: 'pastels',      label: '🌸 Pastels & Soft Tones' },
              { value: 'earth',        label: '🌿 Earth Tones (brown, rust, olive, camel)' },
              { value: 'bold',         label: '❤️ Bold & Bright Colors' },
              { value: 'dark',         label: '🌑 Dark & Moody (navy, burgundy, forest green)' },
              { value: 'prints',       label: '🌺 Prints & Patterns' },
              { value: 'depends-color',label: '✨ No fixed palette' },
            ]}
          />
        </QuestionCard>

        {/* Q7: Priorities */}
        <QuestionCard
          ref={registerCard('priorities')}
          number="07 · Priorities · 重視するポイント"
          label="When buying clothes, how important are these factors?"
          sub="服を買うときの優先度を教えてください（スライダーで評価）。"
          required
        >
          <SliderGroup values={formData.priorities} onChange={setSlider} />
        </QuestionCard>

        {/* Q8: Shopping Habits */}
        <QuestionCard
          ref={registerCard('shopping')}
          number="08 · Shopping Habits · 購買行動"
          label="How do you usually discover and shop for clothes?"
          sub="普段どのように服を探し、購入しますか？"
        >
          <div className="flex flex-col gap-5">
            <div>
              <div className="text-[12px] text-mid mb-2 font-medium">
                Where do you discover new styles? · どこでスタイルを発見しますか？
              </div>
              <CheckboxGroup
                name="discover"
                value={formData.discover}
                onChange={(v) => toggleCheckbox('discover', v as DiscoverSource)}
                grid
                options={[
                  { value: 'instagram', label: '📸 Instagram' },
                  { value: 'pinterest', label: '📌 Pinterest' },
                  { value: 'tiktok',    label: '🎵 TikTok' },
                  { value: 'friends',   label: '👯 Friends / Real life' },
                  { value: 'store',     label: '🏪 In-store browsing' },
                  { value: 'youtube',   label: '▶️ YouTube / Lookbooks' },
                ]}
              />
            </div>
            <div>
              <div className="text-[12px] text-mid mb-2 font-medium">How do you usually buy? · 購入方法は？</div>
              <RadioGroup
                name="buy-how"
                value={formData.buyHow}
                onChange={(v) => setField('buyHow', v as typeof formData.buyHow)}
                options={[
                  { value: 'online-always', label: 'Mostly online · 主にオンライン' },
                  { value: 'store-always',  label: 'Mostly in-store · 主に店舗' },
                  { value: 'both',          label: 'Both equally · どちらも同じくらい' },
                ]}
              />
            </div>
            <div>
              <div className="text-[12px] text-mid mb-2 font-medium">Monthly spend on clothing · 月の服への支出（目安）</div>
              <RadioGroup
                name="spend"
                value={formData.spend}
                onChange={(v) => setField('spend', v as typeof formData.spend)}
                options={[
                  { value: 'under2k', label: 'Under ¥2,000 / ~$15' },
                  { value: '2k-5k',   label: '¥2,000-5,000 / $15-35' },
                  { value: '5k-10k',  label: '¥5,000-10,000 / $35-70' },
                  { value: '10k-20k', label: '¥10,000-20,000 / $70-140' },
                  { value: '20k+',    label: '¥20,000+ / $140+' },
                ]}
              />
            </div>
          </div>
        </QuestionCard>

        {/* Q9: Pain Points */}
        <QuestionCard
          ref={registerCard('pains')}
          number="09 · Pain Points · 困っていること"
          label="What frustrates you most when shopping for clothes?"
          sub="服を買うときに一番困ることは何ですか？"
          required
          highlighted={highlightedCard === 'pains'}
        >
          <CheckboxGroup
            name="pains"
            value={formData.pains}
            onChange={(v) => toggleCheckbox('pains', v as PainPoint)}
            options={[
              { value: 'sizing',         label: '📏 Inconsistent sizing across brands · ブランドによってサイズが違う' },
              { value: 'quality',        label: '🪡 Poor fabric quality for the price · 値段のわりに生地が悪い' },
              { value: 'limited-styles', label: '😔 Limited style options · スタイルの選択肢が少ない' },
              { value: 'petite-tall',    label: "📐 Clothes don't fit my height / proportions · 身長・体型に合わない" },
              { value: 'sustainability', label: '🌱 Brands not being sustainable · 環境への配慮がない' },
              { value: 'photos-differ',  label: '📷 Looks different in real life vs photos · 写真と実物が違う' },
              { value: 'price',          label: '💸 Good styles are too expensive · 好きなスタイルが高すぎる' },
              { value: 'returns',        label: '🔁 Difficult returns / exchanges · 返品・交換が面倒' },
            ]}
          />
        </QuestionCard>

        {/* Q10: Open Feedback */}
        <QuestionCard
          ref={registerCard('feedback')}
          number="10 · Your Voice · ご意見"
          label="Anything else you'd love clothing brands to know?"
          sub="ブランドに伝えたいことがあれば、自由に書いてください。"
        >
          <textarea
            placeholder={'Share any thoughts, wishes, or ideas — we read every single response. ✨\nどんなことでも、ぜひ教えてください。'}
            value={formData.openFeedback}
            onChange={(e) => setField('openFeedback', e.target.value)}
            className={[INPUT_CLS, 'resize-y min-h-[100px]'].join(' ')}
          />
        </QuestionCard>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={submitForm}
            disabled={isSubmitting}
            className="group relative bg-charcoal text-white border-none rounded-full px-[56px] py-[18px] font-sans text-[14px] font-medium tracking-[0.08em] uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(44,36,32,0.25)] hover:-translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            <span className="absolute inset-0 bg-dusty-rose -translate-x-full group-hover:translate-x-0 transition-transform duration-[400ms] z-0" />
            <span className="relative z-10">
              {isSubmitting ? 'Submitting… 送信中…' : 'Submit Survey → 送信する'}
            </span>
          </button>
          <p className="mt-[14px] text-[12px] text-light">
            🔒 Completely anonymous · All responses are private and never shared · 完全匿名
          </p>
        </div>
      </div>
    </div>
  )
}
