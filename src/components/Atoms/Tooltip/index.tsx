import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Tooltip, tooltipClasses, TooltipProps, Zoom } from "@mui/material";

interface Props extends TooltipProps {
    backgroundColor?: string;
    color?: string;
}

const BaseTooltip: FC<Props> = styled(
    ({ className, backgroundColor, color, ...props }: Props) => (
        <Tooltip
            {...props}
            classes={{ popper: className }}
            TransitionComponent={Zoom}
        />
    ),
)(({ backgroundColor, color, theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: backgroundColor,
        color: color,
        boxShadow: theme.shadows[2],
    },
}));

BaseTooltip.defaultProps = {
    backgroundColor: "#FFCB3B",
    color: "#919598",
};

export default BaseTooltip;
