import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Headers essenciais para CSS e JavaScript
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  // Headers para arquivos estáticos (CSS, JS, imagens)
  if (request.nextUrl.pathname.startsWith('/_next/') || 
      request.nextUrl.pathname.endsWith('.css') || 
      request.nextUrl.pathname.endsWith('.js') ||
      request.nextUrl.pathname.endsWith('.png') ||
      request.nextUrl.pathname.endsWith('.jpg') ||
      request.nextUrl.pathname.endsWith('.jpeg') ||
      request.nextUrl.pathname.endsWith('.gif') ||
      request.nextUrl.pathname.endsWith('.svg')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Content-Type', getContentType(request.nextUrl.pathname))
  }

  return response
}

function getContentType(pathname: string): string {
  if (pathname.endsWith('.css')) return 'text/css'
  if (pathname.endsWith('.js')) return 'application/javascript'
  if (pathname.endsWith('.png')) return 'image/png'
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg'
  if (pathname.endsWith('.gif')) return 'image/gif'
  if (pathname.endsWith('.svg')) return 'image/svg+xml'
  return 'text/html'
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/_next/static/:path*',
    '/_next/image/:path*',
  ],
}
