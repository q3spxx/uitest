import * as React from 'react';
import { ValidationInput } from '../ValidationInput';
import { InputComponent } from './InputComponent';
import { Button } from '@material-ui/core';


export const Input = (props: any) => {
    console.log(props);
    return (
    <Button
        buttonRef={props.innerRef}
        className='select'
        disableRipple={true}
        onChange={() => {
            console.log('change');
        }}
        onFocus={() => {
            console.log('focus');
            props.onFocus();
        }}
        onBlur={() => {
            console.log('blur');
            props.onBlur();
        }}>
        {props.data.label}
    </Button>

    )
}
