import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
    breakpoints,
    customPallette,
    customShadow,
    customTypography,
} from "@styles/theme/config";

const globalTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            ...customPallette,
        },
        spacing: 4,
        shape: {
            borderRadius: 8,
        },
        typography: {
            allVariants: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            },
            ...customTypography,
        },
        breakpoints,
        shadows: customShadow,
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        displayLarge: "h1",
                        displayMedium: "h2",
                        displaySmall: "h3",
                        headingLarge: "h4",
                        headingMedium: "h5",
                        headingSmall: "p",
                        paragraphLargeBold: "p",
                        paragraphLarge: "p",
                        paragraphMediumBold: "p",
                        paragraphMedium: "p",
                        paragraphSmallBold: "p",
                        paragraphSmall: "p",
                        labelMediumBold: "p",
                        labelMedium: "p",
                        labelSmallBold: "p",
                        labelSmall: "p",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        fontWeight: 700,
                        padding: "8px 16px",
                        textTransform: "capitalize",
                        "&.MuiButton-sizeSmall": {
                            height: 32,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                        },
                        "&.MuiButton-sizeMedium": {
                            height: 40,
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            lineHeight: "1.25rem",
                        },
                        "&.MuiButton-sizeLarge": {
                            height: 48,
                            fontSize: "1rem",
                            fontWeight: 700,
                            lineHeight: "1.5rem",
                        },
                        "&.MuiButton-sizeXl": {
                            height: 56,
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            lineHeight: "2rem",
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        "&.MuiInputBase-sizeSmall": {
                            height: 32,
                            fontSize: "0.75rem",
                        },
                        "&.MuiInputBase-sizeMedium": {
                            height: 40,
                            fontSize: "0.875rem",
                        },
                        "&.MuiInputBase-sizeLarge": {
                            height: 48,
                            fontSize: "1rem",
                        },
                        "&.MuiInputBase-sizeXl": {
                            height: 56,
                            fontSize: "1.125rem",
                        },
                    },
                },
            },
            MuiFab: {
                styleOverrides: {
                    root: {
                        fontWeight: 700,
                        "&.MuiFab-sizeXl": {
                            height: 56,
                            fontSize: "1.125rem",
                        },
                        "&.MuiFab-outlined": {
                            backgroundColor: "transparent",
                            border: "1px solid #067EB8",
                            color: "#067EB8",
                            "&:hover": {
                                backgroundColor: "#F0FAFF",
                            },
                            "&.MuiFab-secondary": {
                                border: "1px solid #FF7900",
                                color: "#FF7900",
                                "&:hover": {
                                    backgroundColor: "#FFF7F0",
                                },
                            },
                            "&.MuiFab-tertiary": {
                                border: "1px solid #F7F8F8",
                                color: "#F7F8F8",
                                "&:hover": {
                                    backgroundColor: "#F7F8F8",
                                },
                            },
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 700,
                        "&.MuiIconButton-sizeXl": {
                            padding: 16,
                            fontSize: "1.125rem",
                        },
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: `${customPallette.neutral[300]} ${customPallette.neutral[200]}`,
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            backgroundColor: customPallette.neutral[200],
                            width: "0.4em",
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                            {
                                borderRadius: 20,
                                backgroundColor: customPallette.neutral[300],
                            },
                        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                            {
                                backgroundColor: customPallette.neutral[300],
                            },
                        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                            {
                                backgroundColor: customPallette.neutral[300],
                            },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                            {
                                backgroundColor: customPallette.neutral[300],
                            },
                        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
                            {
                                backgroundColor: customPallette.neutral[400],
                            },
                    },
                },
            },
        },
    }),
);

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        smd: true;
        xxl: true;
        xxxl: true;
    }
    interface Palette {
        tertiary?: Palette["primary"];
        lighter?: Palette["primary"];
        base?: Palette["primary"];
        blue?: Palette["primary"];
        orange?: Palette["primary"];
        purple?: Palette["primary"];
        pink?: Palette["primary"];
        red?: Palette["primary"];
        yellow?: Palette["primary"];
        green?: Palette["primary"];
        neutral?: Palette["primary"];
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions["primary"];
        lighter?: PaletteOptions["primary"];
        base?: PaletteOptions["primary"];
        blue?: PaletteOptions["primary"];
        orange?: PaletteOptions["primary"];
        purple?: PaletteOptions["primary"];
        pink?: PaletteOptions["primary"];
        red?: PaletteOptions["primary"];
        yellow?: PaletteOptions["primary"];
        green?: PaletteOptions["primary"];
        neutral?: PaletteOptions["primary"];
    }

    interface PaletteColor {
        bg?: string;
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        bg?: string;
        darker?: string;
        light?: string;
        white?: string;
        black?: string;
    }

    interface TypographyVariants {
        displayLarge?: React.CSSProperties;
        displayMedium?: React.CSSProperties;
        displaySmall?: React.CSSProperties;
        headingLarge?: React.CSSProperties;
        headingMedium?: React.CSSProperties;
        headingSmall?: React.CSSProperties;
        paragraphLargeBold?: React.CSSProperties;
        paragraphLarge?: React.CSSProperties;
        paragraphMediumBold?: React.CSSProperties;
        paragraphMedium?: React.CSSProperties;
        paragraphSmallBold?: React.CSSProperties;
        paragraphSmall?: React.CSSProperties;
        labelMediumBold?: React.CSSProperties;
        labelMedium?: React.CSSProperties;
        labelSmallBold?: React.CSSProperties;
        labelSmall?: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        displayLarge?: React.CSSProperties;
        displayMedium?: React.CSSProperties;
        displaySmall?: React.CSSProperties;
        headingLarge?: React.CSSProperties;
        headingMedium?: React.CSSProperties;
        headingSmall?: React.CSSProperties;
        paragraphLargeBold?: React.CSSProperties;
        paragraphLarge?: React.CSSProperties;
        paragraphMediumBold?: React.CSSProperties;
        paragraphMedium?: React.CSSProperties;
        paragraphSmallBold?: React.CSSProperties;
        paragraphSmall?: React.CSSProperties;
        labelMediumBold?: React.CSSProperties;
        labelMedium?: React.CSSProperties;
        labelSmallBold?: React.CSSProperties;
        labelSmall?: React.CSSProperties;
    }
}

declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }

    interface ButtonPropsSizeOverrides {
        xl: true;
    }
}

declare module "@mui/material/Radio" {
    interface RadioPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }

    interface RadioPropsSizeOverrides {
        large: true;
    }
}

declare module "@mui/material/Switch" {
    interface SwitchPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }

    interface SwitchPropsSizeOverrides {
        large: true;
    }
}

declare module "@mui/material/Slider" {
    interface SliderPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }

    interface SliderPropsSizeOverrides {
        large: true;
    }
}

declare module "@mui/material/Checkbox" {
    interface CheckboxPropsColorOverrides {
        tertiary: true;
        lighter: true;
        base?: true;
        blue?: true;
        orange?: true;
        purple?: true;
        pink?: true;
        red?: true;
        yellow?: true;
        green?: true;
        neutral?: true;
    }

    interface CheckboxPropsSizeOverrides {
        large: true;
    }
}

declare module "@mui/material/Alert" {
    interface AlertPropsColorOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        lighter: true;
        neutral?: true;
        base?: true;
        grey?: true;
        blue?: true;
        purple?: true;
        pink?: true;
        red?: true;
        orange?: true;
        yellow?: true;
        green?: true;
    }
}

declare module "@mui/material/InputBase" {
    interface InputBasePropsColorOverrides {
        tertiary: true;
    }

    interface InputBasePropsSizeOverrides {
        large: true;
        xl: true;
    }
}

declare module "@mui/material/Fab" {
    interface FabPropsColorOverrides {
        tertiary: true;
    }

    interface FabPropsSizeOverrides {
        xl: true;
    }

    interface FabPropsVariantOverrides {
        outlined: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        tertiary: true;
    }

    interface IconButtonPropsSizeOverrides {
        xl: true;
    }
}

declare module "@mui/material/Badge" {
    interface BadgePropsColorOverrides {
        tertiary: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        displayLarge: true;
        displayMedium: true;
        displaySmall: true;
        headingLarge: true;
        headingMedium: true;
        headingSmall: true;
        paragraphLargeBold: true;
        paragraphLarge: true;
        paragraphMediumBold: true;
        paragraphMedium: true;
        paragraphSmallBold: true;
        paragraphSmall: true;
        labelMediumBold: true;
        labelMedium: true;
        labelSmallBold: true;
        labelSmall: true;
    }
}

export default globalTheme;
