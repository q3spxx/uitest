import * as React from 'react';
import { MenuItem, Button } from '@material-ui/core';
import { OptionProps } from 'react-select/lib/types';
import ifElse from 'ramda/es/ifElse';

interface IProps {
    Template?: any;
    bindValue?: string;
    bindLabel?: string;
}

export const DropdownMenuItem = ({Template, bindValue, bindLabel}: IProps) => {
    return (props: any) => {
        const label = bindLabel ? props.data[bindLabel] : props.data.label;
        return (
            <MenuItem
                onClick={props.innerProps.onClick}
                className='select-item'
                disableRipple={true}
                value={bindValue ? props.data[bindValue] : props.data}
            >
            {Template ? <Template {...props.data} /> : label}
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