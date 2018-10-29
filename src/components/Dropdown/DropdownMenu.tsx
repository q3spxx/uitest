import * as React from 'react';
import { MenuProps } from 'react-select/lib/components/Menu';
import { Paper } from '@material-ui/core';
import { OptionType } from '../Select';

interface IProps {
    error: boolean;
}

// export const DropdownMenu = ({error}:IProps) => {
//     return (props: MenuProps<OptionType>) => {
//         return (
//             <Paper
//             {...props.innerProps}
//             className={`select${error ? ' error': ''}`}>{props.children}</Paper>
//         );
//     };
// }
export const DropdownMenu = (props: MenuProps<OptionType>) => {
    return (
        <Paper
        {...props.innerProps}
        className='select'>{props.children}</Paper>
    );
}