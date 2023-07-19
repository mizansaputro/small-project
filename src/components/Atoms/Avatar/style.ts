import { SxProps, Theme } from "@mui/material/styles";
import { stringToColor } from "@utils/color";

export const avatarStyle = (name: string, size: string): SxProps<Theme> => [
    {
        bgcolor: stringToColor(name),
        ...(size === "xxx-large" && {
            fontSize: "2rem",
            lineHeight: "2.75rem",
            height: 96,
            width: 96,
        }),
        ...(size === "xx-large" && {
            fontSize: "1.75rem",
            lineHeight: "2.5rem",
            height: 72,
            width: 72,
        }),
        ...(size === "x-large" && {
            fontSize: "1.5rem",
            lineHeight: "2.25rem",
            height: 64,
            width: 64,
        }),
        ...(size === "large" && {
            fontSize: "1.25rem",
            lineHeight: "2rem",
            height: 56,
            width: 56,
        }),
        ...(size === "medium" && {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            height: 48,
            width: 48,
        }),
        ...(size === "small" && {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            height: 40,
            width: 40,
        }),
        ...(size === "x-small" && {
            fontSize: "0.75rem",
            lineHeight: "1.25rem",
            height: 32,
            width: 32,
        }),
        ...(size === "xx-small" && {
            fontSize: "0.625rem",
            lineHeight: "1rem",
            height: 24,
            width: 24,
        }),
    },
];
