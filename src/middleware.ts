// import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    // env 확인
    if (!process.env.API_URL) {
      console.error('API_URL is not defined');

      return NextResponse.next();
    }

    const { pathname } = request.nextUrl;

    // API 요청 설정
    if (pathname.startsWith('/api/')) {
      const newPath = pathname.replace('/api/', '/'); // 임의로 붙인 api 글자 제거

      // 새로운 요청 URL 생성
      const apiUrl = new URL(`${process.env.API_URL}${newPath}`);

      const accessToken = request.cookies.get('accessToken');

      // rewrite 응답 생성
      const response = NextResponse.rewrite(apiUrl, {
        headers: {
          ...request.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken?.value}`,
        },
      });

      return response;
    }

    return NextResponse.next();
  } catch (error) {
    console.error('[Middleware Error]', {
      path: request.nextUrl.pathname,
      error: error instanceof Error ? error.message : error,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/:path*',
    // 정적 리소스 제외
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icons|fonts|images).*)',
  ],
};
