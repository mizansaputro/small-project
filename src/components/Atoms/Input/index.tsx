import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import {
    FormControl,
    FormHelperText,
    InputBase,
    InputLabel,
    InputProps,
    Typography,
} from "@mui/material";
import {
    inputContainer,
    labelContainer,
    helperTextContainer,
} from "@components/Atoms/Input/style";

export type ValidationType = "default" | "success" | "error" | "warning";

interface Props extends InputProps {
    adornment?:
        | "none"
        | "icon"
        | "button"
        | "icon-button"
        | "button-icon"
        | "country";
    validation?: ValidationType;
    color?: InputProps["color"];
    size?: InputProps["size"];
    title?: string;
    optional?: boolean;
    helperText?: string;
    placeholder?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

const BaseInput: FC<Props> = ({
    adornment,
    helperText,
    size,
    title,
    optional,
    validation,
    startAdornment,
    endAdornment,
    ...props
}) => {
    const { t } = useTranslation();
    const isHaveStartAdornment = startAdornment !== undefined;
    const isHaveEndAdornment = endAdornment !== undefined;

    return (
        <FormControl
            fullWidth
            variant="standard"
            sx={inputContainer(
                adornment,
                validation,
                size,
                isHaveStartAdornment,
                isHaveEndAdornment,
            )}
        >
            <InputLabel shrink sx={labelContainer(validation, size)}>
                {title}
                {optional && (
                    <Typography variant="labelSmall" component="span">
                        {t("common:component-optional-input-field")}
                    </Typography>
                )}
            </InputLabel>
            <InputBase
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                {...props}
            />
            <FormHelperText sx={helperTextContainer(validation)}>
                {helperText}
            </FormHelperText>
        </FormControl>
    );
};

BaseInput.defaultProps = {
    adornment: "none",
    helperText: "",
    title: "",
    validation: "default",
    optional: false,
};

export default BaseInput;
