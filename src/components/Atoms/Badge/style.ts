import { SxProps, Theme } from "@mui/material/styles";

export const badgeContainer = (type: string): SxProps<Theme> => [
    {
        "& .MuiBadge-badge": {
            borderRadius: 99,
            ...(type === "text-icon" && { right: -12 }),
            ...(type === "tabs" && {
                right: -20,
                top: 8,
                fontSize: "0.55rem",
                fontWeight: 700,
            }),
            ...(type !== "text-icon" && type !== "tabs" && { right: 0 }),
            padding: 1,
            height: 20,
            ...(type === "text-icon" || type === "text" || type === "tabs"
                ? { width: "fit-content" }
                : { width: 20 }),
        },
        ...(type === "tabs" && { left: -12 }),
    },
];

export const boxContainer = [
    {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
] as SxProps<Theme>;

export const typographyStyle = (type: string): SxProps<Theme> => [
    { ...(type === "text-icon" && { marginLeft: 0.5 }) },
];
