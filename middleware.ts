import { NextRequest, NextResponse } from 'next/server'

const AUTH_COOKIE_NAME = 'prototype_auth'

function isStaticAsset(pathname: string) {
  return /\.[a-zA-Z0-9]+$/.test(pathname)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname === '/login' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    isStaticAsset(pathname)
  ) {
    return NextResponse.next()
  }

  const isAuthed = Boolean(request.cookies.get(AUTH_COOKIE_NAME)?.value)
  if (!isAuthed) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
