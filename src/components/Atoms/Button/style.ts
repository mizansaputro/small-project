import { LoadingButtonProps } from "@mui/lab";

export const buttonContainer = (
    noPadding: boolean,
    paddingHorizontal: boolean,
    minWidth: number,
    textColor: string,
    state: "dark" | "light",
    color: LoadingButtonProps["color"],
) =>
    ({
        ...(noPadding && {
            padding: 0,
        }),
        ...(paddingHorizontal && {
            paddingX: 10,
        }),
        ...(minWidth && {
            minWidth,
        }),
        ...(textColor && {
            color: `${textColor}.main`,
        }),
        "&.MuiButton-text:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
        },
        "&.MuiButton-containedTertiary": {
            backgroundColor: "tertiary.bg",
            ":hover": {
                backgroundColor: "tertiary.main",
            },
        },
        ...(state === "light" && {
            color: `${color}.main`,
            backgroundColor: `${color}.100`,
            "&.MuiButton-root:hover": {
                backgroundColor: `${color}.300`,
                color: `${color}.main`,
            },
        }),
    } as const);
