import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({option}) => {
    const {name , price ,features} = option;
    return (
        <div className='bg-blue-300 rounded-lg p-5 flex flex-col'>
            <h2>
                <span className='text-5xl font-semibold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl font-semibold my-3'>{name}</h4>

            <div className='flex-grow pl-8'>
            {
                features.map((feature ,idx) => <div className='mb-1 flex items-center' key={idx} >
                    <AiFillCheckCircle></AiFillCheckCircle> <p className='ml-2'>{feature}</p> </div>)
            }
            </div>

            <button className='bg-black text-white font-semibold w-full py-2 mt-3 rounded-md hover:bg-blue-800'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}

export default PriceOption;