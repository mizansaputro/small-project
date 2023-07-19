import { SxProps, Theme } from "@mui/material/styles";

export const checkboxContainer = (color: string): SxProps<Theme> => [
    {
        "&.MuiCheckbox-root": {
            borderRadius: 0.75,
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
