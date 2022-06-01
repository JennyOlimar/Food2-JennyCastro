import { useContext, useState, useEffect } from "react";
import { AppContext } from "../app/CartContext";

const Cart = () => {
  const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);
  const [title, settitle] = useState([]);

  const contentTitle = 
    Object.values(items).map(e => 
      Object.values(e).map(a => 
        <div key={a.id}>
          <p>{a.title}</p>
        </div>
      )
    );


  return (
    <div>
      <p>{contentTitle}</p>
      <p>{items.map(item => <p>{item.cantidad}</p>)}</p>
    </div>
  )
}

export default Cart