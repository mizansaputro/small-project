import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE_PATTERN = /\.(.*)$/;

export async function middleware(request: NextRequest) {
    const { pathname, locale } = request.nextUrl;

    if (
        pathname.startsWith("/_next/image") ||
        pathname.startsWith("/api") ||
        PUBLIC_FILE_PATTERN.test(pathname)
    )
        return NextResponse.next();

    if (locale === "default") {
        const locale = request.cookies.get("NEXT_LOCALE") || "id";

        return NextResponse.redirect(
            new URL(
                `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
                request.url,
            ),
        );
    }

    return undefined;
}
