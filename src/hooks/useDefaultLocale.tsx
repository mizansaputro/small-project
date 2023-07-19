import { useEffect } from "react";
import { useRouter } from "next/router";

import { isEmpty } from "@utils/validation";
import { ROUTES_PATH } from "@constants/routes";

export const useDefaultLocale = (): void => {
    const router = useRouter();
    const { asPath, defaultLocale, locale, pathname, query } = router;

    useEffect(() => {
        if (locale === defaultLocale && pathname !== "404" && isEmpty(query)) {
            router.push(`/${locale}${asPath}`, undefined, {
                locale: false,
                shallow: true,
            });
        }
    }, [locale, asPath]);
};
