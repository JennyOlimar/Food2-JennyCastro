import { useContext, useState, useEffect } from "react";
import { AppContext } from "../app/CartContext";

const Cart = () => {
  const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);
  const [title, settitle] = useState([]);

  return (
    <div>
      <p>{items.map(item => <p>{item.title}</p>)}</p>
      <p>{items.map(item => <p>{item.cantidad}</p>)}</p>
    </div>
  )
}

export default Cart