import React, { FC } from "react";
import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import {
    formLabelContainer,
    switchContainer,
} from "@components/Atoms/Switch/style";

interface Props extends SwitchProps {
    label?: string | number;
    size?: "small" | "medium" | "large";
}

const BaseSwitch: FC<Props> = ({ color, label, size, ...props }) => {
    return (
        <FormControlLabel
            sx={formLabelContainer(size)}
            control={
                <Switch
                    sx={switchContainer(color, size)}
                    focusVisibleClassName=".Mui-focusVisible"
                    disableRipple
                    {...props}
                />
            }
            label={label}
        />
    );
};

BaseSwitch.defaultProps = {
    color: "primary",
    label: "",
    size: "small",
};

export default BaseSwitch;
