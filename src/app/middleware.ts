import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/api') || pathname === '/login') {
    return NextResponse.next()
  }

  try {
    if (!token) throw new Error('No token')
    jwt.verify(token, SECRET_KEY)
    return NextResponse.next()
  } catch (err) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}