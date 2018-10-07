import * as React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'; 

interface IProps extends InputProps {
    isOpen: boolean;
}

// export const InputComponent = (props: IProps) => {
//     return (
//         <Button
//             className='select'
//             disableRipple={true}
//             variant='flat'>
//             <>
//                 {props.value}
//                 {props.isOpen ? <KeyboardArrowUp className='select-arrow' /> : <KeyboardArrowDown className='select-arrow' />}
//             </>
//         </Button>
//     );
// }
export const InputComponent = (props: any) => {
    console.log(props);
    return (
        <>
            <Button
                buttonRef={props.innerRef}
                onFocus={props.onFocus}
                onBlur={props.onBlur}>
                {props.value}
            </Button>
        </>
    );
}