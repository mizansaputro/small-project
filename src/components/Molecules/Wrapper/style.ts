import { SxProps, Theme } from "@mui/material/styles";

export const wrapperContainer = (fullMode: boolean, noFooter: boolean) =>
    ({
        ...(!fullMode &&
            !noFooter && {
                paddingBottom: 5,
            }),
    } as SxProps<Theme>);
