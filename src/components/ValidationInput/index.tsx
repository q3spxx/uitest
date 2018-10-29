import * as React from 'react';
import { TextField } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';

type CustomProps<T extends InputProps> = any;

interface IProps {
    inputRef?: any;
    value?: string;
    inputProps?: any;
    InputProps?: CustomProps<InputProps>;
    placeholder?: string;
    onClick?: any;
    onChange?: React.EventHandler<any>;
    onFocus?: any;
    onBlur?: any;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
}

export const ValidationInput = ({
        inputRef,
        inputProps,
        InputProps,
        placeholder,
        onClick,
        label,
        disabled,
        error,
        errorMessage,
        value,
        onChange,
        onFocus,
        onBlur,
    }: IProps) => {
    return (
        <TextField
            inputRef={inputRef}
            value={value}
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
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};
