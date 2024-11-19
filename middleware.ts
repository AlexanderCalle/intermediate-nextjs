import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { COOKIE_NAME } from "./utils/constants"

export function middleware(request: NextRequest) {
  // NOTE: This is a middleware function
  // It runs before the page is rendered
  // It can be used to check if a user is authenticated
  // and redirect them to the signin page if they are not
  // or to get data that is needed on every page
  // like the current user

  if(request.nextUrl.pathname.startsWith('/dashboard')) {
    if(!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }
  }

  if(request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*', '/'
  ]
}