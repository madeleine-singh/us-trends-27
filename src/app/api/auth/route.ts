import { NextResponse } from 'next/server'

const COOKIE_NAME = 'site-auth'

export async function POST(request: Request) {
  const { password } = await request.json()
  const sitePassword = process.env.SITE_PASSWORD

  if (!sitePassword || password !== sitePassword) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, sitePassword, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  })
  return response
}
