import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { removeTextUnderline } from "@components/Atoms/Link/style";

const Anchor = styled("a")({});

interface NextLinkComposedProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
        Omit<
            NextLinkProps,
            "href" | "as" | "onClick" | "onMouseEnter" | "onTouchStart"
        > {
    to: NextLinkProps["href"];
    linkAs?: NextLinkProps["as"];
    href?: NextLinkProps["href"];
}

export const NextLinkComposed = React.forwardRef<
    HTMLAnchorElement,
    NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
    const {
        to,
        linkAs,
        href,
        replace,
        scroll,
        shallow,
        prefetch,
        locale,
        ...other
    } = props;

    return (
        <NextLink
            href={to}
            prefetch={prefetch}
            as={linkAs}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref
            locale={locale}
        >
            <Anchor ref={ref} {...other} />
        </NextLink>
    );
});

export type LinkProps = {
    activeClassName?: string;
    as?: NextLinkProps["as"];
    href: NextLinkProps["href"];
    linkAs?: NextLinkProps["as"];
    noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
    Omit<MuiLinkProps, "href">;

const BaseLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
    props,
    ref,
) {
    const {
        activeClassName = "active",
        as: linkAs,
        className: classNameProps,
        href,
        noLinkStyle,
        role,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal =
        typeof href === "string" &&
        (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
        if (noLinkStyle) {
            return (
                <Anchor
                    className={className}
                    href={href}
                    ref={ref}
                    {...other}
                    sx={removeTextUnderline}
                />
            );
        }

        return (
            <MuiLink
                className={className}
                href={href}
                ref={ref}
                sx={removeTextUnderline}
                {...other}
            />
        );
    }

    if (noLinkStyle) {
        return (
            <NextLinkComposed
                className={className}
                ref={ref}
                to={href}
                sx={removeTextUnderline}
                {...other}
            />
        );
    }

    return (
        <MuiLink
            component={NextLinkComposed}
            linkAs={linkAs}
            className={className}
            ref={ref}
            to={href}
            sx={removeTextUnderline}
            {...other}
        />
    );
});

export default BaseLink;
