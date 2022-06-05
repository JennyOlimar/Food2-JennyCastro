import { useContext, useState } from "react";
import { AppContext } from "../app/CartContext";
import { createItem } from "../app/orders-firebase";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, , removeItem, , ] = useContext(AppContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');

  const producto = items.map(item => ({ ...item, id: item.id, title: item.title, price: item.price}));
  const arr = items.map(item => item.cantidad * item.price);
  const totalProductos = arr.length > 0 ? arr.reduce((result,number)=> result+number) : [];

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
    {
      arr.length > 0 ?
      <div>
        <h6 className="cardText">Productos para la compra:</h6>
        {items.map(item => 
          <div className="margin10 item" key={item.id}>
            <p>Nombre: {item.title}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: {item.price}</p>
            <button className="btn btn-secondary" onClick={() => removeItem(item.id)}>Borrar item</button>
          </div>
          )}
        <p className="total">Costo total: {totalProductos}</p>
        <div className="space">
          <button className="btn btn-info"><Link to='/'>Agregar Productos</Link></button>
          <button className="btn btn-info" onClick={() => createItem(ordenCompra)}>Comprar</button>
        </div>
      </div> :
      <div className="addItems">
        <p className="alert alert-danger">No hay productos en el carrito</p>
        <button className="btn btn-info"><Link to='/'>Agregar Productos</Link></button>
      </div>
    }
    
    </div>
  )
}

export default Cart