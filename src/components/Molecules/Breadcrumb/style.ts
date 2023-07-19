import { SxProps, Theme } from "@mui/material/styles";

export const formLabelContainer = (
    size: string,
    validation: string,
): SxProps<Theme> => [
    {
        ...(validation !== "default"
            ? { color: `${validation}.main` }
            : { color: "neutral.600" }),

        ...(size === "small" && {
            fontSize: "0.875rem",
        }),
        ...(size === "medium" && {
            fontSize: "1rem",
        }),
        ...(size === "large" && {
            fontSize: "1.125rem",
        }),
        fontWeight: 700,
    },
];

export const formGroupContainer = [
    {
        padding: 2,
    },
] as SxProps<Theme>;

export const formControlLabelContainer = [
    {
        alignItems: "flex-start",
        ".MuiTypography-root": {
            marginLeft: 2,
            textAlign: "left",
        },
        marginBottom: 6,
    },
] as SxProps<Theme>;

export const helperTextContainer = (validation: string): SxProps<Theme> => [
    {
        ...(validation === "default"
            ? {
                  color: "neutral.500",
              }
            : {
                  color: `${validation}.main`,
              }),
        marginTop: 2,
    },
];
