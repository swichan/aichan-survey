import { useRef, useState } from 'react'
import { defaultFormData, type FormData, type PriorityKey } from '@/types/survey'
import { submitSurvey } from '@/app/actions/submit'

export function useSurveyForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  function setField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  function toggleCheckbox<T extends string>(
    key: keyof FormData,
    value: T,
    max?: number,
  ) {
    setFormData(prev => {
      const current = prev[key] as T[]
      const exists = current.includes(value)
      if (exists) {
        return { ...prev, [key]: current.filter(v => v !== value) }
      }
      if (max !== undefined && current.length >= max) return prev
      return { ...prev, [key]: [...current, value] }
    })
  }

  function setSlider(key: PriorityKey, value: number) {
    setFormData(prev => ({
      ...prev,
      priorities: { ...prev.priorities, [key]: value as 1 | 2 | 3 | 4 | 5 },
    }))
  }

  const progress = (() => {
    const checks = [
      formData.age !== null,
      formData.topSize !== null || formData.topSizeText.trim().length > 0,
      formData.botSize !== null || formData.botSizeText.trim().length > 0,
      formData.bust !== null || formData.bustText.trim().length > 0,
      formData.height !== null || formData.heightText.trim().length > 0,
      formData.lifestyle !== null,
      formData.occasions.length > 0,
      formData.styles.length > 0,
      formData.fits.length > 0,
      formData.colors.length > 0,
      formData.pains.length > 0,
    ]
    return Math.round((checks.filter(Boolean).length / checks.length) * 100)
  })()

  async function submitForm() {
    const required: Array<{ key: string; ok: boolean }> = [
      { key: 'age',       ok: formData.age !== null },
      { key: 'lifestyle', ok: formData.lifestyle !== null },
      { key: 'occasions', ok: formData.occasions.length > 0 },
      { key: 'styles',    ok: formData.styles.length > 0 },
      { key: 'colors',    ok: formData.colors.length > 0 },
      { key: 'pains',     ok: formData.pains.length > 0 },
    ]

    const first = required.find(r => !r.ok)
    if (first) {
      const el = cardRefs.current[first.key]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setHighlightedCard(first.key)
        setTimeout(() => setHighlightedCard(null), 1500)
      }
      return
    }

    setIsSubmitting(true)
    try {
      await submitSurvey(formData)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setIsSubmitting(false)
    }
  }

  function registerCard(key: string) {
    return (el: HTMLDivElement | null) => {
      cardRefs.current[key] = el
    }
  }

  return {
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
  }
}
