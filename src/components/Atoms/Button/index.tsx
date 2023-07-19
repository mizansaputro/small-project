import React, { FC } from "react";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { buttonContainer } from "@components/Atoms/Button/style";

interface Props extends LoadingButtonProps {
    textColor?: string;
    minWidth?: number;
    noPadding?: boolean;
    paddingHorizontal?: boolean;
    colorType?: "dark" | "light";
}

const BaseButton: FC<Props> = ({
    children,
    minWidth,
    noPadding,
    paddingHorizontal,
    textColor,
    colorType,
    sx = [],
    ...props
}) => {
    return (
        <LoadingButton
            {...props}
            sx={[
                buttonContainer(
                    noPadding,
                    paddingHorizontal,
                    minWidth,
                    textColor,
                    colorType,
                    props.color,
                ),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </LoadingButton>
    );
};

BaseButton.defaultProps = {
    minWidth: null,
    noPadding: false,
    paddingHorizontal: false,
    colorType: "dark",
};

export default BaseButton;
