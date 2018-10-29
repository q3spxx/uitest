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
import { SingleValue } from './SingleValue';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';

export type OptionType = any;

interface Props {
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

interface State {
    ValueContainer: any;
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

export class Select extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.customProps = {...props};
        this.setCustomProps();
        this.state = {
            ValueContainer: ValueContainer(this.customProps),
        }
    }
    
    private customProps: Props;

    setCustomProps() {
        const { bindValue, bindLabel, placeholder } = this.props;
        this.customProps.bindLabel = bindLabel;
        this.customProps.bindValue = bindValue;
        this.customProps.placeholder = placeholder;
    }

    render() {
        const {
            value,
            options,
            onChange,
        } = this.props;
        this.setCustomProps();
        return (
            <SelectBase
                styles={styles}
                value={value}
                isSearchable={false}
                closeMenuOnSelect={false}
                components={{
                    Option: DropdownMenuItem,
                    MenuList: DropdownMenuList,
                    Menu: DropdownMenu,
                    ValueContainer: this.state.ValueContainer,
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 