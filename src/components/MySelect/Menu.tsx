import * as React from 'react';
import { MenuProps } from 'react-select/lib/components/Menu';
import { Paper } from '@material-ui/core';
import { OptionType } from './index';


export const menu = (error: boolean) => {
    return (props: MenuProps<MenuProps<OptionType>>) => {
        console.log(props);
        return (
            <Paper {...props.innerProps} className={`select${error ? ' error': ''}`}>{props.children}</Paper>
        );
    };
}