import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousine>Abir</Cousine>
                <Cousine hasFriend={true} ring={ring} >Nibir</Cousine>
            </section>
        </div>
    );
};

export default Aunty;