import * as React from "react";
import { ValidationInput } from "../ValidationInput";
import { InputBase } from "@material-ui/core";

export interface IProps {
    label?: string
    error?: string
    value: string;
    onChange?: React.EventHandler<any>;
    flexible?: boolean;
    placeholder?: string;
}

const inputComponent = (props: any) => {
    const { onChange, value, placeholder } = props;
    return (
        <InputBase
            inputProps={{
                className:"flexible",
            }}
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => onChange(e.target.value)}
        />
    );
};

export class Input extends React.Component<IProps> {
    render() {
        const {value, onChange, flexible, placeholder} = this.props;
        return(
            <ValidationInput
                InputProps={{
                    inputComponent: inputComponent,
                }}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        );
    }
}