import React, { FC } from "react";
import { Slider, SliderProps, Stack } from "@mui/material";
import { sliderContainer } from "@components/Atoms/Slider/style";

interface Props {
    color?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "error"
        | "info"
        | "success"
        | "warning";
    label?: string | number;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onChange?: SliderProps["onChange"];
    size?: "small" | "medium" | "large";
    value?: SliderProps["value"];
}

const BaseSlider: FC<Props> = ({
    color,
    label,
    leftIcon,
    rightIcon,
    size,
    ...props
}) => {
    return (
        <Stack spacing={5} direction="row" alignItems="center">
            {leftIcon}
            <Slider
                valueLabelDisplay="auto"
                {...props}
                size={size}
                sx={sliderContainer(color, size)}
            />
            {rightIcon}
        </Stack>
    );
};

BaseSlider.defaultProps = {
    color: "primary",
    label: "",
    size: "medium",
};

export default BaseSlider;
