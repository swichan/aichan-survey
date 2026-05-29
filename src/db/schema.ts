import { pgTable, serial, timestamp, text, jsonb } from 'drizzle-orm/pg-core'
import type { PriorityKey } from '@/types/survey'

export const submissions = pgTable('submissions', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  age: text('age'),
  topSize: text('top_size'),
  topSizeText: text('top_size_text').default(''),
  botSize: text('bot_size'),
  botSizeText: text('bot_size_text').default(''),
  bust: text('bust'),
  bustText: text('bust_text').default(''),
  height: text('height'),
  heightText: text('height_text').default(''),
  lifestyle: text('lifestyle'),
  occasions: text('occasions').array(),
  styles: text('styles').array(),
  fits: text('fits').array(),
  colors: text('colors').array(),
  priorities: jsonb('priorities').$type<Record<PriorityKey, 1 | 2 | 3 | 4 | 5>>(),
  discover: text('discover').array(),
  buyHow: text('buy_how'),
  spend: text('spend'),
  pains: text('pains').array(),
  openFeedback: text('open_feedback').default(''),
})
