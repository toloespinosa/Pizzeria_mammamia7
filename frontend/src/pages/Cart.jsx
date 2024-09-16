import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalAmount } = useCart();
  const { token } = useUser();


  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h5>{pizza.name}</h5>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toLocaleString()}</h3>

      {token ? (
        <button>Pagar</button> 
      ) : (
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
