import * as React from 'react';
import SelectBase from 'react-select';
import { Control } from './Control';
import { OptionsType, ActionMeta } from 'react-select/lib/types';
import { DropdownMenuItem } from '../Dropdown/DropdownMenuItem';
import { DropdownMenuList } from '../Dropdown/DropdownMenuList';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { IndicatorsContainer } from './IndicatorsContainer';
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
    })
}

export class Select extends React.Component<IProps> {
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
            <SelectBase
                isDisabled={disabled}
                styles={styles}
                value={value}
                placeholder=''
                openMenuOnClick={true}
                components={{
                    Control: Control({}),
                    Option: DropdownMenuItem({Template, bindValue, bindLabel}),
                    MenuList: DropdownMenuList(),
                    Menu: DropdownMenu({error}),
                    Input: Input(value),
                    ValueContainer: ValueContainer(),
                    IndicatorsContainer: IndicatorsContainer(),
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 