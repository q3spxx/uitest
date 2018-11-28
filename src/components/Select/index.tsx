import * as React from 'react';
import SelectBase from 'react-select';
// import { Control } from './Control';
import { OptionsType, ActionMeta } from 'react-select/lib/types';
import { DropdownMenuItem } from '../Dropdown/DropdownMenuItem';
import { DropdownMenuList } from '../Dropdown/DropdownMenuList';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { IndicatorsContainer } from './IndicatorsContainer';
// import { Input } from './Input';
// import { ValueContainer } from './ValueContainer';
import { SingleValue } from './SingleValue';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';
import { ValidationInput } from '../ValidationInput';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { TextField, Input, Typography } from '@material-ui/core';
import { ValueContainerProps } from 'react-select/lib/components/containers';
import { map, is, always, prop, compose, head, filter, props, not, isNil, defaultTo } from 'ramda';
import ifElse from 'ramda/es/ifElse';
import identity from 'ramda/es/identity';
import findLast from 'ramda/es/findLast';
import propEq from 'ramda/es/propEq';

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
    onChange: (value: OptionType) => void;
}
const styles = {
    container: (base: React.CSSProperties) =>({
        ...base,
        display: 'inline-block',
    }),
    input: (base: React.CSSProperties) =>({
        ...base,
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
    }),
}
export class Select extends React.Component<Props> {
    private objectMode = true;
    private InputComponent = ({inputRef, children, ...props}: any) => (
        <div ref={inputRef} {...props}>{children[0]}</div>
    );
    private Placeholder = ({ children }: any) => (
        <Typography className='placeholder' variant='button'>{children}</Typography>
    );
    private SingleValue = ({ data }: any) => {
        const { bindLabel } = this.props;
        const displayedValue = bindLabel ? data[bindLabel] : data.label;
        return (
            <Typography variant='button'>{displayedValue}</Typography>
        );
    };
    private ValueContainer = ({ children }: any) => (
        <div>{children}</div>
    );
    private Control = ({ innerRef, children, innerProps }: any) => {
        const { label } = this.props;
        return (
            <ValidationInput
                label={label}
                InputProps={{
                    inputComponent: this.InputComponent,
                    inputProps: {
                        inputRef: innerRef,
                        children,
                        ...innerProps
                    }
                }}
            />
        );
    };

    render() {
        const {
            placeholder = '',
            value,
            options,
            onChange,
            bindLabel,
            bindValue,
            Template,
        } = this.props;
        const innerValue = ifElse(
            is(Object),
            (v) => {
                this.objectMode = true;
                return v;
            }, (v) => {
                this.objectMode = false;
                return compose(
                    defaultTo({label: v, value: v}),
                    findLast(propEq(bindValue, v))
                )(options);
            })(value);
        const innerOptions = map(ifElse(is(Object), identity, (v) => ({value: v, label:v})))(options)
        console.log(innerValue);
        return (
            <SelectBase
                placeholder={placeholder}
                styles={styles}
                value={innerValue}
                closeMenuOnSelect={false}
                components={{
                    Option: DropdownMenuItem({bindLabel, bindValue, Template}),
                    MenuList: DropdownMenuList,
                    Menu: DropdownMenu,
                    ValueContainer: this.ValueContainer,
                    Control: this.Control,
                    Placeholder: this.Placeholder,
                    SingleValue: this.SingleValue,
                }}
                options={innerOptions}
                onChange={(v) => {
                    const output = ifElse(always(this.objectMode), identity, compose(head, filter(Boolean), props([bindValue, 'value'])))(v);
                    console.log(output);
                    onChange(output);
                }}
            />
        );
    }
} 