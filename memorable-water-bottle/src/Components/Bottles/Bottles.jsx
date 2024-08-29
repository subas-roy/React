import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../Utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]) // data load
  const [cart, setCart] = useState([]) // cart state

  useEffect(() => {
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  }, [])

  // load cart form local storage
  useEffect(() => {
    console.log('call the stored cart', bottles.length)
    if (bottles.length > 0) {
      const storedCart = getStoredCart()
      console.log(storedCart.length)
    }
  }, [bottles])

  const handleAddToCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id)
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