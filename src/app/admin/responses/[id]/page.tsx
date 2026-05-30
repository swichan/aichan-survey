import Link from 'next/link'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { submissions } from '@/db/schema'
import ResponseDetail from '@/components/ResponseDetail'

export const dynamic = 'force-dynamic'

export default async function ResponsePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numId = parseInt(id, 10)
  if (isNaN(numId)) notFound()

  const [row] = await db.select().from(submissions).where(eq(submissions.id, numId))
  if (!row) notFound()

  return (
    <div className="min-h-screen bg-cream font-sans p-8">
      <div className="max-w-[720px] mx-auto">
        <div className="mb-8">
          <Link
            href="/admin"
            className="text-[12px] text-light hover:text-charcoal transition-colors inline-flex items-center gap-1 mb-4"
          >
            ← Back to responses
          </Link>
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="font-serif text-3xl text-charcoal">Response #{row.id}</h1>
              <p className="text-[12px] text-light mt-1">
                {row.createdAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                {' · '}
                {row.createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>

        <ResponseDetail row={row} />
      </div>
    </div>
  )
}
