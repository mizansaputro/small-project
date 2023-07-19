import { SxProps, Theme } from "@mui/material/styles";

export const labelContainer = (
    validation: string,
    size: string,
): SxProps<Theme> => [
    {
        ...(validation === "default"
            ? {
                  color: "neutral.500",
              }
            : {
                  color: `${validation}.main`,
              }),
        ...((size === "small" || size === "medium") && {
            marginTop: -4,
        }),
        ...((size === "large" || size === "xl") && {
            marginTop: -6,
        }),
        ...(size === "small" && {
            fontSize: "0.875rem",
        }),
        ...(size === "medium" && {
            fontSize: "1rem",
        }),
        ...(size === "large" && {
            fontSize: "1.125rem",
        }),
        ...(size === "xl" && {
            fontSize: "1.5rem",
        }),
        color: "neutral.700",
        fontWeight: 700,
        lineHeight: 1.125,
    },
];

export const inputContainer = (
    adornment: string,
    validation: string,
    size: string,
    isHaveStartAdornment?: boolean,
    isHaveEndAdornment?: boolean,
): SxProps<Theme> => [
    {
        ".MuiInputBase-formControl": {
            borderRadius: 1,
            borderWidth: 2,
            borderStyle: "solid",
            ...(validation !== "default"
                ? { borderColor: `${validation}.main` }
                : { borderColor: "neutral.200" }),
            position: "relative",
            fontSize: 16,
            width: "auto",
            transition: (theme) =>
                theme.transitions.create([
                    "border-color",
                    "background-color",
                    "box-shadow",
                ]),
            "&:hover": {
                backgroundColor: "neutral.200",
            },
            "&:focus": {
                boxShadow: 3,
                ...(validation !== "default"
                    ? { borderColor: `${validation}.main` }
                    : { borderColor: "primary.main" }),
            },
            "&.Mui-disabled": {
                backgroundColor: "grey.100",
                borderColor: "grey.400",
            },
        },
        ".MuiInputAdornment-positionStart": {
            ...((adornment === "icon" || adornment === "icon-button") && {
                paddingRight: 0,
                paddingLeft: 2,
            }),
            ...((adornment === "button" || adornment === "button-icon") && {
                paddingRight: 0,
                paddingLeft: 0,
            }),
        },
        ".MuiInputAdornment-positionEnd": {
            ...((adornment === "icon" || adornment === "button-icon") && {
                paddingRight: 2,
                paddingLeft: 0,
            }),
            ...((adornment === "button" || adornment === "icon-button") && {
                paddingRight: 0,
                paddingLeft: 0,
            }),
        },
        ".MuiInputBase-input": {
            paddingRight: 4,
            paddingLeft: 4,
            ...(size === "small" && {
                fontSize: "0.875rem",
                paddingTop: "8px",
                paddingBottom: "8px",
            }),
            ...(size === "medium" && {
                fontSize: "1rem",
                paddingTop: "9.5px",
                paddingBottom: "9.5px",
            }),
            ...(size === "large" && {
                fontSize: "1.125rem",
                paddingTop: "12px",
                paddingBottom: "12px",
            }),
            ...(size === "xl" && {
                fontSize: "1.5rem",
                paddingTop: "14.5px",
                paddingBottom: "14.5px",
            }),

            ...(adornment !== "none" && {
                paddingRight: 0,
                paddingLeft: 0,
            }),

            ...(!isHaveStartAdornment && {
                paddingLeft: 4,
            }),

            ...(!isHaveEndAdornment && {
                paddingRight: 4,
            }),
        },
    },
];

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
