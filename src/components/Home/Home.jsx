import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from '../Cart/Cart';
import "./Home.css";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart,setCart] = useState([]);

  const handleAddToCart = (tshirt) =>{
    const exist = cart.find(ts => ts._id === tshirt._id);
    if(exist){
      toast.error('Ops, Already added');
    }else{
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
   
  }
  const handleREmoveFromCart = (id) =>{
    const remaining = cart.filter(pd => pd._id !== id);
    setCart(remaining)
  }
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="card-container">
        <Cart cart={cart} handleREmoveFromCart ={handleREmoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
