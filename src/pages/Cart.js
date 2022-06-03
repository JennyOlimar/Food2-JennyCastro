import { useContext, useState, useEffect } from "react";
import { AppContext } from "../app/CartContext";
import { createItem } from "../app/orders-firebase";

const Cart = () => {
  const [items, , , , ] = useContext(AppContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');

  const producto = items.map(item => ({ ...item, id: item.id, title: item.title, price: item.price}));
  const arr = items.map(item => item.cantidad * item.price);
  const totalProductos = arr.reduce((result,number)=> result+number);

  const ordenCompra = {
    buyer: {
      name: name,
      phone: phone,
      email: email
    },
    items: producto,
    date: new Date(),
    total: totalProductos
  }

  return (
    <div className="cardCart">
    <h6 className="cardText">Datos del comprador</h6>
    <input className="form-control margin10" type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
    <input className="form-control margin10" type="tel" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)}/>
    <input className="form-control margin10" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
    <h6 className="cardText">Productos para la compra:</h6>
    {items.map(item => 
      <div className="margin10" key={item.id}>
        <p>{item.title}</p>
        <p>{item.cantidad}</p>
        <hr />
      </div>
      )}
    <button className="btn btn-info cardButton" onClick={() => createItem(ordenCompra)}>Comprar</button>
    </div>
  )
}

export default Cart