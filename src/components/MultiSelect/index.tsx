import * as React from 'react';
import Select from 'react-select';
import { Control } from '../Select/Control';
import {  OptionsType, ActionMeta } from 'react-select/lib/types';
import { MultiValue } from './MultiValue';
import { DropdownMenuItem } from '../Dropdown/DropdownMenuItem';
import { DropdownMenuList } from '../Dropdown/DropdownMenuList';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { IndicatorsContainer } from '../Select/IndicatorsContainer';
import { Input } from './Input';
import { ValueContainer } from './ValueContainer';

export type OptionType = any;

interface IProps {
    options: OptionsType<OptionType>;
    value: OptionType;
    label?: string;
    bindLabel?: string;
    bindValue?: string;
    Template?: any;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange: (value: OptionType, action: ActionMeta) => void;
}


const styles = {
    container: (base: React.CSSProperties) =>({
        ...base,
        display: 'inline-block',
    }),
    control: () => ({}),
    valueContainer: () => ({}),
    indicatorsContainer: () => ({
        display: 'none',
    }),
}

export class MultiSelect extends React.Component<IProps> {
    render() {
        const {
            disabled,
            value,
            placeholder,
            error,
            errorMessage,
            bindValue,
            bindLabel,
            Template,
            options,
            onChange,
            label,
        } = this.props;
        return (
            <Select
                isDisabled={disabled}
                styles={styles}
                value={value}
                placeholder=''
                openMenuOnClick={true}
                isMulti={true}
                closeMenuOnSelect={false}
                components={{
                    MultiValue,
                    Menu: DropdownMenu,
                    MenuList: DropdownMenuList,
                    Option: DropdownMenuItem,
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 