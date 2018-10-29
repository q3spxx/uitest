import * as React from 'react';

export const ValueContainer = () => {
    return (props: any) => {
        // console.log(props);
        return (
            <div>{props.children[0]}</div>
        );
    }
}
