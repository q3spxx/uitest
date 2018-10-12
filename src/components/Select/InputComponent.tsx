import * as React from 'react';
import { Button } from '@material-ui/core';

export const InputComponent = (props: any) => {
    return (
        <>
            <Button
                buttonRef={props.innerRef}
                className='select'
                disableRipple={true}
                onFocus={() => {
                    console.log('focus');
                    props.onFocus();
                }}
                onBlur={() => {
                    console.log('blur');
                    props.onBlur();
                }}>
                {props.value}
            </Button>
        </>
    );
}