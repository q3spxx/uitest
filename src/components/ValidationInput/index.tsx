import * as React from 'react';
import { TextField } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';

type CustomProps<T extends InputProps> = any;

interface IProps {
    inputProps?: any;
    InputProps?: CustomProps<InputProps>,
    placeholder?: string;
    onClick?: any;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
}

export const ValidationInput = ({
        inputProps,
        InputProps,
        placeholder,
        onClick,
        label,
        disabled,
        error,
        errorMessage,
    }: IProps) => {
    return (
        <TextField
            error={error}
            helperText={errorMessage}
            disabled={disabled}
            InputLabelProps={{
                shrink: true,
                disableAnimation: true,
            }}
            InputProps={{...InputProps, disableUnderline: true}}
            inputProps={inputProps}
            label={label}
            placeholder={placeholder}
            onClick={onClick}
        />
    );
}