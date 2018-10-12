import * as React from 'react';
import Chip from '@material-ui/core/Chip';

export const InputComponent = (props: any) => {
    return (
        <>
            <div
                ref={props.innerRef}
                className='select'
                onFocus={() => {
                    console.log('focus');
                    props.onFocus();
                }}
                onBlur={() => {
                    console.log('blur');
                    props.onBlur();
                }}>
                {props.value.map((val: any) => {
                    console.log(val);
                    return <Chip key={val} label={val} />
                })}
            </div>
        </>
    );
}