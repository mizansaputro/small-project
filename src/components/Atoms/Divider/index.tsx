import React, { FC } from "react";
import { Divider, DividerProps } from "@mui/material";
import { dividerContainer } from "@components/Atoms/Divider/style";

interface Props extends DividerProps {
    color?: "default" | "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    type?: "solid" | "dashed";
    withMarginHorizontal?: boolean;
}

const BaseDivider: FC<Props> = ({
    color,
    children,
    size,
    type,
    sx = [],
    withMarginHorizontal,
    ...props
}) => {
    return (
        <Divider
            {...props}
            sx={[
                dividerContainer(color, size, type, withMarginHorizontal),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Divider>
    );
};

BaseDivider.defaultProps = {
    color: "default",
    size: "small",
    type: "solid",
    withMarginHorizontal: false,
};

export default BaseDivider;
