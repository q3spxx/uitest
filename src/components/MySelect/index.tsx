import * as React from 'react';
import Select from 'react-select';
import { Control } from './Control';
import { MenuItem } from '@material-ui/core';
import {  OptionsType, ActionMeta } from 'react-select/lib/types';
import { OptionProps } from 'react-select/lib/components/Option';
import { menu } from './Menu';
import { MenuList } from './MenuList';
import { InputComponent } from './InputComponent';

export type OptionType = any;

interface IProps {
    options: OptionsType<OptionType>;
    value: OptionType;
    label?: string;
    bindLabel?: string;
    bindValue?: string;
    template?: any;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange: (value: OptionType, action: ActionMeta) => void;
}

const CustomOption = (Template: any, bindValue: string, bindLabel: string) => {
    return (props: OptionProps<OptionType> & {data: OptionType}) => {
        const label = bindLabel ? props.data[bindLabel] : props.data;
        return (
            <MenuItem
                className='select-item'
                disableRipple={true}
                value={bindValue ? props.data[bindValue] : props.data}
                onClick={(event:any) => {
                    props.selectOption(props.data);
                }}
            >
            {Template ? <Template {...props.data} /> : label}
            </MenuItem>
        );
    };
};

const styles = {
    container: (base: React.CSSProperties) =>({
        ...base,
        display: 'inline-block',
    })
}

export class MySelect extends React.Component<IProps> {
    render() {
        const {
            disabled,
            value,
            placeholder,
            error,
            errorMessage,
            bindValue,
            bindLabel,
            template,
            options,
            onChange,
            label,
        } = this.props;
        return (
            <Select
                autoFocus={true}
                isDisabled={disabled}
                styles={styles}
                value={value}
                placeholder={placeholder}
                closeMenuOnSelect={false}
                openMenuOnClick={true}
                components={{
                    Option: CustomOption(template, bindValue, bindLabel),
                    MenuList: MenuList,
                    Menu: menu(error),
                    Input: InputComponent,
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 