import * as React from "react";
import TextField from '@material-ui/core/TextField';

export interface IProps {
    label?: string
    error?: string
}

export class MyInput extends React.Component<IProps> {
    render() {
        const {label, error} = this.props;
        return(
            <TextField
                label={label}
                InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                }}
                InputProps={{
                    disableUnderline: true
                }}
                error={error ? true : false}
                helperText={error}
            />
        );
    }
}