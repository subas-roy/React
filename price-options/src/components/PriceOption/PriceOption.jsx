import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
  const {option_name, price, features} = option
  return (
    <div className='bg-blue-500 rounded-md p-4 text-white text-center flex flex-col'>
      <h2 className='font-extrabold'>
        <span className='text-7xl'>{price}</span>
        <span className='text-2xl'>/mon</span>
      </h2>
      <h4 className='text-3xl my-8'>{option_name}</h4>
      <div className='pl-6 flex-grow'>
        {
          features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
        }
      </div>
      <button className='mt-12 font-bold bg-green-500 hover:bg-green-700 py-2 w-full rounded-full'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object
}

export default PriceOption;