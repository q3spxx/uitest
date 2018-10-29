import * as React from 'react';
import { ControlProps } from 'react-select/lib/components/Control';
import { OptionType } from './index';

// export const Control = ({error, errorMessage, bindLabel, label}: any) => {
//     return (props: ControlProps<OptionType>) => {
//         console.log(props);
//         return (
//             <div ref={(refer) => {
//                 console.log(refer);
//                 props.innerRef(refer)
//             }} {...props.innerProps}>{props.children[0]}</div>
//         );
//     }
// };

export const Control = (props: ControlProps<OptionType>) => {
    return (
        <div ref={props.innerRef} {...props.innerProps}>{props.children}</div>
    );
};