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
import { Button } from '@material-ui/core';

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

export class SelectV2 extends React.Component<Props, State> {

    private ValueContainer = (props: any) => {
        const singleValueProps = props.children[0].props;
        const inputValueProps = props.children[1].props;
        return (
            <Button
                buttonRef={inputValueProps.innerRef}
                onFocus={inputValueProps.onFocus}
                onBlur={inputValueProps.onBlur}
            >
                {singleValueProps.data[this.props.bindLabel]}
            </Button>
        );
    }

    render() {
        const {
            value,
            options,
            onChange,
        } = this.props;
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
                    ValueContainer: this.ValueContainer,
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 