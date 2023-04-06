import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>My Brother</h3>
            <p>I have got {ring}</p>
        </div>
    );
};

export default Brother;