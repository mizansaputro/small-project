import { SxProps, Theme } from "@mui/material/styles";

export const labelContainer = (
    color: string,
    colorVariant: string,
    size: string,
): SxProps<Theme> => [
    {
        alignItems: "center",
        backgroundColor: `${color}.${colorVariant === "dark" ? "main" : "bg"}`,
        borderRadius: 0.75,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingX: 2,
        paddingY: 1,
        ".MuiTypography-root": {
            color: `${color}.${
                colorVariant === "dark" ? "contrastText" : "main"
            }`,
            paddingY: 0.25,
        },
        ...(size === "small" && {
            height: 20,
        }),
        ...(size === "medium" && {
            height: 24,
        }),
        ...(size === "large" && {
            height: 28,
        }),
    },
];

export const iconContainer = (size: string): SxProps<Theme> => [
    {
        ".MuiIconButton-root": {
            ...(size === "small" && {
                height: 8.75,
            }),
            ...(size === "medium" && {
                height: 10.5,
            }),
            ...(size === "large" && {
                height: 14,
            }),

            ".MuiSvgIcon-root": {
                ...(size === "small" && {
                    height: "0.546875em",
                    width: "0.546875em",
                }),
                ...(size === "medium" && {
                    height: "0.65625em",
                    width: "0.65625em",
                }),
                ...(size === "large" && {
                    height: "0.875em",
                    width: "0.875em",
                }),
            },
        },
    },
];
