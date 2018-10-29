import * as React from 'react';
import { MenuList as MuiMenuList } from '@material-ui/core';
import { MenuListComponentProps } from 'react-select/lib/components/Menu';
import { OptionType } from '../Select';

// export const DropdownMenuList = () => {
//     return (props: MenuListComponentProps<OptionType>) => {
//         return (
//             <MuiMenuList>{props.children}</MuiMenuList>
//         );
//     };
// };
export const DropdownMenuList = (props: MenuListComponentProps<OptionType>) => {
    return (
        <MuiMenuList>{props.children}</MuiMenuList>
    );
};