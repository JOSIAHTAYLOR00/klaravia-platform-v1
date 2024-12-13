// middleware.ts
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

const protectedRoutes = [
  '/user-dash',
  '/bill-upload',
  '/transition'
]

const publicOnlyRoutes = [
  '/login',
  '/signup',
  '/forgot-password'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isPublicOnlyRoute = publicOnlyRoutes.some(route => pathname.startsWith(route))

  // Check for the presence of Cognito cookies that indicate authentication
  const cognitoCookies = request.cookies
    .getAll()
    .filter(cookie => cookie.name.startsWith('CognitoIdentityServiceProvider'))

  // If we have any Cognito cookies, user is likely authenticated
  const isAuthenticated = cognitoCookies.length > 0

  if (isProtectedRoute && !isAuthenticated) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.set('redirectUrl', pathname, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    return response
  }

  if (isPublicOnlyRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/user-dash', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}