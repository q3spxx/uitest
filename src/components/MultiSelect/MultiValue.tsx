import * as React from 'react';
import Chip from '@material-ui/core/Chip';

export const MultiValue = (props: any) => {
    // console.log(props);
    return (
        <>
            <Chip label={props.data.value} />
        </>
    );
}