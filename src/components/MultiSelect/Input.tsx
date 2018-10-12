import * as React from 'react';
import { ValidationInput } from '../ValidationInput';
import { InputComponent } from './InputComponent';

export const Input = (value: any) => {
    return (props: any) => {
        return (
            <ValidationInput
                InputProps={{
                    inputComponent: InputComponent,
                }}
                inputProps={{
                    ...props,
                    value
                }}
            />
        );
    }
}