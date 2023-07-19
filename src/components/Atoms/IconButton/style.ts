export const iconContainer = (
    variant: string,
    color: string,
    noPadding: boolean = false,
) =>
    ({
        ...(noPadding && {
            padding: 0,
        }),
        ...(variant === "default" && {
            "&.MuiIconButton-root": {
                color: `${color}.main`,
                "&:hover": {
                    ...(color === "tertiary"
                        ? {
                              color: `neutral.200`,
                          }
                        : {
                              color: `${color}.main`,
                          }),
                },
            },
        }),
        ...(variant === "contained" && {
            "&.MuiIconButton-root": {
                color: `${color}.contrastText`,
                backgroundColor: `${color}.main`,
                "&:hover": {
                    ...(color === "tertiary"
                        ? {
                              backgroundColor: `neutral.200`,
                          }
                        : {
                              backgroundColor: `${color}.main`,
                          }),
                },
            },
        }),
        ...(variant === "outlined" && {
            "&.MuiIconButton-root": {
                border: 1,
                ...(color !== "tertiary" && {
                    borderColor: `${color}.main`,
                    color: `${color}.main`,
                    borderRadius: 2,
                }),
                "&:hover": {
                    color: `${color}.contrastText`,
                    backgroundColor: `${color}.100`,
                },
            },
        }),
    } as const);
