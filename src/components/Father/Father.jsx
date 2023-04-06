import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Myself/Sister';
import Brother from '../Myself/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <Myself ring={ring} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;