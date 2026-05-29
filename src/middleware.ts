import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COOKIE_NAME, getExpectedToken } from '@/lib/auth'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  const cookie = request.cookies.get(COOKIE_NAME)
  const expected = getExpectedToken(process.env.ADMIN_PASSWORD ?? '')

  if (!cookie || cookie.value !== expected) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
