'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Invalid password')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center font-sans">
      <div className="bg-card border border-border-col rounded-2xl p-12 w-full max-w-sm shadow-[0_8px_32px_rgba(44,36,32,0.08)]">
        <h1 className="font-serif text-2xl text-charcoal mb-2 text-center">Admin Access</h1>
        <p className="text-[12px] text-light text-center mb-8">Survey responses dashboard</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            className="w-full border-[1.5px] border-border-col rounded-[10px] px-4 py-3 text-[14px] text-charcoal bg-warm-white outline-none focus:border-blush transition-colors"
          />
          {error && <p className="text-[13px] text-dusty-rose">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="bg-charcoal text-white rounded-full py-3 text-[14px] font-medium tracking-wide transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
