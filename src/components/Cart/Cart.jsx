import React from "react";
import './Cart.css'

const Cart = ({ cart, handleREmoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please! add some products</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxx</h3>
        <p>Thanks for giving tk</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={cart.length === 1 ? "orange" : "red"}>Order Summery:{cart.length}</h2>
      <p className={`bold ${cart.length === 3 ? "purple" : "blue"}`}>Something</p>
      {cart.length > 2 ? <span className="orange">Aro kino</span> : <span>Fokira</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleREmoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Bonamza</p>}
      {cart.length === 3 || <p>3 ta holo na</p>}
    </div>
  );
};

export default Cart;
