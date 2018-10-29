import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
    bindValue?: string;
    bindLabel?: string;
    placeholder?: string;
}

export const SingleValue = (p: any) => {
    return (props: any) => {
        let displayedValue = '';
        if (p.bindLabel) {
            displayedValue = p.data[p.bindLabel];
        } else if (p.bindValue) {
            displayedValue = p.data[p.bindValue];
        } else {
            displayedValue = p.data;
        }
        return (
            <Button
                buttonRef={props.inputRef}
                className='select'
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onChange={props.onChange}
            >
                {displayedValue}
            </Button>
        );
    }
};