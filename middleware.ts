import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const userCookie = req.cookies.get("user");

  const userType = getUserType(userCookie);

  /**
   * if user is not registered, opens the app the app for the first time
   */

  // if (
  //     userType === 'new' &&
  //     (pathname === '/' || pathname.startsWith('/')) &&
  //     !pathname.includes('language')
  // ) {
  //     return NextResponse.redirect(new URL('/user/language', req.url));
  // }
  // if (
  //     (pathname.includes('/user/welcome') ||
  //         pathname.includes('/user/guide')) &&
  //     userType === 'existing'
  // ) {
  //     return NextResponse.redirect(new URL('/home', req.url));
  // }
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const res = NextResponse.next();

  return res;
}

function getUserType(
  userCookie: { value: string } | undefined
): "new" | "existing" {
  if (!userCookie) {
    return "new";
  }

  try {
    const user = JSON.parse(userCookie.value);

    if (user?.userId) {
      return "existing";
    }
    return "new";
  } catch (error) {
    return "new";
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
