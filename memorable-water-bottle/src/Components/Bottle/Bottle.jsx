import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
  const {name, img, price} = bottle;
  // console.log(bottle)
  
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>$ {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchage</button>
    </div>
  );
};

export default Bottle;