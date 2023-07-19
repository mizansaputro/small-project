import { SxProps, Theme } from "@mui/material/styles";

export const radioContainer = (color: string): SxProps<Theme> => [
    {
        "&.MuiRadio-root": {
            color: `divider`,
            padding: 0.25,
        },
        "&.Mui-checked": {
            color: `${color}.main`,
            "&:hover": {
                color: `${color}.dark`,
            },
        },
    },
];
