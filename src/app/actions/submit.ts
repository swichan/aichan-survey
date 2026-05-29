'use server'

import { db } from '@/db'
import { submissions } from '@/db/schema'
import type { FormData } from '@/types/survey'

export async function submitSurvey(data: FormData) {
  await db.insert(submissions).values({
    age: data.age,
    topSize: data.topSize,
    topSizeText: data.topSizeText,
    botSize: data.botSize,
    botSizeText: data.botSizeText,
    bust: data.bust,
    bustText: data.bustText,
    height: data.height,
    heightText: data.heightText,
    lifestyle: data.lifestyle,
    occasions: data.occasions,
    styles: data.styles,
    fits: data.fits,
    colors: data.colors,
    priorities: data.priorities,
    discover: data.discover,
    buyHow: data.buyHow,
    spend: data.spend,
    pains: data.pains,
    openFeedback: data.openFeedback,
  })
}
