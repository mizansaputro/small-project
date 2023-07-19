export const dividerContainer = (
    color: string,
    size: string,
    type: string,
    withMarginHorizontal: boolean,
) =>
    ({
        "&.MuiDivider-root": {
            borderRadius: 20,
            ...(color !== "default" && {
                borderColor: `${color}.main`,
            }),
            ...(size === "small" && {
                borderBottomWidth: 0.5,
            }),
            ...(size === "medium" && {
                borderBottomWidth: 2,
            }),
            ...(size === "large" && {
                borderBottomWidth: 4,
            }),
            ...(withMarginHorizontal && {
                marginX: 4,
            }),
            borderStyle: type,
        },
    } as const);
