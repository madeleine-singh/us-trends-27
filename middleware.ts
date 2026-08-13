import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'site-auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get(COOKIE_NAME)
  const sitePassword = process.env.SITE_PASSWORD

  if (sitePassword && cookie?.value === sitePassword) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  if (pathname !== '/') loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|brand/).*)'],
}
