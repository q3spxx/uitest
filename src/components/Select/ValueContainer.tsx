import * as React from 'react';
import { ValidationInput } from '../ValidationInput';
import { SingleValue } from './SingleValue';
import { Button } from '@material-ui/core';

export const ValueContainer = (customProps: any) => {
    const {bindValue, bindLabel, placeholder} = customProps;
    const customSingleValueProps = {bindValue, bindLabel, placeholder, data: {}};
    const singleValue = SingleValue(customSingleValueProps)
    return (props: any) => {
        console.log(props);
        const singleValueProps = props.children[0].props;
        const inputValueProps = props.children[1].props;
        customSingleValueProps.data = singleValueProps.data;
        return (
            <ValidationInput
                inputRef={inputValueProps.innerRef}
                InputProps={{
                    inputComponent: singleValue,
                }}
                onFocus={inputValueProps.onFocus}
                onBlur={inputValueProps.onBlur}
                onChange={inputValueProps.onChange}
            />
        );
    }
};
// export const ValueContainer = (customProps: any) => {
//     const {bindValue, bindLabel, placeholder} = customProps;
//     return (props: any) => {
//         console.log(props);
//         const singleValueProps = props.children[0].props;
//         const inputValueProps = props.children[1].props;
//         return (
//             <Button
//                 buttonRef={inputValueProps.innerRef}
//                 onFocus={inputValueProps.onFocus}
//                 onBlur={inputValueProps.onBlur}
//             >
//                 {singleValueProps.data.label}
//             </Button>
//         );
//     }
// };
