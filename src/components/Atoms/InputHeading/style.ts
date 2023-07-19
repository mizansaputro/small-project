import { Theme } from "@mui/material/styles";

export const inputContainer = (color: string) => (theme: Theme) =>
    ({
        ".MuiInput-root": {
            color: `${color}.main`,
            fontWeight: "bold",
        },
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
        },
        "input[type=number]": {
            MozAppearance: "textfield",
        },
        [theme.breakpoints.down("sm")]: {
            ".MuiInput-root": {
                fontSize: 24,
            },
            input: {
                height: 24,
            },
        },
        [theme.breakpoints.up("sm")]: {
            ".MuiInput-root": {
                fontSize: 38,
            },
            input: {
                height: 45,
            },
        },
    } as const);
