import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (

        <div className="bg-blue-400 rounded-md p-4 text-white  flex flex-col" > 
            <h2 className="text-center">
                <span className="text-7xl font-extrabold text-center">{price}</span>
                <span className="text-3xl ">/mon</span>
            </h2>
            <h4 className="text-3xl my-8 text-center">{name}</h4>
           <div className="pl-6 flex-grow">
           {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
           </div>
           <button className="btn mt-4 w-full bg-green-400 text-white font-bold ">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;