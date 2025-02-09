import PropTypes from "prop-types";
import { IoIosCheckmarkCircle  } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex gap-3 items-center">  <IoIosCheckmarkCircle  className="  text-green-700 bg-white rounded-2xl " />
            {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.array
}

export default Feature;