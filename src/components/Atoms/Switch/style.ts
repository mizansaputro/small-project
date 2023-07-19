import { SxProps, Theme } from "@mui/material/styles";

export const formLabelContainer = (size: string): SxProps<Theme> => [
    {
        "& .MuiFormControlLabel-label": {
            ...(size === "small" && {
                fontSize: "0.875rem",
            }),
            ...(size === "medium" && {
                fontSize: "1rem",
            }),
            ...(size === "large" && {
                fontSize: "1.125rem",
            }),
        },
    },
];

export const switchContainer = (
    color: string,
    size: string,
): SxProps<Theme> => [
    {
        ...(size === "small" && {
            width: 32,
            height: 20,
        }),
        ...(size === "medium" && {
            width: 40,
            height: 24,
        }),
        ...(size === "large" && {
            width: 48,
            height: 28,
        }),
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            marginY: 0.5,
            marginLeft: 0.5,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                ...(size === "small" && {
                    marginLeft: -0.5,
                }),
                ...(size === "medium" && {
                    marginLeft: 0.5,
                }),
                ...(size === "large" && {
                    marginLeft: 1.5,
                }),
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: `${color}.600`,
                    opacity: 1,
                    border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: "neutral.300",
                    opacity: 0.5,
                },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: `${color}.600`,
                border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: "neutral.100",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: (theme: Theme) =>
                    theme.palette.mode === "light" ? 0.7 : 0.3,
            },
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            ...(size === "small" && {
                width: 16,
                height: 16,
            }),
            ...(size === "medium" && {
                width: 20,
                height: 20,
            }),
            ...(size === "large" && {
                width: 24,
                height: 24,
            }),
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: (theme: Theme) =>
                theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: (theme: Theme) =>
                theme.transitions.create(["background-color"], {
                    duration: 500,
                }),
        },
    },
];
