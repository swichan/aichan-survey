import { db } from '@/db'
import { submissions } from '@/db/schema'
import { desc } from 'drizzle-orm'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const rows = await db.select().from(submissions).orderBy(desc(submissions.createdAt))

  return (
    <div className="min-h-screen bg-cream font-sans p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <h1 className="font-serif text-3xl text-charcoal">Survey Responses</h1>
            <p className="text-[12px] text-light mt-1">aichan · Style & Clothing Preference Survey</p>
          </div>
          <span className="text-sm text-mid bg-card border border-border-col px-3 py-1 rounded-full">
            {rows.length} {rows.length === 1 ? 'response' : 'responses'}
          </span>
        </div>

        <div className="bg-card border border-border-col rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-col bg-warm-white text-left">
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">#</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Date</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Age</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Lifestyle</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Styles</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Colors</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Pain Points</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Spend</th>
                  <th className="px-4 py-3 text-[11px] font-medium tracking-wide uppercase text-light">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`border-b border-border-col hover:bg-[#fdf9f6] transition-colors ${i === rows.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <td className="px-4 py-3 text-light text-[12px]">{row.id}</td>
                    <td className="px-4 py-3 text-mid whitespace-nowrap text-[12px]">
                      {row.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-4 py-3 text-charcoal">{row.age ?? '—'}</td>
                    <td className="px-4 py-3 text-charcoal">{row.lifestyle ?? '—'}</td>
                    <td className="px-4 py-3 text-charcoal max-w-[160px]">
                      <span className="line-clamp-2">{row.styles?.join(', ') ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3 text-charcoal max-w-[140px]">
                      <span className="line-clamp-2">{row.colors?.join(', ') ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3 text-charcoal max-w-[180px]">
                      <span className="line-clamp-2">{row.pains?.join(', ') ?? '—'}</span>
                    </td>
                    <td className="px-4 py-3 text-charcoal whitespace-nowrap">{row.spend ?? '—'}</td>
                    <td className="px-4 py-3 text-mid max-w-[200px]">
                      <span className="line-clamp-2 text-[12px]">{row.openFeedback || '—'}</span>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-16 text-center text-light">
                      No responses yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
