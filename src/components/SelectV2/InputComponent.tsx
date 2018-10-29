import * as React from 'react';
import { Button } from '@material-ui/core';

export const InputComponent = (props: any) => {
    return (
        <>
            <Button
                className='select'>
                {props.value}
            </Button>
        </>
    );
}