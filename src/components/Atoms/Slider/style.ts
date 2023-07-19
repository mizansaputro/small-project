import { SxProps, Theme } from "@mui/material/styles";

export const sliderContainer = (
    color: string,
    size: string,
): SxProps<Theme> => [
    {
        color: `${color}.dark`,
        ...(size === "small" && {
            height: 2,
        }),
        ...(size === "medium" && {
            height: 4,
        }),
        ...(size === "large" && {
            height: 6,
        }),
        "& .MuiSlider-track": {
            border: "none",
        },
        "& .MuiSlider-thumb": {
            ...(size === "small" && {
                height: 20,
                width: 20,
            }),
            ...(size === "medium" && {
                height: 24,
                width: 24,
            }),
            ...(size === "large" && {
                height: 28,
                width: 28,
            }),
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
            },
            "&:before": {
                display: "none",
            },
        },
        "& .MuiSlider-valueLabel": {
            background: "unset",
            backgroundColor: `${color}.dark`,
            borderRadius: 1,
            minWidth: 34,
            height: 18,
            lineHeight: 1.2,
            fontSize: 12,
            fontWeight: 700,
            padding: 0,
            "&:before": { display: "none" },
        },
    },
];
