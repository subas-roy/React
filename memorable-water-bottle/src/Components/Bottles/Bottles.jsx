import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
  const [bottles, setBottles] = useState([]) // data load
  const [cart, setCart] = useState([]) // cart state

  useState(() => {
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  }, [])

  const handleAddToCart = bottle => {
    const newCart = [...cart, bottle]
    setCart(newCart)
  }

  return (
    <div>
      <h3>Bottles Available: {bottles.length}</h3>
      <h4>Cart: {cart.length}</h4>
      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;