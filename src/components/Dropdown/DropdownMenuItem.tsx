import * as React from 'react';
import { MenuItem } from '@material-ui/core';
import { OptionProps } from 'react-select/lib/types';

interface IProps {
    Template: any;
    bindValue: string;
    bindLabel: string;
}

export const DropdownMenuItem = ({Template, bindValue, bindLabel}: IProps) => {
    return (props: any) => {
        const label = bindLabel ? props.data[bindLabel] : props.data;
        return (
            <MenuItem
                {...props.innerProps}
                className='select-item'
                disableRipple={true}
                value={bindValue ? props.data[bindValue] : props.data}
            >
            {Template ? <Template {...props.data} /> : label}
            </MenuItem>
        );
    };
};