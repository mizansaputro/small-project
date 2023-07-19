import { SxProps, Theme } from "@mui/material/styles";

export const boxContainer = (
    checked: boolean,
    disabled: boolean,
    color: string,
    size: string,
    variantColor: string,
    fullWidth: boolean,
): SxProps<Theme> => [
    {
        alignItems: "center",
        boxShadow: 1,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        ...(variantColor === "outline" &&
            !disabled && {
                backgroundColor: checked ? `${color}.bg` : "neutral.100",
                color: checked ? `${color}.main` : "tertiary.dark",
            }),
        ...(variantColor === "solid" &&
            !disabled && {
                backgroundColor: checked ? `${color}.main` : "neutral.100",
                color: checked ? `${color}.contrastText` : "tertiary.dark",
            }),
        ...(disabled && {
            backgroundColor: "neutral.200",
        }),
        borderColor: checked && !disabled ? `${color}.main` : "tertiary.main",
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        ...(size === "large" && {
            height: 48,
        }),
        ...(size === "medium" && {
            height: 40,
        }),
        ...(size === "small" && {
            height: 32,
        }),
        paddingY: 2,
        paddingX: 5,
        width: fullWidth ? "100%" : "fit-content",
        transition: (theme) =>
            theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
            ]),
        "&:hover": {
            ...(variantColor === "outline" &&
                !disabled && {
                    backgroundColor: checked ? `${color}.bg` : "neutral.bg",
                    color: checked ? `${color}.main` : "tertiary.dark",
                }),
            ...(variantColor === "solid" &&
                !disabled && {
                    backgroundColor:
                        checked && !disabled ? `${color}.dark` : "neutral.bg",
                }),
        },
        ".MuiTypography-root": {
            ...(variantColor === "outline" && {
                color: checked && !disabled ? `${color}.main` : "tertiary.dark",
            }),
            ...(variantColor === "solid" && {
                color:
                    checked && !disabled
                        ? `${color}.contrastText`
                        : "tertiary.dark",
            }),
            textAlign: "center",
            width: "100%",
        },
    },
];
