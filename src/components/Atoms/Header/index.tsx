import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

interface Props {
    page: string;
}

const BaseHeader: FC<Props> = ({ page }) => {
    const { t } = useTranslation("common");
    const metaContentTitle = t(`seo-${page}-title`);
    return (
        <>
            <Head>
                <title>{metaContentTitle}</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
            </Head>
        </>
    );
};

export default BaseHeader;
