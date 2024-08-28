import './Bottle.css'

const Bottle = ({bottle}) => {
  console.log(bottle)
  return (
    <div className="bottle">
      <h3>{bottle.name}</h3>
      <img src={bottle.img} alt="" />
      <p>{bottle.price}</p>
    </div>
  );
};

export default Bottle;