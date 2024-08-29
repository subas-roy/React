import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../Utilities/localstorage";
import Cart from "../Cart/Cart";

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
    if (bottles.length > 0) {
      const storedCart = getStoredCart()
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find(bottle => bottle.id == id);
        if (bottle) {
          savedCart.push(bottle)
        }
      }
      setCart(savedCart)
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
      <Cart cart={cart}></Cart>
      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;