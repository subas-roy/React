import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
  return (
    <div className="bottle">
      <h3>{bottle.name}</h3>
      <img src={bottle.img} alt="" />
      <p>$ {bottle.price}</p>
      <button onClick={handleAddToCart}>Purchage</button>
    </div>
  );
};

export default Bottle;