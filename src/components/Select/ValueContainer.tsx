import * as React from 'react';

export const ValueContainer = () => {
    return (props: any) => {
        return (
            <div>{props.children[1]}</div>
        );
    }
}
