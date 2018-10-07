import * as React from 'react';
import { MenuList as MuiMenuList } from '@material-ui/core';
import { MenuListComponentProps } from 'react-select/lib/components/Menu';
import { OptionType } from './index';

export const MenuList = (props: MenuListComponentProps<OptionType>) => {
    return (
        <MuiMenuList>{props.children}</MuiMenuList>
    );
};