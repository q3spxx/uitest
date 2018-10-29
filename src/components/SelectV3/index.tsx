import * as React from 'react';
import SelectBase from 'react-select';
import { Control } from './Control';
import { OptionsType, ActionMeta } from 'react-select/lib/types';
import { DropdownMenuItem } from '../Dropdown/DropdownMenuItem';
import { DropdownMenuList } from '../Dropdown/DropdownMenuList';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { IndicatorsContainer } from './IndicatorsContainer';
import { Input } from './Input';
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


const ValueContainer = (key: string, bindLabel: string) => {
    console.log('vc');
    return (props: any) => {
        const singleValueProps = props.children[0].props;
        const inputValueProps = props.children[1].props;
        return (
            <Button
                key={key}
                buttonRef={inputValueProps.innerRef}
                onFocus={inputValueProps.onFocus}
                onBlur={inputValueProps.onBlur}
            >
                {singleValueProps.data[bindLabel]}
            </Button>
        );
    }
}

export class SelectV3 extends React.Component<Props, State> {

    private key = 'ok';

    render() {
        const {
            value,
            options,
            onChange,
            bindLabel,
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
                    ValueContainer: ValueContainer(this.key, bindLabel),
                }}
                options={options}
                onChange={onChange}
            />
        );
    }
} 