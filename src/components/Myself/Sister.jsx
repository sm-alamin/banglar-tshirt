import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>My Sister</h3>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Sister;