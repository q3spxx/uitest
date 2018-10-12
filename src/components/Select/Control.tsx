import * as React from 'react';
import { ControlProps } from 'react-select/lib/components/Control';
import { OptionType } from './index';

export const Control = ({error, errorMessage, bindLabel, label}: any) => {
    return (props: ControlProps<OptionType>) => {
        console.log(props)
        return (
            <div ref={props.innerRef} {...props.innerProps}>{props.children}</div>
        );
    }
};