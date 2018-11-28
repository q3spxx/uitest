import * as React from 'react';
import { MenuItem, Button } from '@material-ui/core';
import { OptionProps } from 'react-select/lib/types';
import ifElse from 'ramda/es/ifElse';
import compose from 'ramda/es/compose';
import { filter, props, head } from 'ramda';

interface IProps {
    Template?: any;
    bindValue?: string;
    bindLabel?: string;
}

export const DropdownMenuItem = ({Template, bindValue, bindLabel}: IProps) => {
    return (p: any) => {
        const label = bindLabel ? p.data[bindLabel] : compose(head, filter(Boolean), props([bindLabel, bindValue, 'label', 'value']))(p.data);
        return (
            <MenuItem
                onClick={p.innerProps.onClick}
                className='select-item'
                disableRipple={true}
                value={bindValue ? p.data[bindValue] : p.data}
            >
            {Template ? <Template {...p.data} /> : label}
            </MenuItem>
        );
    };
};
// export const DropdownMenuItem =  (props: any) => {
//     // console.log('Menu item');
//     return (
//         <MenuItem
//             onClick={props.innerProps.onClick}
//             className='select-item'
//             disableRipple={true}
//             value={props.data}
//         >
//         {props.data.label}
//         </MenuItem>
//     );
// };