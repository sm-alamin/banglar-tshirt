import React, { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>Grandpa Money: {money}</small></p>
            <button onClick={()=>setMoney(money + 1000)}>Send 1000 tk</button>
            <section className='flex'>
                <Cousine>Nabil</Cousine>
                <Cousine>Nabila</Cousine>
            </section>
        </div>
    );
};

export default Uncle;