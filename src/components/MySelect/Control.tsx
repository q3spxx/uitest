import * as React from 'react';
import { ValidationInput } from '../ValidationInput';
import { ControlProps } from 'react-select/lib/components/Control';
import { InputComponent } from './InputComponent';
import { OptionType } from './index';

export const Control = (error: boolean, errorMessage: string, bindLabel: string, label: string) => {
    return (props: ControlProps<OptionType>) => {
        return (
            <ValidationInput
                error={error}
                errorMessage={error && errorMessage}
                disabled={props.isDisabled}
                inputProps={{
                    ...props,
                }}
                InputProps={{
                    inputComponent: InputComponent,
                    value: bindLabel ? props.selectProps.value[bindLabel] : props.selectProps.value,
                }}
                label={label}
                placeholder={props.selectProps.placeholder}
            />
        );
    }
};