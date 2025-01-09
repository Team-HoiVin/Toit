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
    const accessToken = request.cookies.get('accessToken');

    // API 요청 설정
    if (pathname.startsWith('/api/')) {
      const newPath = pathname.replace('/api/', '/'); // 임의로 붙인 api 글자 제거

      // 새로운 요청 URL 생성
      const apiUrl = new URL(`${process.env.API_URL}${newPath}`);

      // rewrite 응답 생성
      const response = NextResponse.rewrite(apiUrl, {
        headers: {
          ...request.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken?.value}`,
        },
      });

      return response;
    } else {
      /**
       * route group으로 묶어서 처리하는 방법은 아직 까지는 next.js에서 지원하지 않음.
       * https://github.com/vercel/next.js/discussions/44635 (참고)
       */

      const privateRoutes = ['/private-test']; // 회원 전용 접근 페이지
      const publicRoutes = ['/login', '/signup']; // 비회원 전용 접근 페이지
      const isPrivateRoute = privateRoutes.includes(pathname);
      const isPublicRoute = publicRoutes.includes(pathname);

      if (isPublicRoute) {
        // 비회원 페이지 접근
        if (accessToken) {
          // 로그인 상태일 경우 메인 페이지로 이동
          return NextResponse.redirect(new URL('/', request.url));
        }

        return NextResponse.next();
      } else if (isPrivateRoute) {
        // 회원 페이지 접근
        if (!accessToken) {
          // 로그인 상태가 아닐 경우 로그인 페이지로 이동
          return NextResponse.redirect(new URL('/login', request.url));
        }

        return NextResponse.next();
      } else {
        // 모든 사용자 접근 페이지
        return NextResponse.next();
      }
    }
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
